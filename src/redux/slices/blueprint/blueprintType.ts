// ============================================================
// BLUEPRINT TYPES
// Mirrors the full shape of /api/platform/business-blueprint
// ============================================================

// ---- Theme sub-types ----------------------------------------

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  violet: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderHover: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
}

export interface ThemeTypographyText {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  two_xl?: string;   // API uses two_xl in payload.public_theme
  three_xl?: string;
  four_xl?: string;
  five_xl?: string;
  '2xl'?: string;   // brandAssets uses '2xl'
  '3xl'?: string;
  '4xl'?: string;
  '5xl'?: string;
}

export interface ThemeTypographyFontWeight {
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
}

export interface ThemeTypographyLineHeight {
  tight: number;
  normal: number;
  relaxed: number;
}

export interface ThemeTypography {
  bodyFont: string;
  headingFont: string;
  monoFont: string;
  text: ThemeTypographyText;
  fw: ThemeTypographyFontWeight;
  lineHeight: ThemeTypographyLineHeight;
}

export interface ThemeSpacing {
  sp_1?: string;  sp_2?: string;  sp_3?: string;  sp_4?: string;
  sp_5?: string;  sp_6?: string;  sp_8?: string;  sp_10?: string;
  sp_12?: string; sp_16?: string; sp_20?: string; sp_24?: string;
  // brandAssets uses numeric keys
  '1'?: string; '2'?: string; '3'?: string; '4'?: string;
  '5'?: string; '6'?: string; '8'?: string; '10'?: string;
  '12'?: string; '16'?: string; '20'?: string; '24'?: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  two_xl?: string;  // payload key
  '2xl'?: string;   // brandAssets key
  full: string;
}

export interface ThemeShadow {
  sm: string;
  md: string;
  lg: string;
  hover: string;
}

export interface ThemeLayout {
  container: string;
  navbarHeight: string;
  sectionPadding: string;
}

export interface ThemeButtons {
  height: string;
  paddingX: string;
  radius: string;
  primaryBackground: string;
  primaryText: string;
  primaryHover: string;
  secondaryBackground: string;
  secondaryText: string;
  secondaryHover: string;
}

export interface ThemeForms {
  inputHeight: string;
  inputPaddingX: string;
  inputPaddingY: string;
  inputRadius: string;
  inputBackground: string;
  inputText: string;
  inputBorder: string;
  inputBorderHover: string;
  inputPlaceholder: string;
  inputFocusBorder: string;
  inputFocusShadow: string;
  inputDisabledBackground: string;
  inputDisabledText: string;
  textareaMinHeight: string;
}

export interface ThemeModal {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeDarkMode {
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  inputBackground: string;
  inputText: string;
  inputBorder: string;
  inputPlaceholder: string;
  inputDisabledBackground: string;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  shadow: ThemeShadow;
  layout: ThemeLayout;
  buttons: ThemeButtons;
  forms: ThemeForms;
  modal: ThemeModal;
  darkMode: ThemeDarkMode;
}

// ---- Navigation & Routing -----------------------------------

export type NavItemKind = 'link' | 'cta' | 'module' | 'dropdown';

export interface NavItem {
  label: string;
  href: string;
  kind: NavItemKind;
  icon?: string;
  children?: NavItem[];
}

export interface RouteDefinition {
  key: string;
  path: string;
  page_slug: string;
  visibility: 'public' | 'admin' | 'private';
}

// ---- Brand Value -------------------------------------------

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface BrandTaglines {
  primary?: string;
  primary_slogan?: string;
  short_message?: string;
  secondary_message?: string;
}

export interface BrandValue {
  coreValues: string[];
  taglines: BrandTaglines;
  socialLinks: SocialLink[];
  values: string[];
  brandTaglines: BrandTaglines;
  socialMedia: SocialLink[];
}

// ---- Business Profile --------------------------------------

export interface BusinessInfo {
  name: string;
  industry: string;
  legalName: string;
  foundedDate: string;
}

export interface BusinessCommunications {
  supportEmail: string;
  salesEmail: string;
  pressEmail: string;
  primaryEmail: string;
}

export interface BusinessContactInfo {
  primaryPhone: string;
  whatsapp: string;
  website: string;
  workingHours: string;
}

export interface BusinessLegalRegulatory {
  registrationNumber: string;
  taxId: string;
}

export interface BusinessProfile {
  businessInfo: BusinessInfo;
  communications: BusinessCommunications;
  contactInfo: BusinessContactInfo;
  legalRegulatory: BusinessLegalRegulatory;
}

// ---- Brand Assets ------------------------------------------

export interface BrandAssets {
  admin_theme: Theme;
  public_theme: Theme;
}

// ---- Commerce ----------------------------------------------

export interface StoreAddress {
  line1: string; line2: string; city: string;
  state: string; postalCode: string; country: string;
}

export interface TaxRegistration {
  type: string; number: string; legalEntity: string;
}

export interface OrderNumber {
  prefix: string; suffix: string; padding: number; nextNumber: number;
}

export interface PaymentGateway {
  id: string; name: string; enabled: boolean; publicKey: string; testMode: boolean;
}

export interface Commerce {
  storeConfig: {
    address: StoreAddress;
    taxRegistration: TaxRegistration;
    orderNumber: OrderNumber;
  };
  currenciesTaxes: {
    currency: { baseCurrency: string };
    formatting: { symbolPosition: string; thousandsSeparator: string; decimalSeparator: string; decimalPlaces: number };
    tax: { pricesIncludeTax: boolean; taxRules: any[] };
  };
  paymentProviders: {
    gateways: PaymentGateway[];
    manualMethods: any[];
  };
  shippingRegions: {
    localFulfillment: { localPickup: boolean; localDelivery: boolean };
    freeShipping: { threshold: number };
    zones: any[];
  };
  checkoutPolicies: {
    customerAccounts: { guestCheckout: boolean; requireAccount: boolean; marketingOptIn: boolean };
    requiredFields: { requirePhone: boolean; requireCompany: boolean };
    policies: {
      refund: { label: string; url: string };
      shipping: { label: string; url: string };
      terms: { label: string; url: string };
      privacy: { label: string; url: string };
    };
  };
}

// ---- Localization -------------------------------------------

export interface Language {
  code: string;
  name: string;
  enabled: boolean;
}

export interface Localization {
  languages: { available: Language[]; default: string };
  currency: string | null;
}

// ---- Media Configuration -----------------------------------

export interface MediaConfiguration {
  selectedProvider: 'local' | 'cloudinary' | 's3';
  cloudinary: { cloudName: string; apiKey: string; apiSecret: string };
  s3: { bucketName: string; region: string; accessKeyId: string; secretAccessKey: string; endpoint: string };
}

// ---- Dashboard Widgets -------------------------------------

export interface DashboardWidget {
  key: string;
  title: string;
  metric: string;
  description: string;
}

// ---- Vocabulary --------------------------------------------

export interface Vocabulary {
  customer: string;
  order: string;
  booking: string;
  staff: string;
  location: string;
}

// ---- Templates & Tone Tags ---------------------------------

export interface TemplatePreview {
  surface: string; accent: string; ink: string;
  glow: string; layout: string; moodLabel: string;
}

export interface Template {
  id: string;
  label: string;
  shortDescription: string;
  longDescription: string;
  styleFamily: string;
  toneTagIds: string[];
  compatibleBusinessTypeIds: string[];
  recommendedSectionIds: string[];
  recommendedFeatureIds: string[];
  preview: TemplatePreview;
  promptFragments: { designDirection: string[] };
}

export interface ToneTag {
  id: string;
  label: string;
}

// ---- Primary Goal ------------------------------------------

export interface PrimaryGoal {
  id: string;
  label: string;
}

// ---- Full Blueprint Payload ---------------------------------

export interface BlueprintPayload {
  tenant_id: string;
  tenant_slug: string;
  version: number;
  business_label: string;
  vertical_packs: string;
  enabled_modules: string[];

  // Themes (at payload level — same shape as brandAssets)
  public_theme: Theme;
  admin_theme: Theme;

  // Navigation
  public_navigation: NavItem[];
  admin_navigation: NavItem[];

  // Routing
  routes: RouteDefinition[];

  // Brand
  brandAssets: BrandAssets;
  brandValue: BrandValue;
  businessProfile: BusinessProfile;
  branding: null | any;

  // Commerce & Config
  commerce: Commerce;
  localization: Localization;
  mediaConfiguration: MediaConfiguration;

  // Dashboard & UI config
  dashboard_widgets: DashboardWidget[];
  vocabulary: Vocabulary;
  templates: Template[];
  toneTags: ToneTag[];
  primaryGoal: PrimaryGoal;

  // Meta
  admin_email: string;
  agency_slug: string;
  business_type: string;
  infra_mode: string;
  masterPrompt: string;
  tags: null | string[];

  // Deprecated / empty in current data
  storeConfiguration: string;
  currenciesAndTaxes: string;
  paymentProviders: string;
  shippingRegions: string;
  checkoutPolicies: string;
}

// ---- API Response Wrapper ----------------------------------

export interface BlueprintApiResponse {
  message: string;
  success: boolean;
  data: {
    id: string;
    document_key: string;
    tenant_slug: string;
    payload: BlueprintPayload;
    updatedAt: string;
  };
}

// ---- Redux State -------------------------------------------

export type ThemeContext = 'public' | 'admin';

export interface BlueprintState {
  payload: BlueprintPayload | null;
  activeThemeContext: ThemeContext;
  loading: boolean;
  updating: boolean;
  error: string | null;
  lastFetched: string | null; // ISO timestamp
}
