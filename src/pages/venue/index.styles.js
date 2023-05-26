import styled from "styled-components";

export const FacilityContainer = styled.div`
  gap: 15px;
`;

export const FacilityThumbnail = styled.div`
  display: inline-block;
  padding: 10px;
  border: 3px solid var(--color-primary);
  width: calc(40% + 2vw);
  text-align: center;
  background-color: white;
  color: var(--color-primary);
  font-weight: 700;
`;

export const SingleBooking = styled.div`
  background-color: var(--color-primary);
  color: white;
  padding: 10px;
`;

export const HostImage = styled.img`
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border: solid 2px var(--color-tertiary);
`;

export const DeleteFormContainer = styled.div`
  max-width: 300px;
`;

export const DeleteForm = styled.div`
  padding: 20px 30px;
`;
