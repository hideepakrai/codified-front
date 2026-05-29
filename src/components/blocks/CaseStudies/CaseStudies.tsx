'use client';
import Link from 'next/link';

const CASE_STUDIES = [
  {
    title: 'NestCraft Living',
    tag: 'Boutique Brands',
    desc: 'Sculpting Premium Living: How NestCraft Became a Design-Led Furniture Brand.',
    href: '/who-we-create-for/nestcraft-living',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Karlo Ban',
    tag: 'Craftsmanship',
    desc: 'When Craft Meets Collaboration: Forging a Brand for a Master Bladesmith.',
    href: '/who-we-create-for/karlo-ban',
    image: '/images/services/karloban-img.png',
  },
  {
    title: 'Allied Surplus',
    tag: 'E-Commerce',
    desc: 'Mission-Ready Commerce: Building a High-Performance Tactical Store.',
    href: '/who-we-create-for/allied-surplus',
    image: '/images/services/Dog_Tags_Small_Banner.webp',
  },
  {
    title: 'Castania',
    tag: 'Boutique Brands',
    desc: 'From Commodity to Premium: Building Castania into a Scalable Boutique Brand.',
    href: '/who-we-create-for/castania',
    image: '/images/services/castania-hero-img.png',
  },
  {
    title: 'MyRent',
    tag: 'Tourism & Travel',
    desc: 'Building Clarity at Scale: How MyRent Transformed a Complex Platform into a Growth System.',
    href: '/who-we-create-for/myrent',
    image: '/images/services/my-rent-case-study.png',
  },
  {
    title: 'SABL',
    tag: 'Non-Profit / Agriculture',
    desc: 'Empowering Rural Growth: A cohesive digital platform connecting agricultural science with grassroots communities.',
    href: '/who-we-create-for/sabl',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Acadivate',
    tag: 'Academic Tech & Publishing',
    desc: 'Advancing Academic Research: Connecting scholars and institutions through a unified global platform.',
    href: '/who-we-create-for/acadivate',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'PeeKeeper',
    tag: 'E-Commerce & Pet Care',
    desc: 'Peace of Mind for Pet Parents: Revitalizing the shopping experience for a patented pet care product.',
    href: '/who-we-create-for/peekeeper',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
  }
];

export default function CaseStudies() {
  return (
    <section className="section" id="case-studies" style={{ padding: '80px 6vw' }}>
      <div className="inner" style={{ maxWidth: 'none' }}>
        <span className="label"><span className="num">09 ·</span> Case Studies</span>
        <div className="head" style={{ marginTop: '24px', marginBottom: '40px' }}>
          <div className="copy">
            <h2 className="display">Who We <span className="grad-text">Create For.</span></h2>
            <p className="lede">Explore our featured case studies demonstrating scalable growth, premium branding, and optimized e-commerce solutions.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {CASE_STUDIES.map((cs, i) => (
            <Link href={cs.href} key={i} style={{ textDecoration: 'none' }}>
              <div 
                className="card group" 
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '1px solid var(--line)',
                  background: 'var(--bg-1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  height: '220px', 
                  width: '100%',
                  background: 'var(--bg-2)',
                  borderBottom: '1px solid var(--line)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={cs.image} 
                    alt={cs.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    onError={(e) => {
                      // Fallback if local image doesn't exist yet
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, var(--bg-1), var(--bg-2))';
                    }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{cs.tag}</span>
                    <span style={{ fontSize: '18px', color: 'var(--text)', transition: 'color 0.3s ease' }} className="group-hover:text-[var(--cyan)]">→</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>{cs.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-soft)', margin: 0 }}>{cs.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
