import Seo from '../components/Seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/*
        Netlify parses the built HTML at deploy time to register forms.
        This static, hidden duplicate mirrors the fields in <Contact />
        so the "contact" form is detected even though the real form is
        rendered client-side.
      */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="company" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="text" name="company" />
      </form>
    </>
  );
}
