import { useParams, Link } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Compass,
  ClipboardCheck,
  Lightbulb,
  Rocket,
} from 'lucide-react'
import { services } from '../data'
import { CTA, Reveal, SectionHeading } from '../components/Sections'
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service)
    return (
      <main className="not-found">
        <div className="container">
          <h1>Service coming into focus.</h1>
          <p>Explore our services or contact us to discuss what you need.</p>
          <Link className="button button-primary" to="/services">
            All services
          </Link>
        </div>
      </main>
    )
  const steps = [
    [
      'Understand the goal',
      'We learn about your business, audience and the outcomes you want to achieve.',
    ],
    [
      'Shape the approach',
      'We define the priorities, experience and plan that best fit your needs.',
    ],
    [
      'Build with purpose',
      'We bring the work to life with attention to detail, usability and performance.',
    ],
    ['Learn and improve', 'We use feedback and results to identify the next opportunity.'],
  ]
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> OUR SERVICES
            </span>
            <h1>
              {service.name} for a business ready to <span>move forward.</span>
            </h1>
            <p>
              {service.desc} We combine clear thinking, thoughtful execution and a focus on what
              matters to your customers.
            </p>
            <Link className="button button-primary" to="/contact">
              Discuss your project <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="page-hero-image">
            <img src={service.image} alt={service.name} />
            <span className="image-caption">{service.name} · Light Speed Web</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              kicker="OUR APPROACH"
              title="The right work starts with the right questions."
              copy="Every project is different. We shape the details around your goals rather than forcing your business into a template."
            />
          </Reveal>
          <div className="detail-steps">
            {steps.map(([t, d], i) => (
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
      <section className="section soft-section">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">
              <i /> BUILT AROUND YOU
            </span>
            <h2>
              One connected team.
              <br />
              <span>One clear direction.</span>
            </h2>
            <p>
              We bring the right blend of creative, strategic and technical thinking to your
              project. The result should feel clear to use, true to your brand and ready to grow
              with you.
            </p>
            <Link className="text-link" to="/our-company">
              Meet Light Speed Web <ArrowUpRight size={16} />
            </Link>
          </div>
          <img
            className="rounded-photo"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
            alt="Team collaborating on a project"
          />
        </div>
      </section>
      <CTA
        title={`Let's talk about ${service.name.toLowerCase()}.`}
        copy="Tell us what you're trying to achieve and we'll help you find the right next step."
      />
    </main>
  )
}
