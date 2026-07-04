import { profile } from '../data.js';
import { TextReveal, FadeIn, StaggerReveal } from '../components/TextReveal.jsx';
import { MagneticLink } from '../components/MagneticButton.jsx';
import { Icon } from '../components/Icon.jsx';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">About</span>
          </FadeIn>
          <h1>
            <TextReveal delay={0.05} stagger={0.04}>The short version.</TextReveal>
          </h1>
          <FadeIn delay={0.4}>
            <p>I'm an AI/ML engineer who treats models like products. I build things that have to survive real data, real users, and real deadlines — and I keep a hand in web development because the most useful AI ships inside interfaces people actually want to use.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
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
                  <span>Ranchi · {profile.timezone}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="about-prose">
                <h2><span className="num">01</span>Who I am</h2>
                <p>I'm <strong>Aman Jaiswal</strong> — an AI/ML engineer from India, currently a research intern at IIT Ropar with the Annam.ai consortium. I spend my days working on multilingual speech systems, retrieval-augmented generation, and applied deep learning. Outside research, I build production interfaces with HTML, CSS, and JavaScript, and I'm comfortable shipping Python services end-to-end.</p>
                <p>I'm also a Google Student Ambassador, a contributor to GirlScript Summer of Code, and a finalist at multiple national hackathons. None of that matters as much as the work — but it explains why I keep choosing applied problems over abstract ones.</p>

                <h2><span className="num">02</span>What I work on</h2>
                <p>My current focus is multilingual AI for Indic languages — building ASR datasets, training and evaluating speech models, and packaging them behind APIs researchers and product teams can actually consume.</p>
                <ul>
                  <li>Multilingual speech &amp; ASR</li>
                  <li>Retrieval-augmented generation</li>
                  <li>Applied deep learning (EEG, vision)</li>
                  <li>Production ML services</li>
                  <li>Frontend for AI products</li>
                  <li>Open-source contributions</li>
                </ul>

                <h2><span className="num">03</span>How I work</h2>
                <p>I write tight code, prefer boring infrastructure, and try to ship the smallest useful thing before iterating. I think evaluation beats novelty, and that the best AI papers are the ones whose code actually runs. I keep research notes and treat documentation as part of the deliverable.</p>
                <p>If that sounds like the way you want to work, I'd love to hear from you.</p>

                <h2><span className="num">04</span>Outside of work</h2>
                <p>When I'm not training models, you'll find me reading, contributing to open-source, or building small tools I wish existed. I keep a long-running notes file. I run.</p>

                <div className="btn-group" style={{ marginTop: 'var(--space-8)' }}>
                  <MagneticLink to="/resume" className="btn btn-primary">
                    <Icon name="download" size={16} />
                    View resume
                  </MagneticLink>
                  <MagneticLink to="/contact" className="btn btn-secondary">
                    Get in touch
                  </MagneticLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}