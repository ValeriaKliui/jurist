import { FC } from "react";
import { Link } from "react-router-dom";

import { NETWORKS } from "@/constants";

import { Logo } from "../Logo";
import { LiWithoutMarker } from "../Nav/styled";
import {
  BottomContainer,
  Container,
  FooterBottom,
  FooterContainer,
  FooterTop,
  IconContainer,
  Links,
  NetworksList,
} from "./styled";

export const Footer: FC = () => (
  <FooterContainer>
    <Container>
      <div className="wrapper-l">
        <FooterTop>
          <Logo isReverted />
          <NetworksList>
            {NETWORKS.map(({ Icon, link }) => (
              <LiWithoutMarker key={link + Icon}>
                <Link to={link}>
                  <IconContainer>
                    <Icon />
                  </IconContainer>
                </Link>
              </LiWithoutMarker>
            ))}
          </NetworksList>
        </FooterTop>
      </div>
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
