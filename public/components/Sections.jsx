import { motion } from 'framer-motion';
import { CertificateCard, ExperienceCard, ProjectCard, ProjectRow, SkillCard, SkillGroup, StarredRow } from './Cards.jsx';
import { certificates, experience, iconSkills, projects, skillGroups, starred } from './data.js';

export const reveal = {
  hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export const gridParent = {
  visible: { transition: { staggerChildren: 0.09 } }
};

export function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section className={`section-shell ${className}`} id={id}>
      {(eyebrow || title || lead) && <SectionTitle eyebrow={eyebrow} title={title} lead={lead} />}
      {children}
    </section>
  );
}

export function SectionTitle({ eyebrow, title, lead }) {
  return (
    <motion.div className="section-title" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {lead && <p className="section-lead">{lead}</p>}
    </motion.div>
  );
}

export function ProjectGrid({ compact = false, variant = 'feature', limit }) {
  const ArchiveCard = variant === 'archive' ? ProjectRow : ProjectCard;
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <motion.div
      className={`project-grid${compact ? ' compact' : ''}${variant === 'archive' ? ' project-archive' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={gridParent}
    >
      {list.map((project, index) => (
        <motion.div variants={reveal} key={project.title}>
          <ArchiveCard compact={compact} index={index} project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function StarredList() {
  return (
    <motion.div
      className="starred-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={gridParent}
    >
      {starred.map((item) => (
        <motion.div variants={reveal} key={item.url}>
          <StarredRow item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function SkillCards() {
  return (
    <div className="skills-marquee" aria-label="Featured technologies">
      <div>
        {[...iconSkills, ...iconSkills].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillGroups() {
  return (
    <motion.div
      className="skill-groups"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={gridParent}
    >
      {skillGroups.map((group) => (
        <motion.div variants={reveal} key={group.category}>
          <SkillGroup group={group} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function ExperienceList() {
  return (
    <div className="experience-list">
      {experience.map((item, index) => (
        <ExperienceCard item={item} index={index} key={item.role} />
      ))}
    </div>
  );
}

export function CertificateGrid() {
  return (
    <div className="certificates-grid">
      {certificates.map((certificate) => (
        <CertificateCard certificate={certificate} key={certificate.title} />
      ))}
    </div>
  );
}
