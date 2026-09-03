'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [showBackTop, setShowBackTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pathname !== '/' && pathname !== '/contact') {
    return null;
  }

  return (
    <>
      <footer className="ct-footer">
        <div className="ct-container">
          <div className="ct-footer-grid">
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: 'inline-block', marginBottom: '14px', width: '100%', maxWidth: '200px' }}>
                <img src="/logo.jpeg" alt="Cleantech" style={{ width: '180px', maxWidth: '100%', height: 'auto', display: 'block', borderRadius: '500px' }} />
              </Link>
              <p className="ct-footer-desc">
                Chennai's trusted partner for professional cleaning equipment sales and service.
                We supply genuine machines and deliver expert technical support for commercial and industrial facilities.
              </p>
            </div>

            {/* Services */}
            <div>
              <h5 className="ct-footer-col-title">Our Services</h5>
              <ul className="ct-footer-links" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/office-cleaning">Office Cleaning</Link></li>
                <li><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                <li><Link href="/factory-cleaning">Factory Cleaning</Link></li>
                <li><Link href="/industrial-cleaning">Industrial Cleaning</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="ct-footer-col-title">Quick Links</h5>
              <ul className="ct-footer-links" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/sales-service">Equipment Sales</Link></li>
                <li><Link href="/cleantech-service">Equipment Service</Link></li>
                <li><Link href="/cleaning-services">All Services</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="ct-footer-col-title">Contact Us</h5>
              <ul className="ct-footer-contact" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="ct-footer-contact-item">
                  <i className="fal fa-phone-alt"></i>
                  <div>
                    <a href="tel:+917338882034">+91 73388 82034</a><br />
                    <a href="tel:+919710148218">+91 97101 48218</a>
                  </div>
                </li>
                <li className="ct-footer-contact-item">
                  <i className="fal fa-envelope-open"></i>
                  <a href="mailto:info@cleantech.co.in">info@cleantech.co.in</a>
                </li>
                <li className="ct-footer-contact-item">
                  <i className="fal fa-map-marker-alt"></i>
                  <span>6, Jayam Industrial Estate, Chettyar Agaram 1st St, Vanagaram, Chennai - 600095.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ct-footer-bottom">
          <div className="ct-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <p>Copyright &copy; {new Date().getFullYear()} <span>Cleantech</span>. All Rights Reserved.</p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>Cleaning Equipment Sales &amp; Service in Chennai</p>
          </div>
        </div>
      </footer>



      {/* Back to Top */}
      <button
        className={`ct-back-top ${showBackTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}
