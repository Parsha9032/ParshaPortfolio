import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const displayedProjects = projects;

  return (
    <section
      id="projects"
      className="section scroll-mt-20 border-t border-ink-100 dark:border-ink-800"
    >
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-white">
              Recent work
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
