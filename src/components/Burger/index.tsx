import { useContext } from "react";

import { AppContext } from "@/providers/App";
import { AppContextType } from "@/providers/App/interfaces";

import { Container, Line } from "./styled";

export const Burger = () => {
  const { toggleMenu, isMenuOpened } = useContext(AppContext) as AppContextType;

  return (
    <Container onClick={toggleMenu}>
      {Array(3)
        .fill(1)
        .map((_, index) => (
          <Line key={index} $isMenuOpened={isMenuOpened} />
        ))}
    </Container>
  );
};
