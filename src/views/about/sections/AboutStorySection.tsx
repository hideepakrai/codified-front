'use client';
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';

const getText = (value: any, fallback = '') => {
  if (!value) return fallback;
  if (typeof value === 'string') return value;
  return value.en || fallback;
};

export default function AboutStorySection() {
  const currentPages = useAppSelector((state) => state.app.currentPages);
  const storyCards = useMemo(() => {
    const section = currentPages?.content?.find((s: any) => s?.adminTitle === 'About Story');
    return section?.content;
  }, [currentPages]);

  const fallbackCards = [
    {
      title: 'What Drives Us',
      desc: 'We believe technology should solve real problems, not create new ones. We focus on user-first solutions, building with precision and technical excellence to create long-term value for our clients. Whether it is AI integration or custom web development, we build tech that delivers powerful results.'
    },
    {
      title: 'How We Work',
      desc: 'We follow a transparent, agile, and collaborative development process to keep our clients involved every step of the way. From idea validation to deployment, we ensure speed, quality, and flexibility. Your vision becomes our mission, every sprint, every line of code.'
    },
    {
      title: 'What Sets Us Apart',
      desc: 'We do not just code, we co-create. Our focus is on deep partnerships and custom-built solutions that align with your business DNA. Whether it is launching an MVP or scaling an enterprise app, we tailor every project for maximum impact.'
    }
  ];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)', minHeight: 'auto', paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="inner">
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {(Array.isArray(storyCards) && storyCards.length ? storyCards : fallbackCards).map((item: any, index: number) => (
            <div key={index} className="card" style={{ padding: '32px' }}>
              <h3 className="display" style={{ fontSize: '24px', color: 'var(--text)' }}>{getText(item?.props?.title, item.title)}</h3>
              <p style={{ color: 'var(--text-soft)', fontSize: '15px', marginTop: '12px' }}>
                {getText(item?.props?.desc, item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
