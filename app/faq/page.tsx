import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function Faq() {
  return (
    <>
      
        {/*  breadcrumb area start  */}
        <div className="tp-page-title-area pt-180 pb-70 position-relative fix" data-background="assets/img/slider/breadcrumb-3.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-page-title z-index">
                            <h2 className="breadcrumb-title">Frequently Asked <span style={{ color: '#00d4aa' }}>Questions</span></h2>
                            <div className="breadcrumb-menu">
                                <nav className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><a href="/index">Home</a>
                                        </li>
                                        <li className="trail-item trail-end"><span>FAQ</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  breadcrumb area end  */}
        {/*  faq area start here  */}
        <section className="tp-faq-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                            <h5 className="tp-section-subtitle-three mb-20" style={{ color: '#000' }}>Frequently Asked Questions</h5>
                            <h2 className="tp-section-title-two color-theme-blue">Get the Answers <br />You Need</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion" id="accordionExample">
                            
                            {/*  FAQ 1  */}
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}>
                                        Where can I buy the best commercial and industrial cleaning machines in Chennai?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                        Cleantech is widely recognized for delivering the best commercial and industrial cleaning machines sales in Chennai. We offer top-tier auto scrubbers, sweepers, and vacuum cleaners perfectly suited for offices, factories, warehouses, and corporate facilities across the city to ensure your workspace remains spotless and flawlessly maintained.
                                    </div>
                                </div>
                            </div>
                            
                            {/*  FAQ 2  */}
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}>
                                        Where can I rent professional cleaning machines like auto scrubbers in Chennai?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                        If you need to rent professional cleaning machines in Chennai, Cleantech offers a premium fleet of auto scrubbers, sweepers, and vacuum cleaners. Our cost-effective machines rental plans include daily, weekly, and long-term options, complete with zero maintenance costs, ensuring your facility stays clean without heavy machinery investments.
                                    </div>
                                </div>
                            </div>

                            {/*  FAQ 3  */}
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}>
                                        Do you provide eco-friendly cleaning machines for offices in Chennai?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                        Yes, we provide highly effective, eco-friendly cleaning machines and tools tailored for offices and commercial properties throughout Chennai. Our premium cleaning machinery sales and rentals utilize advanced technology that aggressively eliminates dirt while drastically minimizing the overall environmental footprint and water consumption of your business operations.
                                    </div>
                                </div>
                            </div>
                            
                            {/*  FAQ 4  */}
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}>
                                        Who provides reliable repair and maintenance for cleaning machines in Chennai?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                        Cleantech provides highly reliable repair and maintenance services for all major brands of cleaning machinery across Chennai. Our locally based, certified technicians offer quick turnaround times, on-site troubleshooting, and genuine spare parts, ensuring your auto scrubbers and sweepers experience minimal downtime and continue operating at absolute peak performance.
                                    </div>
                                </div>
                            </div>

                            {/*  FAQ 5  */}
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{ fontWeight: '600', fontFamily: "'Outfit', sans-serif" }}>
                                        How can I contact the top cleaning machines supplier in Chennai?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-muted">
                                        Contacting the top cleaning machines supplier in Chennai is simple with Cleantech. You can easily request a customized quote for machine sales, rentals, or servicing by filling out the quick inquiry form on our Contact page. Alternatively, call our local Chennai support team directly to discuss your requirements today.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  faq area end here  */}
    
    </>
  );
}
