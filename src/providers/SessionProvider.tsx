'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/slices/auth/authSlice';
import { checkSession } from '@/lib/session';

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkSession().then((session) => {
      if (session) {
        dispatch(setAuth({
          access_token: session.token,
          expires_at: '',
          session: session.user,
        }));
      }
    });
  }, [dispatch]);

  return <>{children}</>;
}
