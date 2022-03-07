import styled from "styled-components";
import { Medium, ExtraExtraLarge } from "../../responsive";

export const StyledFlavorSection = styled.div`
  text-align: center;
  padding: 0 2rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  
`;

export const SmallTitle = styled.h3`
  font-weight: 800;
  font-size: 1.5rem;
  ${Medium({ fontSize: "3rem" })};
  
`;
export const BigTitle = styled.h2`
  font-size: 3rem;
  font-style: italic;
  font-weight: 800;
  line-height: 1.5rem;
  ${Medium({ fontSize: "5rem" })};
  
`;

export const TextContent = styled.div`
  max-width: 40%;
  margin: 0 auto;
  /* padding:2rem; */
  ${ExtraExtraLarge({ width: "20%" })}

`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.primaryLight};
  width: 100%;
  margin: 0 auto;

  &:nth-of-type(4) {
    border: none;
  }
`;

export const ImageContainer = styled.div`
  ${Medium({ width: "75%", margin: "-3em auto" })};
  ${ExtraExtraLarge({ width: "50%" })};


`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
