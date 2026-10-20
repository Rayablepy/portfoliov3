import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, profile } from './data.js';

const menuSpring = { type: 'spring', bounce: 0, duration: 0.4 };

export function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const onHashChange = () => setMenuOpen(false);

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [menuOpen]);

  return (
    <header className={`topnav${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
      <div className="topnav-inner wrap">
        <nav className="nav-links" aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <a
              href={item.href}
              key={item.key}
              className={activePage === item.key ? 'is-active' : undefined}
              aria-current={activePage === item.key ? 'page' : undefined}
            >
              <span className="nav-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Contact
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.key}
                  className={activePage === item.key ? 'is-active' : undefined}
                  aria-current={activePage === item.key ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...menuSpring, delay: 0.04 + index * 0.045 }}
                >
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu-foot">
              <span>Say hello</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
