export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  first_name: string | null;
  last_name: string | null;
  role: string;
  tenant_id: string;
  agency_id: string | null;
  isTenantOwner: boolean;
  addresses: any;
  wishlist: any;
}

export interface LoginResponse {
  access_token: string;
  expires_at: string;
  session: AuthUser;
}
