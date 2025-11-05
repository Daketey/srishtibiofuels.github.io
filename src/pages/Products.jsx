import SEO from '../components/SEO'
import './Products.css'

export default function Products(){
  return (
    <>
      <SEO 
        title="Biomass Briquettes & Pellets Specifications | Srishiti Biofuels Products"
        description="Explore Srishiti Biofuels' biomass briquettes (4200-4700 kcal/kg) and pellets (4600-5000 kcal/kg). High calorific value, low moisture content, eco-friendly industrial fuel solutions. Contact us for specifications and pricing."
        keywords="biomass briquettes specifications, biomass pellets specifications, calorific value, industrial fuel, biofuel properties, ash content, moisture content, biomass density"
        canonical="https://srishitibiofuels.com/products"
      />
      <div className="products-page">
        <header className="page-header">
          <h1>Our Products</h1>
          <p className="subtitle">We offer two core product lines tailored for industrial and commercial energy needs.</p>
        </header>

        <section className="product-section" aria-labelledby="briquettes-heading">
          <h2 id="briquettes-heading">Biofuel Briquettes: Efficient, Solid Biomass Fuel</h2>
          <div className="product-grid">
            <article className="spec-block">
              <p><strong>Description:</strong> Compressed biomass blocks with low moisture and consistent burn.</p>
              <table className="spec-table" role="table" aria-label="Biomass briquettes specifications">
                <caption className="sr-only">Technical specifications for biomass briquettes</caption>
                <tbody>
                  <tr><td>Calorific Value</td><td>~4200-4700 kcal/kg</td></tr>
                  <tr><td>Moisture Content</td><td>&lt;10%</td></tr>
                  <tr><td>Ash Content</td><td>&lt;5%</td></tr>
                  <tr><td>Density</td><td>~1.0-1.2 g/cm³</td></tr>
                  <tr><td>Size/Shape</td><td>Custom (rectangular/round)</td></tr>
                </tbody>
              </table>
              <div className="spec-cta"><a className="btn" href="/contact" aria-label="Inquire about biomass briquettes">Inquire Now</a></div>
            </article>
          </div>
        </section>

        <section className="product-section" aria-labelledby="pellets-heading">
          <h2 id="pellets-heading">Biofuel Pellets: Compact, High-Density Energy</h2>
          <div className="product-grid">
            <article className="spec-block">
              <p><strong>Description:</strong> Small, uniform pellets designed for automated systems and high-efficiency combustion.</p>
              <table className="spec-table" role="table" aria-label="Biomass pellets specifications">
                <caption className="sr-only">Technical specifications for biomass pellets</caption>
                <tbody>
                  <tr><td>Calorific Value</td><td>~4600-5000 kcal/kg</td></tr>
                  <tr><td>Moisture Content</td><td>&lt;8%</td></tr>
                  <tr><td>Ash Content</td><td>&lt;3%</td></tr>
                  <tr><td>Density</td><td>~1.2-1.4 g/cm³</td></tr>
                  <tr><td>Size/Shape</td><td>6-8mm round pellets (standard)</td></tr>
                </tbody>
              </table>
              <div className="spec-cta"><a className="btn" href="/contact" aria-label="Inquire about biomass pellets">Inquire Now</a></div>
            </article>
          </div>
        </section>

        <section className="process-overview" aria-labelledby="process-heading">
          <h2 id="process-heading">Process Overview</h2>
          <p>Raw biomass → Drying → Grinding → Compacting/Extruding → Cooling → Packaging</p>
        </section>
      </div>
    </>
  )
}
