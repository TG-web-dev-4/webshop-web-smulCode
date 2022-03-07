import styled from 'styled-components';

import { Medium,Large,ExtraExtraLarge } from "../../responsive";

export const StyledSignUp = styled.div`
  display:flex;
  flex-direction:column;
  background-color:${({ theme}) => theme.secondaryBg};
  padding:0 1rem;
  height:40vh;

`;

export const Container = styled.div`
 ${Medium({ width:"60%", margin:"0 auto"})}; 
 ${Large({ width:"100%", margin:"0 auto"})};

`;

export const Text = styled.p`
  padding:0 0.5rem;
  padding-bottom:1rem;
`;