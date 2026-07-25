import data from '../../data/experience.json';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
            Where I've worked
          </h2>

          <ol className="mt-8 space-y-8 border-l border-ink-200 pl-6 dark:border-ink-700">
            {data.experience.map((job) => (
              <li key={`${job.role}-${job.start}`} className="relative">
                <span
                  className="absolute -left-[1.94rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500 dark:border-ink-950"
                  aria-hidden="true"
                />
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">
                  {formatRange(job.start, job.end)}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {job.role} · {job.org}
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-400">{job.location}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
            Awards & certifications
          </h3>
          <ul className="mt-4 space-y-4">
            {data.achievements.map((a) => (
              <li key={a.title} className="card p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">
                  {a.date}
                </p>
                <p className="mt-1 font-display font-semibold text-ink-900 dark:text-white">
                  {a.title}
                </p>
                <p className="text-sm text-ink-500 dark:text-ink-400">{a.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {a.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function formatRange(start, end) {
  const format = (v) => {
    if (v === 'Present') return 'Present';
    const [year, month] = v.split('-');
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };
  return `${format(start)} — ${format(end)}`;
}
