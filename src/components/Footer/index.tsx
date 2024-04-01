import { FC } from "react";
import {
  FooterContainer,
  NetworksList,
  Container,
  IconContainer,
  FooterTop,
  FooterBottom,
  Links,
  BottomContainer,
} from "./styled";
import { Logo } from "../Logo";
import { NETWORKS } from "@/constants";
import { Link } from "react-router-dom";

export const Footer: FC = () => (
  <FooterContainer>
    <Container>
      <FooterTop className="wrapper-l">
        <Logo />
        <NetworksList>
          {NETWORKS.map(({ Icon, link }) => (
            <li key={link + Icon}>
              <Link to={link}>
                <IconContainer>
                  <Icon />
                </IconContainer>
              </Link>
            </li>
          ))}
        </NetworksList>
      </FooterTop>
      <FooterBottom>
        <BottomContainer className="wrapper-l">
          <p className="small-text">
            ©2021 «International Legal Center» | Разработано:
            <Link to="https://github.com/ValeriaKliui" target="_blank">
              {" "}
              valeriakliui
            </Link>
          </p>
          <Links>
            <Link to="#">Политика конфиденциальности</Link>
            <Link to="#">Пользовательское соглашение</Link>
          </Links>
        </BottomContainer>
      </FooterBottom>
    </Container>
  </FooterContainer>
);
