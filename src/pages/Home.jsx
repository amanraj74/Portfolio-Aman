import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profile, stats, capabilities, projects, experience, achievements } from '../data.js';
import { TextReveal, FadeIn, StaggerReveal } from '../components/TextReveal.jsx';
import { MagneticLink } from '../components/MagneticButton.jsx';
import CountUp from '../components/CountUp.jsx';
import { Icon } from '../components/Icon.jsx';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featuredProjects = projects.slice(0, 4);
  const topExperience = experience.slice(0, 3);
  const topAchievements = achievements.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg" aria-hidden="true" />
        <motion.div className="container" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="hero-content">
            <FadeIn delay={0}>
              <div className="hero-availability">
                <span className="hero-availability-dot" />
                <span>{profile.status}</span>
              </div>
            </FadeIn>

            <h1 className="hero-title">
              <span className="hero-title-line">
                <TextReveal delay={0.1} stagger={0.04}>Building AI systems</TextReveal>
              </span>
              <span className="hero-title-line">
                <TextReveal delay={0.25} stagger={0.04}>
                  <span className="gradient-text">that actually ship.</span>
                </TextReveal>
              </span>
              <span className="hero-title-line hero-role">
                <TextReveal delay={0.5} stagger={0.025}>{profile.role}</TextReveal>
              </span>
            </h1>

            <FadeIn delay={0.6} y={20}>
              <p className="hero-subtitle">
                I'm <strong>{profile.name}</strong> — an AI/ML engineer from India working at the seam of research and production. Currently researching multilingual speech at IIT Ropar. Previously shipped ML systems at Infosys, Codec Technologies, and HEProAI.
              </p>
            </FadeIn>

            <FadeIn delay={0.7} y={20}>
              <div className="hero-actions">
                <MagneticLink to="/projects" className="btn-primary">
                  View selected work
                  <Icon name="arrow-right" size={16} />
                </MagneticLink>
                <MagneticLink to="/contact" className="btn-secondary">
                  Get in touch
                </MagneticLink>
              </div>
            </FadeIn>

            <div className="hero-marquee">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="hero-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="hero-stat-num">
                    <CountUp value={s.num} suffix={s.suffix} decimals={s.decimals || 0} />
                  </div>
                  <div className="hero-stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="hero-scroll" aria-hidden="true">
              <span>Scroll</span>
              <div className="hero-scroll-line" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SELECTED WORK */}
      <section className="section" id="work">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="eyebrow">Selected Work</span>
              <h2 className="section-title">AI/ML projects built end-to-end.</h2>
              <p className="lead">A short list of things I've designed, trained, and shipped — from multilingual speech to real-time logistics copilots.</p>
            </div>
          </FadeIn>

          <StaggerReveal stagger={0.08} delay={0.1} className="projects-list">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </StaggerReveal>

          <FadeIn delay={0.3}>
            <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
              <MagneticLink to="/projects" className="btn btn-secondary">
                View all projects
                <Icon name="arrow-right" size={16} />
              </MagneticLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT (compact) */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <FadeIn>
              <div className="about-photo">
                <picture>
                  <source srcSet="./images/profile.webp 1x, ./images/profile@2x.webp 2x" type="image/webp" />
                  <img src="./images/profile.jpg" alt={profile.name} width="1000" height="1000" loading="lazy" decoding="async" />
                </picture>
                <div className="about-photo-badge">
                  <span className="about-photo-badge-dot" />
                  <span>IIT Ropar · 2026</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="about-copy">
                <span className="eyebrow">About</span>
                <h2 className="section-title">An engineer who treats models like products.</h2>
                <p>I work on AI/ML systems that have to survive contact with real data and real users — multilingual speech, retrieval-augmented generation, applied deep learning. My research lives at IIT Ropar (Annam.ai consortium); my shipped work has ranged from a logistics copilot processing streams in seconds to JWT-secured ML pipelines at Infosys Springboard.</p>
                <p>Outside ML, I build interfaces people actually want to use — including this portfolio. I care about clear writing, calibrated claims, and shipping things that work end-to-end.</p>

                <div className="about-meta">
                  <span className="about-meta-item"><Icon name="pin" size={14} /> {profile.location}</span>
                  <span className="about-meta-item"><Icon name="pulse" size={14} /> IIT Ropar · Annam.ai</span>
                  <span className="about-meta-item"><Icon name="mail" size={14} /> {profile.email}</span>
                </div>

                <div className="btn-group" style={{ marginTop: 'var(--space-8)' }}>
                  <MagneticLink to="/about" className="btn btn-primary">
                    More about me
                    <Icon name="arrow-right" size={16} />
                  </MagneticLink>
                  <MagneticLink to="/resume" className="btn btn-secondary">
                    View resume
                  </MagneticLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">What I work with.</h2>
              <p className="lead">The stack I've built production systems on — research through deployment.</p>
            </div>
          </FadeIn>

          <StaggerReveal stagger={0.06} className="skills-grid">
            {capabilities.map((c, i) => (
              <article className="skill-card" key={i}>
                <div className="skill-icon">
                  <Icon name={c.icon} size={20} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <div className="skill-tags">
                  {c.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="eyebrow">Experience</span>
              <h2 className="section-title">Where I've worked.</h2>
              <p className="lead">Research labs and engineering teams building AI that ships.</p>
            </div>
          </FadeIn>

          <StaggerReveal stagger={0.05}>
            {topExperience.map((e, i) => (
              <article className="experience-item" key={i}>
                <div className="experience-period">{e.period}</div>
                <div className="experience-body">
                  <h3>{e.role}</h3>
                  <div className="experience-org">{e.org}</div>
                  <p className="experience-desc">{e.desc}</p>
                </div>
              </article>
            ))}
          </StaggerReveal>

          <FadeIn delay={0.2}>
            <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
              <MagneticLink to="/resume" className="btn btn-secondary">
                Full resume
                <Icon name="arrow-right" size={16} />
              </MagneticLink>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="eyebrow">Recognition</span>
              <h2 className="section-title">Selected achievements.</h2>
              <p className="lead">Hackathons, programs, and milestones I'm proud of.</p>
            </div>
          </FadeIn>

          <StaggerReveal stagger={0.05} className="achievements-grid">
            {topAchievements.map((a, i) => (
              <article className="achievement" key={i}>
                <div className="achievement-icon">{a.icon}</div>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section section-alt">
        <div className="container">
          <FadeIn>
            <div className="contact-cta">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Let's talk</span>
              <h2>Got something<br />worth shipping?</h2>
              <p>Research collaborations, AI/ML consulting, full-time roles, or interesting problems — I'm always up for a conversation.</p>
              <div className="contact-links">
                <MagneticLink to="/contact" className="btn btn-primary">
                  Start a conversation
                  <Icon name="arrow-right" size={16} />
                </MagneticLink>
                <MagneticLink href={`mailto:${profile.email}`} className="btn btn-secondary">
                  <Icon name="mail" size={16} />
                  {profile.email}
                </MagneticLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.href}
      target={project.href.startsWith('http') ? '_blank' : undefined}
      rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <div className={`project-visual project-visual-${project.gradient}`}>
        <span className="project-visual-mark">{project.mark}</span>
        <span className="project-arrow" aria-hidden="true">
          <Icon name="arrow-up-right" size={16} />
        </span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          <span className="project-tag">{project.tag}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </a>
  );
}