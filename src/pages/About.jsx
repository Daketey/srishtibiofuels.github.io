import SEO from '../components/SEO'
import './About.css'

export default function About() {
  return (
    <>
      <SEO 
        title="About Srishiti Biofuels — Leading Biomass Energy Manufacturer | Our Mission"
        description="Learn about Srishiti Biofuels, founded in 2020 as India's leading sustainable biomass manufacturer. Discover our mission, values, process, and commitment to environmental stewardship and renewable energy innovation."
        keywords="about srishiti biofuels, biomass manufacturer, renewable energy company, sustainable fuel producer, biofuel company India, eco-friendly energy solutions"
        canonical="https://srishitibiofuels.com/about"
      />
      <div className="about-page">
        <header className="page-header">
          <h1>About Srishiti Biofuels</h1>
          <p className="subtitle">Leading the Way in Sustainable Energy Solutions</p>
        </header>

      <section className="mission-section" aria-labelledby="mission-heading">
        <h2 id="mission-heading">Our Mission</h2>
        <p className="mission-text">
          Founded in 2020, Srishiti Biofuels is at the forefront of India's renewable energy revolution. 
          We transform agricultural and forest waste into high-performance, sustainable fuel solutions, 
          helping businesses reduce their carbon footprint while maximizing energy efficiency. Our 
          commitment to innovation and sustainability drives us to continuously improve our processes 
          and products.
        </p>
      </section>

      <section className="values-section" aria-labelledby="values-heading">
        <h2 id="values-heading">Our Core Values</h2>
        <div className="values-timeline">
          <div className="timeline-line"></div>
          <div className="value-card left">
            <div className="value-content">
              <h3>Sustainability</h3>
              <p>Environmental stewardship is at the heart of everything we do, from sourcing to delivery.</p>
            </div>
          </div>
          <div className="value-card right">
            <div className="value-content">
              <h3>Innovation</h3>
              <p>We constantly explore new technologies to enhance our products and reduce environmental impact.</p>
            </div>
          </div>
          <div className="value-card left">
            <div className="value-content">
              <h3>Quality</h3>
              <p>Our rigorous quality controls ensure consistent, high-performance products every time.</p>
            </div>
          </div>
          <div className="value-card right">
            <div className="value-content">
              <h3>Partnership</h3>
              <p>We build lasting relationships with clients, suppliers, and communities we serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sourcing</h3>
            <p>Responsible collection of agricultural waste from local farmers</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Processing</h3>
            <p>Advanced densification for maximum energy efficiency</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Quality Control</h3>
            <p>Comprehensive testing at our state-of-the-art facility</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Distribution</h3>
            <p>Timely delivery through our optimized logistics network</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Pranav Kumar Mahapatra</h3>
            <p className="title">Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3>Somya Mahapatra</h3>
            <p className="title">Technical Director</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Partner With Us</h2>
        <p>Discover how our sustainable biofuel solutions can transform your energy needs.</p>
        <a href="/contact" className="btn-large" aria-label="Schedule consultation with Srishiti Biofuels">Schedule a Consultation</a>
      </section>
      </div>
    </>
  )
}