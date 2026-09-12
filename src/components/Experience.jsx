import data from '../../data/experience.json';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
            Where I've worked
          </h2>

          <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-50 p-5 dark:border-ink-700 dark:bg-ink-900">
            <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              August 2017 – Present · HCLTech
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Locations worked: Chennai, Mexico, Work from Home, and Hyderabad
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow mb-3">Recognition & credentials</p>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
            Proof of impact
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            Awards, certifications, and applied learning that show how I grow capability and turn it
            into reliable delivery.
          </p>

          <div className="mt-6 space-y-5">
            <div id="achievements" className="scroll-mt-20">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                Featured recognition
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {data.achievements
                  .filter((achievement) => achievement.featured)
                  .map((achievement) => (
                    <AchievementCard key={achievement.title} achievement={achievement} featured />
                  ))}
              </ul>
            </div>

            <div id="certifications" className="scroll-mt-20">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
                Certifications & applied learning
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {data.achievements
                  .filter((achievement) => !achievement.featured)
                  .map((achievement) => (
                    <AchievementCard key={achievement.title} achievement={achievement} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ achievement, featured = false }) {
  return (
    <li
      className={`card ${featured ? 'border-brand-200 bg-brand-50/60 dark:border-brand-800 dark:bg-brand-900/20' : 'p-4'}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
            {achievement.category}
          </p>
          <p className="mt-1 font-display font-semibold text-ink-900 dark:text-white">
            {achievement.title}
          </p>
        </div>
        <span className="shrink-0 text-right text-xs font-medium text-brand-700 dark:text-brand-300">
          {achievement.date}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{achievement.org}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {achievement.description}
      </p>
      {achievement.links?.length ? (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {achievement.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900 dark:text-brand-300 dark:decoration-brand-700 dark:hover:text-brand-200"
            >
              {link.label} <span aria-hidden="true">-&gt;</span>
            </a>
          ))}
        </div>
      ) : null}
    </li>
  );
}
