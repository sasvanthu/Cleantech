'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const typewriterRef = useRef<HTMLSpanElement>(null);

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
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ---- Reveal Animations ---- */
        .hp-reveal { opacity: 0; transform: translateY(32px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .hp-reveal.delay-1 { transition-delay: 0.1s; }
        .hp-reveal.delay-2 { transition-delay: 0.2s; }
        .hp-reveal.delay-3 { transition-delay: 0.3s; }
        .hp-reveal.delay-4 { transition-delay: 0.4s; }
        .hp-visible { opacity: 1; transform: translateY(0); }

        /* ---- Hero Redesign ---- */
        .hp-hero {
          min-height: calc(100vh - 95px);
          background: #050810;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding-top: 50px;
          padding-bottom: 20px;
        }
        .hp-hero .ct-container {
          max-width: 1400px !important;
          width: 100% !important;
          padding-left: 3% !important;
          padding-right: 3% !important;
        }
        .hp-hero-circuit-bg {
          position: absolute; inset: 0;
          background-image: 
            radial-gradient(circle at 70% 80%, rgba(0, 212, 170, 0.15), transparent 50%),
            radial-gradient(circle at 30% 30%, rgba(0, 87, 255, 0.1), transparent 50%),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 100px),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 100px);
          background-size: 100% 100%, 100% 100%, 100px 100px, 100px 100px;
          z-index: 0;
        }
        /* Circuit lines decoration on floor */
        .hp-circuit-lines {
          position: absolute;
          bottom: -100px; left: 50%; transform: translateX(-50%);
          width: 1000px; height: 500px;
          background: radial-gradient(ellipse at center, rgba(0,212,170,0.1) 0%, transparent 60%);
          z-index: 1; pointer-events: none;
        }
        .hp-hero-pill {
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          background: linear-gradient(180deg, #2A303C, #14171E);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px; padding: 6px 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }
        .hp-hero-pill-text { font-size: 11px; font-weight: 700; color: #FF6B00; letter-spacing: 1px; }

        .hp-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 14px;
        }
        .hp-hero-title span { color: #FF6B00; }
        .hp-hero-title span.hp-title-orange { color: #FF6B00; }
        
        .hp-hero-sub {
          font-size: 15px; color: rgba(255,255,255,0.7);
          max-width: 520px; line-height: 1.55; margin-bottom: 24px;
        }
        
        .hp-hero-btns { display: inline-flex; align-items: center; gap: 16px; margin-bottom: 20px; }
        .hp-btn-primary {
          background: #FF6B00; color: #fff; padding: 13px 26px;
          font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          border-radius: 50px; text-decoration: none; display: flex; align-items: center; gap: 8px;
          transition: 0.3s; box-shadow: 0 10px 20px rgba(255,107,0,0.3); border: none;
        }
        .hp-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(255,107,0,0.4); color: #fff; }
        .hp-btn-ghost {
          background: rgba(255,255,255,0.05); color: #fff; padding: 13px 26px;
          font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          border-radius: 50px; border: 1px solid rgba(255,255,255,0.1); text-decoration: none;
          display: flex; align-items: center; gap: 8px; transition: 0.3s; backdrop-filter: blur(10px);
        }
        .hp-btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }

        /* ---- 3D Podium ---- */
        .hp-podium-wrapper {
          position: relative;
          height: 100%;
          min-height: 480px;
          width: 100%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 0px;
        }
        .hp-podium-base {
          position: absolute; bottom: 80px; left: 50%; transform: translateX(-50%);
          width: 90%; height: 180px;
          z-index: 1;
        }
        .hp-podium-layer {
          position: absolute; bottom: 0; left: 0; right: 0; margin: auto;
          border-radius: 50%;
          background: linear-gradient(180deg, #1A1F2B, #0B0E14);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 2px 10px rgba(255,255,255,0.1);
        }
        .hp-podium-layer-1 { width: 100%; height: 140px; bottom: 0; }
        .hp-podium-layer-2 { width: 85%; height: 120px; bottom: 25px; background: linear-gradient(180deg, #242B3A, #141822); }
        .hp-podium-layer-3 { 
          width: 70%; height: 100px; bottom: 50px; 
          background: linear-gradient(180deg, #2F3748, #1C2230);
          border: 2px solid #FF6B00;
          box-shadow: 0 0 30px rgba(255,107,0,0.4), inset 0 0 20px rgba(255,107,0,0.2);
        }
        
        .hp-podium-glow {
          position: absolute; bottom: 45px; left: 15%; right: 15%; height: 4px;
          background: #FF6B00; border-radius: 50%; filter: blur(4px); z-index: 2;
        }

        .hp-podium-machine {
          position: absolute; bottom: 80px; left: 50%; transform: translateX(-50%);
          width: 50%; max-width: 380px; z-index: 4;
          filter: drop-shadow(0 30px 20px rgba(0,0,0,0.8));
          animation: floatPodium 6s ease-in-out infinite;
        }
        @keyframes floatPodium { 0%,100%{ transform: translateX(-50%) translateY(0); } 50%{ transform: translateX(-50%) translateY(-15px); } }

        .hp-spec-card {
          position: absolute;
          background: rgba(8,12,24,0.85); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,107,0,0.2); border-radius: 16px;
          padding: 14px 16px; width: 185px; z-index: 10;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,107,0,0.05);
          transition: 0.3s;
        }
        .hp-spec-card:hover { transform: translateY(-5px); border-color: rgba(255,107,0,0.8); box-shadow: 0 20px 40px rgba(255,107,0,0.15); }
        .hp-spec-card-left { top: 8%; left: 2%; }
        .hp-spec-card-right { top: 4%; right: 1%; }
        
        .hp-spec-title { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .hp-spec-name { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .hp-spec-img { width: 100%; height: 90px; object-fit: contain; margin-bottom: 12px; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5)); }
        .hp-spec-list { list-style: none; padding: 0; margin: 0; font-size: 10px; color: rgba(255,255,255,0.7); }
        .hp-spec-list li { display: flex; justify-content: space-between; margin-bottom: 4px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 4px; }
        .hp-spec-list li span { color: #fff; font-weight: 600; }

        /* Action Thumbs */
        .hp-action-thumbs-wrap {
          position: absolute; bottom: 0; right: 10%; z-index: 5;
          display: flex; align-items: center; gap: 16px;
        }
        .hp-action-text {
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.6);
          text-transform: uppercase; letter-spacing: 1px; max-width: 100px; text-align: right; line-height: 1.4;
        }
        .hp-thumb-circle {
          width: 60px; height: 60px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2); overflow: hidden;
          position: relative; cursor: pointer; transition: 0.3s;
        }
        .hp-thumb-circle:hover { border-color: #4D8FFF; transform: scale(1.1); }
        .hp-thumb-circle img { width: 100%; height: 100%; object-fit: cover; }
        .hp-thumb-play {
          position: absolute; inset: 0; background: rgba(0,0,0,0.4);
          display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px;
        }
        @media (max-width: 991px) {
          .hp-hero { padding-top: 85px; padding-bottom: 15px; text-align: center; }
          .hp-hero .ct-container { padding-left: 20px !important; padding-right: 20px !important; }
          .hp-hero-pill { margin: 0 auto 20px; padding: 6px 16px; }
          .hp-hero-title { font-size: 32px; margin-bottom: 12px; }
          .hp-hero-sub { font-size: 14px; margin: 0 auto 24px; line-height: 1.5; }
          .hp-advantage-block { font-size: 20px; text-align: center; margin: 0 auto 30px; }
          .hp-hero-btns { flex-direction: column; width: 100%; margin: 0 auto 30px; align-items: stretch; gap: 12px; }
          .hp-btn-primary, .hp-btn-ghost { width: 100%; justify-content: center; }
          .hp-podium-wrapper { height: 350px; margin-top: 0; }
          .hp-podium-base { bottom: 40px; width: 100%; }
          .hp-podium-layer-1 { height: 100px; }
          .hp-podium-layer-2 { height: 80px; bottom: 20px; }
          .hp-podium-layer-3 { height: 60px; bottom: 40px; border-width: 1px; }
          .hp-podium-glow { bottom: 35px; }
          .hp-podium-machine { bottom: 70px; width: 85%; max-width: 280px; }
          .hp-spec-card { display: none; }
          .hp-circuit-lines { width: 100%; height: 300px; bottom: -50px; }
        }

        /* ---- Stats Bar ---- */
        .hp-stats-bar {
          background: #050810;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 20px 0;
        }
        .hp-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
          max-width: 1280px; margin: 0 auto; text-align: center;
          padding: 0 40px;
        }
        .hp-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 38px; font-weight: 900; color: #fff; line-height: 1;
        }
        .hp-stat-num span { color: #FF6B00; }
        .hp-stat-label { font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 4px; }
        @media(max-width:768px) { 
          .hp-stats-grid { grid-template-columns: repeat(2,1fr); gap: 15px; padding: 0 16px; } 
          .hp-stat-num { font-size: 28px; }
          .hp-stat-label { font-size: 10px; letter-spacing: 1px; }
        }

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
          <div className="hp-hero-circuit-bg"></div>
          <div className="hp-circuit-lines"></div>

          <div className="ct-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div className="row align-items-center">

              {/* Left Column */}
              <div className="col-lg-5">
                <div className="hp-hero-pill hp-reveal delay-1">
                  <span className="hp-hero-pill-text">15+ YEARS · TRUSTED IN CHENNAI</span>
                </div>

                <h1 className="hp-hero-title hp-reveal delay-2">
                  Chennai's #1<br />
                  Cleaning <span className="hp-title-orange">Machines</span>
                </h1>

                <p className="hp-hero-sub hp-reveal delay-3">
                  We supply genuine industrial scrubbers, sweepers, high-pressure washers &amp; commercial vacuums across Tamil Nadu. Empowering businesses with top-tier cleaning machinery, comprehensive AMC coverage, rapid repair support, and authentic spare parts.
                </p>

                <div className="hp-hero-btns hp-reveal delay-4">
                  <a href="tel:+917338882034" className="hp-btn-primary" aria-label="Call Cleantech Now">
                    <i className="fas fa-phone-alt"></i> Call Now
                  </a>
                  <Link href="/sales-service" className="hp-btn-ghost" aria-label="View all products">
                    View Products <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Podium */}
              <div className="col-lg-7">
                <div className="hp-podium-wrapper">

                  {/* Floating Spec Cards */}
                  <div className="hp-spec-card hp-spec-card-left hp-reveal delay-3">
                    <div className="hp-spec-title">Scrubber</div>
                    <div className="hp-spec-name">Cleantech Titan-Series Rider</div>
                    <img src="/assets/img/service/new-ride-on-scrubber-clean.png" className="hp-spec-img" alt="Scrubber" />
                    <ul className="hp-spec-list">
                      <li>Sweep path: <span>900 mm</span></li>
                      <li>Recovery tank: <span>150 L</span></li>
                      <li>Scrubbing speed: <span>240 RPM</span></li>
                    </ul>
                  </div>

                  <div className="hp-spec-card hp-spec-card-right hp-reveal delay-4">
                    <div className="hp-spec-title">Cleantech Vacuum</div>
                    <div className="hp-spec-name">Industrial Wet & Dry</div>
                    <img src="/assets/img/service/new-vacuum-cleaner-clean.png" className="hp-spec-img" alt="Vacuum" style={{ height: '70px' }} />
                    <ul className="hp-spec-list">
                      <li>Capacity: <span>80 L</span></li>
                      <li>Suction: <span>250 mBar</span></li>
                      <li>Motor: <span>3000 W</span></li>
                    </ul>
                  </div>

                  {/* Main Machine on Podium */}
                  <img src="/assets/img/service/new-ride-on-scrubber-clean.png" className="hp-podium-machine" alt="Ride-On Scrubber" />

                  {/* Podium Base */}
                  <div className="hp-podium-base hp-reveal">
                    <div className="hp-podium-layer hp-podium-layer-1"></div>
                    <div className="hp-podium-layer hp-podium-layer-2"></div>
                    <div className="hp-podium-layer hp-podium-layer-3"></div>
                    <div className="hp-podium-glow"></div>
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
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star"></i>)}
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
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star"></i>)}
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
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star"></i>)}
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
