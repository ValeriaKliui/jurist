import LogoImg from "@assets/icons/logo.svg?react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { LogoContainer, LogoText, TextContainer } from "./styled";

export const Logo: FC = () => (
  <TextContainer>
    <NavLink to="#">
      <LogoContainer>
        <LogoImg />
        <LogoText>International Legal Center</LogoText>
      </LogoContainer>
    </NavLink>
    <p className="small-text">
      Первый цифровой международный юридический центр
    </p>
  </TextContainer>
);
