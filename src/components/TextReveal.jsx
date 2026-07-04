import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function TextReveal({ children, className = '', delay = 0, stagger = 0.04, as: Tag = 'span' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  if (typeof children !== 'string') {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = children.split(' ');

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : { y: '110%' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: delay + wi * stagger }}
          >
            {word + (wi < words.length - 1 ? ' ' : '')}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function FadeIn({ children, delay = 0, y = 16, duration = 0.7, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerReveal({ children, className = '', stagger = 0.08, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: delay + i * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}