'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="ct-main-header">
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'block' }}>
            <img src="/logo.png" alt="Cleantech" style={{ height: '36px', width: 'auto', display: 'block', maxWidth: 'none', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="d-none d-lg-block" style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <li><Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Home</Link></li>

            <li className="nav-item dropdown" style={{ position: 'relative', padding: '10px 0' }} onMouseEnter={e => {
              const drop = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
              if (drop) { drop.style.display = 'block'; drop.style.opacity = '1'; drop.style.transform = 'translateY(0)'; }
            }}
              onMouseLeave={e => {
                const drop = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                if (drop) { drop.style.display = 'none'; drop.style.opacity = '0'; drop.style.transform = 'translateY(10px)'; }
              }}>
              <Link href="/cleaning-services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Services</Link>
              <div className="dropdown-menu" style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%) translateY(10px)',
                background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(20px)', borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)', padding: '10px 0', minWidth: '220px',
                display: 'none', opacity: 0, transition: 'all 0.3s ease', boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}>
                <Link href="/office-cleaning" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Office Cleaning</Link>
                <Link href="/commercial-cleaning" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Commercial Cleaning</Link>
                <Link href="/factory-cleaning" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Factory Cleaning</Link>
                <Link href="/industrial-cleaning" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Industrial Cleaning</Link>
              </div>
            </li>

            <li className="nav-item dropdown" style={{ position: 'relative', padding: '10px 0' }} onMouseEnter={e => {
              const drop = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
              if (drop) { drop.style.display = 'block'; drop.style.opacity = '1'; drop.style.transform = 'translateY(0)'; }
            }}
              onMouseLeave={e => {
                const drop = e.currentTarget.querySelector('.dropdown-menu') as HTMLElement;
                if (drop) { drop.style.display = 'none'; drop.style.opacity = '0'; drop.style.transform = 'translateY(10px)'; }
              }}>
              <Link href="/sales-service" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Equipment</Link>
              <div className="dropdown-menu" style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%) translateY(10px)',
                background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(20px)', borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)', padding: '10px 0', minWidth: '220px',
                display: 'none', opacity: 0, transition: 'all 0.3s ease', boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}>
                <Link href="/sales-service" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Equipment Sales</Link>
                <Link href="/cleantech-service" className="dropdown-item" style={{ color: '#fff', padding: '10px 20px', fontSize: '14px' }}>Equipment Service</Link>
              </div>
            </li>

            <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Contact</Link></li>
          </ul>
        </nav>

        {/* Right side CTA & Mobile Toggle */}
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button
            onClick={openDrawer}
            className="d-lg-none"
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', padding: 0 }}
            aria-label="Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Shade overlay */}
      <div
        className={`ct-shade ${drawerOpen ? 'on' : ''}`}
        onClick={closeDrawer}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 99998, opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? 'auto' : 'none', transition: 'opacity 0.3s' }}
      ></div>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: drawerOpen ? 0 : '-100%', width: '100%', maxWidth: '350px',
        height: '100vh', background: 'var(--ct-dark)', zIndex: 99999, transition: 'right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '30px 20px', display: 'flex', flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.5)', borderLeft: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" onClick={closeDrawer} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Cleantech" style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          </Link>
          <button onClick={closeDrawer} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '18px' }} aria-label="Close menu">
            &times;
          </button>
        </div>

        <div style={{ flexGrow: 1, overflowY: 'auto' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><Link href="/" onClick={closeDrawer} style={{ color: '#fff', fontSize: '18px', fontWeight: 600, textDecoration: 'none' }}>Home</Link></li>

            <li>
              <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '15px' }}>Services</div>
              <ul style={{ listStyle: 'none', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                <li><Link href="/office-cleaning" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Office Cleaning</Link></li>
                <li><Link href="/commercial-cleaning" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Commercial Cleaning</Link></li>
                <li><Link href="/factory-cleaning" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Factory Cleaning</Link></li>
                <li><Link href="/industrial-cleaning" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Industrial Cleaning</Link></li>
              </ul>
            </li>

            <li>
              <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600, marginBottom: '15px' }}>Equipment</div>
              <ul style={{ listStyle: 'none', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                <li><Link href="/sales-service" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Equipment Sales</Link></li>
                <li><Link href="/cleantech-service" onClick={closeDrawer} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', textDecoration: 'none' }}>Equipment Service</Link></li>
              </ul>
            </li>

            <li><Link href="/contact" onClick={closeDrawer} style={{ color: '#fff', fontSize: '18px', fontWeight: 600, textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>

        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <a href="tel:+917338882034" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'var(--ct-orange)', color: '#000', padding: '14px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none' }}>
            <i className="fas fa-phone-alt"></i> +91 73388 82034
          </a>
          <a href="https://wa.me/919710148218" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'rgba(37,211,102,0.1)', color: '#25D366', border: '1px solid rgba(37,211,102,0.3)', padding: '14px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none' }}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>

      {/* Global styles to override dropdown hover issues in CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .dropdown-item:hover {
          background: rgba(255,255,255,0.05) !important;
          color: var(--ct-orange) !important;
        }
        
        .ct-main-header {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          min-width: 500px;
          max-width: 90%;
          border-radius: 0 0 24px 24px;
          background: #000;
          z-index: 9999;
          transition: all 0.3s ease;
          padding: 8px 12px 8px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        @media (max-width: 992px) {
          .ct-main-header {
            width: 90% !important;
            min-width: unset !important;
            gap: 20px !important;
            padding: 8px 16px !important;
          }
        }
        @media (max-width: 576px) {
          .ct-main-header {
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            padding: 10px 15px !important;
          }
        }
      `}} />
    </>
  );
}
