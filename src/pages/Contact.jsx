import SEO from '../components/SEO'

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Srishti Biofuels — Get Quote for Biomass Briquettes & Pellets"
        description="Contact Srishti Biofuels for sustainable biomass energy solutions. Get quotes for briquettes and pellets, schedule consultations, or inquire about our eco-friendly industrial fuel products. Quick response within 24 hours."
        keywords="contact srishti biofuels, biomass quote, biofuel inquiry, sustainable energy consultation, biomass briquettes supplier contact, pellets manufacturer"
        canonical="https://srishtibiofuels.in/contact"
      />
      <div className="contact-page">
        <header className="page-header">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in Touch for Sustainable Energy Solutions</p>
        </header>

      <div className="contact-content">
        <div className="contact-form-section">
          <form className="contact-form" aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" placeholder="Your name" required aria-required="true" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Your email" required aria-required="true" />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Your company name" />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" placeholder="Your location" />
            </div>

            <div className="form-group">
              <label htmlFor="interest">I'm interested in</label>
              <select id="interest" name="interest">
                <option value="">Select an option</option>
                <option value="briquettes">Biofuel Briquettes</option>
                <option value="pellets">Biofuel Pellets</option>
                <option value="both">Both Products</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your requirements" required aria-required="true"></textarea>
            </div>

            <button type="submit" className="btn btn-large">Send Message</button>
          </form>
        </div>

        <aside className="contact-info" aria-label="Contact information">
          <div className="info-card">
            <h3>Office Location</h3>
            <p>Raipur, Chhattisgarh, 492001</p>
          </div>

          <div className="info-card">
            <h3>Contact Details</h3>
            <p>
              Email: srishtibiofuels@gmail.com<br />
              Phone: +91-9111109484<br />
            </p>
          </div>

          <div className="info-card">
            <h3>Quick Response</h3>
            <p>We typically respond to inquiries within 24 hours during business days.</p>
          </div>
        </aside>
      </div>
      </div>
    </>
  )
}
