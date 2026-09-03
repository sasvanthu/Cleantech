import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function ProductRideOnScrubber() {
  return (
    <>
      

{/* Gaming Gear Hero Section */}
<section style={{ background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
  <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '120px' }}>
    <div className="row align-items-center w-100">
      
      {/* Left Column: Details */}
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
          RIDE-ON SCRUBBER
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', marginBottom: '30px' }}>
          Heavy-Duty Industrial Floor Cleaning Machine
        </p>
        
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '450px', marginBottom: '30px' }}>
          The Ride-On Scrubber is engineered for the most demanding large-scale floor cleaning tasks. Operators sit comfortably while navigating massive floor areas, completing in hours what would take a full team days.
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
        <img src="/assets/img/service/new-ride-on-scrubber.png" alt="Ride-On Scrubber Machine" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', maxHeight: '500px', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))', borderRadius: '12px' }} />
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
                <span className="section-badge">Why Choose Ride-On</span>
                <h2 className="ct-h2">Key Features & Benefits</h2>
                <p style={{ color: '#aaa' }}>Designed for maximum productivity across the largest facilities in Chennai.</p>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Maximum Coverage</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Covers vast square footage in a fraction of the time, dramatically lowering labour costs.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Operator Comfort</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Ergonomic seating and intuitive controls reduce fatigue during long cleaning shifts.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Extended Operation</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Large-capacity batteries and tanks mean fewer interruptions during a full shift.</p>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>Lower Labour Costs</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>One operator replaces an entire manual cleaning team — significant operational savings.</p>
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
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Machine Type</td><td style={{ padding: "12px 8px" }}>Ride-On Scrubber Dryer</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Cleaning Width</td><td style={{ padding: "12px 8px" }}>700 mm – 1,200 mm</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Tank Capacity</td><td style={{ padding: "12px 8px" }}>150 – 300 Litres</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Power Source</td><td style={{ padding: "12px 8px" }}>Battery / LPG</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Coverage Rate</td><td style={{ padding: "12px 8px" }}>Up to 8,000 m²/hr</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Floor Types</td><td style={{ padding: "12px 8px" }}>Concrete, Epoxy, Granite, Warehouse Floors</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Operator Position</td><td style={{ padding: "12px 8px" }}>Seated Ride-On</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Available As</td><td style={{ padding: "12px 8px" }}>Sale / AMC / Service</td></tr>
                </table>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                <span className="section-badge">Where It Works Best</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Usage & Applications</h2>
                <ul className="premium-check-list">
                    <li><strong>Large Manufacturing Plants</strong> – Efficiently clean production floors without halting operations.</li>
                    <li><strong>Massive Warehouses & Logistics Hubs</strong> – Cover thousands of square feet per shift.</li>
                    <li><strong>Airport Terminals</strong> – Maintain gleaming floors across expansive passenger areas.</li>
                    <li><strong>Indoor Parking Facilities</strong> – Remove tyre marks, oil spills, and grime from parking decks.</li>
                    <li><strong>Exhibition & Convention Halls</strong> – Quick turnaround cleaning between events.</li>
                    <li><strong>Shopping Malls</strong> – Clean large atrium and food-court floors after closing hours.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

{/*  Buy/Rent/Service  */}
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
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Own the ride-on scrubber outright. Full warranty, genuine parts, and expert installation by Cleantech.</p>
                </div>
            </div>
            
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}>
                    <h6>AMC / Service</h6>
                    <p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Scheduled preventive maintenance and priority breakdown response under our AMC plan.</p>
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
                    <h2 className="ct-h2" style={{ fontSize: "28px" }}>Ready to Get Your Ride-On Scrubber?</h2>
                    <p style={{ color: '#ccc', fontSize: '16px', margin: '0' }}>Contact Cleantech today for pricing, service plans, and a free on-site demo across Chennai.</p>
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
