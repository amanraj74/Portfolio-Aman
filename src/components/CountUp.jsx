import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CountUp({ value, suffix = '', decimals = 0, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) => {
    const fixed = Number(latest).toFixed(decimals);
    return fixed + suffix;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, motionValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}