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

// How old the data can be before a refetch is triggered (ms)
const STALE_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

interface BlueprintProviderProps {
  children: React.ReactNode;
  /**
   * 'public' — applies public_theme CSS vars (for the marketing site)
   * 'admin'  — applies admin_theme CSS vars (for the dashboard)
   * Defaults to 'public'
   */
  context?: 'public' | 'admin';
}

/**
 * BlueprintProvider
 *
 * Drop this into your root layout (layout.tsx / _app.tsx).
 * It will:
 *   1. Dispatch fetchBlueprintThunk on mount (with stale check)
 *   2. Watch the active theme from Redux
 *   3. Call applyTheme() whenever the theme changes → CSS vars update
 *
 * Usage:
 *   <BlueprintProvider context="public">
 *     {children}
 *   </BlueprintProvider>
 */
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
