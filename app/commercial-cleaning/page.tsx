import Link from 'next/link';

export default function ServicePage() {
  return (
    <>
      {/* Gaming Gear Hero Section */}
      <section style={{ background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '120px' }}>
          <div className="row align-items-center w-100">
            
            {/* Left Column: Details */}
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
                COMMERCIAL CLEANING
              </h1>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', marginBottom: '30px' }}>
                Premium Cleaning Services
              </p>
              
              <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.8', maxWidth: '450px', marginBottom: '15px' }}>
                Commercial spaces endure massive foot traffic every day, leading to rapid accumulation of dirt and grime. Cleantech brings 15+ years of expertise in maintaining large-scale commercial facilities.
              </p>
              <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.8', maxWidth: '450px', marginBottom: '30px' }}>
                We deploy heavy-duty ride-on scrubbers, single disc polishers, and industrial vacuums to handle massive floor areas quickly and efficiently.
              </p>
              
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff6b00', marginBottom: '30px' }}>
                Professional Contracts Available
              </div>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#ff6b00', color: '#000', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                   Get a Quote
                </Link>
                <a href="#features" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 28px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                   Explore Features
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
                fontSize: 'clamp(120px, 15vw, 250px)', 
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
              <img src="/assets/img/service/premium-commercial-service.png" alt="COMMERCIAL CLEANING" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', maxHeight: '500px', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))', borderRadius: '12px' }} />
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
            SERVICES
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500, margin: 0, paddingBottom: '10px' }}>Explore our specialized cleaning solutions</p>
            <a href="#features" style={{ color: '#00d4aa', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Scroll down <i className="fas fa-arrow-down"></i></a>
          </div>
        </div>
      </section>

      {/* Target for More Details link */}
      <div id="features"></div>

      <section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
        <div className="container">
          <div className="row justify-content-center mb-50">
              <div className="col-lg-8 text-center">
                  <span className="section-badge">Service Highlights</span>
                  <h2 className="ct-h2">Key Features</h2>
              </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px", padding: "30px", height: "100%" }}>
                    <h6 style={{ color: '#fff' }}>Large-scale floor scrubbing and drying</h6>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px", padding: "30px", height: "100%" }}>
                    <h6 style={{ color: '#fff' }}>Restroom sanitization and odor control</h6>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px", padding: "30px", height: "100%" }}>
                    <h6 style={{ color: '#fff' }}>Escalator and elevator deep cleaning</h6>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px", padding: "30px", height: "100%" }}>
                    <h6 style={{ color: '#fff' }}>Spill management and stain removal</h6>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct-section ct-bg-dark">
        <div className="container">
          <div className="cta-strip wow fadeInUp" data-wow-delay=".2s">
            <div className="row align-items-center">
                <div className="col-lg-8 mb-4 mb-lg-0">
                    <h2 className="ct-h2" style={{ fontSize: "28px" }}>Need a Custom Cleaning Contract?</h2>
                    <p style={{ color: '#ccc', fontSize: '16px', margin: '0' }}>Contact our experts in Chennai today for a free site inspection and customized cleaning proposal.</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <Link href="/contact" className="ct-btn ct-btn-orange">Request a Quote</Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
