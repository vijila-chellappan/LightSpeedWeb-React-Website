import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'
import { logo, services, industries } from '../data'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Light Speed Web" />
          <p>
            Marketing in motion. We bring strategy, design and technology together to help ambitious
            brands move forward.
          </p>
          <a className="footer-email" href="mailto:info@lightspeedweb.ca">
            Let's start a conversation <ArrowUpRight size={16} />
          </a>
          <div className="socials">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
        <div className="footer-col footer-contact">
          <h4>Connect with us</h4>
          <a href="mailto:info@lightspeedweb.ca">
            <Mail size={15} /> info@lightspeedweb.ca
          </a>
          <a href="tel:+16475007155">
            <Phone size={15} /> (647) 500-7155
          </a>
          <span>
            <MapPin size={15} /> Mississauga, Ontario
          </span>
          <span>
            <Clock size={15} /> Mon–Fri, 9 AM–5 PM
          </span>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/our-company">Our Company</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>What we do</h4>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <h4>Who we help</h4>
          {industries.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/industries/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Light Speed Web Inc. All rights reserved.</span>
        <div>
          <a href="#top">Back to top ↑</a>
          <span>Built for what’s next.</span>
        </div>
      </div>
    </footer>
  )
}
