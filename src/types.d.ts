import "styled-components";

import { BaseTheme } from "@components/Theme/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
