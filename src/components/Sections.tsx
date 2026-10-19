import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  Palette,
  Code2,
  Megaphone,
  Search,
  ShoppingCart,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  Utensils,
  BriefcaseBusiness,
  Compass,
  ClipboardCheck,
  Rocket,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'
import { services, industries, projects } from '../data'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
const serviceIcons = [
  Globe,
  Palette,
  Code2,
  Megaphone,
  Search,
  ShoppingCart,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Building2,
  Utensils,
  BriefcaseBusiness,
]
const processIcons = [Compass, ClipboardCheck, Lightbulb, Rocket, TrendingUp]
export function SectionHeading({
  kicker,
  title,
  copy,
  center = false,
}: {
  kicker: string
  title: string
  copy?: string
  center?: boolean
}) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      <span className="eyebrow">
        <i />
        {kicker}
      </span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}
export function CTA({
  title = 'Ready to make your next move?',
  copy = 'Tell us where you want to go. We’ll help you map out a smart way forward.',
}: {
  title?: string
  copy?: string
}) {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div className="cta-orb orb-one" />
        <div className="cta-orb orb-two" />
        <div className="cta-copy">
          <span className="eyebrow light">
            <i /> LET’S BUILD SOMETHING GOOD
          </span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Link className="button button-white" to="/contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  )
}
export function ServiceGrid({ limit }: { limit?: number }) {
  return (
    <div className="service-grid">
      {services.slice(0, limit).map((s, i) => {
        const Icon = serviceIcons[i % serviceIcons.length]
        return (
          <Reveal key={s.slug} className="service-card-wrap">
            <Link className="service-card" to={`/services/${s.slug}`}>
              <span className="service-icon">
                <Icon size={22} />
              </span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="text-link">
                Explore service <ArrowUpRight size={16} />
              </span>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
export function IndustryGrid({ limit }: { limit?: number }) {
  return (
    <div className="industry-grid">
      {industries.slice(0, limit).map((it, i) => {
        const Icon = [Stethoscope, Building2, Utensils, HeartPulse, BriefcaseBusiness, ShieldCheck][
          i % 6
        ]
        return (
          <Reveal key={it.slug} className="industry-card-wrap">
            <Link to={`/industries/${it.slug}`} className="industry-card">
              <img src={it.image} alt="" loading="lazy" />
              <span className="industry-number">
                <Icon size={23} />
              </span>
              <div className="industry-card-copy">
                <span>INDUSTRY SOLUTION</span>
                <h3>{it.name}</h3>
                <p>{it.title}</p>
                <span className="round-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
export function ProjectGrid({ limit }: { limit?: number }) {
  return (
    <div className="project-grid">
      {projects.slice(0, limit).map((p, i) => (
        <Reveal key={p.name} className={`project-card project-${i % 3}`}>
          <div className="project-image">
            <img src={p.image} alt={`${p.name} portfolio concept`} loading="lazy" />
            <span className="project-type">{p.type}</span>
            <span className="project-zoom">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <div className="project-meta">
            <h3>{p.name}</h3>
            <span>Digital experience</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
export function Benefits({ items }: { items: string[] }) {
  return (
    <div className="benefit-list">
      {items.map((x) => (
        <div key={x}>
          <span>
            <Check size={15} />
          </span>
          {x}
        </div>
      ))}
    </div>
  )
}
export function Process() {
  const steps = [
    ['Discover', 'We get to know your business, audience and ambitions.'],
    ['Plan', 'We turn the brief into a focused roadmap and clear priorities.'],
    ['Create', 'Strategy, design and technology come together in a thoughtful build.'],
    ['Launch', 'We test, refine and launch with care.'],
    ['Improve', 'We learn from real-world performance and keep moving forward.'],
  ]
  return (
    <div className="process-grid">
      {steps.map(([t, d], i) => {
        const Icon = processIcons[i]
        return (
          <Reveal key={t} className="process-card">
            <span className="process-icon">
              <Icon size={22} />
            </span>
            <h3>{t}</h3>
            <p>{d}</p>
            <div className="process-line" />
          </Reveal>
        )
      })}
    </div>
  )
}
export function Stats() {
  return (
    <div className="stats-grid">
      {[
        ['2009', 'Established'],
        ['360°', 'Digital thinking'],
        ['One', 'Connected team'],
        ['Always', 'Moving forward'],
      ].map(([n, t]) => (
        <div className="stat" key={t}>
          <strong>{n}</strong>
          <span>{t}</span>
        </div>
      ))}
    </div>
  )
}
export function TrustStrip() {
  return (
    <div className="trust-strip">
      <span>STRATEGY</span>
      <b>✳</b>
      <span>CREATIVITY</span>
      <b>✳</b>
      <span>TECHNOLOGY</span>
      <b>✳</b>
      <span>GROWTH</span>
      <b>✳</b>
      <span>BUILT AROUND YOU</span>
    </div>
  )
}
export function MiniNote({ children }: { children: ReactNode }) {
  return (
    <div className="mini-note">
      <Sparkles size={16} />
      <span>{children}</span>
    </div>
  )
}
