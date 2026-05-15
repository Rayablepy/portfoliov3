import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, MousePointer2, Sparkles } from 'lucide-react';
import { CertificateGrid, ExperienceList, ProjectGrid, Section, SkillCards, SkillGroups, reveal } from './Sections.jsx';
import { profile, projects } from './data.js';

export function HomePage() {
  return (
    <>
      <Hero />

      <main>
        <Section
          id="about"
          eyebrow="01 / Profile"
          title="An aspiring engineer in AI, Full-stack application development and more."
          lead={profile.intro}
          className="about-section"
        >
          <AboutSignal />
        </Section>

        <Section
          id="projects"
          eyebrow="02 / Work Index"
          title="My learning reflected in personal projects."
          lead="Each project is treated as a testament to my skills with visual evidence, context, tooling, and a clear path to the source code."
        >
          <ProjectGrid compact />
          <div className="section-action">
            <MagneticLink href="#/projects">Explore all work</MagneticLink>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="03 / Operating Stack"
          title="The various tools and technologies I use in development."
        >
          <SkillCards />
          <SkillGroups />
        </Section>

        <ContactPanel />
      </main>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow={`${projects.length} featured build`} title="My projects" lead="An archive of projects, systems, and experiments currently worth showing." />
      <main>
        <Section id="all-projects" eyebrow="Archive" title="Built for more than just learning.">
          <ProjectGrid />
        </Section>
      </main>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow={profile.role} title="A builder in the making." lead={profile.tagline} />
      <main>
        <Section id="story" eyebrow="Story" title="Learning software development through real-world applications" lead={profile.intro}>
          <AboutSignal />
        </Section>

        <Section id="experience" eyebrow="Timeline" title="A focused path, still early and intentional.">
          <ExperienceList />
        </Section>

        <Section id="all-skills" eyebrow="Capabilities" title="A stack for practical, polished digital work.">
          <SkillGroups />
        </Section>

        <ContactPanel />
      </main>
    </>
  );
}

export function AchievementsPage() {
  return (
    <>
      <PageHero eyebrow="Credentials" title="Learning record" lead="Certificates and milestones from a still-growing technical path." />
      <main>
        <Section id="certificates" eyebrow="Certificates" title="Small signs of continued growth and practice.">
          <CertificateGrid />
        </Section>
      </main>
    </>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 140]);

  return (
    <section className="hero-banner" id="home">
      <motion.div className="hero-orbit" style={{ y }} aria-hidden="true" />
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p className="hero-kicker" variants={reveal}>
          <Sparkles size={16} /> {profile.role}
        </motion.p>

        <motion.h1 variants={reveal}>
          <span>Aspiring</span>
          <span>to build</span>
          <span>solutions</span>
          <span>for the future.</span>
        </motion.h1>

        <motion.div className="hero-lower" variants={reveal}>
          <p>
            I am building toward full stack and AI engineering through fast interfaces, structured learning, and product-minded craft.
          </p>
          <div className="hero-panel" aria-label="Current focus">
            <span>Current day</span>
            <strong>Applied AI and Analytics student</strong>
            <small>Full stack / Python / Analytics</small>
          </div>
          <div className="hero-buttons">
            <MagneticLink href="#/projects">View projects</MagneticLink>
            <a href="#/about" className="ghost-link">
              About me <ArrowRight size={16} />
            </a>
          </div>+
        </motion.div>
      </motion.div>
    </section>
  );
}

function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <motion.div className="page-hero-inner" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p className="eyebrow" variants={reveal}>{eyebrow}</motion.p>
        <motion.h1 variants={reveal}>{title}</motion.h1>
        {lead && <motion.p variants={reveal}>{lead}</motion.p>}
      </motion.div>
    </section>
  );
}

function AboutSignal() {
  return (
    <motion.div className="about-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      {[
        ['Location', profile.location],
        ['Current path', 'Applied AI and Analytics'],
        ['Focus', profile.focus.join(' / ')],
        ['Availability', profile.availability]
      ].map(([label, value]) => (
        <motion.div className="signal-card" variants={reveal} key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ContactPanel() {
  return (
    <section className="contact-panel" id="contact">
      <div>
        <p className="eyebrow">Open channel</p>
        <h2>Have any more questions?</h2>
      </div>
      <a className="email-link" href={`mailto:${profile.email}`}>
        <Mail size={22} />
        {profile.email}
      </a>
      <div className="contact-links">
        <a href={profile.social.github} target="https://github.com/Rayablepy">GitHub</a>
        <a href={profile.social.linkedin} target="https://www.linkedin.com/in/muhd-rayhan/">LinkedIn</a>
        <a href={profile.social.instagram} target="https://www.instagram.com/rayhan08._/">Instagram</a>
      </div>
    </section>
  );
}

function MagneticLink({ href, children }) {
  return (
    <motion.a className="magnetic-link" href={href} whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.98 }}>
      {children}
      <MousePointer2 size={16} />
    </motion.a>
  );
}
