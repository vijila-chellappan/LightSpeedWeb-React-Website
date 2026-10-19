import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Lightbulb,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTA, Process, Reveal, SectionHeading, Stats } from '../components/Sections'
export default function Company() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> OUR COMPANY
            </span>
            <h1>
              We help real brands create <span>unreal experiences.</span>
            </h1>
            <p>
              We bring people, ideas and technology together to help businesses communicate clearly,
              connect meaningfully and grow with confidence.
            </p>
            <Link className="button button-primary" to="/contact">
              Meet your next partner <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Team collaborating in a bright studio"
            />
            <span className="image-caption">Good work starts with good people.</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container company-intro">
          <Reveal>
            <SectionHeading
              kicker="WHO WE ARE"
              title="Curious minds. Practical thinkers. Partners in progress."
              copy="Light Speed Web was established in 2009 by Ish Singh in Mississauga, Ontario. Our work brings strategy, design and digital technology together around real business needs."
            />
          </Reveal>
          <div className="values-grid">
            {[
              [
                Compass,
                'Our approach',
                'We begin by listening, asking better questions and getting clear on what success means.',
              ],
              [
                HeartHandshake,
                'Our partnership',
                'Open communication and shared ownership keep projects moving in the right direction.',
              ],
              [
                Lightbulb,
                'Our mindset',
                'We stay curious, challenge assumptions and look for thoughtful ways to solve problems.',
              ],
              [
                Target,
                'Our focus',
                'Every creative and technical choice should have a purpose for your audience and your business.',
              ],
            ].map(([Icon, title, copy]: any) => (
              <Reveal key={title} className="value-card">
                <span className="value-icon">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="container stats-layout">
          <div>
            <span className="eyebrow light">
              <i /> BUILT ON EXPERIENCE
            </span>
            <h2>
              Focused on the work.
              <br />
              <span>Invested in your growth.</span>
            </h2>
            <p>
              We believe great partnerships are built on clarity, consistency and a genuine
              commitment to doing the work well.
            </p>
          </div>
          <Stats />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="OUR PROCESS"
              title="A better way to get good work done."
              copy="We adapt to the needs of each project, while keeping the essentials simple."
            />
          </Reveal>
          <Process />
        </div>
      </section>
      <CTA
        title="Let's make something that matters."
        copy="Tell us what your business needs next. We'd love to hear about it."
      />
    </main>
  )
}
