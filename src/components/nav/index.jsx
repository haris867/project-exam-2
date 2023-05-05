import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";

export const LogInButton = styled.button`
  margin-bottom: 10px;
  border-radius: 4px;
  border: solid 2px var(--color-tertiary);
  background: var(--color-primary);
  color: white;
  padding: 4px 18px;
  min-width: calc(160px + 3vw);
  min-height: 40px;
  align-self: center;
  font-size: calc(1rem + 0.3vw);
  font-weight: 600;
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
              <NavLink
                to="/"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/venues"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
              >
                VENUES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
          <NavLink className={"login"} to="/login">
            <LogInButton
              onClick={() => setOpen(!open)}
              aria-controls="collapse-nav"
              aria-expanded={open}
            >
              LOG IN
            </LogInButton>
          </NavLink>
        </nav>
      </Collapse>
    </>
  );
}
