import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight, Sparkles, Phone } from 'lucide-react'
import { logo, services, industries } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<'services' | 'industries' | null>(null)
  const close = () => {
    setOpen(false)
    setMenu(null)
  }
  const bannerMessages = [
    <>
      Strategy, design and technology — <strong>working together.</strong>
    </>,
    <>
      Ready for your next big move? <strong>Let’s build it.</strong>
    </>,
    <>
      Thoughtful digital experiences. <strong>Real business momentum.</strong>
    </>,
    <>
      Your next chapter starts with <strong>a good conversation.</strong>
    </>,
  ]
  const [bannerIndex, setBannerIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(
      () => setBannerIndex((current) => (current + 1) % bannerMessages.length),
      3200,
    )
    return () => window.clearInterval(timer)
  }, [])
  return (
    <header className="site-header">
      <div className="announcement-banner" aria-live="polite">
        <div className="announcement-track">
          <span className="banner-spark">
            <Sparkles size={16} />
          </span>
          <div className="announcement-message" key={bannerIndex}>
            {bannerMessages[bannerIndex]}
          </div>
          <div className="announcement-dots" aria-hidden="true">
            {bannerMessages.map((_, index) => (
              <span key={index} className={index === bannerIndex ? 'active' : ''} />
            ))}
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close}>
          <img src={logo} alt="Light Speed Web" />
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          <NavLink to="/" onClick={close}>
            Home
          </NavLink>
          <NavLink to="/our-company" onClick={close}>
            Our Company
          </NavLink>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setMenu('services')}
            onMouseLeave={() => setMenu(null)}
          >
            <button onClick={() => setMenu(menu === 'services' ? null : 'services')}>
              Services <ChevronDown size={14} />
            </button>
            {menu === 'services' && (
              <div className="dropdown-panel">
                <div className="dropdown-intro">
                  <span className="eyebrow">WHAT WE DO</span>
                  <h3>Build what’s next.</h3>
                  <p>Creative, strategy and technology working together.</p>
                </div>
                <div className="dropdown-links">
                  {services.slice(0, 8).map((s) => (
                    <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}>
                      {s.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setMenu('industries')}
            onMouseLeave={() => setMenu(null)}
          >
            <button onClick={() => setMenu(menu === 'industries' ? null : 'industries')}>
              Industries <ChevronDown size={14} />
            </button>
            {menu === 'industries' && (
              <div className="dropdown-panel industry-menu">
                <div className="dropdown-intro">
                  <span className="eyebrow">INDUSTRY SOLUTIONS</span>
                  <h3>Built around your world.</h3>
                  <p>Relevant strategies for the way your customers search.</p>
                </div>
                <div className="dropdown-links">
                  {industries.map((s) => (
                    <Link key={s.slug} to={`/industries/${s.slug}`} onClick={close}>
                      {s.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                  <Link to="/industries" onClick={close}>
                    All industries <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/our-work" onClick={close}>
            Our Work
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
          <a
            className="nav-phone"
            href="tel:+16475007155"
            aria-label="Call Light Speed Web at (647) 500-7155"
            onClick={close}
          >
            <Phone size={16} aria-hidden="true" />
            <span>(647) 500-7155</span>
          </a>
          <Link className="nav-cta" to="/contact" onClick={close}>
            Start a project <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
