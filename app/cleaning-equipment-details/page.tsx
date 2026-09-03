import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function CleaningEquipmentDetails() {
  return (
    <>
      
        {/*  breadcrumb area start  */}
        <div className="tp-page-title-area pt-180 pb-70 position-relative fix" data-background="assets/img/slider/breadcrumb-9.jpg">
            <div className="tp-custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-page-title z-index">
                            <h2 className="breadcrumb-title">Cleaning Equipment <span style={{ color: '#00d4aa' }}>Details</span></h2>
                            <div className="breadcrumb-menu">
                                <nav className="breadcrumb-trail breadcrumbs">
                                    <ul className="trail-items">
                                        <li className="trail-item trail-begin"><a href="/index">Home</a></li>
                                        <li className="trail-item trail-begin"><a href="/cleaning-services">Services</a></li>
                                        <li className="trail-item trail-end"><span>Equipment Details</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  breadcrumb area end  */}

        <section className="tp-service-details-area pt-100 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11">
                        
                        {/*  Auto Scrubber  */}
                        <div className="equipment-block" id="auto-scrubber">
                            <div className="row align-items-center">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <img src="/assets/img/service/new-auto-scrubber.png" alt="Auto Scrubber" className="equipment-img" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="tp-service-details-subtitle">Auto Scrubber (Walk-Behind Scrubber)</h3>
                                    <p>An indispensable tool for maintaining medium to large commercial spaces in Chennai. <strong>Auto scrubbers</strong> operate by dispensing a cleaning solution, scrubbing the floor with rotating brushes or pads, and immediately vacuuming up the dirty water—all in a single pass.</p>
                                    <h5 className="mt-4 mb-3" style={{ fontWeight: '700', color: '#0a1628' }}>Key Benefits & Features:</h5>
                                    <ul className="premium-check-list">
                                        <li><strong>High Efficiency:</strong> Cleans up to 3 times faster than manual mopping.</li>
                                        <li><strong>Instant Drying:</strong> Powerful suction leaves floors dry instantly, reducing slip-and-fall hazards.</li>
                                        <li><strong>Deep Cleaning:</strong> Mechanized scrubbing removes stubborn grime that manual mops leave behind.</li>
                                        <li><strong>Ideal For:</strong> Shopping malls, hospitals, school corridors, and commercial office lobbies larger than 6,000 sq.ft.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*  Ride on Scrubber  */}
                        <div className="equipment-block" id="ride-on-scrubber">
                            <div className="row align-items-center flex-row-reverse">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <img src="/assets/img/service/new-ride-on-scrubber.png" alt="Ride on Scrubber" className="equipment-img" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="tp-service-details-subtitle">Ride-On Scrubber</h3>
                                    <p>Designed for vast, expansive environments, the <strong>Ride-On Scrubber</strong> allows operators to comfortably sit while navigating the machine across massive floor areas. It combines heavy-duty scrubbing power with high-capacity solution tanks.</p>
                                    <h5 className="mt-4 mb-3" style={{ fontWeight: '700', color: '#0a1628' }}>Key Benefits & Features:</h5>
                                    <ul className="premium-check-list">
                                        <li><strong>Maximum Coverage:</strong> Cleans massive square footage in a fraction of the time, dramatically lowering labor costs.</li>
                                        <li><strong>Operator Comfort:</strong> Ergonomic seating reduces operator fatigue during long cleaning shifts.</li>
                                        <li><strong>Extended Operation:</strong> Larger battery capacity and water tanks mean fewer pit stops for refilling and charging.</li>
                                        <li><strong>Ideal For:</strong> Large manufacturing plants, massive warehouses, airport terminals, and expansive indoor parking facilities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*  Ride on Sweeper  */}
                        <div className="equipment-block" id="ride-on-sweeper">
                            <div className="row align-items-center">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <img src="/assets/img/service/new-ride-on-sweeper.png" alt="Ride on Sweeper" className="equipment-img" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="tp-service-details-subtitle">Ride-On Sweeper</h3>
                                    <p>Tackle heavy debris, dust, and particulate matter with ease using our industrial <strong>Ride-On Sweepers</strong>. Perfect for both indoor and outdoor applications in Chennai's industrial hubs, these machines control dust while quickly gathering debris.</p>
                                    <h5 className="mt-4 mb-3" style={{ fontWeight: '700', color: '#0a1628' }}>Key Benefits & Features:</h5>
                                    <ul className="premium-check-list">
                                        <li><strong>Dust-Free Operation:</strong> Equipped with advanced filtration systems to trap fine dust, preventing it from becoming airborne.</li>
                                        <li><strong>Versatility:</strong> Can easily transition from sweeping fine dust in a factory to picking up larger debris in a parking lot.</li>
                                        <li><strong>Heavy-Duty:</strong> Built with robust materials to withstand harsh industrial environments.</li>
                                        <li><strong>Ideal For:</strong> Construction sites, large parking areas, industrial yards, and cement factories.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*  Single Disc Scrubber  */}
                        <div className="equipment-block" id="single-disc-scrubber">
                            <div className="row align-items-center flex-row-reverse">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <img src="/assets/img/service/new-single-disc.png" alt="Single Disc Scrubber" className="equipment-img" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="tp-service-details-subtitle">Single Disc Scrubber Machine</h3>
                                    <p>The <strong>Single Disc Scrubber</strong> is the most versatile floor care machine available. Using interchangeable pads and brushes, it can be customized for scrubbing, stripping, polishing, or buffing a wide variety of hard floor surfaces.</p>
                                    <h5 className="mt-4 mb-3" style={{ fontWeight: '700', color: '#0a1628' }}>Key Benefits & Features:</h5>
                                    <ul className="premium-check-list">
                                        <li><strong>Multi-Purpose:</strong> Polish marble, strip wax from vinyl, or scrub concrete floors simply by changing the pad.</li>
                                        <li><strong>Compact Design:</strong> Easily maneuverable in tight spaces, hallways, and cluttered rooms where larger machines can't fit.</li>
                                        <li><strong>Precision Cleaning:</strong> Delivers concentrated weight and power for intensive spot cleaning.</li>
                                        <li><strong>Ideal For:</strong> Hotels, offices, restaurants, and retail spaces requiring floor restoration and daily maintenance.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*  Vacuum Cleaner  */}
                        <div className="equipment-block" id="vacuum-cleaner">
                            <div className="row align-items-center">
                                <div className="col-md-5 mb-4 mb-md-0">
                                    <img src="/assets/img/service/new-vacuum-cleaner.png" alt="Vacuum Cleaner" className="equipment-img" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="tp-service-details-subtitle">Industrial Wet & Dry Vacuum Cleaner</h3>
                                    <p>Essential for any thorough cleaning job, our <strong>Industrial Vacuum Cleaners</strong> are engineered for powerful suction and unmatched durability. Capable of handling both liquid spills and dry dust, they are the ultimate cleanup tool.</p>
                                    <h5 className="mt-4 mb-3" style={{ fontWeight: '700', color: '#0a1628' }}>Key Benefits & Features:</h5>
                                    <ul className="premium-check-list">
                                        <li><strong>Wet & Dry Capability:</strong> Seamlessly switch between vacuuming dry dust and extracting liquid spills without changing filters.</li>
                                        <li><strong>High Suction Power:</strong> Commercial-grade motors ensure deep extraction of dirt from carpets and crevices.</li>
                                        <li><strong>Large Capacity:</strong> High-volume tanks reduce the frequency of emptying during major cleanups.</li>
                                        <li><strong>Ideal For:</strong> Post-construction cleanup, flooded areas, deep carpet cleaning, and everyday janitorial use.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    
    </>
  );
}
