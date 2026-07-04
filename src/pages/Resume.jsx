import { profile, experience, achievements } from '../data.js';
import { TextReveal, FadeIn, StaggerReveal } from '../components/TextReveal.jsx';
import { MagneticLink } from '../components/MagneticButton.jsx';
import { Icon } from '../components/Icon.jsx';

const skills = [
  { name: 'Python', value: 90 },
  { name: 'Machine Learning', value: 85 },
  { name: 'Deep Learning', value: 78 },
  { name: 'NLP & Speech', value: 82 },
  { name: 'Generative AI', value: 72 },
  { name: 'Web (HTML/CSS/JS)', value: 80 },
  { name: 'ROS2 / Robotics', value: 60 },
];

function SkillBar({ value, name }) {
  return (
    <div className="skill-row">
      <div className="skill-row-head">
        <span className="skill-row-name">{name}</span>
        <span className="skill-row-pct">{value}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${value}%`, transitionDelay: '0.3s' }} />
      </div>
    </div>
  );
}

const education = [
  {
    role: 'Minor in AI & Machine Learning',
    org: 'Indian Institute of Technology — Ropar',
    period: '2025 — 2026',
    desc: 'Specialized program covering machine learning, deep learning, neural networks, NLP, and generative AI.',
  },
  {
    role: 'Bachelor of Computer Applications (BCA)',
    org: 'Ranchi University, Ranchi',
    period: '2023 — 2027',
    desc: 'Undergraduate degree with a focus on programming, web development, and software engineering.',
  },
];

export default function Resume() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Resume</span>
          </FadeIn>
          <h1>
            <TextReveal delay={0.05} stagger={0.04}>AI/ML engineer with research depth.</TextReveal>
          </h1>
          <FadeIn delay={0.4}>
            <p>Visual version of my resume. For the original PDF, hit the button in the sidebar.</p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="btn-group" style={{ justifyContent: 'flex-start', marginTop: 'var(--space-10)' }}>
              <a href={profile.resumeUrl} download className="btn btn-primary">
                <Icon name="download" size={16} />
                Download PDF
              </a>
              <MagneticLink to="/contact" className="btn btn-secondary">
                Get in touch
              </MagneticLink>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resume-grid">
            <div>
              <FadeIn>
                <section className="resume-section">
                  <h2><span className="num">01</span>Experience</h2>
                </section>
              </FadeIn>
              <StaggerReveal stagger={0.06}>
                {experience.map((e, i) => (
                  <article className="resume-card" key={i}>
                    <div className="resume-card-head">
                      <div>
                        <h3>{e.role}</h3>
                        <div className="role">{e.org}</div>
                      </div>
                      <div className="date">{e.period}</div>
                    </div>
                    <p>{e.desc}</p>
                    {e.highlights && e.highlights.length > 0 && (
                      <div className="project-tech" style={{ borderTop: 'none', paddingTop: 'var(--space-2)' }}>
                        {e.highlights.map((h) => <span key={h}>{h}</span>)}
                      </div>
                    )}
                  </article>
                ))}
              </StaggerReveal>

              <FadeIn>
                <section className="resume-section">
                  <h2><span className="num">02</span>Education</h2>
                </section>
              </FadeIn>
              <StaggerReveal stagger={0.06}>
                {education.map((e, i) => (
                  <article className="resume-card" key={i}>
                    <div className="resume-card-head">
                      <div>
                        <h3>{e.role}</h3>
                        <div className="role">{e.org}</div>
                      </div>
                      <div className="date">{e.period}</div>
                    </div>
                    <p>{e.desc}</p>
                  </article>
                ))}
              </StaggerReveal>

              <FadeIn>
                <section className="resume-section">
                  <h2><span className="num">03</span>Achievements</h2>
                </section>
              </FadeIn>
              <div className="achievements-grid">
                {achievements.map((a, i) => (
                  <article className="achievement" key={i}>
                    <div className="achievement-icon">{a.icon}</div>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <aside className="resume-aside">
                <div className="download-card">
                  <h3>Want the PDF?</h3>
                  <p>The original, formatted for ATS systems and recruiters.</p>
                  <a href={profile.resumeUrl} download className="btn btn-primary">
                    <Icon name="download" size={16} />
                    Download resume
                  </a>
                </div>

                <div className="aside-card">
                  <h3>Technical Skills</h3>
                  {skills.map((s) => (
                    <SkillBar key={s.name} {...s} />
                  ))}
                </div>

                <div className="aside-card">
                  <h3>Quick Info</h3>
                  <div className="quick-info">
                    <div className="quick-info-row"><span className="quick-info-label">Status</span><span className="quick-info-value" style={{ color: 'var(--success)' }}>Open to work</span></div>
                    <div className="quick-info-row"><span className="quick-info-label">Role</span><span className="quick-info-value">AI/ML Engineer</span></div>
                    <div className="quick-info-row"><span className="quick-info-label">Location</span><span className="quick-info-value">Ranchi, India</span></div>
                    <div className="quick-info-row"><span className="quick-info-label">Languages</span><span className="quick-info-value">English · Hindi</span></div>
                    <div className="quick-info-row"><span className="quick-info-label">Email</span><span className="quick-info-value">{profile.email}</span></div>
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}