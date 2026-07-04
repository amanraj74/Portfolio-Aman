import { projects } from '../data.js';
import { TextReveal, FadeIn, StaggerReveal } from '../components/TextReveal.jsx';
import { MagneticLink } from '../components/MagneticButton.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Selected Work</span>
          </FadeIn>
          <h1>
            <TextReveal delay={0.05} stagger={0.04}>Things I've built.</TextReveal>
          </h1>
          <FadeIn delay={0.3}>
            <p>A short, opinionated list of projects — research prototypes, hackathon builds, and production-grade ML systems. Most include a write-up or GitHub link.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="projects-toolbar">
              <div className="count"><strong>{projects.length}</strong> projects · 2025 — 2026</div>
              <div className="btn-group">
                <MagneticLink to="/contact" className="btn btn-secondary">
                  <Icon name="mail" size={14} />
                  Collaborate
                </MagneticLink>
                <a href="https://github.com/amanraj74" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Icon name="github" size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>

          <StaggerReveal stagger={0.08} className="projects-list">
            {projects.map((p) => (
              <a
                key={p.id}
                className="project-card"
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : undefined}
                rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className={`project-visual project-visual-${p.gradient}`}>
                  <span className="project-visual-mark">{p.mark}</span>
                  <span className="project-arrow" aria-hidden="true">
                    <Icon name="arrow-up-right" size={16} />
                  </span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-year">{p.year}</span>
                    <span className="project-tag">{p.tag}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </StaggerReveal>

          <FadeIn delay={0.3}>
            <div className="contact-cta" style={{ marginTop: 'var(--space-24)' }}>
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Got a project?</span>
              <h2>Let's build something<br />worth shipping.</h2>
              <p>If any of this resonates with what you're building, I'd love to talk.</p>
              <div className="contact-links">
                <MagneticLink to="/contact" className="btn btn-primary">
                  Start a conversation
                  <Icon name="arrow-right" size={16} />
                </MagneticLink>
                <a href="mailto:aerraj50@gmail.com" className="btn btn-secondary">
                  aerraj50@gmail.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}