import { NAV_LINKS } from "@/constants";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavList, NavItem } from "./styled";

export const Nav: FC = () => (
  <nav>
    <NavList>
      {NAV_LINKS.map(({ name, link }) => (
        <NavItem key={name}>
          <NavLink to={link}>
            <h4>{name}</h4>
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  </nav>
);