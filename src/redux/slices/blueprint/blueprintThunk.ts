import { createAsyncThunk } from '@reduxjs/toolkit';
import { BlueprintApiResponse, BlueprintPayload, Theme, ThemeContext } from './blueprintType';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;           // https://kalptree.xyz/api
const TENANT_HEADER = process.env.NEXT_PUBLIC_TENANT_DB        // e.g. "kp_codified_web_solution"
  ?? process.env.TENANT_DB_NAME
  ?? 'kp_codified_web_solution';

const BLUEPRINT_ENDPOINT = `${API_BASE_URL}/platform/business-blueprint`;

// ============================================================
// FETCH — GET /api/platform/business-blueprint
// ============================================================

/**
 * Fetches the full business blueprint from the platform API.
 * Caches last-fetched time to prevent redundant refetches.
 */
export const fetchBlueprintThunk = createAsyncThunk<
  BlueprintApiResponse['data'],
  void,
  { rejectValue: string }
>(
  'blueprint/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: Failed to fetch blueprint`);
      }

      const json: BlueprintApiResponse = await response.json();

      if (!json.success || !json.data) {
        throw new Error(json.message || 'Blueprint fetch returned unsuccessful response');
      }

      return json.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error fetching blueprint');
    }
  }
);

// ============================================================
// UPDATE — PUT /api/platform/business-blueprint
// Updates the entire payload (full replace)
// ============================================================

export const updateBlueprintThunk = createAsyncThunk<
  BlueprintApiResponse['data'],
  Partial<BlueprintPayload>,
  { rejectValue: string }
>(
  'blueprint/update',
  async (updatedPayload, { rejectWithValue }) => {
    try {
      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
        body: JSON.stringify({ payload: updatedPayload }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: Failed to update blueprint`);
      }

      const json: BlueprintApiResponse = await response.json();
      return json.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error updating blueprint');
    }
  }
);

// ============================================================
// UPDATE THEME — Update only a specific theme section
// (public_theme or admin_theme) via PATCH-style partial update
// ============================================================

export const updateThemeThunk = createAsyncThunk<
  { context: ThemeContext; theme: Theme },
  { context: ThemeContext; theme: Partial<Theme> },
  { rejectValue: string }
>(
  'blueprint/updateTheme',
  async ({ context, theme }, { getState, rejectWithValue }) => {
    try {
      const state = getState() as any;
      const currentPayload: BlueprintPayload = state.blueprint.payload;

      if (!currentPayload) {
        return rejectWithValue('No blueprint loaded. Fetch blueprint first.');
      }

      const themeKey = context === 'admin' ? 'admin_theme' : 'public_theme';
      const mergedTheme: Theme = {
        ...currentPayload[themeKey],
        ...theme,
        colors: { ...currentPayload[themeKey].colors, ...(theme.colors || {}) },
        typography: { ...currentPayload[themeKey].typography, ...(theme.typography || {}) },
        spacing: { ...currentPayload[themeKey].spacing, ...(theme.spacing || {}) },
        radius: { ...currentPayload[themeKey].radius, ...(theme.radius || {}) },
        shadow: { ...currentPayload[themeKey].shadow, ...(theme.shadow || {}) },
        layout: { ...currentPayload[themeKey].layout, ...(theme.layout || {}) },
        buttons: { ...currentPayload[themeKey].buttons, ...(theme.buttons || {}) },
        forms: { ...currentPayload[themeKey].forms, ...(theme.forms || {}) },
        modal: { ...currentPayload[themeKey].modal, ...(theme.modal || {}) },
        darkMode: { ...currentPayload[themeKey].darkMode, ...(theme.darkMode || {}) },
      };

      const updatedPayload: Partial<BlueprintPayload> = {
        ...currentPayload,
        [themeKey]: mergedTheme,
        brandAssets: {
          ...currentPayload.brandAssets,
          [themeKey]: mergedTheme,
        },
      };

      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
        body: JSON.stringify({ payload: updatedPayload }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: Failed to update theme`);
      }

      return { context, theme: mergedTheme };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Unknown error updating theme');
    }
  }
);

// ============================================================
// UPDATE BRAND VALUE — Patch taglines, social links
// ============================================================

export const updateBrandValueThunk = createAsyncThunk<
  Pick<BlueprintPayload, 'brandValue'>,
  Partial<BlueprintPayload['brandValue']>,
  { rejectValue: string }
>(
  'blueprint/updateBrandValue',
  async (brandValueData, { getState, rejectWithValue }) => {
    try {
      const state = getState() as any;
      const currentPayload: BlueprintPayload = state.blueprint.payload;

      if (!currentPayload) return rejectWithValue('No blueprint loaded.');

      const mergedBrandValue = { ...currentPayload.brandValue, ...brandValueData };
      const updatedPayload = { ...currentPayload, brandValue: mergedBrandValue };

      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
        body: JSON.stringify({ payload: updatedPayload }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to update brand value');
      }

      return { brandValue: mergedBrandValue };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ============================================================
// UPDATE BUSINESS PROFILE — Patch contact/business info
// ============================================================

export const updateBusinessProfileThunk = createAsyncThunk<
  Pick<BlueprintPayload, 'businessProfile'>,
  Partial<BlueprintPayload['businessProfile']>,
  { rejectValue: string }
>(
  'blueprint/updateBusinessProfile',
  async (profileData, { getState, rejectWithValue }) => {
    try {
      const state = getState() as any;
      const currentPayload: BlueprintPayload = state.blueprint.payload;

      if (!currentPayload) return rejectWithValue('No blueprint loaded.');

      const mergedProfile = {
        ...currentPayload.businessProfile,
        ...profileData,
        businessInfo: { ...currentPayload.businessProfile?.businessInfo, ...(profileData.businessInfo || {}) },
        communications: { ...currentPayload.businessProfile?.communications, ...(profileData.communications || {}) },
        contactInfo: { ...currentPayload.businessProfile?.contactInfo, ...(profileData.contactInfo || {}) },
      };

      const updatedPayload = { ...currentPayload, businessProfile: mergedProfile };

      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
        body: JSON.stringify({ payload: updatedPayload }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to update business profile');
      }

      return { businessProfile: mergedProfile };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// ============================================================
// UPDATE NAVIGATION — Patch public or admin nav
// ============================================================

export const updateNavigationThunk = createAsyncThunk<
  { context: 'public' | 'admin'; navigation: BlueprintPayload['public_navigation'] },
  { context: 'public' | 'admin'; navigation: BlueprintPayload['public_navigation'] },
  { rejectValue: string }
>(
  'blueprint/updateNavigation',
  async ({ context, navigation }, { getState, rejectWithValue }) => {
    try {
      const state = getState() as any;
      const currentPayload: BlueprintPayload = state.blueprint.payload;

      if (!currentPayload) return rejectWithValue('No blueprint loaded.');

      const navKey = context === 'admin' ? 'admin_navigation' : 'public_navigation';
      const updatedPayload = { ...currentPayload, [navKey]: navigation };

      const response = await fetch(BLUEPRINT_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-tenant-db': TENANT_HEADER,
        },
        body: JSON.stringify({ payload: updatedPayload }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to update navigation');
      }

      return { context, navigation };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
