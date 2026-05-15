import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const cardHover = {
  y: -6,
  rotateX: 0,
  rotateY: 0,
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
};

export function ProjectCard({ project, index = 0, compact = false }) {
  return (
    <motion.article className={`project-card${compact ? ' compact' : ''}`} whileHover={cardHover}>
      <div className="project-media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="project-index">P{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="project-body">
        <p className="eyebrow">{project.eyebrow || 'Featured build'}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {!compact && project.outcome && <p className="project-outcome">{project.outcome}</p>}

        <TechTags tech={project.tech} />

        <div className="card-actions">
          {project.link && (
            <a href={project.link} className="text-link">
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

export function SkillCard({ skill }) {
  return (
    <motion.div className="skill-card" whileHover={{ y: -6, scale: 1.02 }}>
      <img src={skill.icon} alt="" loading="lazy" />
      <span>{skill.name}</span>
    </motion.div>
  );
}

export function SkillGroup({ group }) {
  return (
    <motion.article className="skill-group" whileHover={{ y: -8 }}>
      <p className="eyebrow">{group.category}</p>
      <h3>{group.summary}</h3>
      <TechTags tech={group.skills} />
    </motion.article>
  );
}

export function ExperienceCard({ item, index }) {
  return (
    <motion.article className="experience-card" whileHover={{ x: 8 }}>
      <div className="timeline-dot" />
      <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
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
    <motion.article className="certificate-card" whileHover={{ y: -8 }}>
      <div className="certificate-image">
        <img src={certificate.image} alt={certificate.title} loading="lazy" />
      </div>

      <div className="certificate-content">
        <p className="eyebrow">{certificate.issuer}</p>
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
      </div>
    </motion.article>
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
