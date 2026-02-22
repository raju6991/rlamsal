import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const scrollButton = style({
  position: 'fixed',
  bottom: vars.spacing.xl,
  right: vars.spacing.xl,
  width: '50px',
  height: '50px',
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.primary.default,
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: vars.shadow.lg,
  zIndex: 1000,
  transition: vars.transition.normal,
  ':hover': {
    transform: 'scale(1.1)',
    backgroundColor: vars.color.primary.dark || vars.color.primary.default,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const icon = style({
  width: '24px',
  height: '24px',
});
