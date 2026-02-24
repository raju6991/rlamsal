import { createGlobalTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: {
      default: null,
      dark: null,
      light: null,
    },
    secondary: {
      default: null,
      dark: null,
      light: null,
    },
    background: {
      default: null,
      alt: null,
    },
    text: {
      primary: null,
      secondary: null,
    },
    accent: null,
    border: null,
    red: null,
  },
  font: {
    body: null,
    heading: null,
    mono: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
  },
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  transition: {
    fast: null,
    normal: null,
    slow: null,
  },
  maxWidth: {
    content: null,
  },
});

createGlobalTheme(':root', vars, {
  color: {
    primary: {
      default: '#DC143C',
      dark: '#8B0000',
      light: '#FF6B6B',
    },
    secondary: {
      default: '#4169E1',
      dark: '#000080',
      light: '#6B8EFF',
    },
    background: {
      default: '#FFFFFF',
      alt: '#FAFAFA',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4D4D4D',
    },
    accent: '#FF6B6B',
    border: '#E5E5E5',
    red: '#DC143C',
  },
  font: {
    body: '"Cartograph", sans-serif',
    heading: '"Cartograph", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 4px 20px rgba(0, 0, 0, 0.08)',
    xl: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
  transition: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
  maxWidth: {
    content: '1200px',
  },
});

createGlobalTheme('[data-theme="dark"]', vars, {
  color: {
    primary: {
      default: '#FF4D6A',
      dark: '#DC143C',
      light: '#FF8A9E',
    },
    secondary: {
      default: '#6B8EFF',
      dark: '#4169E1',
      light: '#A3B4FF',
    },
    background: {
      default: '#0D0D0D',
      alt: '#1A1A1A',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#A0A0A0',
    },
    accent: '#FF8A9E',
    border: '#2A2A2A',
    red: '#FF4D6A',
  },
  font: {
    body: '"Cartograph", sans-serif',
    heading: '"Cartograph", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 4px 20px rgba(0, 0, 0, 0.5)',
    xl: '0 10px 40px rgba(0, 0, 0, 0.6)',
  },
  transition: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
  maxWidth: {
    content: '1200px',
  },
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.base,
  lineHeight: 1.7,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.default,
  scrollBehavior: 'smooth',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  overflowX: 'hidden',
  maxWidth: '100vw',
});

globalStyle('*', {
  boxSizing: 'border-box',
  maxWidth: '100%',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.font.heading,
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.lg,
  lineHeight: 1.3,
});

globalStyle('h1', {
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
});

globalStyle('h2', {
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.semibold,
});

globalStyle('h3', {
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
});

globalStyle('button', {
  fontFamily: 'inherit',
  cursor: 'pointer',
});

globalStyle('::selection', {
  backgroundColor: vars.color.primary.default,
  color: '#fff',
});

globalStyle('.skip-link:focus', {
  position: 'fixed',
  left: '16px',
  top: '16px',
  width: 'auto',
  height: 'auto',
  padding: '16px 24px',
  backgroundColor: vars.color.primary.default,
  color: '#fff',
  fontWeight: vars.fontWeight.semibold,
  borderRadius: vars.radius.md,
  zIndex: '9999',
  textDecoration: 'none',
});
