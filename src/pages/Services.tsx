import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CTA, Reveal, SectionHeading, ServiceGrid } from '../components/Sections'
export default function Services() {
  return (
    <main>
      <section className="page-hero compact">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> WHAT WE DO
            </span>
            <h1>
              Strategy, creativity and technology—<span>working together.</span>
            </h1>
            <p>
              From your first idea to the details that make an experience work, we help connect the
              dots between your business and the people you want to reach.
            </p>
            <Link className="button button-primary" to="/contact">
              Find your next step <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85"
              alt="Website development workspace"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="OUR SERVICES"
              title="Good work, connected."
              copy="Choose a starting point. We'll help you see how it fits into the bigger picture."
            />
          </Reveal>
          <ServiceGrid />
        </div>
      </section>
      <CTA />
    </main>
  )
}
