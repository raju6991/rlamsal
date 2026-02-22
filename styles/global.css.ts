import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const container = style({
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
  padding: `0 ${vars.spacing.lg}`,
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: `0 ${vars.spacing['3xl']}`,
    },
  },
});

export const pageWrapper = style({
  minHeight: '100vh',
  paddingTop: '80px',
});

export const section = style({
  padding: `${vars.spacing['3xl']} 0`,
});

export const sectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing.xl,
  position: 'relative',
  display: 'inline-block',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: 0,
      width: '60px',
      height: '4px',
      backgroundColor: vars.color.primary.default,
      borderRadius: vars.radius.full,
    },
  },
});

export const card = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  padding: vars.spacing.lg,
  transition: vars.transition.normal,
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.xl,
  },
});

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.md} ${vars.spacing.xl}`,
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.base,
  transition: vars.transition.normal,
  border: 'none',
  cursor: 'pointer',
});

export const buttonPrimary = style([
  button,
  {
    backgroundColor: vars.color.primary.default,
    color: '#fff',
    ':hover': {
      backgroundColor: vars.color.primary.dark,
      transform: 'scale(1.02)',
    },
  },
]);

export const buttonSecondary = style([
  button,
  {
    backgroundColor: 'transparent',
    color: vars.color.primary.default,
    border: `2px solid ${vars.color.primary.default}`,
    ':hover': {
      backgroundColor: vars.color.primary.default,
      color: '#fff',
      transform: 'scale(1.02)',
    },
  },
]);

export const grid = style({
  display: 'grid',
  gap: vars.spacing.lg,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const textCenter = style({
  textAlign: 'center',
});

export const tag = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  backgroundColor: vars.color.background.alt,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  transition: vars.transition.fast,
});

export const tagPrimary = style([
  tag,
  {
    backgroundColor: `${vars.color.primary.default}15`,
    color: vars.color.primary.default,
  },
]);
