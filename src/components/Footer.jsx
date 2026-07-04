import { Link } from 'react-router-dom';
import { profile, navLinks } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label={`${profile.name} home`}>
              <span className="brand-mark">{profile.initials}</span>
              <span className="brand-text">{profile.name}</span>
            </Link>
            <p>{profile.shortBio} Based in {profile.location} — working globally.</p>
          </div>

          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              {profile.socials.github && (
                <li><a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              )}
              {profile.socials.linkedin && (
                <li><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              )}
              <li><a href={`mailto:${profile.email}`}>Email</a></li>
              <li><a href={profile.resumeUrl} download>Resume (PDF)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {profile.name}. Built with care.</span>
          <div className="footer-social">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.07-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .3"/></svg>
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}