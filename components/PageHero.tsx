import Link from 'next/link';

interface PageHeroProps {
  title: string;
  highlight?: string;
  tag?: string;
  description?: string;
  breadcrumb: string;
}

export default function PageHero({ title, highlight, tag, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="ct-page-hero">
      <div className="ct-page-hero-bg"></div>
      <div className="ct-page-hero-grid"></div>
      <div className="ct-container">
        <div className="ct-page-hero-content">
          <div className="ct-page-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>{breadcrumb}</span>
          </div>
          {tag && <div className="ct-tag white" style={{ marginBottom: '20px' }}>{tag}</div>}
          <h1>
            {title.split('\\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\\n').length - 1 && <br />}
              </span>
            ))}
            {highlight && <em>{highlight}</em>}
          </h1>
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
}
