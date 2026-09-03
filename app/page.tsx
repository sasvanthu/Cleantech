'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    /* ---- Typewriter ---- */
    const words = ['Equipment Sales', 'Service & AMC', 'Spare Parts', 'Expert Support'];
    let idx = 0, charIdx = 0, deleting = false;
    let timeoutId: NodeJS.Timeout;
    function type() {
      const el = typewriterRef.current;
      if (!el) return;
      const word = words[idx];
      if (deleting) { el.textContent = word.substring(0, charIdx--); }
      else { el.textContent = word.substring(0, charIdx++); }
      let delay = deleting ? 50 : 90;
      if (!deleting && charIdx > word.length) { delay = 2000; deleting = true; }
      if (deleting && charIdx < 0) { deleting = false; idx = (idx + 1) % words.length; charIdx = 0; delay = 400; }
      timeoutId = setTimeout(type, delay);
    }
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    /* ---- Scroll Reveal ---- */
    const revealEls = document.querySelectorAll('.hp-reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('hp-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => obs.observe(el));

    /* ---- Counter Animation ---- */
    const nums = document.querySelectorAll('.ct-num');
    let counted = false;
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !counted) {
          counted = true;
          nums.forEach((num) => {
            const target = parseInt(num.getAttribute('data-target') || '0', 10);
            let start = 0, steps = 60, inc = target / steps;
            const t = setInterval(() => {
              start += inc;
              if (start >= target) { num.textContent = target.toString(); clearInterval(t); }
              else { num.textContent = Math.ceil(start).toString(); }
            }, 1200 / steps);
          });
        }
      });
    }, { threshold: 0.3 });
    const counterSection = document.querySelector('.hp-stats-bar');
    if (counterSection) cObs.observe(counterSection);

    /* ---- 3D tilt on product cards ---- */
    const tiltCards = document.querySelectorAll('.hp-3d-card');
    tiltCards.forEach(card => {
      const el = card as HTMLElement;
      el.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotY = (x / rect.width) * 16;
        const rotX = -(y / rect.height) * 16;
        el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });

    return () => { obs.disconnect(); cObs.disconnect(); };
  }, []);

  const products = [
    { name: 'Auto Scrubber', sub: 'Walk-Behind', img: '/assets/img/service/new-auto-scrubber.png', href: '/product-auto-scrubber', badge: 'Best Seller' },
    { name: 'Ride-On Scrubber', sub: 'Heavy Duty', img: '/assets/img/service/new-ride-on-scrubber.png', href: '/product-ride-on-scrubber', badge: 'Industrial' },
    { name: 'Ride-On Sweeper', sub: 'High Capacity', img: '/assets/img/service/new-ride-on-sweeper.png', href: '/product-ride-on-sweeper', badge: null },
    { name: 'Single Disc Scrubber', sub: 'Multi-Purpose', img: '/assets/img/service/new-single-disc.png', href: '/product-single-disc-scrubber', badge: 'Popular' },
    { name: 'Industrial Vacuum', sub: 'Wet & Dry', img: '/assets/img/service/new-vacuum-cleaner.png', href: '/product-vacuum-cleaner', badge: null },
  ];

  const industries = [
    { icon: 'fa-industry', label: 'Manufacturing' },
    { icon: 'fa-warehouse', label: 'Warehouses' },
    { icon: 'fa-hospital', label: 'Hospitals' },
    { icon: 'fa-hotel', label: 'Hotels' },
    { icon: 'fa-shopping-cart', label: 'Shopping Malls' },
    { icon: 'fa-cog', label: 'Factories' },
    { icon: 'fa-graduation-cap', label: 'Schools & Colleges' },
    { icon: 'fa-building', label: 'Commercial Buildings' },
    { icon: 'fa-plane', label: 'Airports' },
    { icon: 'fa-utensils', label: 'Food Processing' },
    { icon: 'fa-car', label: 'Automotive Plants' },
    { icon: 'fa-briefcase', label: 'Corporate Offices' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        /* ---- Reveal Animations ---- */
        .hp-reveal { opacity: 0; transform: translateY(32px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .hp-reveal.delay-1 { transition-delay: 0.1s; }
        .hp-reveal.delay-2 { transition-delay: 0.2s; }
        .hp-reveal.delay-3 { transition-delay: 0.3s; }
        .hp-reveal.delay-4 { transition-delay: 0.4s; }
        .hp-visible { opacity: 1; transform: translateY(0); }

        /* ---- Hero ---- */
        .hp-hero {
          min-height: 100vh;
          background: #050810;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 90px;
        }
        .hp-hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(0,87,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,87,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hp-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none;
        }
        .hp-orb-1 { width: 500px; height: 500px; background: rgba(0,87,255,0.18); top: -100px; left: -100px; animation: orbFloat1 8s ease-in-out infinite; }
        .hp-orb-2 { width: 400px; height: 400px; background: rgba(255,107,0,0.12); bottom: -50px; right: -50px; animation: orbFloat2 10s ease-in-out infinite; }
        .hp-orb-3 { width: 300px; height: 300px; background: rgba(0,212,170,0.07); top: 50%; right: 20%; animation: orbFloat3 7s ease-in-out infinite; }
        @keyframes orbFloat1 { 0%,100%{ transform:translate(0,0) } 50%{ transform:translate(40px,30px) } }
        @keyframes orbFloat2 { 0%,100%{ transform:translate(0,0) } 50%{ transform:translate(-30px,-40px) } }
        @keyframes orbFloat3 { 0%,100%{ transform:translate(0,0) } 50%{ transform:translate(20px,-20px) } }

        .hp-hero-pretag {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(0,87,255,0.08); border: 1px solid rgba(0,87,255,0.2);
          border-radius: 50px; padding: 6px 16px;
          font-size: 12px; font-weight: 600; color: #4D8FFF;
          letter-spacing: 1px; text-transform: uppercase;
          margin-bottom: 28px;
        }
        .hp-pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4D8FFF;
          animation: pulse 1.5s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{ opacity:1; transform:scale(1) } 50%{ opacity:0.4; transform:scale(1.5) } }

        .hp-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(38px, 6vw, 76px);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0 0 24px;
        }
        .hp-title-orange { color: #FF6B00; }
        .hp-title-blue { color: #4D8FFF; }
        .hp-typewriter {
          color: #FF6B00;
          border-right: 3px solid #FF6B00;
          padding-right: 4px;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink { 0%,100%{ border-color:#FF6B00 } 50%{ border-color:transparent } }

        .hp-hero-sub {
          font-size: 18px; color: rgba(255,255,255,0.55);
          max-width: 500px; line-height: 1.8; margin-bottom: 36px;
        }

        .hp-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
        .hp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #FF6B00; color: #000; padding: 14px 30px;
          font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          border-radius: 6px; border: none; cursor: pointer; text-decoration: none;
          transition: all 0.3s ease;
        }
        .hp-btn-primary:hover { background: #ff8c00; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(255,107,0,0.4); }
        .hp-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff; padding: 14px 30px;
          font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); text-decoration: none;
          transition: all 0.3s ease;
        }
        .hp-btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.05); }

        .hp-mini-stats { display: flex; gap: 32px; flex-wrap: wrap; }
        .hp-mini-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px; font-weight: 900; color: #fff; line-height: 1;
        }
        .hp-mini-stat-num span { color: #FF6B00; }
        .hp-mini-stat-label { font-size: 12px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

        /* ---- 3D Floating Product ---- */
        .hp-hero-visual {
          position: relative;
          height: 580px;
          display: flex; align-items: center; justify-content: center;
          perspective: 1000px;
        }
        .hp-float-card {
          position: absolute;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hp-float-main {
          width: 340px; height: 280px;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%) perspective(800px) rotateY(-8deg) rotateX(4deg);
          animation: float3D 6s ease-in-out infinite;
          z-index: 3;
        }
        .hp-float-main img { width: 100%; height: 100%; object-fit: cover; }
        .hp-float-mini-1 {
          width: 160px; height: 130px;
          top: 10%; right: 5%;
          transform: perspective(800px) rotateY(-15deg) rotateX(8deg);
          animation: float3D2 7s ease-in-out infinite;
          z-index: 2;
        }
        .hp-float-mini-1 img { width: 100%; height: 100%; object-fit: cover; }
        .hp-float-mini-2 {
          width: 140px; height: 110px;
          bottom: 15%; left: 5%;
          transform: perspective(800px) rotateY(10deg) rotateX(-6deg);
          animation: float3D3 8s ease-in-out infinite;
          z-index: 2;
        }
        .hp-float-mini-2 img { width: 100%; height: 100%; object-fit: cover; }
        @keyframes float3D {
          0%,100%{ transform:translate(-50%,-50%) perspective(800px) rotateY(-8deg) rotateX(4deg) translateY(0); }
          50%{ transform:translate(-50%,-50%) perspective(800px) rotateY(-5deg) rotateX(2deg) translateY(-20px); }
        }
        @keyframes float3D2 {
          0%,100%{ transform:perspective(800px) rotateY(-15deg) rotateX(8deg) translateY(0); }
          50%{ transform:perspective(800px) rotateY(-12deg) rotateX(5deg) translateY(-15px); }
        }
        @keyframes float3D3 {
          0%,100%{ transform:perspective(800px) rotateY(10deg) rotateX(-6deg) translateY(0); }
          50%{ transform:perspective(800px) rotateY(8deg) rotateX(-4deg) translateY(-10px); }
        }

        /* Badge on float card */
        .hp-float-badge {
          position: absolute; top: 12px; right: 12px;
          background: #FF6B00; color: #000; font-size: 11px; font-weight: 700;
          padding: 4px 12px; border-radius: 50px;
        }
        .hp-float-tag {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          padding: 20px 16px 12px;
          color: #fff; font-size: 14px; font-weight: 600;
        }

        /* ---- Stats Bar ---- */
        .hp-stats-bar {
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 50px 0;
        }
        .hp-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
          max-width: 900px; margin: 0 auto; text-align: center;
        }
        .hp-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 50px; font-weight: 900; color: #fff; line-height: 1;
        }
        .hp-stat-num span { color: #FF6B00; }
        .hp-stat-label { font-size: 13px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 8px; }
        @media(max-width:768px) { .hp-stats-grid { grid-template-columns: repeat(2,1fr); } }

        /* ---- Core Business ---- */
        .hp-bento-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media(max-width:900px) { .hp-bento-grid { grid-template-columns: 1fr; } }
        .hp-bento-card {
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px; padding: 48px;
          transition: border-color 0.3s ease, transform 0.3s ease;
          position: relative; overflow: hidden;
        }
        .hp-bento-card:hover { border-color: rgba(255,107,0,0.3); transform: translateY(-4px); }
        .hp-bento-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #FF6B00, transparent);
        }
        .hp-bento-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 80px; font-weight: 900;
          color: rgba(255,107,0,0.08); line-height: 1;
          position: absolute; top: 20px; right: 24px;
        }
        .hp-bento-icon {
          width: 56px; height: 56px; border-radius: 14px;
          background: rgba(255,107,0,0.1); border: 1px solid rgba(255,107,0,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; color: #FF6B00; margin-bottom: 24px;
        }
        .hp-bento-card h3 {
          font-size: 26px; font-weight: 700; color: #fff; margin-bottom: 14px;
        }
        .hp-bento-card p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 24px; }
        .hp-bento-list { margin-bottom: 32px; }
        .hp-bento-list li {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: rgba(255,255,255,0.7); margin-bottom: 10px;
        }
        .hp-bento-list li::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #FF6B00; flex-shrink: 0;
        }

        /* ---- Products ---- */
        .hp-products-section { background: #0d0d0d; padding: 100px 0; }
        .hp-product-scroll {
          display: flex; gap: 20px; overflow-x: auto;
          padding-bottom: 24px; scrollbar-width: thin; scrollbar-color: #333 transparent;
        }
        .hp-product-scroll::-webkit-scrollbar { height: 4px; }
        .hp-product-scroll::-webkit-scrollbar-track { background: transparent; }
        .hp-product-scroll::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .hp-3d-card {
          flex: 0 0 280px;
          background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .hp-prod-img { 
          height: 220px; 
          position: relative; 
          overflow: hidden; 
          background: linear-gradient(135deg, #0a0a0a 0%, #161616 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .hp-prod-img img { 
          max-width: 90%; 
          max-height: 180px; 
          object-fit: contain; 
          transition: transform 0.5s ease;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.8));
          z-index: 2;
        }
        .hp-3d-card:hover .hp-prod-img img { transform: scale(1.08); }
        .hp-prod-badge {
          position: absolute; top: 12px; left: 12px; z-index: 3;
          background: #FF6B00; color: #000; font-size: 11px; font-weight: 700;
          padding: 3px 12px; border-radius: 50px; text-transform: uppercase;
        }
        .hp-prod-body { padding: 24px; }
        .hp-prod-sub { font-size: 12px; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
        .hp-prod-name { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 16px; }
        .hp-prod-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; color: #FF6B00; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
          text-decoration: none;
        }
        .hp-prod-link:hover { gap: 10px; }

        /* ---- Industries ---- */
        .hp-industries { background: linear-gradient(160deg, #05080F 0%, #0C1324 100%); padding: 100px 0; }
        .hp-chips-wrap { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 48px; }
        .hp-chip {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px; padding: 10px 22px;
          font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.7);
          transition: all 0.3s ease;
        }
        .hp-chip i { color: #FF6B00; font-size: 14px; }
        .hp-chip:hover { border-color: rgba(255,107,0,0.4); background: rgba(255,107,0,0.06); color: #fff; transform: translateY(-2px); }

        /* ---- Testimonials ---- */
        .hp-testi-section { background: #0a0a0a; padding: 100px 0; }
        .hp-testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .hp-testi-grid { grid-template-columns: 1fr; } }
        .hp-testi-card {
          background: #111; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 36px; position: relative;
        }
        .hp-testi-stars { color: #FF6B00; font-size: 14px; margin-bottom: 16px; display: flex; gap: 4px; }
        .hp-testi-text { font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.7; margin-bottom: 28px; font-style: italic; }
        .hp-testi-author { display: flex; align-items: center; gap: 12px; }
        .hp-testi-avatar {
          width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #0057FF, #4D8FFF);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 700; color: #fff;
        }
        .hp-testi-name { font-size: 14px; font-weight: 700; color: #fff; }
        .hp-testi-role { font-size: 12px; color: rgba(255,255,255,0.35); }
        .hp-testi-quote {
          position: absolute; top: 24px; right: 28px;
          font-size: 80px; color: rgba(255,107,0,0.07); font-family: Georgia, serif;
          line-height: 1;
        }

        /* ---- Section Titles ---- */
        .hp-section-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,107,0,0.08); border: 1px solid rgba(255,107,0,0.2);
          border-radius: 50px; padding: 5px 16px;
          font-size: 11px; font-weight: 700; color: #FF6B00;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
        }
        .hp-section-tag::before { content:''; width:5px; height:5px; border-radius:50%; background:#FF6B00; }
        .hp-section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(30px, 4.5vw, 52px); font-weight: 800;
          color: #fff; line-height: 1.1; margin-bottom: 14px;
        }
        .hp-section-title span { color: #FF6B00; }
        .hp-section-sub { font-size: 16px; color: rgba(255,255,255,0.4); max-width: 560px; margin: 0 auto; line-height: 1.7; }

        /* ---- CTA Strip ---- */
        .hp-cta-strip { background: #FF6B00; padding: 90px 0; position: relative; overflow: hidden; }
        .hp-cta-strip::before {
          content: 'CLEANTECH'; position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          font-size: 200px; font-weight: 900; color: rgba(0,0,0,0.04);
          white-space: nowrap; pointer-events: none;
          font-family: 'Space Grotesk', sans-serif;
        }
        .hp-cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 60px); font-weight: 900;
          color: #000; line-height: 1.1; margin-bottom: 16px;
        }
        .hp-cta-sub { font-size: 18px; color: rgba(0,0,0,0.65); margin-bottom: 40px; }
        .hp-cta-btn-dark {
          display: inline-flex; align-items: center; gap: 10px;
          background: #000; color: #fff; padding: 16px 36px;
          font-size: 15px; font-weight: 700; text-transform: uppercase;
          border-radius: 6px; text-decoration: none;
          transition: all 0.3s ease;
        }
        .hp-cta-btn-dark:hover { background: #111; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .hp-cta-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #000; padding: 16px 36px;
          font-size: 15px; font-weight: 700; text-transform: uppercase;
          border: 2px solid rgba(0,0,0,0.4); border-radius: 6px; text-decoration: none;
          transition: all 0.3s ease;
        }
        .hp-cta-btn-outline:hover { border-color: #000; background: rgba(0,0,0,0.05); }
      `}} />

      {/* ══════════════════════════════════════
           HERO
         ══════════════════════════════════════ */}
      <main>
        <section className="hp-hero" aria-label="Cleantech Industrial Cleaning Equipment Chennai Hero">
          <div className="hp-hero-grid"></div>
          <div className="hp-orb hp-orb-1"></div>
          <div className="hp-orb hp-orb-2"></div>
          <div className="hp-orb hp-orb-3"></div>

          <div className="ct-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div className="row align-items-center" style={{ minHeight: '85vh', padding: '40px 0' }}>

              {/* Left */}
              <div className="col-lg-6">
                <div className="hp-hero-pretag">
                  <span className="hp-pulse-dot"></span>
                  15+ Years · Trusted in Chennai
                </div>

                <h1 className="hp-hero-title">
                  Chennai's #1<br />
                  Cleaning <span className="hp-title-orange">Machine</span><br />
                  <span ref={typewriterRef} id="ctTypewriter" className="hp-typewriter"></span>
                </h1>

                <p className="hp-hero-sub">
                  We supply genuine industrial scrubbers, sweepers, pressure washers &amp; vacuums — plus expert AMC, repair &amp; spare parts service across Tamil Nadu.
                </p>

                <div className="hp-hero-btns">
                  <a href="tel:+917338882034" className="hp-btn-primary" aria-label="Call Cleantech Now">
                    <i className="fas fa-phone-alt"></i> Call Now
                  </a>
                  <Link href="/sales-service" className="hp-btn-ghost" aria-label="View all products">
                    View Products <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>

                <div className="hp-mini-stats">
                  <div>
                    <div className="hp-mini-stat-num">15<span>+</span></div>
                    <div className="hp-mini-stat-label">Yrs Experience</div>
                  </div>
                  <div>
                    <div className="hp-mini-stat-num">500<span>+</span></div>
                    <div className="hp-mini-stat-label">Happy Clients</div>
                  </div>
                  <div>
                    <div className="hp-mini-stat-num">10<span>+</span></div>
                    <div className="hp-mini-stat-label">Brands</div>
                  </div>
                  <div>
                    <div className="hp-mini-stat-num">24<span>/7</span></div>
                    <div className="hp-mini-stat-label">Support</div>
                  </div>
                </div>
              </div>

              {/* Right: 3D Floating Machine Cards */}
              <div className="col-lg-6">
                <div className="hp-hero-visual">
                  <div className="hp-float-card hp-float-main">
                    <img src="/assets/img/service/new-ride-on-scrubber.png" alt="Heavy Duty Ride-On Scrubber Machine Chennai" />
                    <span className="hp-float-badge">Best Seller</span>
                    <div className="hp-float-tag">Ride-On Scrubber Dryer</div>
                  </div>
                  <div className="hp-float-card hp-float-mini-1">
                    <img src="/assets/img/service/new-auto-scrubber.png" alt="Auto Scrubber Machine" />
                    <div className="hp-float-tag" style={{ fontSize: '12px' }}>Auto Scrubber</div>
                  </div>
                  <div className="hp-float-card hp-float-mini-2">
                    <img src="/assets/img/service/new-vacuum-cleaner.png" alt="Industrial Vacuum Cleaner" />
                    <div className="hp-float-tag" style={{ fontSize: '12px' }}>Industrial Vacuum</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             ANIMATED STATS BAR
           ══════════════════════════════════════ */}
        <section className="hp-stats-bar" aria-label="Cleantech company statistics">
          <div className="ct-container">
            <div className="hp-stats-grid">
              <div className="hp-reveal">
                <div className="hp-stat-num"><span className="ct-num" data-target="15">0</span><span>+</span></div>
                <div className="hp-stat-label">Years Experience</div>
              </div>
              <div className="hp-reveal delay-1">
                <div className="hp-stat-num"><span className="ct-num" data-target="500">0</span><span>+</span></div>
                <div className="hp-stat-label">Happy Clients</div>
              </div>
              <div className="hp-reveal delay-2">
                <div className="hp-stat-num"><span className="ct-num" data-target="10">0</span><span>+</span></div>
                <div className="hp-stat-label">Machine Brands</div>
              </div>
              <div className="hp-reveal delay-3">
                <div className="hp-stat-num"><span className="ct-num" data-target="24">0</span><span>/7</span></div>
                <div className="hp-stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             CORE BUSINESS BENTO
           ══════════════════════════════════════ */}
        <section style={{ background: '#0a0a0a', padding: '100px 0' }} aria-labelledby="core-biz-heading">
          <div className="ct-container">
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <div className="hp-section-tag hp-reveal">Core Business</div>
              <h2 id="core-biz-heading" className="hp-section-title hp-reveal delay-1">Equipment <span>Sales</span> &amp; Service</h2>
              <p className="hp-section-sub hp-reveal delay-2">Two pillars of excellence — we help you buy the right machine and keep it running flawlessly.</p>
            </div>
            <div className="hp-bento-grid">
              <div className="hp-bento-card hp-reveal">
                <div className="hp-bento-num">01</div>
                <div className="hp-bento-icon"><i className="fas fa-store"></i></div>
                <h3>Equipment Sales</h3>
                <p>We supply a comprehensive range of genuine, manufacturer-certified cleaning machines at competitive prices for commercial and industrial use across Chennai.</p>
                <ul className="hp-bento-list">
                  <li>Ride-On & Walk-Behind Scrubber Dryers</li>
                  <li>Industrial Vacuum Cleaners (Wet & Dry)</li>
                  <li>Floor Sweepers & Single Disc Polishers</li>
                  <li>Genuine Spare Parts & Consumables</li>
                </ul>
                <Link href="/sales-service" className="hp-btn-primary" style={{ display: 'inline-flex' }}>
                  View All Products <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="hp-bento-card hp-reveal delay-1" style={{ borderTopColor: '#4D8FFF' }}>
                <div className="hp-bento-num" style={{ color: 'rgba(77,143,255,0.08)' }}>02</div>
                <div className="hp-bento-icon" style={{ background: 'rgba(77,143,255,0.1)', borderColor: 'rgba(77,143,255,0.2)', color: '#4D8FFF' }}><i className="fas fa-tools"></i></div>
                <h3>Equipment Service &amp; AMC</h3>
                <p>Our trained technicians provide fast, reliable maintenance and repair services to keep your cleaning equipment running at peak performance with minimal downtime.</p>
                <ul className="hp-bento-list">
                  <li>Annual Maintenance Contracts (AMC)</li>
                  <li>On-Site Repairs & Troubleshooting</li>
                  <li>Preventive Maintenance Visits</li>
                  <li>Operator Training & Demos</li>
                </ul>
                <Link href="/cleantech-service" className="hp-btn-ghost" style={{ display: 'inline-flex' }}>
                  Our Services <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             PRODUCT SHOWCASE (Horizontal Scroll + 3D Tilt)
           ══════════════════════════════════════ */}
        <section className="hp-products-section" aria-labelledby="products-heading">
          <div className="ct-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <div className="hp-section-tag hp-reveal">Our Products</div>
                <h2 id="products-heading" className="hp-section-title hp-reveal delay-1" style={{ margin: 0 }}>Top Cleaning <span>Machines</span></h2>
              </div>
              <Link href="/sales-service" className="hp-btn-ghost hp-reveal delay-2" style={{ display: 'inline-flex' }}>
                View All <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="hp-product-scroll">
              {products.map((p, i) => (
                <div key={i} className="hp-3d-card">
                  <div className="hp-prod-img">
                    <img src={p.img} alt={`${p.name} for sale in Chennai`} />
                    {p.badge && <span className="hp-prod-badge">{p.badge}</span>}
                  </div>
                  <div className="hp-prod-body">
                    <div className="hp-prod-sub">{p.sub}</div>
                    <div className="hp-prod-name">{p.name}</div>
                    <Link href={p.href} className="hp-prod-link" aria-label={`View details for ${p.name}`}>
                      View Details <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             INDUSTRIES
           ══════════════════════════════════════ */}
        <section className="hp-industries" aria-labelledby="industries-heading">
          <div className="ct-container text-center">
            <div className="hp-section-tag hp-reveal" style={{ margin: '0 auto 16px' }}>Who We Serve</div>
            <h2 id="industries-heading" className="hp-section-title hp-reveal delay-1">Industries We <span>Serve</span></h2>
            <p className="hp-section-sub hp-reveal delay-2">Cleaning solutions for a wide range of industries across Chennai and Tamil Nadu.</p>

            <div className="hp-chips-wrap hp-reveal delay-3">
              {industries.map((ind, i) => (
                <div key={i} className="hp-chip">
                  <i className={`fas ${ind.icon}`}></i> {ind.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             TESTIMONIALS
           ══════════════════════════════════════ */}
        <section className="hp-testi-section" aria-labelledby="testi-heading">
          <div className="ct-container">
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <div className="hp-section-tag hp-reveal" style={{ margin: '0 auto 16px' }}>Client Reviews</div>
              <h2 id="testi-heading" className="hp-section-title hp-reveal delay-1">What Our <span>Clients</span> Say</h2>
            </div>
            <div className="hp-testi-grid">
              <article className="hp-testi-card hp-reveal">
                <div className="hp-testi-stars">
                  {[1,2,3,4,5].map(s=><i key={s} className="fas fa-star"></i>)}
                </div>
                <p className="hp-testi-text">"We bought commercial scrubber dryers from Cleantech for our Chennai warehouse. Their cleaning equipment is top-notch, and the support was excellent from delivery to setup."</p>
                <div className="hp-testi-author">
                  <div className="hp-testi-avatar">M</div>
                  <div>
                    <div className="hp-testi-name">Manoj Prakash</div>
                    <div className="hp-testi-role">Warehouse Manager, Chennai</div>
                  </div>
                </div>
                <div className="hp-testi-quote">"</div>
              </article>
              <article className="hp-testi-card hp-reveal delay-1">
                <div className="hp-testi-stars">
                  {[1,2,3,4,5].map(s=><i key={s} className="fas fa-star"></i>)}
                </div>
                <p className="hp-testi-text">"As a factory owner, finding reliable industrial cleaning equipment was crucial. Cleantech provides genuine machines, fair pricing, and quick technical support. Our AMC has kept equipment running with zero downtime."</p>
                <div className="hp-testi-author">
                  <div className="hp-testi-avatar" style={{ background: 'linear-gradient(135deg,#FF6B00,#FF9500)' }}>M</div>
                  <div>
                    <div className="hp-testi-name">Meena Natarajan</div>
                    <div className="hp-testi-role">Factory Owner, Chennai</div>
                  </div>
                </div>
                <div className="hp-testi-quote">"</div>
              </article>
              <article className="hp-testi-card hp-reveal delay-2">
                <div className="hp-testi-stars">
                  {[1,2,3,4,5].map(s=><i key={s} className="fas fa-star"></i>)}
                </div>
                <p className="hp-testi-text">"We bought a commercial high pressure washer and an industrial vacuum cleaner through Cleantech. The team helped us choose the right model and their after-sales service has been incredibly professional."</p>
                <div className="hp-testi-author">
                  <div className="hp-testi-avatar" style={{ background: 'linear-gradient(135deg,#7C3AED,#4F46E5)' }}>R</div>
                  <div>
                    <div className="hp-testi-name">Raghava Krishnan</div>
                    <div className="hp-testi-role">Plant Manager, Chennai</div>
                  </div>
                </div>
                <div className="hp-testi-quote">"</div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
             CTA STRIP
           ══════════════════════════════════════ */}
        <section className="hp-cta-strip" aria-labelledby="cta-heading">
          <div className="ct-container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4 mb-lg-0 hp-reveal">
                <h2 id="cta-heading" className="hp-cta-title">Ready to Upgrade Your<br />Cleaning Equipment?</h2>
                <p className="hp-cta-sub">Talk to our experts today. Get the right machine at the right price with full support.</p>
              </div>
              <div className="col-lg-5 hp-reveal delay-1">
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <a href="tel:+917338882034" className="hp-cta-btn-dark" aria-label="Call Cleantech sales team">
                    <i className="fas fa-phone-alt"></i> Call +91 73388 82034
                  </a>
                  <a href="https://wa.me/919710148218" target="_blank" rel="noopener noreferrer" className="hp-cta-btn-outline" aria-label="WhatsApp Cleantech">
                    <i className="fab fa-whatsapp"></i> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
