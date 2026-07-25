import { useMemo, useState } from 'react';
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

const TYPE_FILTERS = ['all', 'client', 'personal', 'open-source'];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [activeTag, setActiveTag] = useState(null);

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesType = activeType === 'all' || p.type === activeType;
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesType && matchesTag && matchesQuery;
    });
  }, [query, activeType, activeTag]);

  return (
    <section
      id="projects"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
              Selected work
            </h2>
          </div>

          <label className="relative w-full max-w-xs">
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {TYPE_FILTERS.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              aria-pressed={activeType === type}
              className={`chip capitalize transition-colors ${
                activeType === type ? 'chip-active' : ''
              }`}
            >
              {type.replace('-', ' ')}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-ink-200 dark:bg-ink-700" aria-hidden="true" />
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              aria-pressed={activeTag === tag}
              className={`chip transition-colors ${activeTag === tag ? 'chip-active' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm text-ink-500 dark:text-ink-400">
            No projects match your filters. Try clearing search or tags.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
