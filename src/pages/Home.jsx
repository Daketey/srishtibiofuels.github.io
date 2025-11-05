import briquettesImg from '../assets/briquettes.png'
import pelletsImg from '../assets/pellets.jpg'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import './Home.css'

export default function Home(){
  const [currentImageSlide, setCurrentImageSlide] = useState(0)

  // Placeholder images for the image carousel
  const carouselImages = [
    'https://www.thisiseco.co.uk/wp-content/uploads/2020/11/biomass-1.png',
    'https://jaykhodiyar.com/wp-content/uploads/2023/04/What-is-briquetting-press.webp',
    'https://www.charcoalbriquettemachine.com/wp-content/uploads/2018/08/Biomass-Briquette-Plant.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2023/3/293125375/YE/TA/KF/1418085/biomass-briquettes-pellets-machines.jpg'
  ]

  // Auto-scroll effect for image carousel
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(imageTimer)
  }, [carouselImages.length])

  return (
    <>
      <SEO 
        title="Srishiti Biofuels — Sustainable Biomass Briquettes & Pellets | Eco-Friendly Energy Solutions"
        description="Transform your energy needs with Srishiti Biofuels' premium biomass briquettes and pellets. 40% lower carbon emissions, 100% renewable materials, 25% cost savings. Contact us for sustainable industrial heating solutions."
        keywords="biomass briquettes, biomass pellets, biofuels, renewable energy, sustainable energy, eco-friendly fuel, industrial heating, carbon emissions reduction, agricultural waste fuel, forest waste fuel"
        canonical="https://srishitibiofuels.com/"
      />
      <div>
        <section className="hero" aria-label="Hero section">
          <div className="overlay" />
          <div className="content">
            <h1>Powering a Greener<br />Tomorrow.</h1>
            <p>Sustainable Biofuel Briquettes & Pellets for Efficient, Eco-Friendly Energy.</p>
            <a href="/products" className="btn" aria-label="Explore our biomass products">EXPLORE OUR PRODUCTS</a>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="intro-heading">
          <div className="container">
            <p className="intro-text">At Srishiti Biofuels, we transform agricultural and forest waste into high-performance, renewable energy solutions, reducing carbon footprints and fostering a sustainable future.</p>
            
            <div className="key-features">
              <article className="feature">
                <span className="feature-icon" aria-hidden="true">🌿</span>
                <div>
                  <h3>Eco-Friendly Fuel</h3>
                  <p>Made from sustainable biomass with lower emissions and reduced waste.</p>
                </div>
              </article>
              <article className="feature">
                <span className="feature-icon" aria-hidden="true">🔥</span>
                <div>
                  <h3>High Calorific Value</h3>
                  <p>Consistent energy density for efficient combustion and stable heat output.</p>
                </div>
              </article>
              <article className="feature">
                <span className="feature-icon" aria-hidden="true">💰</span>
                <div>
                  <h3>Cost-Effective Solution</h3>
                  <p>Competitive pricing and lower handling costs compared to traditional fuels.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="image-carousel-section" aria-label="Biomass production facilities">
          <div className="image-carousel-container">
            <div className="image-carousel-track" style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}>
              {carouselImages.map((image, index) => (
                <div className="image-carousel-slide" key={index}>
                  <img 
                    src={image} 
                    alt={`Biomass briquette and pellet production facility ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="image-carousel-indicators" role="tablist" aria-label="Carousel navigation">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  role="tab"
                  aria-selected={currentImageSlide === index}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`indicator ${currentImageSlide === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="statistics-section" aria-labelledby="stats-heading">
          <h2 id="stats-heading">Impact Statistics</h2>
          <div className="statistics-grid">
            <article className="statistic-card">
              <div className="number" aria-label="40 percent">40%</div>
              <p>Lower Carbon Emissions</p>
            </article>
            <article className="statistic-card">
              <div className="number" aria-label="100 percent">100%</div>
              <p>Renewable Materials</p>
            </article>
            <article className="statistic-card">
              <div className="number" aria-label="25 percent">25%</div>
              <p>Cost Savings</p>
            </article>
          </div>
        </section>

        <section className="products-section" aria-labelledby="products-heading">
          <div className="container">
            <h2 id="products-heading">Our Products</h2>
            <div className="products-list">
              <article className="product-item">
                <div className="product-info">
                  <h3>Biomass Briquettes</h3>
                  <p>High-density briquettes ideal for industrial boilers and heating applications. Our briquettes provide consistent heat output and are perfect for large-scale industrial use.</p>
                  <a href="/products" className="btn" aria-label="View biomass briquettes specifications">View Specifications</a>
                </div>
                <div className="product-visual">
                  <img 
                    src={briquettesImg} 
                    alt="Biomass briquettes - cylindrical compressed biomass fuel" 
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
              </article>
              
              <article className="product-item">
                <div className="product-info">
                  <h3>Biomass Pellets</h3>
                  <p>Compact pellets designed for automated feeding systems and efficient energy delivery. Perfect for both industrial and commercial heating applications.</p>
                  <a href="/products" className="btn" aria-label="View biomass pellets specifications">View Specifications</a>
                </div>
                <div className="product-visual">
                  <img 
                    src={pelletsImg} 
                    alt="Biomass pellets - small cylindrical compressed biomass fuel" 
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-strip" aria-labelledby="cta-heading">
          <div>
            <strong id="cta-heading">Ready to make the switch to sustainable energy?</strong>
            <div style={{color:'#666'}}>Contact us for queries or quotes and our team will assist you.</div>
          </div>
          <div>
            <a className="btn" href="#contact" aria-label="Contact Srishiti Biofuels">CONTACT US</a>
          </div>
        </section>
      </div>
    </>
  )
}
