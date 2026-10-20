import { ArrowUp } from 'lucide-react';
import { navigation, profile } from './data.js';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#/" aria-label="Back to home">
              <span className="brand-mark" aria-hidden="true">
                MR
              </span>
              Muhammad Rayhan
            </a>
            <p>{profile.role}, based in {profile.location}.</p>
          </div>

          <div className="footer-col">
            <span className="footer-label">Index</span>
            <ul>
              {navigation.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-label">Elsewhere</span>
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
                <a href={profile.social.huggingface} target="_blank" rel="noopener noreferrer">
                  Hugging Face
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <span>© {year} Muhammad Rayhan</span>
          <span>Set in Doto and Inter</span>
          <a href="#/">
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
