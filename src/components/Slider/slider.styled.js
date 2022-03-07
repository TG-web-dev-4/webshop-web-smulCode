import styled from "styled-components";
import { Medium, Large, ExtraExtraLarge } from "../../responsive";

export const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioButton = styled.button`
  border-radius: 50%;
  padding: 0.7em;
  border: 1px solid #999;

  transition: all 250ms ease-in-out;
  margin: 1em;
  z-index: 2;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const ImgSlider = styled.div`
  width: 100vw;

`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5em;

  width: 100%;
  padding: 1rem;
  ${Medium({ width: "50vw" })}

  overflow: hidden;

  margin: 0 auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-left:3vw;
  ${Medium({ marginLeft: "1vw" })}
  ${ExtraExtraLarge({ marginLeft: "4vw" })}
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  @media only screen and (min-width: 768px) {
    transform: translateX(${(props) => props.slideIndex * -50}vw);
  }
`;

export const ReviewScore = styled.div`
  margin-top: -4em;
  display: flex;

  svg {
    color: ${({ theme }) => theme.checkoutBg};
  }
`;

export const AmountReviews = styled.p``;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  font-size: 1.2em;
  text-align: center;
  font-weight: 200;
`;
