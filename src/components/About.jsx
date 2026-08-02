import site from '../../data/site.json';

export default function About() {
  return (
    <section
      id="about"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
            A little about me
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300">
            {site.bio}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {site.location}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
              Technical skills
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.skills.technical.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
              Soft skills
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.skills.soft.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
