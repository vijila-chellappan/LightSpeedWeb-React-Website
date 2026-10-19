import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { CTA, IndustryGrid, Reveal, SectionHeading } from '../components/Sections'
export default function Industries() {
  return (
    <main>
      <section className="page-hero compact">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> INDUSTRY SOLUTIONS
            </span>
            <h1>
              Marketing built around the way <span>your customers search.</span>
            </h1>
            <p>
              Your industry shapes what customers need, what earns their trust and what moves them
              to act. We build digital experiences around those realities.
            </p>
            <Link className="button button-primary" to="/contact">
              Talk about your industry <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Team planning a digital project"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="FIND YOUR INDUSTRY"
              title="Built around your customers, not a template."
              copy="Explore industry solutions and see how a connected digital strategy can support your next move."
            />
          </Reveal>
          <IndustryGrid />
        </div>
      </section>
      <CTA />
    </main>
  )
}
