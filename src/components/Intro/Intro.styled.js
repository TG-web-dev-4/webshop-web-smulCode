import styled from "styled-components";
import { Medium, Large, ExtraExtraLarge } from "../../responsive";

export const StyledIntro = styled.div`
  background: #111;
  height: 100vh;
  width: 100%;
  position: relative;
z-index:100;
  position:fixed;
`;

export const Cta = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Cta1 = styled.span`
  color: red;
  z-index: 1;
`;
export const Cta2 = styled.span`
  color: blue;
`;
export const Cta3 = styled.span`
  color: teal;
`;
export const Cta4 = styled.span`
  color: gold;
`;
export const Cta5 = styled.span`
  color: purple;
`;
export const Cta6 = styled.span`
  color: hotpink;
`;

export const CtaText = styled.div`
  display: flex;
  font-size: 2rem;

  span {
    font-size: 4rem;
    display: block;
    padding: 0rem 0.4rem;
    ${Medium({ fontSize:"6rem" })};
    ${Large({ fontSize:"8rem" })};
    ${ExtraExtraLarge({ fontSize:"10rem" })};
  }
`;

export const CtaBtn = styled.button`
  margin: 5rem;
  padding: 0.5rem 2rem;
  background-color: white;
  border-radius: 0.3rem;
  color: coral;
  border: none;
  font-size: 0.7rem;
  border: 1px dashed coral;

  &:hover {
    cursor: pointer;
  }
`;

export const BrandName = styled.h2`

`;
