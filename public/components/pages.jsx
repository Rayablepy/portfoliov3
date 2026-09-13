import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { CertificateGrid, ExperienceList, ProjectGrid, Section, SkillCards, SkillGroups, StarredList, reveal } from './Sections.jsx';
import { certificates, experience, homeProjectCount, profile, projects, skillGroups, starred } from './data.js';

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
          eyebrow={`02 / Work Index · ${homeProjectCount} featured`}
          title="The projects I built while learning."
          lead="Every project here shows what I was learning at the time, the tools I used, and where you can read the source."
        >
          <ProjectGrid compact limit={homeProjectCount} />
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
      <PageHero
        eyebrow={`${projects.length} ${projects.length === 1 ? 'build' : 'builds'} in the archive`}
        title="Selected work"
        lead="An archive of projects, systems, and experiments currently worth showing."
      />
      <main>
        <Section id="all-projects" eyebrow="Archive" title="Built while learning, kept because they work.">
          <ProjectGrid variant="archive" />
        </Section>

        <Section
          id="starred"
          eyebrow={`Reference shelf · ${starred.length} starred`}
          title="Open source I keep within reach."
          lead="Repositories I have starred as I learn. Each one is a piece of craft I keep coming back to study or borrow."
        >
          <StarredList />
        </Section>
      </main>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow={profile.role} title="Still learning, still building." lead={profile.tagline} />
      <main>
        <Section id="story" eyebrow="Story" title="Learning software development through real-world applications" lead={profile.intro}>
          <AboutSignal />
        </Section>

        <Section id="experience" eyebrow={`Timeline · ${experience.length} milestones`} title="A focused path, still early and intentional.">
          <ExperienceList />
        </Section>

        <Section id="all-skills" eyebrow={`Capabilities · ${skillGroups.length} groups`} title="A stack for practical, polished digital work.">
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
      <PageHero eyebrow="Credentials" title="Certificates from a path that is still growing." lead="Certificates and milestones along a path that keeps expanding. Learning in the open, a credential at a time." />
      <main>
        <Section
          id="certificates"
          eyebrow={`Certificates · ${certificates.length} on file`}
          title="A record of what I have picked up so far."
        >
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
            I am working toward full stack and AI engineering through fast interfaces, consistent practice, and care for the details.
          </p>
          <div className="hero-panel" aria-label="Current focus">
            <span>Now</span>
            <strong>Applied AI and Analytics student</strong>
            <small>Full stack / Python / Analytics</small>
          </div>
          <div className="hero-buttons">
            <MagneticLink href="#/projects">View projects</MagneticLink>
            <a href="#/about" className="ghost-link">
              About me <ArrowRight size={16} />
            </a>
          </div>
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
  const socials = [
    { label: 'GitHub', url: profile.social.github },
    { label: 'LinkedIn', url: profile.social.linkedin },
    { label: 'Instagram', url: profile.social.instagram }
  ];

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
        {socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.label} <ArrowRight size={14} />
          </a>
        ))}
      </div>
    </section>
  );
}

function MagneticLink({ href, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const onPointerMove = (event) => {
    if (!ref.current || reduceMotion) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-14, Math.min(14, dx * 0.25)));
    y.set(Math.max(-10, Math.min(10, dy * 0.25)));
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className="magnetic-link"
      href={href}
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      <ArrowRight size={16} />
    </motion.a>
  );
}
