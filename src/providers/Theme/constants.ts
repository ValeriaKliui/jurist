import { ScreenSizes } from "./interfaces";

export const devices = {
  xs: `@media (max-width: ${ScreenSizes.xs}px)`,
  sm: `@media (max-width: ${ScreenSizes.sm}px)`,
  md: `@media (max-width: ${ScreenSizes.md}px)`,
  lg: `@media (max-width: ${ScreenSizes.lg}px)`,
  xl: `@media (max-width: ${ScreenSizes.xl}px)`,
  xxl: `@media (max-width: ${ScreenSizes.xxl}px)`,
  xxxl: `@media (min-width: ${ScreenSizes.xxl}px)`,
};
