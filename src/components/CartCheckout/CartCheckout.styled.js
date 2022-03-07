import styled from "styled-components";

export const StyledCheckout = styled.div`
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.checkoutBg};
  color: ${({ theme }) => theme.primaryDark};
  height: 24vh;
  bottom: 0;
  position: absolute;
  width: 100%;
  
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;
export const SubTotal = styled.p`
  flex: 2;
  font-size: 1.1rem;
`;

export const PriceSummary = styled.p`
  font-weight: 800;
  font-size: 1.5rem;
  text-align: right;
  flex: 1;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.checkoutBg};
  box-sizing: border-box;
  box-shadow: -4px 4px 0px #7c6918;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.checkoutBtn};
  color: ${({ theme }) => theme.checkoutBg};

  transition: all 200ms ease-in-out;
  &:hover{
    cursor: pointer;
    transform:translate(4px,-4px);
    box-shadow: 

    -3px 4px 0px #7c6918,
    -4px 5px 0px #7c6918,
    -5px 6px 0px #7c6918,
    -6px 7px 0px #7c6918,
    -7px 8px 0px #7c6918


      }

      &:active{
        transform:translateY(0) translateX(0);
        box-shadow: -2px 3px 0px #7c6918;


      }

`;



export const Container = styled.div`
      display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  width: 100%;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.5rem;
padding-top:0.3em;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;

// export const Wrapper = styled.div`
// display:flex;
// justify-content: space-evenly;
// height: 100%;
// padding-top: 0.5em;

// svg{
//   margin-top:5px;
// }
// `;

export const Quantity = styled.p`
font-size: 1.5rem;

`;
export const Right = styled.div`
  flex: 1;
position: relative;
  align-items: flex-end;

`;

export const Price = styled.p`
font-size: 1.5rem;
font-weight: 800;
position: absolute;
bottom:0;
right:1rem;

`;
