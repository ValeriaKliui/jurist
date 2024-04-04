import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";

import { NAV_LINKS } from "@/constants";
import { AppContext } from "@/providers/App";
import { AppContextType } from "@/providers/App/interfaces";

import { LiWithoutMarker, NavList } from "./styled";

export const Nav: FC = () => {
  const { closeMenu } = useContext(AppContext) as AppContextType;
  return (
    <nav>
      <NavList>
        {NAV_LINKS.map(({ name, link }) => (
          <LiWithoutMarker key={name} onClick={closeMenu}>
            <NavLink to={link}>
              <h4>{name}</h4>
            </NavLink>
          </LiWithoutMarker>
        ))}
      </NavList>
    </nav>
  );
};
