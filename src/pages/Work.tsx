import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CTA, ProjectGrid, Reveal, SectionHeading } from '../components/Sections'
import { projects } from '../data'
export default function Work() {
  const filters = ['All', ...Array.from(new Set(projects.map((p) => p.type)))]
  const [active, setActive] = useState('All')
  const shown = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.type === active)),
    [active],
  )
  return (
    <main>
      <section className="page-hero compact">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> SELECTED PROJECTS
            </span>
            <h1>
              Good work is more than a pretty <span>first impression.</span>
            </h1>
            <p>
              We help brands bring ideas to life through digital experiences designed to connect,
              communicate and make a difference.
            </p>
          </div>
          <div className="page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85"
              alt="Web design project on a desktop"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="OUR WORK"
              title="A selection of work across industries."
              copy="Explore a sample of the brands and sectors represented in our portfolio."
            />
          </Reveal>
          <div className="filter-row">
            {filters.map((f) => (
              <button
                className={active === f ? 'filter active' : 'filter'}
                key={f}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {shown.map((p, i) => (
              <Reveal key={p.name} className={`project-card project-${i % 3}`}>
                <div className="project-image">
                  <img src={p.image} alt={`${p.name} project visual`} loading="lazy" />
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
        </div>
      </section>
      <CTA
        title="Your project could be next."
        copy="Have a brief, a challenge or just the start of an idea? Let's talk."
      />
    </main>
  )
}
