import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function ProductAutoScrubber() {
  return (
    <>
      

{/* Gaming Gear Hero Section */}
<section style={{ background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
  <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '120px' }}>
    <div className="row align-items-center w-100">
      
      {/* Left Column: Details */}
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
        <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
          AUTO SCRUBBER
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', marginBottom: '30px' }}>
          High Performance Commercial Floor Cleaning Machine
        </p>
        
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '450px', marginBottom: '30px' }}>
          The Auto Scrubber (Walk-Behind Scrubber) is an indispensable tool for maintaining medium to large commercial spaces. It dispenses solution, scrubs, and immediately vacuums up the dirty water — all in a single pass.
        </p>
        
        <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff6b00', marginBottom: '30px' }}>
          Available for Sale & Service
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ff6b00', color: '#000', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
            <i className="fas fa-shopping-cart"></i> Get a Quote
          </a>
          <a href="#features" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
            <i className="fas fa-info-circle"></i> More Details
          </a>
        </div>
      </div>

      {/* Right Column: Visuals & Giant Text */}
      <div className="col-lg-6 position-relative wow fadeInRight" data-wow-delay=".4s" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Giant Vertical Background Text */}
        <div style={{ 
          position: 'absolute', 
          right: '-50px', 
          top: '50%', 
          transform: 'translateY(-50%) rotate(90deg)', 
          fontSize: 'clamp(150px, 15vw, 250px)', 
          fontWeight: 900, 
          color: 'rgba(0, 87, 255, 0.3)', 
          lineHeight: 1, 
          whiteSpace: 'nowrap',
          zIndex: 1,
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          CLEANTECH
        </div>

        {/* Product Image */}
        <img src="/assets/img/service/new-auto-scrubber.png" alt="Auto Scrubber" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', maxHeight: '500px', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))', borderRadius: '12px' }} />
      </div>
      
    </div>
  </div>

  {/* Bottom "Explore Products" Transition section */}
  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingBottom: '40px', marginTop: 'auto' }}>
    <div style={{ 
      position: 'absolute', 
      left: '50%', 
      bottom: '10px', 
      transform: 'translateX(-50%)', 
      fontSize: 'clamp(60px, 10vw, 120px)', 
      fontWeight: 900, 
      color: 'rgba(255,255,255,0.02)', 
      whiteSpace: 'nowrap',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      PRODUCTS
    </div>
    <div style={{ position: 'relative', zIndex: 2 }}>
      <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500, margin: 0, paddingBottom: '10px' }}>Which type of machine are you looking for?</p>
      <a href="/sales-service" style={{ color: '#00d4aa', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>View more <i className="fas fa-arrow-right"></i></a>
    </div>
  </div>
</section>

{/* Target for More Details link */}
<div id="features"></div>

{/*  Key Features  */}
<section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
    <div className="container">
        <div className="row justify-content-center mb-50">
            <div className="col-lg-8 text-center">
                <span className="section-badge">Product Highlights</span>
                <h2 className="ct-h2">Key Features & Benefits</h2>
                <p style={{ color: '#aaa' }}>Why the Auto Scrubber is the preferred floor cleaning machine across Chennai's commercial sector.</p>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>3x Faster Cleaning</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Cleans up to 3× faster than manual mopping, covering large areas quickly.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Instant Floor Drying</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Powerful suction leaves floors completely dry, minimising slip-and-fall risks.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Deep Scrubbing</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Rotating brushes remove stubborn grime that traditional mops simply leave behind.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Eco-Friendly</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Uses less water and fewer chemicals compared to manual methods — better for the environment.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/*  Specifications  */}
<section className="ct-section ct-bg-dark-2">
    <div className="container">
        <div className="row g-5 align-items-start">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                <span className="section-badge">Technical Details</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Product Specifications</h2>
                <table className="spec-table" style={{ color: "#ddd", width: "100%", borderCollapse: "collapse" }}>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Machine Type</td><td style={{ padding: "12px 8px" }}>Walk-Behind Auto Scrubber</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Cleaning Width</td><td style={{ padding: "12px 8px" }}>500 mm – 650 mm</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Tank Capacity</td><td style={{ padding: "12px 8px" }}>45 – 85 Litres</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Power Source</td><td style={{ padding: "12px 8px" }}>Battery / Electric</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Coverage Rate</td><td style={{ padding: "12px 8px" }}>Up to 2,500 m²/hr</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Floor Types</td><td style={{ padding: "12px 8px" }}>Concrete, Tile, Marble, Vinyl, Epoxy</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Noise Level</td><td style={{ padding: "12px 8px" }}>&lt; 70 dB</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Available As</td><td style={{ padding: "12px 8px" }}>Sale / AMC / Service</td></tr>
                </table>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                <span className="section-badge">Ideal For</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Usage & Applications</h2>
                <ul className="premium-check-list">
                    <li><strong>Shopping Malls & Retail Stores</strong> – Maintain spotless floors during and after business hours.</li>
                    <li><strong>Hospitals & Healthcare Facilities</strong> – Achieve hygiene standards with fast, dry cleaning.</li>
                    <li><strong>Schools & Colleges</strong> – Quickly clean long corridors and canteens between sessions.</li>
                    <li><strong>Hotels & Hospitality</strong> – Keep lobby and restaurant floors gleaming throughout the day.</li>
                    <li><strong>Commercial Offices</strong> – Ideal for open-plan offices larger than 6,000 sq.ft.</li>
                    <li><strong>Warehouses & Factories</strong> – Handle daily cleaning of production and storage floors.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

{/*  Why Rent vs Buy  */}
<section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
    <div className="container">
        <div className="row justify-content-center mb-45">
            <div className="col-lg-8 text-center">
                <span className="section-badge">Flexible Options</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Sales & Service Options</h2>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Purchase</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Own the machine outright with full manufacturer warranty and genuine spare parts support from Cleantech.</p>
                </div>
            </div>
            
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>AMC / Service</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Keep your existing auto scrubber running at peak performance with our Annual Maintenance Contract.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/*  CTA  */}
<section className="ct-section ct-bg-dark">
    <div className="container">
        <div className="cta-strip wow fadeInUp" data-wow-delay=".2s">
            <div className="row align-items-center">
                <div className="col-lg-8 mb-4 mb-lg-0">
                    <h2 className="ct-h2" style={{ fontSize: "28px" }}>Ready to Get Your Auto Scrubber?</h2>
                    <p style={{ color: '#ccc', fontSize: '16px', margin: '0' }}>Contact Cleantech today for pricing, service plans, and a free demo across Chennai.</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <a href="/contact" className="ct-btn ct-btn-orange">Contact Us Now</a>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  );
}
