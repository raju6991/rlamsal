import { vars } from "@/styles/theme.css";
import { StyleRule, style } from "@vanilla-extract/css";

export const page = style({
  padding: `${vars.spacing["3xl"]} ${vars.spacing.lg}`,
  maxWidth: vars.maxWidth.content,
  margin: "0 auto",
});

export const header = style({
  marginBottom: vars.spacing["3xl"],
  textAlign: "center",
});

export const title = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing.md,
  position: "relative",
  display: "inline-block",
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      backgroundColor: vars.color.primary.default,
      borderRadius: vars.radius.full,
    },
  },
});

export const subtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  maxWidth: "600px",
  margin: `${vars.spacing.xl} auto 0`,
  lineHeight: 1.6,
});

export const content = style({
  display: "grid",
  gap: vars.spacing["3xl"],
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "1.2fr 1fr",
      alignItems: "start",
    },
  },
});

export const formSection = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  boxShadow: vars.shadow.lg,
});

export const sectionTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.lg,
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.lg,
});

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.sm,
});

export const label = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
});

export const input = style({
  padding: vars.spacing.md,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.base,
  fontFamily: "inherit",
  transition: vars.transition.normal,
  ":focus": {
    outline: "none",
    borderColor: vars.color.primary.default,
    boxShadow: `0 0 0 3px ${vars.color.primary.default}20`,
  },
  "::placeholder": {
    color: vars.color.text.secondary,
  },
});

export const textarea = style({
  padding: vars.spacing.md,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.base,
  fontFamily: "inherit",
  resize: "vertical",
  transition: vars.transition.normal,
  ":focus": {
    outline: "none",
    borderColor: vars.color.primary.default,
    boxShadow: `0 0 0 3px ${vars.color.primary.default}20`,
  },
  "::placeholder": {
    color: vars.color.text.secondary,
  },
});

export const submitButton = style({
  padding: `${vars.spacing.md} ${vars.spacing.xl}`,
  backgroundColor: vars.color.primary.default,
  color: "#fff",
  border: "none",
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  cursor: "pointer",
  transition: vars.transition.normal,
  ":disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
});

export const successMessage = style({
  textAlign: "center",
  padding: vars.spacing.xl,
});

export const successIcon = style({
  display: "block",
  fontSize: "48px",
  color: "#22c55e",
  marginBottom: vars.spacing.md,
});

export const resetButton = style({
  marginTop: vars.spacing.lg,
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  backgroundColor: "transparent",
  color: vars.color.primary.default,
  border: `1px solid ${vars.color.primary.default}`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  cursor: "pointer",
  transition: vars.transition.normal,
  ":hover": {
    backgroundColor: vars.color.primary.default,
    color: "#fff",
  },
});

export const infoSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.xl,
});

export const infoCard = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.xl,
  boxShadow: vars.shadow.lg,
});

export const infoTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.md,
});

export const infoText = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  lineHeight: 1.7,
  marginBottom: vars.spacing.lg,
});

export const availability = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  backgroundColor: `${vars.color.primary.default}10`,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.primary.default,
  marginBottom: vars.spacing.md,
});

export const availabilityDot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#22c55e",
});

export const responseTime = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
});

export const responseIcon = style({
  fontSize: vars.fontSize.base,
});

export const socialSection = style({
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  padding: vars.spacing.md,
  boxShadow: vars.shadow.lg,
});

export const socialTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.spacing.md,
});

export const socialLinks = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: vars.spacing.sm,
});

export const socialLink = style({
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  padding: vars.spacing.md,
  backgroundColor: vars.color.background.alt,
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  transition: vars.transition.normal,
  ":hover": {
    backgroundColor: `${vars.color.primary.default}10`,
    color: vars.color.primary.default,
  },
});

export const socialIcon = style({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.primary.default,
  color: "#fff",
  borderRadius: vars.radius.md,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
});

export const socialName = style({
  color: vars.color.text.primary,
});

export const locationCard = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.sm,
  padding: vars.spacing.lg,
  backgroundColor: vars.color.background.default,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
});

export const locationIcon = style({
  fontSize: vars.fontSize.xl,
});
