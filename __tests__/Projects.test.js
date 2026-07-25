import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../src/components/Projects';
import projectsData from '../data/projects.json';

describe('Projects', () => {
  it('renders all sample projects by default', () => {
    render(<Projects />);
    projectsData.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('filters projects by type when a filter chip is clicked', () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole('button', { name: /^personal$/i }));

    const personalProjects = projectsData.filter((p) => p.type === 'personal');
    const otherProjects = projectsData.filter((p) => p.type !== 'personal');

    personalProjects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
    otherProjects.forEach((p) => expect(screen.queryByText(p.title)).not.toBeInTheDocument());
  });

  it('filters projects by search query', () => {
    render(<Projects />);
    const input = screen.getByPlaceholderText(/search projects/i);
    fireEvent.change(input, { target: { value: 'idea tracker' } });

    expect(screen.getByText('Idea Tracker')).toBeInTheDocument();
    expect(screen.queryByText('devkit-cli')).not.toBeInTheDocument();
  });

  it('shows an empty state when no projects match', () => {
    render(<Projects />);
    const input = screen.getByPlaceholderText(/search projects/i);
    fireEvent.change(input, { target: { value: 'zzz-nonexistent-zzz' } });

    expect(screen.getByText(/no projects match/i)).toBeInTheDocument();
  });
});
