import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function useMagnetic(ref, strength) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (reduced || isTouch) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
}

/**
 * MagneticLink — a magnetic-effect button that navigates.
 * Pass `to` for React Router (internal) navigation,
 * or `href` for an external link / mailto / download.
 */
export function MagneticLink({ children, to, href, target, rel, strength = 0.25, className = '', onClick, ...props }) {
  const ref = useRef(null);
  useMagnetic(ref, strength);

  const classNames = `btn ${className}`.trim();

  if (to) {
    return (
      <Link ref={ref} to={to} className={classNames} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      className={classNames}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * MagneticButton — same effect, plain <button> element.
 */
export function MagneticButton({ children, strength = 0.25, className = '', type = 'button', ...props }) {
  const ref = useRef(null);
  useMagnetic(ref, strength);

  return (
    <button ref={ref} type={type} className={`btn ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}