import styled from 'styled-components';
import { Medium,Large,ExtraExtraLarge } from "../../responsive";


export const StyledProductShowCase = styled.div`
  
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 100%;
  height: 100%;
  padding-bottom:10em;
  

  position: relative;
  overflow: hidden;
  background-color:${({ theme})=> theme.primaryDark};
  color: ${({ theme})=> theme.primaryLight};
`;

export const ReviewScore = styled.div`
/* margin-top:-4em; */
  display: flex;
/* margin-top:-1em; */


svg{
  color:${({ theme})=> theme.checkoutBg}
}
`;

export const AmountReviews = styled.p`

`;

export const Description = styled.p`
display:flex;
justify-content:center;
  align-items: center;
  margin: 1em;
  font-size: 1.2em;
  text-align: center;
  font-weight:200;
  ${Medium({  width:"60%"})};
  ${Large({  width:"45%"})};


  
`;
