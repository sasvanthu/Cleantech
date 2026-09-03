'use client';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Walk-Behind Auto Scrubber',
    tag: 'Best Seller',
    desc: 'Scrubs, cleans, and dries floors in a single pass. Highly maneuverable for commercial spaces above 3,000 sqft.',
    img: '/assets/img/service/new-auto-scrubber.png',
    href: '/product-auto-scrubber',
    features: ['Instant dry floors', 'Battery & cable models', 'Up to 2,500 m²/hr'],
    num: '01',
  },
  {
    id: 2,
    name: 'Heavy Duty Ride-On Scrubber',
    tag: 'Industrial Grade',
    desc: 'Operator-seated machine covering up to 8,000 m²/hr, significantly reducing labor time for large facilities.',
    img: '/assets/img/service/new-ride-on-scrubber.png',
    href: '/product-ride-on-scrubber',
    features: ['Huge tank capacity', 'Ergonomic seating', 'Warehouses & airports'],
    num: '02',
  },
  {
    id: 3,
    name: 'High Capacity Ride-On Sweeper',
    tag: 'Dust-Free',
    desc: 'Heavy-duty sweeper with advanced dust-free filtration for both large indoor and outdoor areas.',
    img: '/assets/img/service/new-ride-on-sweeper.png',
    href: '/product-ride-on-sweeper',
    features: ['Fine dust & large debris', 'Indoor & outdoor use', 'Low maintenance'],
    num: '03',
  },
  {
    id: 4,
    name: 'Multi-Purpose Single Disc Scrubber',
    tag: 'Versatile',
    desc: 'A versatile multi-purpose floor machine — scrubber, polisher, stripper, and buffer all in one compact unit.',
    img: '/assets/img/service/new-single-disc.png',
    href: '/product-single-disc-scrubber',
    features: ['Marble, tile & vinyl', 'High-gloss finish', 'Compact design'],
    num: '04',
  },
  {
    id: 5,
    name: 'Industrial Wet & Dry Vacuum',
    tag: 'Powerful',
    desc: 'Powerful wet & dry industrial vacuum designed for post-construction cleanup, liquid spills, and deep carpet extraction.',
    img: '/assets/img/service/new-vacuum-cleaner.png',
    href: '/product-vacuum-cleaner',
    features: ['HEPA filtration option', 'Dual/triple motor', 'Stainless steel tank'],
    num: '05',
  },
];

export default function SalesService() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .ss-prod-img {
          position: relative;
          z-index: 2;
          max-width: 90%;
          max-height: 260px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
          transition: transform 0.4s ease;
        }
        .ss-prod-img:hover { transform: scale(1.06); }
      `}} />
      {/* ─── HERO ─── */}
      <section style={{
        background: '#0a0a0a',
        minHeight: '55vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,87,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,87,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>

        {/* Orange accent line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #ff6b00, transparent)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-end">
            <div className="col-lg-7">
              <span style={{ display: 'inline-block', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)', color: '#ff6b00', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '4px', marginBottom: '24px' }}>
                Premium Machinery
              </span>
              <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, color: '#fff', lineHeight: 1.05, margin: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
                INDUSTRIAL<br />
                <span style={{ color: '#ff6b00' }}>EQUIPMENT</span><br />
                SALES
              </h1>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '24px' }}>
                Authorized dealers for top global brands — Roots, Taski, Karcher, Charnock, Stihl, and Clearock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATALOG ─── */}
      <section style={{ background: '#0d0d0d', padding: '80px 0' }}>
        <div className="container">
          {products.map((p, i) => (
            <div key={p.id} className="premium-sales-grid wow fadeInUp" data-wow-delay={`${i * 0.1}s`} style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr 1fr',
              gap: '0',
              marginBottom: '2px',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '20px',
              background: '#111',
              transition: 'border-color 0.3s ease',
            }}>
              {/* Number Column */}
              <div style={{
                padding: '40px 30px',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minWidth: '100px',
                background: 'rgba(0,0,0,0.3)',
              }}>
                <span style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(255,107,0,0.15)', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.num}
                </span>
                <span style={{ display: 'inline-block', background: 'rgba(255,107,0,0.1)', color: '#ff6b00', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px', marginTop: 'auto' }}>
                  {p.tag}
                </span>
              </div>

              {/* Info Column */}
              <div style={{ padding: '40px', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '14px', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.name}
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {p.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0' }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff6b00', flexShrink: 0 }}></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ff6b00', fontSize: '14px', fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  View Specifications <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              {/* Image Column */}
              <div style={{ 
                position: 'relative', 
                minHeight: '300px', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}>
                {/* Subtle glow behind the machine */}
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'radial-gradient(ellipse at center, rgba(255,107,0,0.07) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <img
                  src={p.img}
                  alt={p.name}
                  className="ss-prod-img"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: '#ff6b00', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#000', fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
                UPGRADE YOUR CLEANING ARSENAL TODAY
              </h2>
              <p style={{ fontSize: '16px', color: '#1a0500', marginTop: '12px', marginBottom: 0 }}>
                Get premium cleaning machines at unbeatable prices in Chennai. Call us for a free demo and consultation.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#fff', padding: '14px 30px', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                Request a Quote
              </Link>
              <a href="tel:+917338882034" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#000', border: '2px solid #000', padding: '14px 30px', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px' }}>
                <i className="fas fa-phone-alt"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
