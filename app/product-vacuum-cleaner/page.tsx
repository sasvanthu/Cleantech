import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function ProductVacuumCleaner() {
  return (
    <>
      

{/* Gaming Gear Hero Section */}
<section style={{ background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
  <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '120px' }}>
    <div className="row align-items-center w-100">
      
      {/* Left Column: Details */}
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
          VACUUM CLEANER
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', marginBottom: '30px' }}>
          Industrial Wet & Dry Suction Machine
        </p>
        
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '450px', marginBottom: '30px' }}>
          The Industrial Wet & Dry Vacuum Cleaner is the ultimate cleanup companion. Engineered with commercial-grade motors, it delivers powerful suction for both dry dust pickup and liquid spill extraction.
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
        <img src="/assets/img/service/new-vacuum-cleaner.png" alt="Industrial Vacuum Cleaner" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', maxHeight: '500px', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))', borderRadius: '12px' }} />
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

{/*  Features  */}
<section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
    <div className="container">
        <div className="row justify-content-center mb-50">
            <div className="col-lg-8 text-center">
                <span className="section-badge">Why Choose This</span>
                <h2 className="ct-h2">Key Features & Benefits</h2>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Wet & Dry Mode</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Seamlessly switch between dry dust and liquid spill mode without changing filters.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>High Suction Power</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Commercial-grade motors ensure deep extraction from carpets, crevices, and rough surfaces.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Large Capacity</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>High-volume tanks reduce the frequency of emptying during major cleanup operations.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>HEPA Filtration</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Optional HEPA filters trap fine particulates, essential for healthcare and food-safe environments.</p></div>
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
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Machine Type</td><td style={{ padding: "12px 8px" }}>Industrial Wet & Dry Vacuum</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Tank Capacity</td><td style={{ padding: "12px 8px" }}>20 – 80 Litres</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Motor Power</td><td style={{ padding: "12px 8px" }}>1,200 W – 3,000 W</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Suction Capacity</td><td style={{ padding: "12px 8px" }}>Up to 260 mbar</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Filtration</td><td style={{ padding: "12px 8px" }}>Standard / HEPA Optional</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Noise Level</td><td style={{ padding: "12px 8px" }}>&lt; 72 dB</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Power Source</td><td style={{ padding: "12px 8px" }}>Electric (Corded / Battery)</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Available As</td><td style={{ padding: "12px 8px" }}>Sale / AMC / Service</td></tr>
                </table>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                <span className="section-badge">Where It Works Best</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Usage & Applications</h2>
                <ul className="premium-check-list">
                    <li><strong>Post-Construction Cleanup</strong> – Remove fine construction dust, debris, and material waste from new sites.</li>
                    <li><strong>Flooded Area Recovery</strong> – Quickly extract water from flooded basements, corridors, or rooms.</li>
                    <li><strong>Carpet & Upholstery Cleaning</strong> – Deep clean carpets, sofas, and car interiors for hotels and hospitality.</li>
                    <li><strong>Industrial Maintenance</strong> – Clean machinery, ducts, and production floor areas of fine particulates.</li>
                    <li><strong>Offices & Commercial Spaces</strong> – Daily vacuuming of carpets, tiles, and hard floors quickly and quietly.</li>
                    <li><strong>Healthcare Facilities</strong> – HEPA-grade vacuums for infection-controlled environments.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

{/*  Options  */}
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
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Purchase</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Own the vacuum with full warranty and access to genuine filters, hoses, and spare parts from Cleantech.</p></div>
            </div>
            
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>AMC / Service</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Scheduled filter replacements, motor servicing, and priority breakdown support under our AMC plan.</p></div>
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
                    <h2 className="ct-h2" style={{ fontSize: "28px" }}>Get Your Industrial Vacuum Cleaner Today</h2>
                    <p style={{ color: '#ccc', fontSize: '16px', margin: '0' }}>Contact Cleantech for pricing, service plans, HEPA options, and a free demonstration across Chennai.</p>
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
