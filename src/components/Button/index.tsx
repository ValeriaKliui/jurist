import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = ({ text, link, unactive }) => {
  const ButtonS = () => (
    <ButtonStyled $unactive={unactive}>{text}</ButtonStyled>
  );

  return (
    <>
      {link ? (
        <Link to={link}>
          <ButtonS />
        </Link>
      ) : (
        <ButtonS />
      )}
    </>
  );
};
