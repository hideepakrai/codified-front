"use client";
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function DynamicLogoSlider() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const response = await fetch('/api/logos');
        if (response.ok) {
          const data = await response.json();
          setImages(data.images || []);
        }
      } catch (error) {
        console.error("Failed to fetch logos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLogos();
  }, []);

  if (isLoading) return null;
  if (images.length === 0) return null; // Don't render anything if there are no images

  // Create an array with enough duplicates to ensure a smooth infinite scroll
  // If there are very few images, we need to duplicate them more times to fill the screen width
  const sliderImages = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden py-10 relative z-10 w-full">
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[rgba(4,6,13,1)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[rgba(4,6,13,1)] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-fit animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: '100s' }}
      >
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {sliderImages.map((src, index) => (
            <div
              key={`logo-group1-${index}`}
              className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default"
            >
              <img
                src={src}
                alt="Client Logo"
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 pr-4 md:gap-6 md:pr-6 shrink-0">
          {sliderImages.map((src, index) => (
            <div
              key={`logo-group2-${index}`}
              className="flex flex-col items-center justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-2xl shadow-[0_0_15px_rgba(29,195,243,0.1)] shrink-0 transition-transform duration-300 hover:-translate-y-2 cursor-default"
            >
              <img
                src={src}
                alt="Client Logo"
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
