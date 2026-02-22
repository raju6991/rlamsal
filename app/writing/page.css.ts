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
  marginTop: vars.spacing.xl,
  marginBottom: vars.spacing.xl,
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

export const postsGrid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const postCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  transition: vars.transition.normal,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const postImage = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export const postContent = style({
  padding: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const postMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.md,
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

export const postDate = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
});

export const tags = style({
  display: 'flex',
  gap: vars.spacing.sm,
  flexWrap: 'wrap',
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

export const postLink = style({
  display: 'block',
  marginBottom: vars.spacing.md,
});

export const postTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  marginTop: vars.spacing.sm,
  transition: vars.transition.normal,
  ':hover': {
    color: vars.color.primary.default,
  },
});

export const postExcerpt = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: 1.7,
  marginBottom: vars.spacing.md,
  flex: 1,
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
