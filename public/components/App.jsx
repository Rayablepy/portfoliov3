import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Footer } from './Footer.jsx';
import { Navbar } from './Navbar.jsx';
import { AboutPage, AchievementsPage, HomePage, ProjectsPage } from './pages.jsx';

const routes = {
  '/': { key: 'home', title: 'Muhammad Rayhan | Full Stack Developer', component: HomePage },
  '/projects': { key: 'projects', title: 'Projects | Muhammad Rayhan', component: ProjectsPage },
  '/about': { key: 'about', title: 'About | Muhammad Rayhan', component: AboutPage },
  '/achievements': {
    key: 'achievements',
    title: 'Achievements | Muhammad Rayhan',
    component: AchievementsPage
  }
};

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0, duration: 0.35 } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.12, ease: 'easeOut' } }
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

  return (
    <MotionConfig reducedMotion="user" transition={{ type: 'spring', bounce: 0, duration: 0.35 }}>
      <a className="skip-link" href="#main-content" onClick={onSkipClick}>
        Skip to content
      </a>
      <Navbar activePage={route.key} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={route.key}
          id="main-content"
          tabIndex={-1}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
        >
          <Page />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  );
}

function getHashPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function onSkipClick(event) {
  event.preventDefault();
  const main = document.getElementById('main-content');
  if (main) {
    main.focus();
    main.scrollIntoView();
  }
}
