import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import SmoothScroll from './SmoothScroll.jsx';
import Cursor from './Cursor.jsx';
import BackToTop from './BackToTop.jsx';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  );
}