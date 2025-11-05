import SEO from '../components/SEO'
import './WhyBiofuels.css'

export default function WhyBiofuels() {
  return (
    <>
      <SEO 
        title="Why Choose Biofuels? Benefits of Biomass Energy | Srishiti Biofuels"
        description="Discover why biofuels are the smart choice: 80% lower CO2 emissions, 25% cost savings, 100% renewable. Learn about biomass benefits for industrial heating, ESG compliance, and sustainable energy solutions."
        keywords="why biofuels, biomass benefits, renewable energy advantages, carbon footprint reduction, biofuel cost savings, sustainable industrial fuel, ESG compliance, coal alternative"
        canonical="https://srishitibiofuels.com/why-biofuels"
      />
      <div className="why-biofuels-page">
        <header className="page-header">
          <h1>Why Choose Biofuels?</h1>
          <p className="subtitle">The Smart, Sustainable Energy Choice for Modern Industry</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">
            In an era of rising energy costs and environmental concerns, biofuels offer a proven, 
            cost-effective solution that benefits your bottom line while protecting our planet. 
            Join thousands of businesses worldwide that have already made the switch.
          </p>
        </section>

        <div className="benefits-grid">
          <article className="benefit-card">
            <div className="icon" aria-hidden="true">🌍</div>
            <h3>Dramatically Reduce Carbon Footprint</h3>
            <p>Cut CO₂ emissions by up to 80% compared to coal and traditional fossil fuels. Our biofuels are carbon-neutral, as they only release the carbon absorbed during plant growth.</p>
            <ul className="benefit-details">
              <li>Near-zero sulfur emissions</li>
              <li>Minimal particulate matter</li>
              <li>Helps meet ESG compliance goals</li>
            </ul>
          </article>

          <article className="benefit-card">
            <div className="icon" aria-hidden="true">💰</div>
            <h3>Proven Cost Savings</h3>
            <p>Save 15-30% on fuel costs while ensuring consistent, reliable energy supply. Lower transportation and storage costs compared to coal.</p>
            <ul className="benefit-details">
              <li>Stable, predictable pricing</li>
              <li>Reduced handling expenses</li>
              <li>Lower maintenance costs on equipment</li>
            </ul>
          </article>

          <article className="benefit-card">
            <div className="icon" aria-hidden="true">♻️</div>
            <h3>100% Renewable & Sustainable</h3>
            <p>Made entirely from agricultural and forest waste, our biofuels turn waste into energy while supporting local farmers and communities.</p>
            <ul className="benefit-details">
              <li>Reduces landfill waste</li>
              <li>Supports circular economy</li>
              <li>No deforestation or land clearance</li>
            </ul>
          </article>

          <article className="benefit-card">
            <div className="icon" aria-hidden="true">🔥</div>
            <h3>Superior Energy Efficiency</h3>
            <p>High calorific value (4000-4500 kcal/kg) ensures optimal combustion and consistent heat output for industrial applications.</p>
            <ul className="benefit-details">
              <li>Low moisture content (&lt;10%)</li>
              <li>High density for easy storage</li>
              <li>Uniform size for automated feeding</li>
            </ul>
          </article>

          <article className="benefit-card">
            <div className="icon" aria-hidden="true">⚙️</div>
            <h3>Easy Integration</h3>
            <p>Compatible with existing boiler systems with minimal modifications. Seamless transition from conventional fuels.</p>
            <ul className="benefit-details">
              <li>Works with standard equipment</li>
              <li>Quick conversion process</li>
              <li>Full technical support provided</li>
            </ul>
          </article>

          <article className="benefit-card">
            <div className="icon" aria-hidden="true">🏆</div>
            <h3>Regulatory Compliance</h3>
            <p>Meet and exceed environmental regulations while positioning your company as an industry leader in sustainability.</p>
            <ul className="benefit-details">
              <li>Supports net-zero targets</li>
              <li>Qualifies for green certifications</li>
              <li>Enhances corporate reputation</li>
            </ul>
          </article>
        </div>

      <section className="stats-section">
        <h2>Real-World Impact</h2>
        <p className="stats-intro">Data-driven results from businesses that have made the switch</p>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="number">80%</div>
            <p className="stat-label">Lower CO₂ Emissions</p>
            <span className="stat-detail">vs. traditional coal</span>
          </div>
          <div className="stat-card">
            <div className="number">100%</div>
            <p className="stat-label">Renewable Materials</p>
            <span className="stat-detail">agricultural waste only</span>
          </div>
          <div className="stat-card">
            <div className="number">25%</div>
            <p className="stat-label">Average Cost Savings</p>
            <span className="stat-detail">on annual fuel expenses</span>
          </div>
          <div className="stat-card">
            <div className="number">4500</div>
            <p className="stat-label">kcal/kg Energy Value</p>
            <span className="stat-detail">high calorific output</span>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <h2>Biofuels vs. Traditional Fuels</h2>
        <div className="comparison-table">
          <div className="comparison-header">
            <div></div>
            <div className="highlight">Biofuels (Our Products)</div>
            <div>Coal</div>
            <div>Natural Gas</div>
          </div>
          <div className="comparison-row">
            <div className="row-label">Carbon Emissions</div>
            <div className="highlight">80% Lower ✓</div>
            <div>Very High ✗</div>
            <div>Moderate ✗</div>
          </div>
          <div className="comparison-row">
            <div className="row-label">Renewable</div>
            <div className="highlight">100% ✓</div>
            <div>Non-renewable ✗</div>
            <div>Non-renewable ✗</div>
          </div>
          <div className="comparison-row">
            <div className="row-label">Cost Stability</div>
            <div className="highlight">Stable ✓</div>
            <div>Volatile</div>
            <div>Highly Volatile</div>
          </div>
          <div className="comparison-row">
            <div className="row-label">Ash Content</div>
            <div className="highlight">2-5% ✓</div>
            <div>15-40%</div>
            <div>Minimal</div>
          </div>
          <div className="comparison-row">
            <div className="row-label">Storage Requirements</div>
            <div className="highlight">Simple ✓</div>
            <div>Large Space</div>
            <div>Complex/Pressurized</div>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry-item">
            <h4>🏭 Manufacturing</h4>
            <p>Power your production lines with clean, efficient energy</p>
          </div>
          <div className="industry-item">
            <h4>🏨 Hospitality</h4>
            <p>Sustainable heating solutions for hotels and resorts</p>
          </div>
          <div className="industry-item">
            <h4>🍽️ Food Processing</h4>
            <p>Reliable heat for processing and packaging facilities</p>
          </div>
          <div className="industry-item">
            <h4>🧪 Pharmaceuticals</h4>
            <p>Clean energy for sensitive manufacturing environments</p>
          </div>
          <div className="industry-item">
            <h4>📜 Paper & Pulp</h4>
            <p>High-efficiency fuel for continuous operations</p>
          </div>
          <div className="industry-item">
            <h4>🏗️ Construction Materials</h4>
            <p>Powerful heating for cement, brick, and tile production</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Switching to Srishiti Biofuels reduced our energy costs by 28% while helping us achieve our carbon neutrality goals. The transition was seamless."</p>
            <p className="testimonial-author">— Manufacturing Director, Leading Textile Company</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The consistent quality and reliable supply have made biofuels our primary energy source. Our boiler efficiency has actually improved."</p>
            <p className="testimonial-author">— Operations Manager, Food Processing Plant</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Not only are we saving money, but our ESG ratings have improved significantly. It's a win-win for business and environment."</p>
            <p className="testimonial-author">— Sustainability Officer, Pharmaceutical Company</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to make the switch to sustainable energy?</h2>
            <p>Contact us for queries or quotes and our team will assist you.</p>
          </div>
          <div className="cta-button">
            <a href="/contact" className="btn btn-large">CONTACT US</a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}