import { Link } from 'react-router-dom';
import { TextReveal, FadeIn } from '../components/TextReveal.jsx';
import { MagneticLink } from '../components/MagneticButton.jsx';
import { Icon } from '../components/Icon.jsx';

export default function NotFound() {
  return (
    <section className="error-page">
      <div>
        <FadeIn>
          <div className="error-code">404</div>
        </FadeIn>
        <h1 className="error-title">
          <TextReveal delay={0.1} stagger={0.04}>Off the map.</TextReveal>
        </h1>
        <FadeIn delay={0.4}>
          <p className="error-desc">The page you're looking for doesn't exist — or moved. Here's a few places you can go instead.</p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">
              <Icon name="arrow-left" size={16} />
              Back home
            </Link>
            <MagneticLink to="/projects" className="btn btn-secondary">
              See my work
            </MagneticLink>
            <MagneticLink to="/contact" className="btn btn-secondary">
              Get in touch
            </MagneticLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}