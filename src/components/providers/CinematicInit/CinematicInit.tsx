'use client';

import { useEffect, useRef } from 'react';
import { initCinematic } from '@/lib/cinematic';
import { useAppSelector } from '@/redux/hooks';

export default function CinematicInit() {
  const currentPages = useAppSelector((state) => state.pages.currentPages);
  const initializedSlug = useRef<string | null>(null);

  useEffect(() => {
    // Only initialize if we have the content rendered and we haven't already initialized this page
    if (currentPages && currentPages.slug && currentPages.content && currentPages.content.length > 0) {
      if (initializedSlug.current !== currentPages.slug) {
        initializedSlug.current = currentPages.slug;
        setTimeout(() => {
          initCinematic();
        }, 150); // Small delay to ensure React has fully committed the DOM
      }
    } else if (!currentPages && initializedSlug.current !== 'static') {
      // In case there is no Redux state (static pages), still try to initialize
      initializedSlug.current = 'static';
      initCinematic();
    }
  }, [currentPages]);

  return null;
}
