// Menu.styled.js
import styled from "styled-components";
import {Medium,Large,ExtraExtraLarge} from "../../responsive"


export const CartTitle = styled.h2`
  position: absolute;
  inset: 0;
  color: ${({ theme }) => theme.primaryDark};
  font-weight: 300;
  width: 100%;
  background-color: red;
  min-height: fit-content;
  padding: 1em;
  
  background-color: ${({ theme }) => theme.secondaryBg};
`;
export const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.secondaryBg};
  min-height: 100vh;
  text-align: left;
  padding-top: 5.2em;
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 9;
  width:100%;
${Medium({  width:"50vw"})} ;
${Large({  width:"30vw"})} ;



  

`;


export const CartBag = styled.div`


overflow-y: auto;

height: 60vh;

`;