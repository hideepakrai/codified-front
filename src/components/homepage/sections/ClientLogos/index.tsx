"use client";
import { useMemo } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import { defaultClientLogosData } from './ClientLogosData';
import { motion } from 'motion/react';

export default function ClientLogos() {
  const currentPages = useAppSelector((state) => state.app.currentPages);

  const section = useMemo(() => {
    if (!currentPages) return null;
    return currentPages.content?.find((s: any) => s?.adminTitle === 'Client Logos');
  }, [currentPages]);

  const { content } = useMemo(() => {
    return {
      content: (section as any)?.content || defaultClientLogosData.content,
    };
  }, [section]);

  return (
    <div
      className="overflow-hidden py-10 relative z-10"
 
      data-annotate-id={`${currentPages?.slug || 'home'}-clientlogos-section`}
    >
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-0)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-0)] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-fit animate-marquee hover:[animation-play-state:paused]"
      >
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {content.map((item: any) => (
            <div key={item.id} className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default">
              <img src={item.props?.icon} alt={item.props?.name?.en} className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 object-contain" />
              <span className="text-black font-semibold text-[10px] md:text-[12px] text-center tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                {item.props?.name?.en}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {content.map((item: any) => (
            <div key={`dup-${item.id}`} className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default">
              <img src={item.props?.icon} alt={item.props?.name?.en} className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 object-contain" />
              <span className="text-black font-semibold text-[10px] md:text-[12px] text-center tracking-tight" style={{ fontFamily: 'var(--font-sans)' }}>
                {item.props?.name?.en}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
