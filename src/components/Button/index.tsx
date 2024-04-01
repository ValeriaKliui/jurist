import { FC, Fragment } from "react";
import { ButtonStyled } from "./styled";
import { Link } from "react-router-dom";
import { ButtonProps } from "./interfaces";

export const Button: FC<ButtonProps> = ({ text, link }) => (
  <>
    {link ? (
      <Link to={link}>
        <ButtonStyled>{text}</ButtonStyled>
      </Link>
    ) : (
      <ButtonStyled>{text}</ButtonStyled>
    )}
  </>
);
