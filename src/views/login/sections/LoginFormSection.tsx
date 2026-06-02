'use client';
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser, clearError } from '@/redux/slices/auth/authSlice';
import { Eye, EyeOff, LogIn, AlertCircle, Loader2 } from 'lucide-react';


const api = process.env.NEXT_PUBLIC_API_URL;
export default function LoginFormSection() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated, loading, error } = useAppSelector((s) => s.auth);

  const [email, setEmail] = useState('business@codified.com');
  const [password, setPassword] = useState('1234567899');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.push('/');
  }, [isAuthenticated, router]);

  useEffect(() => {
    return () => { dispatch(clearError()); };
  }, [dispatch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    dispatch(loginUser({ email: email.trim(), password }));
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--line-strong)',
    padding: '16px 20px',
    borderRadius: '12px',
    color: '#fff',
    outline: 'none',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
  } as const;

  return (
    <section className="section" style={{ padding: '40px 6vw', width: '100%' }}>
      <div className="inner" style={{ maxWidth: '440px', margin: '0 auto' }}>
        <div className="card" style={{ padding: '48px', position: 'relative', overflow: 'hidden' }}>
          <div className="corner tl"></div><div className="corner tr"></div>
          <div className="corner bl"></div><div className="corner br"></div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'rgba(29,195,243,0.1)', border: '1px solid rgba(29,195,243,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', color: 'var(--cyan)',
            }}>
              <LogIn size={24} />
            </div>
            <h1 className="display" style={{ fontSize: '28px', margin: 0 }}>
              Welcome back
            </h1>
            <p style={{ fontSize: '14px', opacity: 0.5, marginTop: '8px', fontFamily: 'var(--font-mono)' }}>
              SIGN_IN_TO_CONTINUE
            </p>
          </div>

          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '14px 18px', borderRadius: '10px', marginBottom: '24px',
              background: 'rgba(243,0,0,0.08)', border: '1px solid rgba(243,0,0,0.2)',
              color: '#ff6b6b', fontSize: '13px',
            }}>
              <AlertCircle size={16} style={{ flexShrink: 0 }} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px', letterSpacing: '0.1em' }}>
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="focus:border-cyan-500/50 transition-colors"
                autoComplete="email"
                required
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.5, marginBottom: '10px', letterSpacing: '0.1em' }}>
                PASSWORD
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="············"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: '48px' }}
                  className="focus:border-cyan-500/50 transition-colors"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)',
                    cursor: 'pointer', padding: '4px', display: 'flex',
                  }}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn"
              style={{
                width: '100%', justifyContent: 'center', padding: '18px',
                background: loading ? 'var(--line-strong)' : 'var(--cyan)',
                color: '#04060d', fontWeight: 600, fontSize: '15px',
                border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', gap: '10px',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> SIGNING_IN...</>
              ) : (
                <><LogIn size={18} /> SIGN_IN</>
              )}
            </button>
          </form>

          <div style={{ textAlign: 'center', fontSize: '11px', opacity: 0.3, fontFamily: 'var(--font-mono)', marginTop: '24px' }}>
            SECURE_AUTH_ENDPOINT_ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
}
