import { motion } from 'framer-motion';
import { CertificateCard, ExperienceCard, ProjectCard, SkillCard, SkillGroup } from './Cards.jsx';
import { certificates, experience, iconSkills, projects, skillGroups } from './data.js';

export const reveal = {
  hidden: { opacity: 0, y: 42, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
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

export function ProjectGrid({ compact = false }) {
  return (
    <motion.div
      className={`project-grid${compact ? ' compact' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.12 } }
      }}
    >
      {projects.map((project, index) => (
        <motion.div variants={reveal} key={project.title}>
          <ProjectCard compact={compact} index={index} project={project} />
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
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
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
