import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import site from '../data/site.json';

describe('Footer', () => {
  it('renders the site name and current year copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(site.name))).toBeInTheDocument();
    expect(
      screen.getByText(
        (_, element) =>
          element.tagName === 'P' &&
          element.textContent === `© ${year} ${site.name}. All rights reserved.`
      )
    ).toBeInTheDocument();
  });

  it('renders footer navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });
});
