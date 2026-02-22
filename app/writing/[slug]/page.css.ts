import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  padding: `${vars.spacing['3xl']} ${vars.spacing.lg}`,
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: vars.spacing['2xl'],
  minHeight: '100vh',
  overflowY: 'auto',
});

export const backLink = style({
  display: 'inline-block',
  marginBottom: vars.spacing.xl,
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.base,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.default,
  },
});

export const header = style({
  marginBottom: vars.spacing['3xl'],
});

export const banner = style({
  width: '100%',
  height: 'auto',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: vars.radius.lg,
  marginBottom: vars.spacing['2xl'],
});

export const meta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.md,
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

export const date = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
});

export const tags = style({
  display: 'flex',
  gap: vars.spacing.sm,
});

export const tag = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: `${vars.color.primary.default}12`,
  color: vars.color.primary.default,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
});

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing.md,
  lineHeight: 1.2,
});

export const excerpt = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  lineHeight: 1.6,
});

export const content = style({
  fontSize: vars.fontSize.lg,
  lineHeight: 1.8,
});

export const markdown = style({
  marginBottom: vars.spacing.lg,
});

globalStyle(`${markdown} h1`, {
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  marginTop: vars.spacing['2xl'],
  marginBottom: vars.spacing.md,
});

globalStyle(`${markdown} h2`, {
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.md,
});

globalStyle(`${markdown} h3`, {
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.lg,
  marginBottom: vars.spacing.sm,
});

globalStyle(`${markdown} p`, {
  marginBottom: vars.spacing.md,
});

globalStyle(`${markdown} code`, {
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.sm,
  backgroundColor: vars.color.background.alt,
  padding: '2px 6px',
  borderRadius: vars.radius.sm,
});

globalStyle(`${markdown} li`, {
  marginLeft: vars.spacing.lg,
  marginBottom: vars.spacing.sm,
});

globalStyle(`${markdown} strong`, {
  fontWeight: vars.fontWeight.semibold,
});

globalStyle(`${markdown} a`, {
  color: vars.color.primary.default,
  textDecoration: 'underline',
});

export const codeBlock = style({
  margin: `${vars.spacing.xl} 0`,
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: '#0d0d0d',
});

export const codeHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const codeLanguage = style({
  fontSize: '11px',
  fontWeight: 'bold',
  color: vars.color.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const copyButton = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  background: 'none',
  border: 'none',
  fontSize: '11px',
  fontWeight: 'bold',
  color: vars.color.primary.default,
  cursor: 'pointer',
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.light,
    opacity: 0.8,
  },
});

export const codePlaceholder = style({
  margin: 0,
  padding: vars.spacing.lg,
  fontSize: vars.fontSize.sm,
  fontFamily: vars.font.mono,
  color: vars.color.text.primary,
});

globalStyle(`${codeBlock} pre`, {
  margin: 0,
  padding: `${vars.spacing.lg} !important`,
  backgroundColor: 'transparent !important',
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
});

globalStyle(`${codeBlock} code`, {
  fontFamily: vars.font.mono,
  background: 'none',
  padding: 0,
});

export const notFound = style({
  textAlign: 'center',
  padding: vars.spacing['3xl'],
});
