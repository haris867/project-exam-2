import styled from "styled-components";
import { Card } from "react-bootstrap";

export const HomeCardImg = styled(Card.Img)`
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
`;

export const HomeSubHeading = styled.h2`
  color: var(--color-primary);
  font-weight: 300;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 0;
`;

export const HomeCardTitle = styled(Card.Title)`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  z-index: 1;
  color: white;
  position: absolute;
  top: 42%;
  width: 100%;
`;
