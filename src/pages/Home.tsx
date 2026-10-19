import { ArrowDownRight, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  CTA,
  IndustryGrid,
  Process,
  ProjectGrid,
  Reveal,
  SectionHeading,
  ServiceGrid,
  Stats,
  TrustStrip,
} from '../components/Sections'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-pill">
              <span className="pulse-dot" /> STRATEGY · DESIGN · TECHNOLOGY
            </div>
            <h1>
              Make your next
              <br />
              <span>move matter.</span>
            </h1>
            <p className="hero-lead">
              We help ambitious businesses turn big ideas into digital experiences that attract
              attention, build trust and move people to act.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Let's talk about growth <ArrowUpRight size={17} />
              </Link>
              <Link className="button button-outline" to="/our-work">
                Explore our work <ArrowDownRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <span>LS</span>
                <span>★</span>
                <span>↗</span>
              </div>
              <div>
                <strong>Good people. Thoughtful work.</strong>
                <small>Built around your business goals.</small>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Creative team working on a digital project"
              />
              <div className="photo-glaze" />
            </div>
            <div className="float-card float-top">
              <span className="float-icon">
                <CheckCircle2 size={18} />
              </span>
              <div>
                <strong>Made to move</strong>
                <small>Strategy meets creativity</small>
              </div>
            </div>
            <div className="float-card float-bottom">
              <span className="mini-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <div>
                <strong>Ideas into impact</strong>
                <small>One connected experience</small>
              </div>
            </div>
            <div className="hero-stamp">
              LSW
              <br />
              <span>IN MOTION</span>
            </div>
            <div className="hero-blob" />
          </div>
        </div>
        <div className="container hero-bottom">
          <span>CREATIVE THINKING, PRACTICAL RESULTS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <TrustStrip />
      <section className="section section-services">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="WHAT WE DO"
              title="Everything you need to move forward."
              copy="A connected team for the moments that matter—from your first idea to your next stage of growth."
            />
          </Reveal>
          <ServiceGrid limit={6} />
          <div className="section-link">
            <Link className="text-link" to="/services">
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-about">
        <div className="container split-layout">
          <Reveal className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Collaborative team at work"
            />
            <div className="about-sticker">
              <span>GOOD IDEAS</span>
              <strong>
                MOVE
                <br />
                BUSINESS
                <br />
                <em>FORWARD.</em>
              </strong>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">
              <i /> WHY LIGHT SPEED WEB
            </span>
            <h2>We make complex feel clear—and good ideas go further.</h2>
            <p>
              Great digital work is more than a polished website or a clever campaign. It’s the
              right message, the right experience and the right tools working together.
            </p>
            <p>
              We bring strategy, creative thinking and technology into one connected process, with
              your business goals at the centre of every decision.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 /> People-first thinking
              </li>
              <li>
                <CheckCircle2 /> Clear, collaborative process
              </li>
              <li>
                <CheckCircle2 /> Design with a purpose
              </li>
              <li>
                <CheckCircle2 /> Technology that works hard
              </li>
            </ul>
            <Link className="text-link" to="/our-company">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-industries">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="INDUSTRY KNOW-HOW"
              title="Different industries. Different challenges. One thoughtful approach."
              copy="We start with the world your customers live in, then shape a digital experience that makes sense for them."
            />
          </Reveal>
          <IndustryGrid limit={6} />
          <div className="section-link">
            <Link className="text-link" to="/industries">
              Find your industry <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-work">
        <div className="container">
          <Reveal>
            <div className="heading-row">
              <SectionHeading
                kicker="SELECTED WORK"
                title="Good work speaks for itself."
                copy="A look at the kinds of brands and experiences we help bring to life."
              />
              <Link className="text-link desktop-link" to="/our-work">
                See all projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
          <ProjectGrid limit={6} />
          <div className="mobile-section-link">
            <Link className="text-link" to="/our-work">
              See all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-process">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="HOW WE WORK"
              title="A clear path from first thought to launch."
              copy="No mystery. No unnecessary complexity. Just a collaborative process designed to keep good work moving."
            />
          </Reveal>
          <Process />
        </div>
      </section>
      <section className="stats-section">
        <div className="container stats-layout">
          <div>
            <span className="eyebrow light">
              <i /> A LITTLE ABOUT US
            </span>
            <h2>
              Small details.
              <br />
              <span>Big-picture thinking.</span>
            </h2>
            <p>
              Since 2009, Light Speed Web has been helping brands make their mark through creative
              and digital work.
            </p>
          </div>
          <Stats />
        </div>
      </section>
      <CTA
        title="Have a good idea? Let's give it momentum."
        copy="Tell us what you're building, where you're headed and what success looks like. We'll take it from there."
      />
    </main>
  )
}
