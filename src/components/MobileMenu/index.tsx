import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useEffect } from "react";

import { AppContext } from "@/providers/App";
import { AppContextType } from "@/providers/App/interfaces";
import { ScreenSizes } from "@/providers/Theme/interfaces";

import { Nav } from "../Nav";
import { Container } from "./styled";

export const MobileMenu = () => {
  const { isMenuOpened, closeMenu } = useContext(AppContext) as AppContextType;
  const { width } = useWindowSize();

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [isMenuOpened]);

  useEffect(() => {
    if (isMenuOpened && width && width > ScreenSizes.sm) {
      closeMenu();
    }
  }, [width, closeMenu, isMenuOpened]);

  return (
    <Container $isMenuOpened={isMenuOpened}>
      <div className="wrapper">
        <Nav />
      </div>
    </Container>
  );
};
