import disciplinesData from "@/data/disciplines.json";

export default function DisciplinesPage() {
  const { intro, categories } = disciplinesData;

  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Expert witness network
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {intro.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{intro.description}</p>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Discipline categories">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="scroll-mt-20 border-b border-slate-200 last:border-b-0"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
            <p className="mt-2 max-w-2xl text-slate-600">{category.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.disciplines.map((discipline) => (
                <article
                  key={discipline.name}
                  className="rounded-lg border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">{discipline.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {discipline.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Need a different specialty?
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Request an expert and we will match your case across our full network.
            </p>
          </div>
          <a
            href="/"
            className="rounded bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            Request an Expert
          </a>
        </div>
      </section>
    </main>
  );
}
