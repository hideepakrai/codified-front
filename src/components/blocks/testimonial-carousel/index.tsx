'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const TESTIMONIALS = [
  {
    name: 'Sofia Rodriguez',
    role: 'Steel Grey, Creative Director',
    quote: '"Our brand stands for elegance and exclusivity, and we needed a website to match. Codified created a sophisticated digital presence that perfectly reflects our identity. The user experience is seamless, and the design elements are truly high-end. We couldn\'t be happier with the result."',
    rating: 5,
  },
  {
    name: 'Faisal Al-Mansour',
    role: 'Arab Marble, CEO',
    quote: '"Showcasing our premium marble collection online required a website that was both elegant and technically sound. Codified delivered a stunning platform where our clients can easily browse our catalog. Their attention to detail in highlighting the texture and quality of our products is unmatched."',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'United Finance, Managing Director',
    quote: '"In the financial sector, trust and security are paramount. Codified built a robust platform that not only looks professional but instills confidence in our clients. They streamlined our onboarding process and delivered a solution that exceeds our strict compliance standards."',
    rating: 5,
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="testimonials" data-mood="testimonials" style={{ padding: '80px 6vw' }}>
      <div className="inner" style={{ maxWidth: 'none' }}>
          <span className="label"><span className="num">08 ·</span> Testimonials</span>
          <div className="head" style={{ marginTop: '24px' }}>
            <div className="copy">
              <h2 className="display">What Our <span className="grad-text">Clients Say.</span></h2>
              <p className="lede">Empowering businesses across diverse industries with scalable and innovative digital solutions that exceed expectations.</p>
            </div>
            <div className="status-bar">
              <span className="pill"><i /> Clutch 5.0 ★</span>
              <span className="pill violet"><i /> Top Rated</span>
            </div>
          </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
        >
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className="card flex flex-col justify-between snap-start"
              style={{ minWidth: '340px', maxWidth: '420px', padding: '32px' }}
            >
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--text)', marginBottom: '8px' }}>{t.name}</h4>
                <p style={{ color: 'var(--text-soft)', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  {t.quote}
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-mute)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>{t.role}</p>
                <div style={{ color: 'var(--amber)', fontSize: '14px' }}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-4 mt-6">
          <button 
            onClick={scrollLeft}
            className="btn ghost"
          >
            ← Prev
          </button>
          <button 
            onClick={scrollRight}
            className="btn ghost"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
