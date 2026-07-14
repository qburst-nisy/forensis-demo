import { NextRequest, NextResponse } from "next/server";

const blogOrigin = "https://www.forensisgroup.com";

const proxiedPrefixes = ["/forensis-expert-witness", "/resources", "/about-us"];

/**
 * Proxied HTML is served via rewrites, but its /_next/* assets still point at
 * this origin. When the request comes from a proxied page, fetch those assets
 * from QBurst so CSS/JS/fonts resolve.
 */
export async function proxy(request: NextRequest) {
  const referer = request.headers.get("referer") ?? "";
  let fromProxied = false;
  try {
    const pathname = new URL(referer).pathname;
    fromProxied = proxiedPrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );
  } catch {
    fromProxied = false;
  }

  if (!fromProxied) {
    return NextResponse.next();
  }

  const upstream = new URL(
    request.nextUrl.pathname + request.nextUrl.search,
    blogOrigin,
  );

  const upstreamRes = await fetch(upstream.href, {
    headers: {
      accept: request.headers.get("accept") ?? "*/*",
    },
    // Dev blog assets change often; avoid caching a stale miss.
    cache: "no-store",
  });

  const headers = new Headers(upstreamRes.headers);
  // Avoid leaking hop-by-hop headers into the browser response.
  headers.delete("content-encoding");
  headers.delete("transfer-encoding");
  headers.delete("connection");

  return new NextResponse(upstreamRes.body, {
    status: upstreamRes.status,
    headers,
  });
}

export const config = {
  matcher: "/_next/:path*",
};
