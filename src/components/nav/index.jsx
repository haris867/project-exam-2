import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";

const LogInButton = styled.button`
  margin-bottom: 10px;
  border-radius: 7px;
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 4px 18px;
  font-size: 0.9em;
  min-width: 100px;
  min-height: 30px;
`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-nav"
        aria-expanded={open}
      >
        <CgMenu />
      </Button>
      <Collapse in={open}>
        <nav id="collapse-nav">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/venues">VENUES</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
          </ul>
          <NavLink className={"login"} to="/">
            <LogInButton>LOG IN</LogInButton>
          </NavLink>
        </nav>
      </Collapse>
    </>
  );
}
