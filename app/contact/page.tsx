'use client';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    /* Scroll Reveal */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { 
            e.target.classList.add('visible'); 
            obs.unobserve(e.target); 
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      revealEls.forEach((el) => { obs.observe(el); });
      return () => obs.disconnect();
    }
  }, []);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* 1. Hero Section (Dark Brown/Orange Gradient) */}
      <section style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, #0a0503 0%, #3a1c0d 50%, #1a0a05 100%)',
        padding: '100px 20px 30px',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Abstract wireframe circles */}
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: '150px', height: '150px', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '50%', transform: 'rotate(45deg) scaleX(0.5)' }}></div>
        <div style={{ position: 'absolute', top: '25%', left: '16%', width: '150px', height: '150px', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '50%', transform: 'rotate(45deg) scaleX(0.5)' }}></div>
        
        <div style={{ position: 'absolute', top: '10%', right: '20%', width: '120px', height: '120px', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '50%', transform: 'rotate(-30deg) scaleX(0.5)' }}></div>
        <div style={{ position: 'absolute', top: '13%', right: '19%', width: '120px', height: '120px', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '50%', transform: 'rotate(-30deg) scaleX(0.5)' }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '42px', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', fontSize: '15px', lineHeight: 1.5 }}>
            Reach out for sales, service, AMC or spare parts. Our team in Chennai is ready to help you optimize your cleaning operations.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section style={{ padding: '30px 20px 60px', background: '#fff' }}>
        <div className="ct-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Title Section */}
          <div className="reveal up" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ color: '#ff6b00', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px' }}>
              CONTACT
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
              Get in Touch With Us
            </h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '15px', lineHeight: 1.5 }}>
              Whether you need to purchase a new cleaning machine, service an existing one, or set up an AMC contract — we're just a call or message away.
            </p>
          </div>

          {/* 3 Dark Glow Cards */}
          <div className="ct-glow-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            
            {/* Phone Card */}
            <div className="glow-card reveal up" style={{ transitionDelay: '0.1s' }}>
              <div className="card-bg"></div>
              <div className="card-content">
                <i className="fas fa-phone-alt"></i>
                <h3>Phone</h3>
                <p>+91 73388 82034</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="glow-card reveal up" style={{ transitionDelay: '0.2s' }}>
              <div className="card-bg"></div>
              <div className="card-content">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>info@cleantech.co.in</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="glow-card reveal up" style={{ transitionDelay: '0.3s' }}>
              <div className="card-bg"></div>
              <div className="card-content">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Head Office</h3>
                <p>Jayam Industrial Estate, Chennai</p>
              </div>
            </div>

          </div>

          {/* Map Section - Static Image for Instant Load */}
          <div className="reveal up" style={{ transitionDelay: '0.4s', borderRadius: '24px', overflow: 'hidden', height: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.12)', position: 'relative', background: '#111' }}>
            <a 
              href="https://maps.google.com/?q=13.044749,80.146647" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
              title="Click to open in Google Maps"
            >
              <img 
                src="/assets/img/chennai-map-satellite.jpg" 
                alt="Cleantech Location Satellite Map Chennai" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.85)',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.2)',
                zIndex: 10
              }}>
                <i className="fas fa-external-link-alt" style={{ color: '#ff6b00' }}></i> Open Live Map
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Global styles for this exact layout */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Overrides for global dark mode body to ensure this page stays white below hero */
        body.ct-bg-dark {
          background-color: #fff !important;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .glow-card {
          position: relative;
          background: #000;
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .glow-card:hover {
          transform: translateY(-8px);
        }

        /* The inner orange glow effect */
        .glow-card .card-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(255,107,0,0.4) 0%, rgba(0,0,0,1) 70%);
          z-index: 1;
        }

        .glow-card .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .glow-card i {
          font-size: 32px;
          color: #ff6b00;
          margin-bottom: 24px;
        }

        .glow-card h3 {
          font-size: 22px;
          font-weight: 600;
          color: #fff !important;
          margin-bottom: 12px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .glow-card p {
          color: rgba(255,255,255,0.7) !important;
          font-size: 15px;
          margin: 0;
        }

        /* Ensure global heading overrides don't break our white section */
        section h2 {
          color: #111 !important;
        }
        section p {
          color: #666 !important;
        }
      `}} />
    </div>
  );
}
