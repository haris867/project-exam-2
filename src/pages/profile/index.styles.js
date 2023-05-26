import styled from "styled-components";
import { CgMathPlus } from "react-icons/cg";

export const ProfileImage = styled.img`
  border: solid 2px var(--color-tertiary);
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
`;

export const PlusIcon = styled(CgMathPlus)`
  cursor: pointer;
  color: var(--color-primary);
  font-size: calc(2em + 0.8vw);
`;

export const UpdateAvatarButton = styled.p`
  font-size: 1em;
`;
