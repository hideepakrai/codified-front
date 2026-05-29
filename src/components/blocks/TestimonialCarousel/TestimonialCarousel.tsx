'use client';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useRef } from 'react';

const TESTIMONIALS = [
  {
    name: 'Sofia Rodriguez',
    role: 'Steel Grey, Creative Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
    quote: '"Our brand stands for elegance and exclusivity, and we needed a website to match. Codified created a sophisticated digital presence that perfectly reflects our identity. The user experience is seamless, and the design elements are truly high-end. We couldn\'t be happier with the result."',
    rating: 5,
    logo: 'https://codifiedweb.com/api/media/file/Steel-Grey-Transparent-1.webp'
  },
  {
    name: 'Faisal Al-Mansour',
    role: 'Arab Marble, CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    quote: '"Showcasing our premium marble collection online required a website that was both elegant and technically sound. Codified delivered a stunning platform where our clients can easily browse our catalog. Their attention to detail in highlighting the texture and quality of our products is unmatched."',
    rating: 5,
    logo: 'https://codifiedweb.com/api/media/file/Logo_mosaico_Black-2.webp'
  },
  {
    name: 'Vikram Singh',
    role: 'United Finance, Managing Director',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=80&q=80',
    quote: '"In the finance sector, trust is key. Codified designed a secure, professional website that instills confidence in our clients immediately. Their SEO strategy also helped us generate qualified leads."',
    rating: 5,
    logo: 'https://codifiedweb.com/api/media/file/unitedfinlogo-1.webp'
  },
  {
    name: 'Lisa Williams',
    role: 'PeeKeeper, Product Manager',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
    quote: '"Codified did an amazing job optimizing our product pages and simplifying the checkout process. Our customers find the site so much easier to use now, and the support has been exceptional."',
    rating: 4,
    logo: 'https://codifiedweb.com/api/media/file/peekeeper-logo-new-2.webp'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Make My Website, CEO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80',
    quote: '"We needed a robust, scalable solution, and Codified proved to be the ideal partner. Their technical expertise is top-notch, delivering the project on time and communicating clearly at every stage."',
    rating: 5,
    logo: 'https://codifiedweb.com/api/media/file/logo-1.webp'
  }
];

const initials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
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
              style={{ minWidth: '340px', maxWidth: '420px', padding: '28px 28px 24px', flexShrink: 0 }}
            >
              {/* ── Person header ── */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                {/* Avatar circle */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid rgba(29,195,243,0.3)',
                  boxShadow: '0 0 0 3px rgba(29,195,243,0.07)',
                  background: 'rgba(29,195,243,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)'
                }}>
                  <User size={24} />
                </div>

                {/* Name + role */}
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    color: 'var(--text-mute)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>{t.role}</div>
                </div>
              </div>

              {/* ── Quote ── */}
              <p style={{
                color: 'var(--text-soft)',
                fontStyle: 'italic',
                fontSize: '14px',
                lineHeight: '1.65',
                flex: 1,
              }}>
                {t.quote}
              </p>

              {/* ── Footer: logo + stars ── */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--line)',
              }}>
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-mute)',
                    opacity: 0.8
                }}>
                  {t.role.split(',')[0]}
                </div>
                <div style={{ color: 'var(--amber)', fontSize: '13px', letterSpacing: '1px' }}>
                  {'★'.repeat(Math.floor(t.rating))}{(t.rating % 1 !== 0) ? '½' : ''}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-4 mt-6">
          <button onClick={scrollLeft} className="btn ghost" aria-label="Previous">
            <ChevronLeft size={16} /> Prev
          </button>
          <button onClick={scrollRight} className="btn ghost" aria-label="Next">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
