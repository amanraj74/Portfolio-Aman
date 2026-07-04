import { useState } from 'react';
import { profile } from '../data.js';
import { TextReveal, FadeIn } from '../components/TextReveal.jsx';
import { Icon } from '../components/Icon.jsx';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function Contact() {
  const [status, setStatus] = useState({ state: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!WEB3FORMS_KEY) {
      setStatus({
        state: 'error',
        message: `Form not configured yet. Email ${profile.email} directly.`,
      });
      return;
    }

    setSubmitting(true);
    setStatus({ state: '', message: '' });

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: data.subject || `Portfolio contact — ${data.name}`,
        from_name: data.name,
        replyto: data.email,
        name: data.name,
        email: data.email,
        message: data.message,
        // Honeypot — bots fill this, humans don't.
        botcheck: '',
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({ state: 'success', message: "Thanks — message sent. I'll reply within 48 hours." });
        form.reset();
      } else {
        throw new Error(result.message || 'Submission failed.');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: `Couldn't send right now. Email ${profile.email} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Contact</span>
          </FadeIn>
          <h1>
            <TextReveal delay={0.05} stagger={0.04}>Let's start a conversation.</TextReveal>
          </h1>
          <FadeIn delay={0.4}>
            <p>Research collaborations, full-time roles, freelance AI/ML work, or a friendly hello — pick whichever channel works for you.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-page-grid">
            <FadeIn>
              <div className="form-card">
                <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>Send a message</h2>
                <p style={{ color: 'var(--text-2)', marginBottom: 'var(--space-8)' }}>Fill this out and I'll get back to you within a couple of days.</p>

                <form className="contact-form" onSubmit={onSubmit} noValidate>
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="Research collaboration, full-time role, etc." />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required placeholder="Tell me a bit about what you're working on…" />
                  </div>

                  {status.state && (
                    <div className="form-status" data-state={status.state} role="status" aria-live="polite">
                      {status.message}
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary" disabled={submitting} style={{ alignSelf: 'flex-start' }}>
                    {submitting ? 'Sending…' : 'Send message'}
                    {!submitting && <Icon name="send" size={16} />}
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="contact-info-card">
                <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)' }}>Direct channels</h2>
                <p style={{ color: 'var(--text-2)', marginBottom: 'var(--space-2)' }}>If you'd rather skip the form, reach me directly through any of these.</p>

                <div className="contact-channels">
                  <a className="contact-channel" href={`mailto:${profile.email}`}>
                    <span className="contact-channel-icon"><Icon name="mail" size={18} /></span>
                    <span className="contact-channel-text">
                      <small>Email</small>
                      <strong>{profile.email}</strong>
                    </span>
                    <span className="contact-channel-arrow"><Icon name="chevron-right" size={20} /></span>
                  </a>

                  <a className="contact-channel" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                    <span className="contact-channel-icon"><Icon name="github" size={18} /></span>
                    <span className="contact-channel-text">
                      <small>GitHub</small>
                      <strong>github.com/amanraj74</strong>
                    </span>
                    <span className="contact-channel-arrow"><Icon name="chevron-right" size={20} /></span>
                  </a>

                  <a className="contact-channel" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="contact-channel-icon"><Icon name="linkedin" size={18} /></span>
                    <span className="contact-channel-text">
                      <small>LinkedIn</small>
                      <strong>linkedin.com/in/aman-jaiswal</strong>
                    </span>
                    <span className="contact-channel-arrow"><Icon name="chevron-right" size={20} /></span>
                  </a>

                  <a className="contact-channel" href={profile.resumeUrl} download>
                    <span className="contact-channel-icon"><Icon name="file" size={18} /></span>
                    <span className="contact-channel-text">
                      <small>Resume</small>
                      <strong>Download PDF</strong>
                    </span>
                    <span className="contact-channel-arrow"><Icon name="chevron-right" size={20} /></span>
                  </a>
                </div>

                <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', marginBottom: 'var(--space-2)' }}>Currently based in</p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 500 }}>{profile.location} — {profile.timezone}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-3)', marginTop: 'var(--space-3)' }}>Open to remote and hybrid roles globally. Replies usually within 48 hours.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}