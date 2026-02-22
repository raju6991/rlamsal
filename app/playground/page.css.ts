import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  padding: `${vars.spacing['3xl']} ${vars.spacing.lg}`,
  paddingTop: '100px', // Extra space for navigation
  maxWidth: '1400px',
  margin: '0 auto',
  minHeight: '100vh',
  backgroundColor: vars.color.background.default,
});

export const header = style({
  marginBottom: vars.spacing['3xl'],
  textAlign: 'left',
  borderBottom: `1px solid ${vars.color.border}`,
  paddingBottom: vars.spacing.xl,
});

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
  background: `linear-gradient(to right, ${vars.color.primary.default}, ${vars.color.secondary.default})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const description = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text.secondary,
  maxWidth: '600px',
});

export const categoryNav = style({
  display: 'flex',
  gap: vars.spacing.md,
  marginBottom: vars.spacing['2xl'],
  overflowX: 'auto',
  paddingBottom: vars.spacing.sm,
  selectors: {
    '&::-webkit-scrollbar': {
      height: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.color.border,
      borderRadius: vars.radius.full,
    },
  },
});

export const navButton = style({
  padding: `${vars.spacing.sm} ${vars.spacing.xl}`,
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: 'transparent',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.secondary,
  transition: vars.transition.normal,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: `${vars.color.primary.default}11`,
      borderColor: vars.color.primary.default,
      color: vars.color.primary.default,
    },
  },
});

export const navButtonActive = style({
  backgroundColor: vars.color.primary.default,
  color: 'white',
  borderColor: vars.color.primary.default,
  selectors: {
    '&:hover': {
      color: 'white',
      backgroundColor: vars.color.primary.default,
    },
  },
});

export const layout = style({
  display: 'grid',
  gap: vars.spacing['2xl'],
  alignItems: 'start',
  '@media': {
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: '400px 1fr',
    },
  },
});

export const sidebar = style({
  position: 'sticky',
  top: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
});

export const glassCard = style({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: vars.radius.lg,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: vars.spacing.xl,
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
});

export const controls = style([
  glassCard,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spacing.xl,
  }
]);

export const controlGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const labelRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const valueBadge = style({
  fontSize: vars.fontSize.xs,
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: `${vars.color.primary.default}22`,
  color: vars.color.primary.default,
  borderRadius: vars.radius.sm,
  fontFamily: 'monospace',
});

// Custom Slider
export const slider = style({
  WebkitAppearance: 'none',
  width: '100%',
  height: '6px',
  borderRadius: vars.radius.full,
  background: vars.color.border,
  outline: 'none',
  transition: 'opacity .2s',
  selectors: {
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: vars.color.primary.default,
      cursor: 'pointer',
      border: `3px solid ${vars.color.background.default}`,
      boxShadow: vars.shadow.sm,
    },
    '&::-moz-range-thumb': {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: vars.color.primary.default,
      cursor: 'pointer',
      border: `3px solid ${vars.color.background.default}`,
      boxShadow: vars.shadow.sm,
    },
  },
});

// Segmented Control
export const segmentedControl = style({
  display: 'flex',
  backgroundColor: `${vars.color.border}33`,
  borderRadius: vars.radius.md,
  padding: '4px',
  gap: '4px',
});

export const segmentButton = style({
  flex: 1,
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  borderRadius: vars.radius.sm,
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  cursor: 'pointer',
  transition: vars.transition.normal,
  selectors: {
    '&:hover': {
      color: vars.color.text.primary,
    },
  },
});

export const segmentButtonActive = style({
  backgroundColor: vars.color.background.default,
  color: vars.color.primary.default,
  boxShadow: vars.shadow.sm,
});

export const previewContainer = style([
  glassCard,
  {
    padding: vars.spacing['3xl'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '500px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0f0f0f',
  }
]);

export const previewContent = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const flexBox = style({
  display: 'flex',
  width: '100%',
  minHeight: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  border: '1px dashed rgba(255, 255, 255, 0.1)',
});

export const flexItem = style({
  padding: vars.spacing.xl,
  background: `linear-gradient(135deg, ${vars.color.primary.default}, ${vars.color.secondary.default})`,
  color: 'white',
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.bold,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '80px',
  minHeight: '80px',
  boxShadow: vars.shadow.lg,
});

export const gridBox = style({
  display: 'grid',
  width: '100%',
  minHeight: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  border: '1px dashed rgba(255, 255, 255, 0.1)',
});

export const gridItem = style({
  padding: vars.spacing.xl,
  background: `linear-gradient(135deg, ${vars.color.secondary.default}, ${vars.color.primary.dark})`,
  color: 'white',
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.bold,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: vars.shadow.lg,
});

export const codeCard = style([
  glassCard,
  {
    marginTop: vars.spacing.xl,
    padding: 0,
    overflow: 'hidden',
  }
]);

export const codeHeader = style({
  padding: `${vars.spacing.sm} ${vars.spacing.xl}`,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const codeTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.secondary,
  textTransform: 'uppercase',
});

export const copyButton = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  borderRadius: vars.radius.sm,
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.primary.default,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  cursor: 'pointer',
  transition: vars.transition.normal,
  ':hover': {
    backgroundColor: `${vars.color.primary.default}22`,
  },
});

export const editorWrapper = style({
  minHeight: '200px',
  maxHeight: '400px',
  overflowY: 'auto',
  backgroundColor: '#1a1a1a',
});

export const editorStyle = style({
  outline: 'none',
  minHeight: '200px',
});

globalStyle(`${editorStyle} textarea`, {
  outline: 'none !important',
});

// Prism Syntax Highlighting Colors
globalStyle('.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted', {
  color: '#ff79c6',
});

globalStyle('.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted', {
  color: '#50fa7b',
});

globalStyle('.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string', {
  color: '#f8f8f2',
});

globalStyle('.token.atrule, .token.attr-value, .token.keyword', {
  color: '#bd93f9',
});

globalStyle('.token.function, .token.class-name', {
  color: '#8be9fd',
});

globalStyle('.token.regex, .token.important, .token.variable', {
  color: '#f1fa8c',
});

export const presenceCursor = style({
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const cursorPointer = style({
  width: '16px',
  height: '16px',
});

export const cursorLabel = style({
  padding: '2px 6px',
  borderRadius: '4px',
  fontSize: '10px',
  color: 'white',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
});
