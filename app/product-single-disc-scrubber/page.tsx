import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function ProductSingleDiscScrubber() {
  return (
    <>
      

{/* Gaming Gear Hero Section */}
<section style={{ background: '#111', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
  <div className="container" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '120px' }}>
    <div className="row align-items-center w-100">
      
      {/* Left Column: Details */}
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
          SINGLE DISC SCRUBBER
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '10px', marginBottom: '30px' }}>
          Multi-Purpose Floor Care Machine
        </p>
        
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '450px', marginBottom: '30px' }}>
          The Single Disc Scrubber is incredibly versatile. Using interchangeable pads and brushes, a single machine can scrub, strip, polish, buff, and crystallise virtually any hard floor surface.
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
        <img src="/assets/img/service/new-single-disc.png" alt="Single Disc Scrubber Machine" style={{ position: 'relative', zIndex: 2, maxWidth: '100%', maxHeight: '500px', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))', borderRadius: '12px' }} />
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

{/*  Pad Types  */}
<section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
    <div className="container">
        <div className="row justify-content-center mb-45">
            <div className="col-lg-8 text-center">
                <span className="section-badge">Versatility</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>One Machine, Many Tasks</h2>
                <p style={{ color: '#aaa' }}>Simply change the pad or brush to completely change what the machine does.</p>
            </div>
        </div>
        <div className="row g-3">
            <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="pad-type-card" style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", border: "1px solid #333", textAlign: "center" }}><h6>Scrubbing</h6><p>Remove dirt and stains from tile, marble, and stone</p></div>
            </div>
            <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="pad-type-card" style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", border: "1px solid #333", textAlign: "center" }}><h6>Polishing</h6><p>Restore shine to marble, granite, and terrazzo floors</p></div>
            </div>
            <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="pad-type-card" style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", border: "1px solid #333", textAlign: "center" }}><h6>Stripping</h6><p>Remove old wax and coatings from vinyl and linoleum</p></div>
            </div>
            <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="pad-type-card" style={{ background: "#1a1a1a", padding: "20px", borderRadius: "12px", border: "1px solid #333", textAlign: "center" }}><h6>Buffing</h6><p>High-speed buffing for a brilliant, lasting shine</p></div>
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
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Machine Type</td><td style={{ padding: "12px 8px" }}>Single Disc Floor Machine</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Disc Size</td><td style={{ padding: "12px 8px" }}>16" – 20" (400 mm – 500 mm)</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Speed Options</td><td style={{ padding: "12px 8px" }}>175 RPM / 300 RPM / 1500 RPM</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Power Source</td><td style={{ padding: "12px 8px" }}>Electric (Corded)</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Floor Types</td><td style={{ padding: "12px 8px" }}>Marble, Granite, Tile, Vinyl, Carpet, Concrete</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Weight</td><td style={{ padding: "12px 8px" }}>40 – 55 kg</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Cable Length</td><td style={{ padding: "12px 8px" }}>10 m – 15 m</td></tr>
                    <tr style={{ borderBottom: "1px solid #333" }}><td style={{ padding: "12px 8px", color: "#ff6b00", fontWeight: 600 }}>Available As</td><td style={{ padding: "12px 8px" }}>Sale / AMC / Service</td></tr>
                </table>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                <span className="section-badge">Where It Works Best</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Usage & Applications</h2>
                <ul className="premium-check-list">
                    <li><strong>Hotels & Resorts</strong> – Maintain high-gloss marble lobbies, corridors, and restaurant floors.</li>
                    <li><strong>Corporate Offices</strong> – Regularly strip and polish vinyl or tiles for a professional appearance.</li>
                    <li><strong>Hospitals & Clinics</strong> – Keep healthcare floor surfaces hygienic and non-slip.</li>
                    <li><strong>Retail Shops & Supermarkets</strong> – Restore brilliance to high-traffic floor areas nightly.</li>
                    <li><strong>Schools & Colleges</strong> – Maintain large corridor and hallway floors economically.</li>
                    <li><strong>Carpet Cleaning</strong> – With a bonnet pad, effective for interim carpet maintenance.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

{/*  Key Features  */}
<section className="ct-section ct-bg-dark-2" style={{ background: '#0a0a0a' }}>
    <div className="container">
        <div className="row justify-content-center mb-45">
            <div className="col-lg-8 text-center">
                <span className="section-badge">Key Benefits</span>
                <h2 className="ct-h2" style={{ fontSize: "30px" }}>Why Choose the Single Disc Scrubber?</h2>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Multi-Purpose</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>One machine replaces multiple specialised tools — saving cost and storage space.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Compact & Maneuverable</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Works in tight spaces, under furniture, and along walls that larger machines can't reach.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Simple to Operate</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Minimal training required. Operators can quickly learn to change pads and settings.</p></div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="ct-bento-card" style={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: "12px",  padding: "30px", height: "100%" }}><h6>Cost-Effective</h6><p style={{ fontSize: '14px', color: '#aaa', margin: '0' }}>Lower purchase price and operating cost compared to larger auto-scrubbers for smaller areas.</p></div>
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
                    <h2 className="ct-h2" style={{ fontSize: "28px" }}>Get Your Single Disc Scrubber Today</h2>
                    <p style={{ color: '#ccc', fontSize: '16px', margin: '0' }}>Contact Cleantech for pricing, service plans, pad recommendations, and a free demo across Chennai.</p>
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
