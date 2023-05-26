import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BaseCard = styled(Card)`
  background: none;
  border: none;
  width: 90%;
  border-radius: 0%;
  padding: 0;
  margin-bottom: 40px;
`;

export const CardLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  :hover {
    color: var(--color-primary);
  }
`;

export const CardImg = styled(Card.Img)`
  border-radius: 0;
  border: solid 2px var(--color-tertiary);
  aspect-ratio: 3/2;
  object-fit: cover;
`;
