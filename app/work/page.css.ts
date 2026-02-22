import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const page = style({
  padding: `${vars.spacing['3xl']} ${vars.spacing.lg}`,
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
});

export const header = style({
  marginBottom: vars.spacing['3xl'],
  textAlign: 'center',
});

export const title = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing.md,
  position: 'relative',
  display: 'inline-block',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      backgroundColor: vars.color.primary.default,
      borderRadius: vars.radius.full,
    },
  },
});

export const subtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: `${vars.spacing.xl} auto 0`,
  lineHeight: 1.6,
});

export const section = style({
  marginBottom: vars.spacing['3xl'],
});

export const sectionTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.xl,
  position: 'relative',
  paddingLeft: vars.spacing.md,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '100%',
      backgroundColor: vars.color.primary.default,
      borderRadius: vars.radius.full,
    },
  },
});

export const projectsGrid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const projectCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  overflow: 'hidden',
  transition: vars.transition.normal,
  ':hover': {
    boxShadow: vars.shadow.xl,
  },
});

export const projectContent = style({
  padding: vars.spacing.xl,
});

export const projectTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.md,
});

export const projectDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: 1.7,
  marginBottom: vars.spacing.md,
});

export const techTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
  marginBottom: vars.spacing.lg,
});

export const techTag = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  backgroundColor: `${vars.color.secondary.default}12`,
  color: vars.color.secondary.default,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});

export const projectLinks = style({
  display: 'flex',
  gap: vars.spacing.lg,
});

export const projectLink = style({
  fontSize: vars.fontSize.base,
  color: vars.color.primary.default,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.dark,
  },
});

export const cta = style({
  textAlign: 'center',
  padding: vars.spacing['3xl'],
  backgroundColor: vars.color.background.alt,
  borderRadius: vars.radius.lg,
});

export const ctaText = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing.lg,
});

export const ctaButton = style({
  display: 'inline-block',
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
