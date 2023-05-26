import styled from "styled-components";

export const PrimaryButton = styled.button`
  border-radius: 4px;
  border: solid 2px var(--color-tertiary);
  background: var(--color-primary);
  color: white;
  padding: 4px 18px;
  min-width: calc(130px + 1vw);
  align-self: center;
  font-size: calc(0.8rem + 0.3vw);
  font-weight: 600;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
`;
