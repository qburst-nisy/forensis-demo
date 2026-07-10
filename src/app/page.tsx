import disciplinesData from "@/data/disciplines.json";

const disciplineHighlights = disciplinesData.categories.map((category) => ({
  title: category.title,
  description: category.description,
  href: `/disciplines#${category.id}`,
}));

const steps = [
  {
    title: "Request an expert",
    description:
      "Tell us about your case. There is no cost and no obligation until you retain an expert.",
  },
  {
    title: "We handle every detail",
    description:
      "Conflict checks, exclusive CVs, confidential interviews, and multi-discipline matching — all managed for you.",
  },
  {
    title: "Retain with confidence",
    description:
      "Work with fully vetted experts so you can focus on your case while we handle administration and coordination.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Expert witness services since 1991
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-slate-900 sm:text-5xl">
          Find the expert witness who makes the difference in your case
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          ForensisGroup connects attorneys and organizations with thousands of
          fully vetted experts across every discipline imaginable — with complete
          privacy and no cost until retention.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/disciplines"
            className="rounded bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Browse Disciplines
          </a>
          <a
            href="#about"
            className="rounded border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            About ForensisGroup
          </a>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">About Us</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Helping create a more just world since 1991.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-slate-700">
              <p>
                ForensisGroup was founded as an expert services company to connect
                the smartest litigation experts with the world’s best legal minds.
                Because nothing has more impact than the truth.
              </p>
              <p>
                As one of the top expert witness referral companies, we maintain an
                extensive network of subject matter experts — thoroughly vetted and
                screened so they are ready to provide technical expertise and clear
                testimony.
              </p>
              <p>
                We support attorneys as well as private and government agencies by
                providing consultants and experts in nearly every discipline, with a
                multi-disciplined approach tailored to each case.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-slate-50 p-6 text-slate-700">
              <p className="font-semibold text-slate-900">Why ForensisGroup?</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>No cost and no obligation until retention</li>
                <li>Fully vetted experts in every discipline imaginable</li>
                <li>Complete privacy — your case is in good hands</li>
                <li>One-step process from request through retention</li>
                <li>Testimony that has helped shape safer outcomes nationwide</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="disciplines" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Browse Disciplines
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            If you have the case, we have the expert witness. Explore key areas
            where ForensisGroup connects you with premier specialists.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplineHighlights.map((discipline) => (
              <a
                key={discipline.title}
                href={discipline.href}
                className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-400 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {discipline.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {discipline.description}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-900">
                  View disciplines →
                </p>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/disciplines"
              className="inline-flex rounded bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              View all disciplines
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How It Works
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            You request an expert witness. We take care of every detail.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
