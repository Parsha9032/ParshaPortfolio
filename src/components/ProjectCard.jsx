export default function ProjectCard({ project }) {
  const { title, role, type, date, description, tags, image, links } = project;

  return (
    <article className="card flex flex-col">
      <div className="mb-4 overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-40 w-full object-cover"
          width={400}
          height={160}
        />
      </div>

      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="chip capitalize">{type.replace('-', ' ')}</span>
        <time dateTime={date} className="text-xs text-ink-400 dark:text-ink-500">
          {formatMonthYear(date)}
        </time>
      </div>

      <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
      <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{role}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-3 text-sm font-semibold">
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

function formatMonthYear(value) {
  const [year, month] = value.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
