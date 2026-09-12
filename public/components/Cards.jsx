import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Code2 } from 'lucide-react';

export function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <motion.article className={`project-card${compact ? ' compact' : ''}`} whileHover={{ y: -6 }}>
      {project.image && (
        <div className="project-media">
          <img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" />
          <span className="project-index">P{String(index + 1).padStart(2, '0')}</span>
        </div>
      )}

      <div className="project-body">
        <p className="eyebrow">{project.eyebrow || 'Featured build'}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {!compact && project.outcome && <p className="project-outcome">{project.outcome}</p>}

        <TechTags tech={project.tech} />

        <div className="card-actions">
          {project.link && (
            <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
              Open build <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} className="text-link" target="_blank" rel="noopener noreferrer">
              Read source <Code2 size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectRow({ project, index = 0 }) {
  return (
    <article className="project-row">
      <span className="row-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="row-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechTags tech={project.tech} />
      </div>

      <div className="row-actions">
        {project.github && (
          <a href={project.github} className="text-link" target="_blank" rel="noopener noreferrer">
            Source <Code2 size={15} />
          </a>
        )}
        {project.link && (
          <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
            Open build <ArrowRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}

export function SkillCard({ skill }) {
  return (
    <motion.div className="skill-card" whileHover={{ y: -4, scale: 1.02 }}>
      <img src={skill.icon} alt="" loading="lazy" />
      <span>{skill.name}</span>
    </motion.div>
  );
}

export function SkillGroup({ group }) {
  return (
    <motion.article className="skill-group" whileHover={{ y: -5 }}>
      <p className="eyebrow">{group.category}</p>
      <h3>{group.summary}</h3>
      <TechTags tech={group.skills} />
    </motion.article>
  );
}

export function ExperienceCard({ item, index }) {
  return (
    <motion.article className="experience-card" whileHover={{ x: 5 }}>
      <div className="timeline-dot" aria-hidden="true" />
      <span className="timeline-index" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <p className="eyebrow">{item.period}</p>
        <h3>{item.role}</h3>
        <h4>{item.company}</h4>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}

export function CertificateCard({ certificate }) {
  return (
    <motion.article className="certificate-card" whileHover={{ y: -4 }}>
      <div className="certificate-image">
        <img
          src={certificate.image}
          alt={`${certificate.title} — ${certificate.issuer} certificate`}
          loading="lazy"
        />
      </div>

      <div className="certificate-content">
        <p className="eyebrow">{certificate.issuer}</p>
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
      </div>
    </motion.article>
  );
}

const starFormatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

export function StarredRow({ item }) {
  return (
    <a className="starred-row" href={item.url} target="_blank" rel="noopener noreferrer">
      <span className="starred-stars" aria-hidden="true">
        ★ {starFormatter.format(item.stars)}
      </span>
      <span className="starred-main">
        <span className="starred-name">
          {item.name}
          <small>{item.owner}</small>
        </span>
        <span className="starred-description">{item.description}</span>
      </span>
      <span className="starred-meta">
        {item.language}
        <ArrowRight size={15} />
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