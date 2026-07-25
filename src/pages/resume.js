import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import site from '../../data/site.json';
import experienceData from '../../data/experience.json';

export default function Resume() {
  return (
    <>
      <Seo title={`${site.name} — Resume`} path="/resume" />

      <div className="print:hidden">
        <Header />
      </div>

      <main
        id="main-content"
        className="container-page section max-w-prose print:max-w-none print:py-0"
      >
        <div className="mb-8 flex items-center justify-between print:hidden">
          <h1 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
            Resume
          </h1>
          <div className="flex gap-3">
            <a href={site.resumePdf} className="btn-secondary" download>
              Download PDF
            </a>
            <button type="button" onClick={() => window.print()} className="btn-primary">
              Print
            </button>
          </div>
        </div>

        <article className="prose-resume">
          <header className="mb-8 border-b border-ink-100 pb-6 dark:border-ink-800 print:border-black">
            <h2 className="font-display text-3xl font-bold text-ink-900 dark:text-white">
              {site.name}
            </h2>
            <p className="mt-1 text-lg text-ink-500 dark:text-ink-300">{site.title}</p>
            <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
              {site.email} · {site.location}
            </p>
          </header>

          <section className="mb-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">
              Summary
            </h3>
            <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">{site.bio}</p>
          </section>

          <section className="mb-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">
              Experience
            </h3>
            <div className="space-y-6">
              {experienceData.experience.map((job) => (
                <div key={`${job.role}-${job.start}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold text-ink-900 dark:text-white">
                      {job.role} · {job.org}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      {job.start} — {job.end}
                    </p>
                  </div>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{job.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-700 dark:text-ink-200">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">
              Skills
            </h3>
            <p className="text-sm text-ink-700 dark:text-ink-200">
              {site.skills.technical.join(' · ')}
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">
              Awards & certifications
            </h3>
            <ul className="space-y-1 text-sm text-ink-700 dark:text-ink-200">
              {experienceData.achievements.map((a) => (
                <li key={a.title}>
                  {a.title} — {a.org} ({a.date})
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
