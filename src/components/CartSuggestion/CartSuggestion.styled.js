import styled from "styled-components";

export const StyledCartSuggestion = styled.div`
  display: ${(props)=> props.display} ;
  position: relative;
  text-align: center;
  height: 50vh;
  width: 100%;
  padding-top: 1em;
  color: ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.secondaryBg};

`;

export const Message = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
  line-height: 0.8em;
  width: 30%;
  margin: 0 auto;
`;

export const Suggestion = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 42vh;
  width: 100%;
  
`;
export const Question = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;



export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 8vh;
  background-color: ${({ theme }) => theme.primaryAccent};
  border-radius: 10px;
  border: none;
  margin: 5px auto;
  color: ${({ theme }) => theme.secondaryBg};
  font-size:2rem;
  font-weight: 800;
  transition: all 250ms ease-in-out;


  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.primaryDark}
  }

  &:hover{
    transform:translate(4px,-4px);
    box-shadow: 

    -3px 4px 0px ${(props) => props.shadowColor},
    -4px 5px 0px ${(props) => props.shadowColor},
    -5px 6px 0px ${(props) => props.shadowColor},
    -6px 7px 0px ${(props) => props.shadowColor},
    -7px 8px 0px ${(props) => props.shadowColor}


      }

      &:active{
        transform:translateY(0) translateX(0);
        box-shadow: -2px 3px 0px ${(props) => props.shadowColor};


      }


`;

//cartitem suggestion\

export const CartItem = styled.div`
  padding:0.5rem;
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

export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
height: 100%;
padding-top: 0.5em;

svg{
  margin-top:5px;
}
`;

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
