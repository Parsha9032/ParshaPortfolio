export default function ProjectCard({ project }) {
  const { title, role, type, description, tags, links } = project;

  return (
    <article className="card flex flex-col p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="chip capitalize">{type.replace('-', ' ')}</span>
      </div>

      <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">{title}</h3>
      <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{role}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex gap-3 text-sm font-semibold">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer noopener"
            className="text-brand-600 hover:underline dark:text-brand-300"
          >
            Live ↗
          </a>
        )}
        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-700 hover:underline dark:text-ink-200"
          >
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
}
