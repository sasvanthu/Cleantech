'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Office Cleaning',
    subtitle: 'Corporate Environments',
    desc: 'Regular office cleaning is imperative to maintain a healthy, productive work environment. Our office cleaning services in Chennai focus on providing matchless hygiene, ensuring your employees stay productive and healthy.',
    features: ['Deep cleaning of workstations', 'Sanitization of IT equipment', 'Floor scrubbing, buffing & polishing', 'Glass partition & window cleaning'],
    img: '/assets/img/service/premium-office-service.png',
    href: '/office-cleaning',
    accent: '#4D8FFF',
    accentBg: 'rgba(77,143,255,0.08)',
    accentBorder: 'rgba(77,143,255,0.2)',
  },
  {
    num: '02',
    title: 'Commercial Cleaning',
    subtitle: 'Malls, IT Parks & Retail',
    desc: 'Commercial cleaning is more than dusting and vacuuming. With 15+ years of experience, we tackle high-traffic commercial zones like malls, IT parks, and retail outlets with heavy-duty scrubber machines.',
    features: ['Large-scale floor scrubbing & drying', 'Restroom sanitization & odor control', 'Escalator & elevator deep cleaning', 'Spill management & stain removal'],
    img: '/assets/img/service/premium-commercial-service.png',
    href: '/commercial-cleaning',
    accent: '#FF6B00',
    accentBg: 'rgba(255,107,0,0.08)',
    accentBorder: 'rgba(255,107,0,0.2)',
  },
  {
    num: '03',
    title: 'Factory Cleaning',
    subtitle: 'Manufacturing & Warehouses',
    desc: 'We offer exceptional factory cleaning in Chennai utilizing advanced ride-on sweepers and high-pressure washers to handle heavy industrial grease, metal shavings, and manufacturing dust safely and efficiently.',
    features: ['Heavy-duty floor degreasing', 'High-pressure washing', 'High-altitude roof & vent dusting', 'Machine & equipment surface cleaning'],
    img: '/assets/img/service/premium-factory-service.png',
    href: '/factory-cleaning',
    accent: '#00C882',
    accentBg: 'rgba(0,200,130,0.08)',
    accentBorder: 'rgba(0,200,130,0.2)',
  },
  {
    num: '04',
    title: 'Industrial Deep Cleaning',
    subtitle: 'Power Plants & Chemical Facilities',
    desc: 'Bring a new lease of life to your industrial facility through our most advanced industrial deep cleaning services. We adhere to strict safety protocols while tackling hazardous dust, chemical spills, and high-altitude cleaning.',
    features: ['Hazardous dust & debris removal', 'Chemical spill cleanup', 'Industrial tank & silo cleaning', 'Epoxy floor restoration & scrubbing'],
    img: '/assets/img/service/premium-industrial-service.png',
    href: '/industrial-cleaning',
    accent: '#A855F7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
  },
];

export default function CleaningServices() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.cs-reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('cs-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .cs-reveal { opacity: 0; transform: translateY(28px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .cs-reveal.d1 { transition-delay: 0.1s; }
        .cs-reveal.d2 { transition-delay: 0.2s; }
        .cs-reveal.d3 { transition-delay: 0.3s; }
        .cs-visible { opacity: 1; transform: translateY(0); }

        /* HERO */
        .cs-hero {
          min-height: 70vh;
          background: #050810;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding: 130px 0 80px;
        }
        .cs-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(0,87,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,87,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .cs-orb-1 { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: rgba(0,87,255,0.12); filter: blur(120px); top: -150px; left: -100px; pointer-events: none; }
        .cs-orb-2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,107,0,0.1); filter: blur(100px); bottom: -100px; right: 0; pointer-events: none; }
        .cs-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,107,0,0.1); border: 1px solid rgba(255,107,0,0.25);
          color: #FF6B00; font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; padding: 6px 18px; border-radius: 50px;
          margin-bottom: 24px;
        }
        .cs-hero-tag::before { content:''; width:5px; height:5px; border-radius:50%; background:#FF6B00; }
        .cs-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(40px, 6vw, 72px); font-weight: 900;
          color: #fff; line-height: 1.05; letter-spacing: -2px; margin: 0 0 24px;
        }
        .cs-hero-title span { color: #FF6B00; }
        .cs-hero-sub { font-size: 18px; color: rgba(255,255,255,0.5); line-height: 1.8; max-width: 620px; margin-bottom: 40px; }
        .cs-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

        /* SERVICES TIMELINE */
        .cs-timeline { background: #0a0a0a; padding: 100px 0; }
        .cs-service-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px; overflow: hidden;
          margin-bottom: 24px;
          transition: border-color 0.3s ease;
          min-height: 380px;
        }
        .cs-service-row:hover { border-color: rgba(255,107,0,0.2); }
        @media(max-width:900px) {
          .cs-service-row { grid-template-columns: 1fr; }
          .cs-service-row.flip { display: flex; flex-direction: column-reverse; }
        }
        .cs-service-info { padding: 56px; background: #111; display: flex; flex-direction: column; justify-content: center; }
        .cs-service-img-col { position: relative; overflow: hidden; min-height: 320px; }
        .cs-service-img-col img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75); transition: transform 0.6s ease, filter 0.4s ease; }
        .cs-service-row:hover .cs-service-img-col img { transform: scale(1.05); filter: brightness(0.9); }
        .cs-img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(17,17,17,0.5) 0%, transparent 60%); }
        .cs-img-overlay-right { position: absolute; inset: 0; background: linear-gradient(to left, rgba(17,17,17,0.5) 0%, transparent 60%); }

        .cs-svc-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 80px; font-weight: 900; line-height: 1;
          margin-bottom: 8px;
        }
        .cs-svc-sub { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; opacity: 0.6; }
        .cs-svc-title { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 16px; font-family: 'Space Grotesk', sans-serif; }
        .cs-svc-desc { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 24px; }
        .cs-svc-features { margin-bottom: 28px; }
        .cs-svc-features li {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.65); margin-bottom: 8px;
        }
        .cs-svc-features li::before { content:''; width:5px; height:5px; border-radius:50%; background: var(--acc); flex-shrink:0; }
        .cs-svc-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; text-decoration: none;
          transition: gap 0.2s ease;
        }
        .cs-svc-link:hover { gap: 14px; }

        /* CTA */
        .cs-cta { background: #FF6B00; padding: 90px 0; position: relative; overflow: hidden; }
        .cs-cta-watermark {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          font-size: 180px; font-weight: 900; color: rgba(0,0,0,0.04);
          white-space: nowrap; pointer-events: none;
          font-family: 'Space Grotesk', sans-serif;
        }
        .cs-cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 54px); font-weight: 900;
          color: #000; line-height: 1.1; margin-bottom: 16px;
        }
        .cs-cta-sub { font-size: 18px; color: rgba(0,0,0,0.6); margin-bottom: 40px; }
        .cs-btn-dark {
          display: inline-flex; align-items: center; gap: 10px;
          background: #000; color: #fff; padding: 15px 36px;
          font-size: 14px; font-weight: 700; text-transform: uppercase;
          border-radius: 6px; text-decoration: none;
          transition: all 0.3s ease;
        }
        .cs-btn-dark:hover { background: #111; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); color: #fff; }
        .cs-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #000; padding: 15px 36px;
          font-size: 14px; font-weight: 700; text-transform: uppercase;
          border: 2px solid rgba(0,0,0,0.4); border-radius: 6px; text-decoration: none;
          transition: all 0.3s ease;
        }
        .cs-btn-outline:hover { border-color: #000; }
      `}} />

      {/* ═══ HERO ═══ */}
      <section className="cs-hero" aria-label="Professional Cleaning Services Chennai">
        <div className="cs-hero-grid"></div>
        <div className="cs-orb-1"></div>
        <div className="cs-orb-2"></div>

        <div className="ct-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cs-hero-tag cs-reveal">Our Services</div>
              <h1 className="cs-hero-title cs-reveal d1">
                Professional<br />
                Cleaning <span>Services</span>
              </h1>
              <p className="cs-hero-sub cs-reveal d2">
                Experience the highest standard of cleanliness with our comprehensive professional cleaning services across Chennai — tailored for commercial, industrial, and office environments.
              </p>
              <div className="cs-hero-btns cs-reveal d3">
                <Link href="/contact" className="cs-btn-dark" style={{ background: '#FF6B00', color: '#000' }}>
                  Get a Free Quote <i className="fas fa-arrow-right"></i>
                </Link>
                <a href="tel:+917338882034" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '15px 30px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
                  <i className="fas fa-phone-alt"></i> Call Now
                </a>
              </div>
            </div>

            {/* Right side — service pill tags */}
            <div className="col-lg-5 d-none d-lg-flex flex-wrap gap-3 justify-content-end align-items-center cs-reveal d2">
              {['Office Cleaning','Commercial Cleaning','Factory Cleaning','Industrial Cleaning','Restroom Sanitization','Floor Polishing','Dust Removal','High-Altitude Cleaning'].map((tag, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '50px', padding: '10px 20px',
                  fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500,
                  animation: `pillFloat ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}>
                  {tag}
                </div>
              ))}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes pillFloat { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-6px) } }
              `}} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES TIMELINE ═══ */}
      <section className="cs-timeline" aria-labelledby="services-heading">
        <div className="ct-container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="cs-hero-tag cs-reveal" style={{ margin: '0 auto 16px' }}>What We Offer</div>
            <h2 id="services-heading" className="cs-reveal d1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
              Our <span style={{ color: '#FF6B00' }}>Cleaning</span> Solutions
            </h2>
          </div>

          {services.map((svc, i) => {
            const isFlipped = i % 2 === 1;
            return (
              <div key={i} className={`cs-service-row cs-reveal ${isFlipped ? 'flip' : ''}`} style={{ '--acc': svc.accent } as React.CSSProperties}>
                {!isFlipped && (
                  <div className="cs-service-img-col">
                    <img src={svc.img} alt={`${svc.title} in Chennai`} />
                    <div className="cs-img-overlay"></div>
                  </div>
                )}

                <div className="cs-service-info">
                  <div className="cs-svc-num" style={{ color: svc.accentBg.replace('0.08', '0.3') }}>
                    {svc.num}
                  </div>
                  <div className="cs-svc-sub" style={{ color: svc.accent }}>{svc.subtitle}</div>
                  <h3 className="cs-svc-title">{svc.title}</h3>
                  <p className="cs-svc-desc">{svc.desc}</p>
                  <ul className="cs-svc-features">
                    {svc.features.map((f, fi) => <li key={fi}>{f}</li>)}
                  </ul>
                  <Link href={svc.href} className="cs-svc-link" style={{ color: svc.accent }}>
                    Explore Service <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>

                {isFlipped && (
                  <div className="cs-service-img-col">
                    <img src={svc.img} alt={`${svc.title} in Chennai`} />
                    <div className="cs-img-overlay-right"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cs-cta" aria-labelledby="cs-cta-heading">
        <div className="cs-cta-watermark">CLEANTECH</div>
        <div className="ct-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0 cs-reveal">
              <h2 id="cs-cta-heading" className="cs-cta-title">Need a Custom<br />Cleaning Contract?</h2>
              <p className="cs-cta-sub">We offer flexible AMC and custom cleaning schedules tailored to your facility's operational hours.</p>
            </div>
            <div className="col-lg-5 cs-reveal d1">
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Link href="/contact" className="cs-btn-dark" aria-label="Contact Cleantech for a cleaning contract">
                  Contact Us Today
                </Link>
                <a href="tel:+917338882034" className="cs-btn-outline" aria-label="Call Cleantech">
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
