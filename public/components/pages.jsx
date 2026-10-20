import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import {
  CertificateGrid,
  CertificateLedger,
  ExperienceList,
  ProjectIndex,
  Section,
  SkillGroups,
  SkillMarquee,
  StarredList,
  reveal,
  stagger
} from './Sections.jsx';
import { certificates, profile, projects, starred } from './data.js';

const year = new Date().getFullYear();
const viewport = { once: true, margin: '-60px' };

export function HomePage() {
  return (
    <>
      <Masthead />

      <main>
        <Section id="profile" eyebrow="01 / Profile" title="The short version.">
          <ProfileBlock />
        </Section>

        <Section
          id="work"
          eyebrow="02 / Selected work"
          title="Selected work."
          lead={`Three builds from the archive, with the stack and the source attached.`}
        >
          <ProjectIndex limit={3} />
          <div className="section-foot">
            <a className="text-link" href="#/projects">
              Full archive
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Section>

        <Section
          id="stack"
          eyebrow="03 / Stack"
          title="Tools I reach for."
          lead="Grouped by where they sit in a project."
        >
          <SkillMarquee />
          <SkillGroups />
        </Section>

        <Section
          id="credentials"
          eyebrow="04 / Credentials"
          title="Credentials on file."
          lead="Courses and certifications I finished outside coursework."
        >
          <CertificateLedger limit={3} />
          <div className="section-foot">
            <a className="text-link" href="#/achievements">
              All {certificates.length} credentials
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
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
        eyebrow={`Archive / ${projects.length} builds`}
        title="Every build, in one place."
        lead="Listed in the order I built them. Each entry has the stack, the status, and the source."
      />
      <main>
        <Section
          id="archive"
          eyebrow="01 / Index"
          title="The archive."
          lead={`${projects.length} projects, from a local RAG pipeline to a published Python library.`}
        >
          <ProjectIndex />
        </Section>

        <Section
          id="starred"
          eyebrow="02 / Reference shelf"
          title="Open source I keep within reach."
          lead={`${starred.length} repositories I star while learning, each one worth a closer read.`}
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
      <PageHero
        eyebrow="Profile"
        title="The longer version."
        lead={`${profile.studying} at ${profile.school}, building between classes.`}
      />
      <main>
        <Section id="story" eyebrow="01 / Story" title="How I got here.">
          <ProfileBlock />
        </Section>

        <Section
          id="timeline"
          eyebrow="02 / Timeline"
          title="Where I've studied."
          lead="School, then polytechnic, plus everything I picked up on my own."
        >
          <ExperienceList />
        </Section>

        <Section
          id="capabilities"
          eyebrow="03 / Capabilities"
          title="What I work with."
          lead="The tools I use most, grouped by the part of a build they belong to."
        >
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
      <PageHero
        eyebrow={`Credentials / ${certificates.length} on file`}
        title="Certificates and courses."
        lead="The issuer, level, and year for each."
      />
      <main>
        <Section
          id="certificates"
          eyebrow="01 / Record"
          title="On file."
          lead="The record of what I completed, who issued it, and when."
        >
          <CertificateGrid />
        </Section>
      </main>
    </>
  );
}

function Masthead() {
  return (
    <section className="masthead" id="home">
      <div className="wrap">
        <motion.div
          className="masthead-inner"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="masthead-meta" variants={reveal}>
            <span className="eyebrow">Portfolio / {year}</span>
            <span className="masthead-status">
              <i aria-hidden="true" />
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1 className="masthead-title" variants={reveal}>
            <span>Muhammad</span>
            <span>Rayhan</span>
          </motion.h1>

          <motion.div className="masthead-foot" variants={reveal}>
            <div className="masthead-copy">
              <p className="masthead-role">
                {profile.role}. Based in {profile.location}.
              </p>
              <p className="masthead-statement">
                I build web tools and AI systems. Most of them start with a question I want answered.
              </p>
            </div>

            <div className="masthead-actions">
              <MagneticLink href="#/projects">See the work</MagneticLink>
              <a className="button-ghost" href={`mailto:${profile.email}`}>
                Get in touch
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="eyebrow" variants={reveal}>
            {eyebrow}
          </motion.p>
          <motion.h1 variants={reveal}>{title}</motion.h1>
          {lead && (
            <motion.p className="page-hero-lead" variants={reveal}>
              {lead}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ProfileBlock() {
  const facts = [
    ['Based in', profile.location],
    ['Studying', `${profile.studying}, ${profile.school}`],
    ['Focus', profile.focus.join(' / ')],
    ['Availability', profile.availability]
  ];

  return (
    <motion.div
      className="profile-block"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      <motion.p className="profile-text" variants={reveal}>
        {profile.intro}
      </motion.p>

      <motion.dl className="fact-list" variants={reveal}>
        {facts.map(([label, value]) => (
          <div className="fact-row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.div>
  );
}

function ContactPanel() {
  const socials = [
    { label: 'GitHub', url: profile.social.github },
    { label: 'LinkedIn', url: profile.social.linkedin },
    { label: 'Hugging Face', url: profile.social.huggingface },
    { label: 'Instagram', url: profile.social.instagram }
  ];

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <motion.div
          className="contact-head"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.p className="eyebrow" variants={reveal}>
            Contact
          </motion.p>
          <motion.h2 variants={reveal}>Say hello.</motion.h2>
        </motion.div>

        <motion.a
          className="contact-email"
          href={`mailto:${profile.email}`}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={reveal}
        >
          <span>{profile.email}</span>
          <ArrowUpRight size={28} aria-hidden="true" />
        </motion.a>

        <div className="contact-bottom">
          <p>I answer every message. Tell me what you're building, or what you want to learn.</p>
          <div className="contact-links">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
                {social.label}
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MagneticLink({ href, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  const onPointerMove = (event) => {
    if (!ref.current || reduceMotion || event.pointerType !== 'mouse') {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-7, Math.min(7, dx * 0.14)));
    y.set(Math.max(-5, Math.min(5, dy * 0.14)));
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className="button-primary"
      href={href}
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </motion.a>
  );
}
