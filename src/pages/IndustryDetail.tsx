import { useParams, Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ClipboardCheck,
  Lightbulb,
  Rocket,
} from 'lucide-react'
import { industries } from '../data'
import { Benefits, CTA, Reveal, SectionHeading } from '../components/Sections'
export default function IndustryDetail() {
  const { slug } = useParams()
  const item = industries.find((i) => i.slug === slug)
  if (!item)
    return (
      <main className="not-found">
        <div className="container">
          <h1>Let's find your industry.</h1>
          <Link className="button button-primary" to="/industries">
            Browse industries
          </Link>
        </div>
      </main>
    )
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> INDUSTRY SOLUTIONS
            </span>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            <Link className="button button-primary" to="/contact">
              Talk about your business <ArrowUpRight size={17} />
            </Link>
            <div className="industry-proof">
              <CheckCircle2 size={17} /> Practical strategy. Clear communication. Thoughtful
              execution.
            </div>
          </div>
          <div className="page-hero-image">
            <img src={item.image} alt={item.name} />
            <span className="image-caption">Digital solutions for {item.name.toLowerCase()}</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="WHAT MATTERS IN YOUR INDUSTRY"
              title="Make the next step easier for your customers."
              copy="A strong digital presence meets people where they are and gives them the clarity to take action."
            />
          </Reveal>
          <div className="insight-grid">
            {item.points.map(([title, copy], i) => (
              <Reveal key={title} className="insight-card">
                <span className="insight-icon">
                  {
                    [<Compass size={21} />, <ClipboardCheck size={21} />, <Lightbulb size={21} />][
                      i % 3
                    ]
                  }
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container industry-services-layout">
          <div>
            <span className="eyebrow">
              <i /> HOW WE CAN HELP
            </span>
            <h2>Connected support for your next stage.</h2>
            <p>We combine the right services around your goals, audience and customer journey.</p>
            <Benefits items={item.services} />
            <Link className="button button-primary" to="/contact">
              Build your plan <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="industry-side-image">
            <img src={item.image} alt="" />
            <div className="image-note">
              <strong>Clarity first.</strong>
              <span>Then a plan that fits your business.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="OUR PROCESS"
              title="A clear plan, built with you."
              copy="We keep the work collaborative, focused and flexible as your needs evolve."
            />
          </Reveal>
          <div className="detail-steps">
            {[
              [
                'Discover your goals',
                'Understand your audience, business priorities and what success looks like.',
              ],
              [
                'Choose the right mix',
                'Prioritise the services that will make the most meaningful difference.',
              ],
              ['Create and launch', 'Bring the plan to life with a consistent brand experience.'],
              ['Keep improving', 'Learn, refine and make the next opportunity count.'],
            ].map(([t, d], i) => (
              <Reveal key={t} className="detail-step">
                <span className="detail-step-icon">
                  {
                    [
                      <Compass size={20} />,
                      <ClipboardCheck size={20} />,
                      <Lightbulb size={20} />,
                      <Rocket size={20} />,
                    ][i]
                  }
                </span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <CheckCircle2 size={21} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title={`Ready to grow your ${item.name.toLowerCase()} business?`}
        copy="Let's talk about your goals and create a digital plan that fits."
      />
    </main>
  )
}
