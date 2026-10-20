import { motion } from 'framer-motion';
import {
  CertificateCard,
  ExperienceRow,
  ProjectRow,
  SkillCard,
  SkillGroup,
  StarredRow
} from './Cards.jsx';
import { certificates, experience, iconSkills, projects, skillGroups, starred } from './data.js';

export const spring = { type: 'spring', bounce: 0, duration: 0.5 };

export const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: spring }
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.06 } }
};

const viewport = { once: true, margin: '-60px' };

export function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="wrap">
        {(eyebrow || title || lead) && (
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {eyebrow && (
              <motion.p className="eyebrow section-eyebrow" variants={reveal}>
                {eyebrow}
              </motion.p>
            )}
            <div className="section-heading">
              {title && <motion.h2 variants={reveal}>{title}</motion.h2>}
              {lead && (
                <motion.p className="section-lead" variants={reveal}>
                  {lead}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export function ProjectIndex({ limit }) {
  const list = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <motion.div
      className="project-list"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      {list.map((project, index) => (
        <motion.div variants={reveal} key={project.title}>
          <ProjectRow project={project} index={index} />
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
      viewport={viewport}
      variants={stagger}
    >
      {starred.map((item) => (
        <motion.div variants={reveal} key={item.url}>
          <StarredRow item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function SkillMarquee() {
  return (
    <div
      className="skills-marquee"
      role="img"
      aria-label={`Technologies: ${iconSkills.map((skill) => skill.name).join(', ')}`}
    >
      <div className="marquee-track">
        {[...iconSkills, ...iconSkills].map((skill, index) => (
          <SkillCard skill={skill} key={`${skill.name}-${index}`} />
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
      viewport={viewport}
      variants={stagger}
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
    <motion.div
      className="experience-list"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      {experience.map((item, index) => (
        <motion.div variants={reveal} key={item.role}>
          <ExperienceRow item={item} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function CertificateGrid({ limit }) {
  const list = typeof limit === 'number' ? certificates.slice(0, limit) : certificates;

  return (
    <motion.div
      className="certificates-grid"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      {list.map((certificate, index) => (
        <motion.div variants={reveal} key={certificate.title}>
          <CertificateCard certificate={certificate} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function CertificateLedger({ limit = 3 }) {
  return (
    <motion.div
      className="ledger"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      {certificates.slice(0, limit).map((certificate, index) => (
        <motion.div className="ledger-row" variants={reveal} key={certificate.title}>
          <span className="ledger-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="ledger-title">{certificate.title}</span>
          <span className="ledger-issuer">{certificate.issuer}</span>
          <span className="ledger-year">{certificate.year}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
