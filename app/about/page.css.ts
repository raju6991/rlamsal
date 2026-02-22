import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const page = style({
  padding: `${vars.spacing['3xl']} ${vars.spacing.lg}`,
  maxWidth: vars.maxWidth.content,
  margin: '0 auto',
  marginTop: vars.spacing['2xl'],
  overflowX: 'hidden',
  width: '100%',
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  overflowX: 'hidden',
  maxWidth: '100vw',
});

export const profileSection = style({
  textAlign: 'center',
  marginBottom: vars.spacing['3xl'],
});

export const avatar = style({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: vars.color.background.alt,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: vars.spacing.lg,
  border: `4px solid ${vars.color.primary.default}`,
});

export const avatarInitial = style({
  fontSize: '48px',
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary.default,
});

export const name = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing.lg,
});

export const title = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
});

export const section = style({
  marginBottom: vars.spacing['3xl'],
});

export const sectionTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing['2xl'],
  marginBottom: vars.spacing['2xl'],
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

export const bio = style({
  fontSize: vars.fontSize.lg,
  lineHeight: 1.8,
  color: vars.color.text.secondary,
});

globalStyle(`${bio} p`, {
  marginBottom: vars.spacing.md,
});

export const skillsGrid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const skillCategory = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  boxShadow: vars.shadow.md,
});

export const skillCategoryTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.lg,
  color: vars.color.primary.default,
});

export const skillTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

export const skillTag = style({
  display: 'inline-block',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: vars.color.background.alt,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
  transition: vars.transition.normal,
  cursor: 'default',
});

export const timeline = style({
  position: 'relative',
  paddingLeft: vars.spacing.xl,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '8px',
      top: 0,
      bottom: 0,
      width: '2px',
      backgroundColor: vars.color.border,
    },
  },
});

export const timelineItem = style({
  position: 'relative',
  marginBottom: vars.spacing.xl,
  ':last-child': {
    marginBottom: 0,
  },
});

export const timelineDot = style({
  position: 'absolute',
  left: `-${vars.spacing.xl}`,
  top: '6px',
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  backgroundColor: vars.color.primary.default,
  border: `3px solid ${vars.color.background.default}`,
  boxShadow: `0 0 0 3px ${vars.color.primary.default}`,
});

export const timelineContent = style({
  paddingLeft: vars.spacing.md,
});

export const timelineYear = style({
  display: 'inline-block',
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  backgroundColor: `${vars.color.primary.default}12`,
  color: vars.color.primary.default,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  marginBottom: vars.spacing.sm,
});

export const timelineTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.md,
});

export const timelineCompany = style({
  fontSize: vars.fontSize.base,
  color: vars.color.secondary.default,
  fontWeight: vars.fontWeight.medium,
  marginBottom: vars.spacing.sm,
});

export const timelineDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: 1.6,
});

export const githubStats = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  boxShadow: vars.shadow.md,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
});

export const calendarContainer = style({
  width: '100%',
  maxWidth: '750px',
  display: 'flex',
  justifyContent: 'center',
  marginTop: vars.spacing.lg,
  fontSize: '12px',
  overflowX: 'hidden',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const funFacts = style({
  display: 'grid',
  gap: vars.spacing.md,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
});

export const funFactCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.lg,
  textAlign: 'center',
  boxShadow: vars.shadow.md,
  cursor: 'pointer',
});

export const funFactEmoji = style({
  display: 'block',
  fontSize: '40px',
  marginBottom: vars.spacing.sm,
});

export const funFactText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  fontWeight: vars.fontWeight.medium,
});
