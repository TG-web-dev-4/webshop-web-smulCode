import styled from "styled-components";
import { Medium, Large, ExtraExtraLarge } from "../../responsive";

export const StyledExtraFlavor = styled.div`
  background-color: ${({ theme }) => theme.primaryAccent};
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;
  padding: 4rem 0;
`;

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 3rem;
`;

export const Span = styled.span`
  font-style: italic;
  font-weight: 800;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryDark};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 800;
  font-size: 2.5rem;
`;

export const TextContainer = styled.div`
  display: grid;
  place-content: center;
  margin: 0 auto;
  padding: 1rem 2em;
  width: 80%;
  ${Medium({ width: "60% " })};
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5rem;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 20vh;
  overflow: visible;
  ${Medium({ minHeight: "30vh" })};
  ${Large({ minHeight: "40vh" })};
  ${ExtraExtraLarge({ height: "35vh", width: "50%", margin: "0 auto" })};
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
