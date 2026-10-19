import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2, Clock, MapPinned } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <main>
      <section className="page-hero compact">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">
              <i /> START A PROJECT
            </span>
            <h1>
              Let's turn your next idea into <span>forward motion.</span>
            </h1>
            <p>
              Tell us a little about your business and what you'd like to achieve. We'll start with
              a conversation.
            </p>

            <div className="contact-details">
              <a href="tel:+16475007155">
                <span>
                  <Phone size={18} />
                </span>
                <div>
                  <small>GIVE US A CALL</small>
                  <strong>(647) 500-7155</strong>
                </div>
              </a>
              <a href="mailto:info@lightspeedweb.ca">
                <span>
                  <Mail size={18} />
                </span>
                <div>
                  <small>SEND AN EMAIL</small>
                  <strong>info@lightspeedweb.ca</strong>
                </div>
              </a>
              <div>
                <span>
                  <Clock size={18} />
                </span>
                <div>
                  <small>BUSINESS HOURS</small>
                  <strong>Monday – Friday, 9 AM – 5 PM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div className="success-state">
                <CheckCircle2 size={42} />
                <h2>Thanks for reaching out.</h2>
                <p>
                  Your message has been prepared. Connect this form to your preferred email service
                  to receive submissions.
                </p>
                <button className="button button-primary" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <span className="eyebrow">
                  <i /> TELL US ABOUT IT
                </span>
                <h2>What are you working on?</h2>
                <p>Share the basics. We'll take it from there.</p>
                <div className="form-grid">
                  <label>
                    Your name
                    <input required name="name" placeholder="Jane Smith" />
                  </label>
                  <label>
                    Email address
                    <input required type="email" name="email" placeholder="jane@company.com" />
                  </label>
                  <label>
                    Phone number
                    <input name="phone" placeholder="(000) 000-0000" />
                  </label>
                  <label>
                    What do you need?
                    <select name="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Website development</option>
                      <option>Digital marketing</option>
                      <option>E-commerce</option>
                      <option>CRM automation</option>
                      <option>Video production</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label className="full">
                    Tell us about your project
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="A little about your goals, timeline and what success looks like..."
                    />
                  </label>
                </div>
                <button className="button button-primary" type="submit">
                  Send project enquiry <ArrowUpRight size={17} />
                </button>
                <small className="form-note">
                  Demo form: submissions are not sent to a server yet.
                </small>
              </form>
            )}
          </div>

          <div className="contact-addresses">
            <h3>
              <MapPinned size={19} /> Our offices
            </h3>
            <div className="office-address">
              <span className="office-flag">🇨🇦</span>
              <div>
                <strong>Canada</strong>
                <p>
                  77 City Centre Drive, East Tower, Suite 501
                  <br />
                  Mississauga, ON, L5B 1M5
                </p>
              </div>
            </div>
            <div className="office-address">
              <span className="office-flag">🇮🇳</span>
              <div>
                <strong>India</strong>
                <p>
                  No. 97, Kalyan Tower, East Lokamanya St, RS Puram
                  <br />
                  Coimbatore, TN - 641 002
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
