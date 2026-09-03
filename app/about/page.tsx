'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function About() {
  useEffect(() => {
    /* ---- Counter Animation ---- */
    const counters = document.querySelectorAll(".stat-counter");
    const speed = 100;
    
    const animateCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +(counter.getAttribute("data-target") || '0');
          const count = +(counter.innerHTML);
          const inc = target / speed;
          
          if (count < target) {
            counter.innerHTML = Math.ceil(count + inc).toString();
            setTimeout(updateCount, 20);
          } else {
            counter.innerHTML = target.toString();
          }
        };
        updateCount();
      });
    };
    
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observerInstance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const section = document.querySelector(".stats-counter-section");
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* breadcrumb area start */}
      <PageHero 
        title="About"
        highlight="Us"
        breadcrumb="About Us"
      />

      {/* about area start here */}
      <section className="tp-about-area-two fix pt-60 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10 mb-5 mb-lg-0">
              <div className="tp-about-img-two position-relative mr-80 wow fadeInUp" data-wow-delay=".4s">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/img/about/about-2.jpg" className="img-fluid tilt-3d" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }} alt="Commercial Cleaning Equipment Chennai" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/img/about/about-3.png" className="img-fluid img-second premium-floating-img tilt-3d" style={{ borderRadius: '50%', boxShadow: '0 25px 60px rgba(0,0,0,0.25)', border: '12px solid #ffffff' }} alt="Industrial Cleaning Services" />
                
                {/* Modernized Glassmorphism Badge */}
                <div className="premium-about-badge tilt-3d">
                  <div className="badge-content">
                    <div className="d-flex align-items-baseline justify-content-center">
                      <h3>15</h3><span className="plus">+</span>
                    </div>
                    <p>Years of<br />Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-text-two wow fadeInUp" data-wow-delay=".7s">
                <div className="section-title-wrapper mb-20">
                  <h2 className="tp-section-title-two translate-y--10"><span style={{ color: '#00d4aa' }}>Your Trusted Partner for</span> Commercial Cleaning Equipment Sales & Service in Chennai</h2>
                </div>
                
                <p className="mb-30" style={{ fontSize: '17px', lineHeight: 1.7, color: '#555' }}>With over 15 years of industry excellence, Cleantech is the leading provider of premium cleaning equipment tailored for commercial and industrial applications across Chennai and Tamil Nadu. Whether you need to purchase or service heavy-duty cleaning machines, we deliver end-to-end solutions that keep your facility spotless and running efficiently.</p>
                
                <ul className="premium-feature-list mb-40">
                  <li><i className="fas fa-check-circle"></i> <strong>Industrial Sweepers & Vacuum Cleaners</strong></li>
                  <li><i className="fas fa-check-circle"></i> <strong>Ride-On Scrubber Dryers</strong></li>
                  <li><i className="fas fa-check-circle"></i> <strong>High-Pressure Washers</strong></li>
                  <li><i className="fas fa-check-circle"></i> <strong>Reliable AMC & Spare Parts Support</strong></li>
                </ul>

                <div className="premium-trust-card">
                  <div className="trust-icon">
                    <i className="flaticon-shuttle"></i>
                  </div>
                  <div className="trust-content">
                    <h4>Genuine Products, Guaranteed!</h4>
                    <p>We supply only genuine, manufacturer-certified cleaning equipment backed by warranty, comprehensive spare parts availability, and dedicated expert technical support.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end here */}

      {/* Stats Strip */}
      <section className="py-5 stats-counter-section" style={{ background: 'linear-gradient(135deg,#0a1628 0%,#003566 100%)' }}>
        <div className="container">
          <div className="row text-center text-white g-4">
            <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".2s">
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: '#00d4aa', fontSize: '48px', margin: 0 }}><span className="stat-counter" data-target="15">0</span>+</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: '4px 0 0' }}>Years Experience</p>
            </div>
            <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".4s">
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: '#00d4aa', fontSize: '48px', margin: 0 }}><span className="stat-counter" data-target="500">0</span>+</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: '4px 0 0' }}>Happy Clients</p>
            </div>
            <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".6s">
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: '#00d4aa', fontSize: '48px', margin: 0 }}><span className="stat-counter" data-target="10">0</span>+</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: '4px 0 0' }}>Machine Brands</p>
            </div>
            <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay=".8s">
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 900, color: '#00d4aa', fontSize: '48px', margin: 0 }}><span className="stat-counter" data-target="24">0</span>/7</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: '4px 0 0' }}>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* cta area start here */}
      <section className="tp-cta-area-two" style={{ marginTop: '50px' }}>
        <div className="tp-cta-area-two-bg">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="tp-cta-two mb-30 wow fadeInUp floating-card" data-wow-delay=".2s" style={{ background: '#000' }} >
                <div className="tp-cta-two-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="tp-cta-two-text fix">
                  <h4 className="tp-cta-two-text-title"><Link href="/about">Genuine Cleaning Equipment Brands</Link></h4>
                  <p>Authorized supplier of genuine, certified cleaning machines and tools for commercial and industrial use in Chennai.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="tp-cta-two mb-30 wow fadeInUp floating-card" data-wow-delay=".5s" style={{ background: '#000' }}>
                <div className="tp-cta-two-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <div className="tp-cta-two-text fix">
                  <h4 className="tp-cta-two-text-title"><Link href="/about">Expert Technical & Rental Support</Link></h4>
                  <p>Our trained technicians provide installation, operator training and after-sales technical support across Chennai.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="tp-cta-two mb-30 wow fadeInUp floating-card" data-wow-delay=".8s" style={{ background: '#000' }}>
                <div className="tp-cta-two-icon">
                  <i className="fas fa-stopwatch"></i>
                </div>
                <div className="tp-cta-two-text fix">
                  <h4 className="tp-cta-two-text-title"><Link href="/about">Fast Service Response & AMC Support</Link></h4>
                  <p>Quick turnaround on service requests, AMC contracts and transparent pricing with round the clock support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cta area end here */}

      {/* feature area start here */}
      <section className="tp-feature-area-two pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="section-title-wrapper-two mb-60 wow fadeInUp" data-wow-delay=".2s">
                <h5 className="tp-section-subtitle-three mb-20" style={{ color: '#000' }}>Why Cleantech?</h5>
                <h2 className="tp-section-title-two mb-20">Why Choose <span style={{ color: '#00d4aa' }}>Cleantech</span></h2>
                <p>Choose us for our reputation in genuine products, expert technical support and dependable service. For more than 15 years, we've earned a name for quality and reliability.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay=".4s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-happy"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/about">Genuine Products</Link></h4>
                <p>We supply 100% genuine, manufacturer-certified cleaning machines and spare parts for our customers.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay=".6s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-network"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/about">Expert Technical Support</Link></h4>
                <p>Our trained technicians provide installation guidance, operator training and after-sales technical support.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay=".8s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-cleaning"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/cleaning-services">Professional Cleaning Services</Link></h4>
                <p>Comprehensive office, commercial, factory and industrial cleaning services tailored to your needs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay="1s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-delivery-box"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/cleantech-service">Fast Service Response</Link></h4>
                <p>Quick turnaround on service requests with transparent pricing and reliable on-site support.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay="1.2s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-shuttle"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/cleantech-service">AMC Support</Link></h4>
                <p>Annual Maintenance Contracts to keep your equipment running at peak performance year-round.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-45">
              <div className="tp-feature premium-feature-card h-100 wow fadeInUp" data-wow-delay="1.4s">
                <div className="premium-feature-icon mb-20">
                  <i className="flaticon-24-hours-support"></i>
                </div>
                <h4 className="tp-feature-title mb-15"><Link href="/sales-service">Spare Parts Availability</Link></h4>
                <p>A wide range of genuine spare parts and consumables always in stock for fast replacement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature area end here */}

      {/* testimonial area start here */}
      <section className="tp-testimonial-area position-relative pt-40 pb-40">
        <div className="tp-testimonial-shape tp-about-testimonial-shape"></div>
        <div className="container">
          <div className="tp-testimonial-bg white-bg z-index">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-testimonial-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/img/testimonial/testimonial-1.jpg" alt="img not found" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="tp-testimonial tp-abouts-testimonial ml-70">
                  <div className="section-title-wrapper">
                    <div className="mb-20">
                      <span style={{ display: 'inline-block', padding: '6px 24px', background: '#00d4aa', borderRadius: '30px', color: '#0a1628', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 700, boxShadow: '0 4px 10px rgba(0,212,170,0.3)' }}>Customer is the King for us</span>
                    </div>
                    <h2 className="tp-section-title mb-20 heading-color-black">Our Client Feedback</h2>
                  </div>
                  <div className="tp-testimonial-active swiper-container">
                    <div className="swiper-wrapper">
                      <div className="tp-testimonial-single swiper-slide z-index">
                        <p className="mb-45" style={{ fontSize: '19px', fontStyle: 'italic', lineHeight: 1.8, color: '#1a202c', background: 'linear-gradient(90deg, rgba(0,212,170,0.08) 0%, transparent 100%)', borderLeft: '5px solid #00d4aa', padding: '25px 30px', borderRadius: '0 10px 10px 0', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>We rented two commercial scrubber dryers from Cleantech for our Chennai warehouse. Their industrial cleaning equipment is top-notch, and the support was excellent from delivery to pickup. The machines were well-maintained and the team was very responsive.</p>
                        <div className="tp-testimonial-author">
                          <div className="tp-testimonial-author-text">
                            <h4 className="tp-testimonial-author-text-name heading-color-black" style={{ fontSize: '22px', color: '#0a1628', fontWeight: 800, marginBottom: '5px' }}>Manoj Prakash</h4>
                            <span className="tp-testimonial-author-text-designation" style={{ color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' }}>Chennai</span>
                          </div>
                        </div>
                        <div className="tp-testimonial-qoute">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/assets/img/icon/test-qoute.png" alt="img not found" style={{ opacity: 0.3, transform: 'scale(1.1)' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation buttons restored per user request */}
            <div className="tp-testimonial-slider-arrow">
              <div className="testimonial-button-next slide-next"><i className="far fa-chevron-right"></i></div>
              <div className="testimonial-button-prev slide-prev" style={{ backgroundColor: '#000' }}><i className="far fa-chevron-left"></i></div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end here */}
    </>
  );
}
