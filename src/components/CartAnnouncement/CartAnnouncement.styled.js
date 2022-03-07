import styled from "styled-components";

export const StyledCartAnnouncement = styled.div`
  height: fit-content;
  width: 100%;
  text-align: center;
  padding: 1em;
  background-color: ${({ theme }) => theme.secondaryAccent};
`;

export const Title = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.primaryDark};
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.primaryDark};
`;
