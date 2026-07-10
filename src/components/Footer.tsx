import footerData from "@/data/footer.json";

export default function Footer() {
  const { company, tagline, description, address, contact, columns, social, copyright } =
    footerData;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">{company}</p>
            <p className="text-sm italic text-slate-400">{tagline}</p>
            <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            <div className="space-y-1 pt-2 text-sm">
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="hover:text-white">
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
                {column.title}
              </p>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">{copyright}</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            {social.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
