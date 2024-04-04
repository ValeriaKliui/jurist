import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = ({
  text,
  link,
  unactive,
  centered,
  block,
  ...props
}) => {
  const ButtonS = () => (
    <ButtonStyled
      $unactive={unactive}
      $centered={centered}
      $block={block}
      {...props}
    >
      {text}
    </ButtonStyled>
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
