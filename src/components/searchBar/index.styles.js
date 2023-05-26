import styled from "styled-components";
import { FormInput } from "../commonStyles/forms";

export const SearchInput = styled(FormInput)`
  flex: 1 0 100px;
  max-width: 350px;
  outline: none;
  font-family: Quicksand;
`;

export const SearchResultsContainer = styled.div`
  padding: 40px;
  background-color: var(--color-primary);
`;

export const NoResults = styled.div`
  color: white;
`;
