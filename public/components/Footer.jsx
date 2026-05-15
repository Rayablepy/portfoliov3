import { navigation, profile } from './data.js';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-brand" href="#/">
          Muhammad Rayhan
        </a>
        <p>Full stack development, Applied AI and data analytics.</p>
      </div>

      <div className="footer-grid">
        <div>
          <h3>Navigation</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.key}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul>
            <li>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-meta">© 2026 Muhammad Rayhan</p>
    </footer>
  );
}
