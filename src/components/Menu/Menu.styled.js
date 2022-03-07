// Menu.styled.js
import styled from "styled-components";
import { Small, Medium, Large, ExtraExtraLarge } from "../../responsive";

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  border: none;
  margin: 5px auto;
  color: ${(props) => props.color};
  flex: 1;
  overflow: hidden;

  p:nth-of-type(2) {
    display: none;
    ${Medium({ display: "block", color: "transparent" })};
    ${ExtraExtraLarge({ marginTop: "-5rem" })};
  }

  a {
    ${ExtraExtraLarge({ paddingTop: "2rem" })};
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.045em;

    &:hover {
      p {
        color: ${(props) => props.color};
      }
    }
  }
`;

export const Text = styled.p`
  z-index: 2;
  line-height: 2.5rem;
  transition: all 300ms ease-in-out;

  :nth-of-type(2) {
    position: absolute;
    bottom: 15%;
  }
`;

export const ImgContainer = styled.div`
  display: none;
  margin: -2em 0;
  ${Medium({ display: "block" })};
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  ${ExtraExtraLarge({ height: "80%" })};

  &:hover {
    transform: scale(1.1);
    filter: none !important;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  inset: 0;
`;

export const Container = styled.div`
  a {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  ${Medium({ gridColumn: "span 2" })};

  a {
    padding: 0;
  }
  svg {
    margin-top: 0.4em;
    font-size: 2.5em;
    color: ${({ theme }) => theme.primaryDark};
  }
`;

export const BrandTitle = styled.div`
  color: #999999;
  margin-top: 2em;
`;
export const StyledMenu = styled.nav`
  ${Medium({
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    height: "94vh",
    gridTemplateRows: "1fr 1fr 10%",
  })};
  ${ExtraExtraLarge({ gridTemplateRows: "1fr 1fr 10%" })};
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  background: ${({ theme }) => theme.primaryLight};
  height: 92vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  padding-top: 4em;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  z-index: 3;
  ${Medium({ paddingTop: "8%" })};
  ${ExtraExtraLarge({ paddingTop: "4%" })};

  p:hover {
    filter: contrast(4);
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
`;
