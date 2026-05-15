import Lenis from 'lenis';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Footer } from './Footer.jsx';
import { Navbar } from './Navbar.jsx';
import { AboutPage, AchievementsPage, HomePage, ProjectsPage } from './pages.jsx';

const routes = {
  '/': { key: 'home', title: 'Home | Muhammad Rayhan', component: HomePage },
  '/projects': { key: 'projects', title: 'Projects | Muhammad Rayhan', component: ProjectsPage },
  '/about': { key: 'about', title: 'About Me | Muhammad Rayhan', component: AboutPage },
  '/achievements': { key: 'achievements', title: 'Achievements | Muhammad Rayhan', component: AchievementsPage }
};

export function App() {
  const [path, setPath] = useState(getHashPath);
  const route = useMemo(() => routes[path] || routes['/'], [path]);
  const Page = route.component;

  useEffect(() => {
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = route.title;
    window.scrollTo({ top: 0, left: 0 });
  }, [route]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    };
    const onMouseDown = () => document.body.classList.remove('keyboard-nav');

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <span className="aurora aurora-one" />
        <span className="aurora aurora-two" />
        <span className="grid-field" />
      </div>
      <CursorSpotlight />
      <Navbar activePage={route.key} />
      <AnimatePresence mode="wait">
        <motion.div
          key={route.key}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Page />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function getHashPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function CursorSpotlight() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 90, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!pointerFine) {
      return undefined;
    }

    const onPointerMove = (event) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [x, y]);

  return <motion.div className="cursor-spotlight" style={{ x: springX, y: springY }} aria-hidden="true" />;
}

