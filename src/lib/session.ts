import { AuthUser } from '@/redux/slices/auth/authType';

const api = process.env.NEXT_PUBLIC_API_URL;

export interface SessionResult {
  token: string;
  user: AuthUser;
}

export async function checkSession(): Promise<SessionResult | null> {
  if (typeof window === 'undefined') return null;

  const token = localStorage.getItem('shared_data');
  if (!token){
     
    return null;
  };
  console.log("get daat. token ")
  try {
    const res = await fetch(`${api}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "x-tenant-db":"kp_codified_web_solution",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("resss-->",res)

    if (!res.ok) {
      localStorage.removeItem('kalpzero-enterprise-auth');
      return null;
    }

    const user: AuthUser = await res.json();
    console.log("user-->",user)
    return { token, user };
  } catch {
    return null;
  }
}
