import { Addons, HeaderContainer, HeaderTop } from "./styled";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Nav } from "../Nav";
import { Logo } from "../Logo";

export const Header = () => (
  <HeaderContainer className="wrapper-l">
    <HeaderTop>
      <Logo />
      <Addons>
        <Link to="tel:8(800)511-37-68">
          <h4>8 (800) 511-37-68</h4>
        </Link>
        <Button text="Войти" link="#" />
      </Addons>
    </HeaderTop>
    <Nav />
  </HeaderContainer>
);
