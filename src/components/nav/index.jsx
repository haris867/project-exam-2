import { Button } from "react-bootstrap";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { load, remove } from "../../storage";
import * as S from "./index.styles";
import { PrimaryButton } from "../commonStyles/buttons";

export default function Nav() {
  const loggedIn = load("user");
  const userData = loggedIn;
  const [open, setOpen] = useState(false);

  function logOut() {
    remove("user");
    window.location = "/login";
  }

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-nav"
        aria-expanded={open}
        className="d-flex"
      >
        <CgMenu />
      </Button>
      <Collapse in={open}>
        <S.Nav id="collapse-nav">
          <S.NavList>
            <li>
              <S.NavBarLink
                to="/"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                HOME
              </S.NavBarLink>
            </li>
            <li>
              <S.NavBarLink
                to="/venues"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                VENUES
              </S.NavBarLink>
            </li>
            <li>
              <S.NavBarLink
                to="/about"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-nav"
                aria-expanded={open}
                className="fs-4"
              >
                ABOUT
              </S.NavBarLink>
            </li>
            {userData ? (
              <li>
                <S.NavBarLink
                  to={`/profile/` + userData.name}
                  onClick={() => setOpen(!open)}
                  aria-controls="collapse-nav"
                  aria-expanded={open}
                  className="fs-4"
                >
                  PROFILE
                </S.NavBarLink>
              </li>
            ) : null}
          </S.NavList>
          {userData ? (
            <S.NavBarLink className={"login"}>
              <PrimaryButton onClick={logOut} className="mb-2">
                LOG OUT
              </PrimaryButton>
            </S.NavBarLink>
          ) : (
            <S.NavBarLink
              aria-controls="collapse-nav"
              aria-expanded={!open}
              className={"login"}
              to="/login"
            >
              <PrimaryButton onClick={() => setOpen(!open)} className="mb-2">
                LOG IN
              </PrimaryButton>
            </S.NavBarLink>
          )}
        </S.Nav>
      </Collapse>
    </>
  );
}
