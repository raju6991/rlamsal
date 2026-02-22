import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const nav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: vars.color.background.default,
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${vars.color.border}`,
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
});

export const navContainer = style({
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
  padding: `0 ${vars.spacing.lg}`,
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const logoAccent = style({
  color: vars.color.primary.default,
});

export const desktopNav = style({
  display: 'none',
  gap: vars.spacing.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const navLink = style({
  position: 'relative',
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  padding: `${vars.spacing.sm} 0`,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.text.primary,
  },
});

export const navLinkActive = style({
  color: vars.color.primary.default,
});

export const activeIndicator = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '3px',
  backgroundColor: vars.color.primary.default,
  borderRadius: vars.radius.full,
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
});

export const themeToggle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: vars.color.background.alt,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.full,
  fontSize: '20px',
  color: vars.color.text.primary,
  cursor: 'pointer',
  transition: vars.transition.normal,
  ':hover': {
    borderColor: vars.color.primary.default,
  },
});

globalStyle(`[data-theme="dark"] ${themeToggle}`, {
  color: '#fff',
});

export const menuButton = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  width: '32px',
  height: '32px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

globalStyle(`${menuButton} span`, {
  display: 'block',
  width: '24px',
  height: '2px',
  backgroundColor: vars.color.text.primary,
  borderRadius: vars.radius.full,
  transition: vars.transition.normal,
});

export const mobileNav = style({
  position: 'fixed',
  top: '72px',
  right: 0,
  bottom: 0,
  width: '280px',
  backgroundColor: vars.color.background.default,
  padding: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  boxShadow: vars.shadow.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileNavLink = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  padding: `${vars.spacing.md} 0`,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.default,
  },
});
