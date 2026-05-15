import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, profile } from './data.js';

export function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`topnav${scrolled ? ' scrolled' : ''}`}>
      <a className="brand-mark" href="#/" aria-label="Go to home">
        <span>MR</span>
        <small>{profile.location}</small>
      </a>

      <nav className="nav-shell" aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <a href={item.href} className={activePage === item.key ? 'active' : undefined} key={item.key}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-availability" href={`mailto:${profile.email}`}>
        <span />
        Available
      </a>

      <button
        className="mobile-menu-btn"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`mobile-nav${menuOpen ? ' active' : ''}`}>
        {navigation.map((item, index) => (
          <a
            href={item.href}
            className={activePage === item.key ? 'active' : undefined}
            key={item.key}
            onClick={() => setMenuOpen(false)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
