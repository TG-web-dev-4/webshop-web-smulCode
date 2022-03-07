import styled from "styled-components";
import wrapperBg from "../../assets/IMG/wrapper-choco.jpg";
import { Medium, Large, ExtraExtraLarge } from "../../responsive";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  padding-top: 25%;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  overflow: hidden;
  svg {
    display: flex;
    margin: 0 auto;
    position: relative;
    font-size: 3em;

    ${Medium({ position: "absolute", bottom: "0%", left: "50%" })}

    color: ${({ theme }) => theme.primaryAccent};
  }

  ${Medium({ paddingTop: "2%" })};
`;

export const Wrapper = styled.div`
  padding-top: 1rem;
  position: relative;
`;

export const Headline = styled.h1`
  position: absolute;
  font-weight: bold;
  inset: 0;
  color: ${({ theme }) => theme.primaryAccent};
  font-style: italic;
  font-weight: 900;
  font-size: 26.5vw;

  margin-left: 10vw;
  display: flex;
  align-items: center;
  letter-spacing: -0.08em;
  -webkit-text-stroke: 2px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryAccent};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  ${Medium({ fontSize: "20vw", marginLeft: "25%" })};
`;

export const Content = styled.div`
  position: absolute;
  background-position: fixed;
  background-image: url(${wrapperBg});
  height: 65vh;
  width: 100%;
  background-size: cover;
  clip-path: polygon(11% 0, 92% 0, 92% 9%, 0 100%, 0 14%);
  ${Medium({
    height: "100vh",
    clipPath: "polygon(27% 0, 84% 0, 84% 6%, 33% 100%, 0 100%, 0% 50%)",
  })};
`;

export const CenterContent = styled.div`
  position: relative;
  /* border: 1px solid magenta; */
  height: 30vh;
  margin-top: 4rem;
  ${Medium({ top:"-10%"})};

`;

export const ImgContainer = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transform: scaleX(-1) rotate(10deg);
`;

export const Span = styled.span`
  font-style: italic;
  font-weight: 900;
  line-height: 28px;
  -webkit-text-stroke: 1px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryAccent};
`;

export const BottomContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  ${Medium({ position: "absolute", right: "2%", bottom: "15%" })};
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 10vw;
  line-height: 0.9em;
  letter-spacing: -0.045em;
  -webkit-text-stroke: 2px ${({ theme }) => theme.primaryLight};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryLight};
  width: 100%;
  ${Medium({ fontSize: "5vw" })};
`;

export const FirstLine = styled.div``;

export const SecondLine = styled.div``;
export const SubTitle = styled.div`
  font-weight: 300;
  margin: 1em;
  font-size: 1.3em;
  line-height: 16px;
  letter-spacing: -0.045em;
`;

export const ContainerBtn = styled.div`
  ${Medium({ position: "absolute", right: "10%", bottom: "4%" })};
`;
