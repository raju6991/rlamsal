import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const sandboxWrapper = style({
  margin: `${vars.spacing.xl} 0`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: '#0d0d0d',
});

export const sandboxHeader = style({
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderBottom: `1px solid ${vars.color.border}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const sandboxTitle = style({
  fontSize: '12px',
  fontWeight: 'bold',
  color: vars.color.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
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

export const sandboxEditor = style({
  minHeight: '150px',
  maxHeight: '300px',
  overflowY: 'auto',
  fontFamily: '"Fira Code", monospace',
  fontSize: '13px',
});

export const playgroundWrapper = style({
  margin: `${vars.spacing['2xl']} 0`,
  padding: vars.spacing.xl,
  backgroundColor: '#0f0f0f',
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});

export const playgroundPreview = style({
  minHeight: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: vars.radius.md,
  border: '1px dashed rgba(255, 255, 255, 0.1)',
  position: 'relative',
  overflow: 'hidden',
});

export const playgroundItem = style({
  padding: vars.spacing.lg,
  background: `linear-gradient(135deg, ${vars.color.primary.default}, ${vars.color.secondary.default})`,
  color: 'white',
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.bold,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '60px',
  minHeight: '60px',
  boxShadow: vars.shadow.md,
});

// Prism styles
globalStyle(`${sandboxEditor} .token.property, ${sandboxEditor} .token.tag, ${sandboxEditor} .token.boolean, ${sandboxEditor} .token.number, ${sandboxEditor} .token.constant, ${sandboxEditor} .token.symbol, ${sandboxEditor} .token.deleted`, {
  color: '#ff79c6',
});

globalStyle(`${sandboxEditor} .token.selector, ${sandboxEditor} .token.attr-name, ${sandboxEditor} .token.string, ${sandboxEditor} .token.char, ${sandboxEditor} .token.builtin, ${sandboxEditor} .token.inserted`, {
  color: '#50fa7b',
});

globalStyle(`${sandboxEditor} .token.operator, ${sandboxEditor} .token.entity, ${sandboxEditor} .token.url, ${sandboxEditor} .language-css .token.string, ${sandboxEditor} .style .token.string`, {
  color: '#f8f8f2',
});

globalStyle(`${sandboxEditor} .token.atrule, ${sandboxEditor} .token.attr-value, ${sandboxEditor} .token.keyword`, {
  color: '#bd93f9',
});

globalStyle(`${sandboxEditor} .token.function, ${sandboxEditor} .token.class-name`, {
  color: '#8be9fd',
});

globalStyle(`${sandboxEditor} .token.regex, ${sandboxEditor} .token.important, ${sandboxEditor} .token.variable`, {
  color: '#f1fa8c',
});
