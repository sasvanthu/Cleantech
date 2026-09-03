import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Cleantech | #1 Cleaning Equipment Sales & Service in Chennai',
  description: 'Cleantech is Chennai\'s premier industrial cleaning equipment company — supplying genuine scrubber dryers, ride-on sweepers, vacuum cleaners & pressure washers. Expert AMC, repair & spare parts service across Tamil Nadu.',
  keywords: 'cleaning equipment Chennai, industrial scrubber dryer, ride-on sweeper, vacuum cleaner Chennai, cleaning equipment rental, AMC service Chennai, floor scrubber, Cleantech Chennai, commercial cleaning machines',
  authors: [{ name: 'Cleantech', url: 'https://cleantech.co.in' }],
  openGraph: {
    title: 'Cleantech | Industrial Cleaning Equipment Sales & Service Chennai',
    description: 'Premium industrial and commercial cleaning equipment — scrubbers, sweepers, vacuums — available for sale with expert AMC and repair service in Chennai.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Cleantech Chennai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/klean-premium.css" />
        <link rel="stylesheet" href="/assets/css/dark-mode-overrides.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body className="ct-bg-dark">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <script src="/assets/js/vendor/jquery.min.js" defer></script>
        <script src="/assets/js/wow.min.js" defer></script>
      </body>
    </html>
  );
}
