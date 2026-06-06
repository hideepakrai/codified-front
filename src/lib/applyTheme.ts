import { Theme, ThemeContext, ThemeTypography } from '@/redux/slices/blueprint/blueprintType';

// ============================================================
// applyTheme
// Reads theme tokens from the Redux blueprint payload and
// injects them as CSS custom properties onto :root / .dark
// so that all existing var(--primary), var(--background), etc.
// references update instantly without touching CSS files.
// ============================================================

/**
 * Maps camelCase API keys → CSS variable names
 */
const COLOR_MAP: Record<string, string> = {
  primary: '--primary',
  primaryLight: '--primary-light',
  primaryDark: '--primary-dark',
  primaryHover: '--primary-hover',
  secondary: '--secondary',
  accent: '--accent',
  violet: '--violet',
  background: '--background',
  surface: '--surface',
  card: '--card',
  text: '--text',
  textSecondary: '--text-secondary',
  textMuted: '--text-muted',
  border: '--border',
  borderHover: '--border-hover',
  success: '--success',
  warning: '--warning',
  danger: '--danger',
  info: '--info',
};

const DARK_MODE_MAP: Record<string, string> = {
  background: '--background',
  surface: '--surface',
  card: '--card',
  text: '--text',
  textSecondary: '--text-secondary',
  textMuted: '--text-muted',
  border: '--border',
  inputBackground: '--input-bg',
  inputText: '--input-text',
  inputBorder: '--input-border',
  inputPlaceholder: '--input-placeholder',
  inputDisabledBackground: '--input-disabled-bg',
};

const SPACING_MAP: Record<string, string> = {
  sp_1: '--space-1', '1': '--space-1',
  sp_2: '--space-2', '2': '--space-2',
  sp_3: '--space-3', '3': '--space-3',
  sp_4: '--space-4', '4': '--space-4',
  sp_5: '--space-5', '5': '--space-5',
  sp_6: '--space-6', '6': '--space-6',
  sp_8: '--space-8', '8': '--space-8',
  sp_10: '--space-10', '10': '--space-10',
  sp_12: '--space-12', '12': '--space-12',
  sp_16: '--space-16', '16': '--space-16',
  sp_20: '--space-20', '20': '--space-20',
  sp_24: '--space-24', '24': '--space-24',
};

const RADIUS_MAP: Record<string, string> = {
  sm: '--radius-sm',
  md: '--radius-md',
  lg: '--radius-lg',
  xl: '--radius-xl',
  two_xl: '--radius-2xl', '2xl': '--radius-2xl',
  full: '--radius-full',
};

const SHADOW_MAP: Record<string, string> = {
  sm: '--shadow-sm',
  md: '--shadow-md',
  lg: '--shadow-lg',
  hover: '--shadow-hover',
};

const BUTTON_MAP: Record<string, string> = {
  height: '--btn-height',
  paddingX: '--btn-padding-x',
  radius: '--btn-radius',
  primaryBackground: '--btn-primary-bg',
  primaryText: '--btn-primary-text',
  primaryHover: '--btn-primary-hover',
  secondaryBackground: '--btn-secondary-bg',
  secondaryText: '--btn-secondary-text',
  secondaryHover: '--btn-secondary-hover',
};

const FORM_MAP: Record<string, string> = {
  inputHeight: '--input-height',
  inputPaddingX: '--input-padding-x',
  inputPaddingY: '--input-padding-y',
  inputRadius: '--input-radius',
  inputBackground: '--input-bg',
  inputText: '--input-text',
  inputBorder: '--input-border',
  inputBorderHover: '--input-border-hover',
  inputPlaceholder: '--input-placeholder',
  inputFocusBorder: '--input-focus-border',
  inputFocusShadow: '--input-focus-shadow',
  inputDisabledBackground: '--input-disabled-bg',
  inputDisabledText: '--input-disabled-text',
  textareaMinHeight: '--textarea-min-height',
};

const MODAL_MAP: Record<string, string> = {
  sm: '--modal-sm',
  md: '--modal-md',
  lg: '--modal-lg',
};

const LAYOUT_MAP: Record<string, string> = {
  container: '--container',
  navbarHeight: '--navbar-height',
  sectionPadding: '--section-padding',
};

const TEXT_SIZE_MAP: Record<string, string> = {
  xs: '--text-xs',
  sm: '--text-sm',
  base: '--text-base',
  md: '--text-md',
  lg: '--text-lg',
  xl: '--text-xl',
  '2xl': '--text-2xl', two_xl: '--text-2xl',
  '3xl': '--text-3xl', three_xl: '--text-3xl',
  '4xl': '--text-4xl', four_xl: '--text-4xl',
  '5xl': '--text-5xl', five_xl: '--text-5xl',
};

const FW_MAP: Record<string, string> = {
  light: '--fw-light',
  normal: '--fw-normal',
  medium: '--fw-medium',
  semibold: '--fw-semibold',
  bold: '--fw-bold',
  extrabold: '--fw-extrabold',
};

const LINE_HEIGHT_MAP: Record<string, string> = {
  tight: '--leading-tight',
  normal: '--leading-normal',
  relaxed: '--leading-relaxed',
};

// ============================================================
// Helper: apply a batch of values using a map
// ============================================================
function applyMap(
  root: HTMLElement,
  values: Record<string, any>,
  map: Record<string, string>
): void {
  for (const [apiKey, cssVar] of Object.entries(map)) {
    const value = values[apiKey];
    if (value !== undefined && value !== null) {
      root.style.setProperty(cssVar, String(value));
    }
  }
}

// ============================================================
// Inject Google Fonts dynamically for any font changes
// ============================================================
function injectGoogleFonts(typography: ThemeTypography): void {
  if (typeof document === 'undefined') return;
  const { bodyFont, headingFont, monoFont } = typography;

  const existingLink = document.getElementById('blueprint-google-fonts');
  const fonts = [bodyFont, headingFont, monoFont]
    .filter(Boolean)
    .map((f) => `family=${f.replace(/\s+/g, '+')}:wght@300..800`)
    .join('&');

  const href = `https://fonts.googleapis.com/css2?${fonts}&display=swap`;

  if (existingLink) {
    (existingLink as HTMLLinkElement).href = href;
  } else {
    const link = document.createElement('link');
    link.id = 'blueprint-google-fonts';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

// ============================================================
// Main export: applyTheme
// ============================================================

/**
 * Applies all CSS custom properties from a blueprint Theme
 * to `document.documentElement` (`:root`).
 *
 * @param theme - The Theme object from Redux (public_theme or admin_theme)
 * @param context - 'public' or 'admin' — for future context-aware selectors
 */
export function applyTheme(theme: Theme, context: ThemeContext = 'public'): void {
  if (typeof document === 'undefined') return; // SSR guard

  const root = document.documentElement;

  // 1. Colors
  applyMap(root, theme.colors, COLOR_MAP);

  // 2. Typography fonts
  if (theme.typography?.bodyFont) {
    root.style.setProperty('--font-body', `"${theme.typography.bodyFont}", system-ui, sans-serif`);
  }
  if (theme.typography?.headingFont) {
    root.style.setProperty(
      '--font-heading',
      `"${theme.typography.headingFont}", "${theme.typography.bodyFont || 'Inter'}", system-ui, sans-serif`
    );
  }
  if (theme.typography?.monoFont) {
    root.style.setProperty('--font-mono', `"${theme.typography.monoFont}", ui-monospace, monospace`);
  }

  // 3. Typography sizes, weights, line heights
  if (theme.typography?.text) applyMap(root, theme.typography.text, TEXT_SIZE_MAP);
  if (theme.typography?.fw) applyMap(root, theme.typography.fw, FW_MAP);
  if (theme.typography?.lineHeight) applyMap(root, theme.typography.lineHeight, LINE_HEIGHT_MAP);

  // 4. Spacing
  if (theme.spacing) applyMap(root, theme.spacing, SPACING_MAP);

  // 5. Radius
  if (theme.radius) applyMap(root, theme.radius, RADIUS_MAP);

  // 6. Shadows
  if (theme.shadow) applyMap(root, theme.shadow, SHADOW_MAP);

  // 7. Layout
  if (theme.layout) applyMap(root, theme.layout, LAYOUT_MAP);

  // 8. Buttons
  if (theme.buttons) applyMap(root, theme.buttons, BUTTON_MAP);

  // 9. Forms
  if (theme.forms) applyMap(root, theme.forms, FORM_MAP);

  // 10. Modal
  if (theme.modal) applyMap(root, theme.modal, MODAL_MAP);

  // 11. Dark mode overrides — apply to .dark selector via a style tag
  if (theme.darkMode) {
    applyDarkModeVars(theme);
  }

  // 12. Inject fonts if needed
  if (theme.typography) {
    injectGoogleFonts(theme.typography);
  }
}

/**
 * Applies dark mode overrides by injecting a <style> tag
 * targeting the `.dark` class, since you can't set vars
 * on a selector via JS (only on :root).
 */
function applyDarkModeVars(theme: Theme): void {
  const darkVars = Object.entries(DARK_MODE_MAP)
    .map(([apiKey, cssVar]) => {
      const value = (theme.darkMode as any)[apiKey];
      return value ? `  ${cssVar}: ${value};` : '';
    })
    .filter(Boolean)
    .join('\n');

  const styleId = 'blueprint-dark-vars';
  let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleId;
    document.head.appendChild(styleTag);
  }
  styleTag.textContent = `.dark {\n${darkVars}\n}`;
}
