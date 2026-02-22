import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
  padding: `${vars.spacing.xl} 0`,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: 'auto',
});

export const container = style({
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
  padding: `0 ${vars.spacing.lg}`,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
});

export const copyright = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
});

export const socialLinks = style({
  display: 'flex',
  gap: vars.spacing.lg,
});

export const socialLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.default,
  },
});
