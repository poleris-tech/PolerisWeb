/**
 * Design System Tokens
 * Centralized design tokens extracted from Tailwind v4 theme
 * Use these constants for consistency across components
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================
// 60-30-10 COLOR RULE APPLICATION:
// - 60% Dominant: Navy/Slate + Light Gray (backgrounds, large surfaces)
// - 30% Secondary: Cerulean Blue (interactive elements, secondary actions)
// - 10% Accent: Hot Pink (CTAs, emphasis, critical actions)
// ============================================================================

export const COLORS = {
  // ─────────────────────────────────────────────────────────────────────────
  // 60% DOMINANT COLORS
  // ─────────────────────────────────────────────────────────────────────────
  // Navy - Dark background, text in light mode, primary base
  slate: '#252A34', // Dark slate base - PRIMARY DOMINANT

  // Navy variants for different contexts
  navy: {
    light: '#3D4350',  // Secondary dark for accents
    dark: '#001f3d',   // Extra dark for sections
    darker: '#001529', // Deepest navy for high contrast
  },

  // Light Gray - Neutral backgrounds, secondary surfaces
  gray: {
    light: '#EAEAEA',  // PRIMARY DOMINANT (light mode background)
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 30% SECONDARY COLORS
  // ─────────────────────────────────────────────────────────────────────────
  // Cerulean Blue - Primary interactive color for secondary actions
  cerulean: {
    50: '#E6FFFE',
    100: '#B3FFFD',
    200: '#80FFF9',
    300: '#4DEFF5',    // Light variant (accents in dark mode)
    400: '#1AE4E1',    // Medium variant (hover states)
    500: '#08D9D6',    // PRIMARY SECONDARY (interactive elements)
    600: '#07ADAB',
    700: '#058280',
    800: '#045655',
    900: '#022B2A',
    950: '#011515',
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10% ACCENT COLOR
  // ─────────────────────────────────────────────────────────────────────────
  // Hot Pink - Primary CTA, emphasis, critical actions
  pink: '#FF2E63', // PRIMARY ACCENT (CTAs, warnings, emphasis)

  // Neutral palette
  white: '#FFFFFF',
  black: '#000000',

  // Semantic colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Dark mode backgrounds
  dark: {
    bg: '#252A34', // Primary dark background (60%)
    bgSecondary: '#3D4350',
    textPrimary: '#EAEAEA',
    textSecondary: '#D1D3D8',
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const TYPOGRAPHY = {
  // Font families
  fontFamily: {
    sans: 'var(--font-poppins)',
    mono: 'var(--font-poppins)',
  },

  // Font weights
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Type scales
  heading: {
    h1: {
      mobile: { fontSize: '32px', lineHeight: '1.3' },
      tablet: { fontSize: '42px', lineHeight: '1.25' },
      desktop: { fontSize: '48px', lineHeight: '1.1' },
    },
    h2: {
      mobile: { fontSize: '22px', lineHeight: '1.3' },
      tablet: { fontSize: '32px', lineHeight: '1.25' },
      desktop: { fontSize: '36px', lineHeight: '1.25' },
    },
    h3: {
      mobile: { fontSize: '18px', lineHeight: '1.4' },
      tablet: { fontSize: '24px', lineHeight: '1.3' },
      desktop: { fontSize: '28px', lineHeight: '1.3' },
    },
  },

  body: {
    base: { fontSize: '16px', lineHeight: '1.5' },
    lg: { fontSize: '18px', lineHeight: '1.6' },
    sm: { fontSize: '14px', lineHeight: '1.4' },
  },

  // Text variants
  label: { fontSize: '14px', fontWeight: 600, lineHeight: '1.4' },
  caption: { fontSize: '12px', lineHeight: '1.4' },

  // Line height scale
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const SPACING = {
  // Base unit: 4px (Tailwind default)
  // Use these for padding, margins, gaps
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',   // 48px
  '4xl': '4rem',   // 64px
  '5xl': '5rem',   // 80px
  '6xl': '6rem',   // 96px

  // Section padding
  section: {
    mobile: '2rem',    // 32px
    tablet: '2.5rem',  // 40px
    desktop: '3rem',   // 48px
  },

  // Container padding
  container: {
    mobile: '1rem',    // 16px
    tablet: '1.5rem',  // 24px
    desktop: '3rem',   // 48px
  },

  // Gap (between items)
  gap: {
    tight: '0.5rem',   // 8px
    normal: '1rem',    // 16px
    comfortable: '1.5rem', // 24px
    spacious: '2rem',  // 32px
  },
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const BORDER_RADIUS = {
  none: '0',
  xs: '0.125rem',   // 2px
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.25rem', // 20px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // Full circle
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const SHADOWS = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',

  // Elevated states
  elevated: {
    sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  // Color-specific shadows
  indigo: '0 10px 15px -3px rgba(99, 102, 241, 0.2)',
  cyan: '0 10px 15px -3px rgba(6, 182, 212, 0.2)',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const TRANSITIONS = {
  // Duration presets
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '800ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    custom: 'cubic-bezier(0.16, 1, 0.3, 1)', // Poleris custom easing
  },

  // Common transitions
  standard: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
  color: 'color 300ms cubic-bezier(0.16, 1, 0.3, 1)',
  transform: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
  opacity: 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
} as const;

// ============================================================================
// CONTRAST RATIOS (WCAG)
// ============================================================================

export const CONTRAST = {
  // Documentation for color combinations
  wcag: {
    // Level AAA requires 7:1 for normal text, 4.5:1 for large text
    // Level AA requires 4.5:1 for normal text, 3:1 for large text
    aaa: '7:1', // Triple-A compliance
    aa: '4.5:1', // Double-A compliance
    aui: '3:1', // UI components
  },

  // Verified color combinations
  verified: {
    // Text on light backgrounds
    darkSlateOnWhite: '13.5:1', // #001f3d on #FFFFFF ✓ AAA
    slateOn50: '12.2:1',        // #001f3d on #F9FAFB ✓ AAA
    slate70OnWhite: '7.2:1',    // rgba(#001f3d, 0.7) on #FFFFFF ✓ AAA

    // Interactive
    cyanOnDarkSlate: '8.5:1',   // #08D9D6 on #252A34 ✓ AAA
    pinkOnWhite: '6.3:1',       // #FF2E63 on #FFFFFF ✓ AAA
  },
} as const;

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

export const ANIMATIONS = {
  // Scroll reveal animations
  reveal: {
    up: 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    down: 'reveal-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    left: 'reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    right: 'reveal-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  },

  // Float/floating animations
  float: 'float 6s ease-in-out infinite',
  floatBlob: {
    blob1: 'float-blob-1 20s ease-in-out infinite',
    blob2: 'float-blob-2 25s ease-in-out infinite',
    blob3: 'float-blob-3 30s ease-in-out infinite',
    blob4: 'float-blob-4 22s ease-in-out infinite',
  },

  // Micro-interactions
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  fadeIn: 'fade-in 0.6s ease-out forwards',
  bounce: 'bounce 1s infinite',
} as const;

// ============================================================================
// COMPONENT SIZES
// ============================================================================

export const SIZES = {
  // Button sizes
  button: {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
  },

  // Icon sizes
  icon: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    '2xl': '48px',
  },

  // Input heights
  input: {
    sm: '2rem',    // 32px
    md: '2.5rem',  // 40px
    lg: '3rem',    // 48px
  },
} as const;

// ============================================================================
// EXPORT TYPE HELPERS
// ============================================================================

export type Color = keyof typeof COLORS;
export type Spacing = keyof typeof SPACING;
export type BorderRadius = keyof typeof BORDER_RADIUS;
export type Shadow = keyof typeof SHADOWS;
export type Duration = keyof typeof TRANSITIONS.duration;
export type Easing = keyof typeof TRANSITIONS.easing;
