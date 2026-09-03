import Link from 'next/link';

export default function CleantechServicePage() {
  return (
    <>
      {/* Cinematic Parallax Hero */}
      <section style={{ 
        backgroundImage: 'url("/assets/img/service/premium-sales-banner.png")', 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative',
        padding: '140px 0 80px'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(10,10,10,0.95) 100%)' }}></div>
        <div className="container position-relative z-index text-center wow fadeInUp" data-wow-delay=".2s">
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, color: '#fff', letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '30px', fontFamily: 'Space Grotesk, sans-serif' }}>
            CLEANTECH SERVICE<br />
            <span style={{ color: '#ff6b00' }}>& AMC</span>
          </h1>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <p style={{ fontSize: '20px', color: '#eee', lineHeight: '1.8', marginBottom: '24px', fontWeight: 400 }}>
              Downtime of cleaning machinery directly impacts your facility's hygiene. As an authorized service center for top brands, Cleantech offers rapid repair services and genuine spare parts replacement to get your equipment back online quickly.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto' }}>
              We highly recommend our Annual Maintenance Contracts (AMC) to proactively prevent breakdowns. Our AMC includes regular inspections, preventative maintenance, and priority support, ensuring your scrubbers, sweepers, and vacuums operate efficiently year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Glassmorphic Features Banner */}
      <section style={{ 
        backgroundImage: 'url("/assets/img/service/premium-sales-banner.png")', 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        position: 'relative' 
      }}>
        {/* Glass Overlay */}
        <div style={{ 
          background: 'rgba(5, 8, 15, 0.75)', 
          backdropFilter: 'blur(15px)', 
          WebkitBackdropFilter: 'blur(15px)', 
          padding: '100px 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div className="container">
            <div className="row g-0">
              
              <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                <div style={{ padding: '30px 40px', borderRight: '1px solid rgba(255,255,255,0.1)', height: '100%' }}>
                  <h1 style={{ fontSize: '60px', fontWeight: 900, color: 'rgba(255,107,0,0.2)', marginBottom: '20px', lineHeight: 1 }}>01</h1>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>On-Site Repair & Troubleshooting</h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div style={{ padding: '30px 40px', borderRight: '1px solid rgba(255,255,255,0.1)', height: '100%' }}>
                  <h1 style={{ fontSize: '60px', fontWeight: 900, color: 'rgba(255,107,0,0.2)', marginBottom: '20px', lineHeight: 1 }}>02</h1>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>Genuine Spare Parts Replacement</h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                <div style={{ padding: '30px 40px', borderRight: '1px solid rgba(255,255,255,0.1)', height: '100%' }}>
                  <h1 style={{ fontSize: '60px', fontWeight: 900, color: 'rgba(255,107,0,0.2)', marginBottom: '20px', lineHeight: 1 }}>03</h1>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>Preventative AMC Packages</h4>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div style={{ padding: '30px 40px', height: '100%' }}>
                  <h1 style={{ fontSize: '60px', fontWeight: 900, color: 'rgba(255,107,0,0.2)', marginBottom: '20px', lineHeight: 1 }}>04</h1>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 700 }}>Operator Training & Calibration</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* High-Contrast CTA */}
      <section style={{ background: '#ff6b00', padding: '100px 0' }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".2s">
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#000', marginBottom: '20px', fontFamily: 'Space Grotesk, sans-serif' }}>
                NEED A CUSTOM SERVICE CONTRACT?
              </h2>
              <p style={{ fontSize: '18px', color: '#111', fontWeight: 500, marginBottom: '40px' }}>
                Contact our experts in Chennai today for a free equipment inspection and customized maintenance proposal.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#fff', padding: '15px 40px', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                  Request a Quote
                </Link>
                <a href="tel:+917338882034" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#000', border: '2px solid #000', padding: '15px 40px', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                  <i className="fas fa-phone-alt"></i> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
