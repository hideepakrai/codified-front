'use client';

import { useEffect } from 'react';
import { initCinematic } from '@/lib/cinematic';

export default function CinematicInit() {
  useEffect(() => {
    initCinematic();
  }, []);

  return null;
}
