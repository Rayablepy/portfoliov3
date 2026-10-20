import { ArrowUpRight, Award, Star } from 'lucide-react';

export function ProjectRow({ project, index = 0 }) {
  return (
    <article className="project-row">
      <div className="project-row-meta">
        <span className="project-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="project-year">{project.year}</span>
      </div>

      <div className="project-row-main">
        <div className="project-row-title">
          <h3>{project.title}</h3>
          <span className="project-discipline">{project.discipline}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <TechTags tech={project.tech} />
      </div>

      <div className="project-row-side">
        <span className="project-status">{project.status}</span>
        <div className="project-links">
          {project.github && (
            <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">
              Source
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
          {project.link && (
            <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
              Visit
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt="" loading="eager" decoding="async" />
      <span>{skill.name}</span>
    </div>
  );
}

export function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <p className="eyebrow">{group.category}</p>
      <h3>{group.summary}</h3>
      <TechTags tech={group.skills} />
    </article>
  );
}

export function ExperienceRow({ item, index }) {
  return (
    <article className="experience-row">
      <div className="experience-meta">
        <span className="experience-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="experience-period">{item.period}</span>
      </div>
      <div className="experience-main">
        <h3>{item.role}</h3>
        <p className="experience-company">{item.company}</p>
        <p className="experience-description">{item.description}</p>
      </div>
    </article>
  );
}

export function CertificateCard({ certificate, index = 0 }) {
  return (
    <article className="certificate-card">
      <div className="certificate-head">
        <span className="certificate-emblem" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="certificate-issuer">{certificate.issuer}</p>
        {certificate.year && <span className="certificate-year">{certificate.year}</span>}
      </div>

      <h3>{certificate.title}</h3>
      <p className="certificate-description">{certificate.description}</p>

      <div className="certificate-foot">
        {certificate.level && <span className="certificate-level">{certificate.level}</span>}
        <span className="certificate-issued">
          <Award size={14} aria-hidden="true" />
          Credential
        </span>
      </div>
    </article>
  );
}

const starFormatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

export function StarredRow({ item }) {
  return (
    <a className="starred-row" href={item.url} target="_blank" rel="noopener noreferrer">
      <span className="starred-stars">
        <Star size={13} aria-hidden="true" />
        {starFormatter.format(item.stars)}
        <span className="sr-only">stars</span>
      </span>
      <span className="starred-main">
        <span className="starred-name">
          {item.name}
          <small>{item.owner}</small>
        </span>
        <span className="starred-description">{item.description}</span>
      </span>
      <span className="starred-meta">
        {item.language || 'Docs'}
        <ArrowUpRight size={14} aria-hidden="true" />
      </span>
    </a>
  );
}

function TechTags({ tech }) {
  return (
    <div className="tech-tags">
      {tech.map((item) => (
        <span className="tech-tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
