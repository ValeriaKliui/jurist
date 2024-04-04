import { Link } from "react-router-dom";

import { Burger } from "../Burger";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { Addons, HeaderBottom, HeaderContainer, HeaderTop } from "./styled";

export const Header = () => (
  <HeaderContainer className="wrapper-l">
    <HeaderTop>
      <Logo isShort />
      <Addons>
        <Link to="tel:8(800)511-37-68">
          <h4>8 (800) 511-37-68</h4>
        </Link>
        <Button text="Войти" link="#" />
      </Addons>
      <Burger />
    </HeaderTop>
    <HeaderBottom>
      <Nav />
    </HeaderBottom>
  </HeaderContainer>
);
