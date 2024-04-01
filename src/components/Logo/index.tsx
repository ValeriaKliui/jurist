import { FC } from "react";
import LogoImg from "@assets/icons/logo.svg?react";
import { LogoContainer, LogoText, TextContainer } from "./styled";

export const Logo: FC = () => (
  <TextContainer>
    <LogoContainer>
      <LogoImg />
      <LogoText>International Legal Center</LogoText>
    </LogoContainer>
    <p className="small-text">
      Первый цифровой международный юридический центр
    </p>
  </TextContainer>
);
