import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  right: 25px;
  top: 117px;
  font-family: "Roboto", sans-serif;
  z-index: 2;
  background: var(--color-secondary);
  text-align: center;
  border: 3px solid var(--color-primary);
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 10px 13px;
  text-align: center;
  margin-bottom: 0;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 10px;
  color: var(--color-primary);
  :hover {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;
