'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchBlueprintThunk } from '@/redux/slices/blueprint/blueprintThunk';
import {
  selectActiveTheme,
  selectBlueprintLoading,
  selectBlueprintLastFetched,
  selectThemeContext,
} from '@/redux/slices/blueprint/blueprintSlice';
import { applyTheme } from '@/lib/applyTheme';

const STALE_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

interface BlueprintProviderProps {
  children: React.ReactNode;

  context?: 'public' | 'admin';
}

export function BlueprintProvider({ children, context = 'public' }: BlueprintProviderProps) {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector(selectActiveTheme);
  const loading = useAppSelector(selectBlueprintLoading);
  const lastFetched = useAppSelector(selectBlueprintLastFetched);
  const themeContext = useAppSelector(selectThemeContext);
  const didApply = useRef(false);

  // ---- Fetch blueprint on mount (with stale-while-revalidate) ----
  useEffect(() => {
    const isStale =
      !lastFetched ||
      Date.now() - new Date(lastFetched).getTime() > STALE_THRESHOLD_MS;

    if (isStale) {
      dispatch(fetchBlueprintThunk());
    }
  }, [dispatch, lastFetched]);

  // ---- Apply CSS vars whenever theme changes ----------------------
  useEffect(() => {
    if (!activeTheme) return;
    applyTheme(activeTheme, themeContext);
    didApply.current = true;
  }, [activeTheme, themeContext]);

  return <>{children}</>;
}
