import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const page = style({
  padding: `${vars.spacing['3xl']} ${vars.spacing.lg}`,
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
});

export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3xl'],
  padding: `${vars.spacing['3xl']} 0`,
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
});

export const heroContent = style({
  flex: 1,
  maxWidth: '600px',
});

export const greeting = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.sm,
});

export const title = style({
  marginBottom: vars.spacing.md,
});

export const name = style({
  color: vars.color.primary.default,
  display: 'block',
});

export const subtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.xl,
  lineHeight: 1.6,
});

export const cta = style({
  display: 'flex',
  gap: vars.spacing.md,
  flexWrap: 'wrap',
});

export const buttonPrimary = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.md} ${vars.spacing.xl}`,
  backgroundColor: vars.color.primary.default,
  color: '#fff',
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.base,
  transition: vars.transition.normal,
  ':hover': {
    backgroundColor: vars.color.primary.dark,
    transform: 'scale(1.02)',
  },
});

export const buttonSecondary = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${vars.spacing.md} ${vars.spacing.xl}`,
  backgroundColor: 'transparent',
  color: vars.color.primary.default,
  border: `2px solid ${vars.color.primary.default}`,
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.base,
  transition: vars.transition.normal,
  ':hover': {
    backgroundColor: vars.color.primary.default,
    color: '#fff',
    transform: 'scale(1.02)',
  },
});

export const heroVisual = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      justifyContent: 'flex-end',
    },
  },
});

export const codeBlock = style({
  width: '100%',
  maxWidth: '450px',
  backgroundColor: '#1e1e1e',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  boxShadow: vars.shadow.xl,
});

export const codeHeader = style({
  display: 'flex',
  gap: vars.spacing.sm,
  padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  backgroundColor: '#2d2d2d',
});

export const dot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
});

export const codeContent = style({
  padding: vars.spacing.lg,
  margin: 0,
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.sm,
  color: '#d4d4d4',
  lineHeight: 1.6,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export const section = style({
  padding: `${vars.spacing['3xl']} 0`,
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing['2xl'],
  flexWrap: 'wrap',
  gap: vars.spacing.md,
});

export const sectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  position: 'relative',
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

export const viewAll = style({
  fontSize: vars.fontSize.base,
  color: vars.color.primary.default,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.dark,
  },
});

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

export const projectCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  boxShadow: vars.shadow.lg,
  transition: vars.transition.normal,
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.xl,
  },
});

export const projectTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});

export const projectDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.md,
  lineHeight: 1.6,
});

export const techTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

export const techTag = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  backgroundColor: `${vars.color.secondary.default}15`,
  color: vars.color.secondary.default,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
});

export const projectLinks = style({
  display: 'flex',
  gap: vars.spacing.md,
  marginTop: vars.spacing.md,
});

export const projectLink = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.primary.default,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.dark,
  },
});

export const blogCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  boxShadow: vars.shadow.lg,
  transition: vars.transition.normal,
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.xl,
  },
});

export const blogDate = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.sm,
});

export const blogTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.md,
  marginBottom: vars.spacing.md,
});

export const blogExcerpt = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.md,
  lineHeight: 1.6,
});

export const readMore = style({
  fontSize: vars.fontSize.base,
  color: vars.color.primary.default,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.dark,
  },
});
