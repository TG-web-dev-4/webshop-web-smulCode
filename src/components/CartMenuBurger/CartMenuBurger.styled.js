import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 1em;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  

  &:focus {
    outline: none;
  }

  h1 {
    position: absolute;
    top: 1em;
    left: 1rem;
  }
  div {
   svg{
    display: ${({ open }) => (open ? "block" : "none")};
    color: ${({ color, open }) =>
      open ? "#999" : color};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 10;
    position: fixed;
    font-size:2em;
    top:1.4rem;
   }

  }

  svg {
    display: ${({ open }) => (open ? "none" : "block")};
    color: ${(props) => props.color};
  }
`;
