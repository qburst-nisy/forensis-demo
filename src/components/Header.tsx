const LOGO_URL =
  "https://www.forensisgroup.com/images/forensisgroup-logo-v1.svg";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="inline-flex items-center" aria-label="ForensisGroup home">
          <img
            src={LOGO_URL}
            alt="ForensisGroup"
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="/disciplines" className="hover:text-slate-900">
            Browse Disciplines
          </a>
          <a href="/#how-it-works" className="hover:text-slate-900">
            How It Works
          </a>
          <a href="/#about" className="hover:text-slate-900">
            About Us
          </a>
          <a
            href="/"
            className="rounded bg-slate-900 px-3 py-2 text-white hover:bg-slate-800"
          >
            Request an Expert
          </a>
        </nav>
      </div>
    </header>
  );
}
