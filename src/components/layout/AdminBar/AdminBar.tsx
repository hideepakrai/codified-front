'use client';

import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import EditModeToggle from '@/components/layout/EditModeToggle/EditModeToggle';

const OPERATOR_ROLES = new Set(['admin', 'staff', 'business_admin', 'tenant_admin', 'platform_admin', 'super_admin']);

export default function AdminBar() {
  const { authUser, isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const role = authUser?.role?.toLowerCase() || '';
  if (!isAuthenticated || !OPERATOR_ROLES.has(role)) return null;
  const base = (process.env.NEXT_PUBLIC_KALP_ADMIN_URL || 'https://zero.kalptree.xyz').replace(/\/+$/, '');
  const tenant = process.env.NEXT_PUBLIC_TENANT_SLUG || 'codified-web-solution';
  return (
    <div className="sticky top-0 z-[10000] flex min-h-10 items-center justify-between gap-3 border-b border-cyan/20 bg-[#070b14]/95 px-4 py-2 text-xs text-white backdrop-blur">
      <div className="flex items-center gap-3"><strong>Kalp operator</strong><span className="text-white/50">{role.replaceAll('_', ' ')}</span></div>
      <div className="flex items-center gap-3"><EditModeToggle /><a className="text-cyan hover:underline" href={`${base}/${tenant}/dashboard`}>Open Admin</a></div>
    </div>
  );
}
