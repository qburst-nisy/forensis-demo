import { NextRequest, NextResponse } from "next/server";

const blogOrigin =
  process.env.BLOG_ORIGIN?.replace(/\/$/, "") || "http://localhost:3001";

/**
 * Blog HTML is proxied via rewrites, but its /_next/* assets still point at
 * this origin. When the request comes from a /blog page, fetch those assets
 * from the QBurst app so CSS/JS/fonts resolve.
 */
export async function proxy(request: NextRequest) {
  const referer = request.headers.get("referer") ?? "";
  let fromBlog = false;
  try {
    fromBlog = new URL(referer).pathname.startsWith("/forensis-expert-witness");
  } catch {
    fromBlog = false;
  }

  if (!fromBlog) {
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
