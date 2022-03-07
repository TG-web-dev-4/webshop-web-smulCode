import styled from 'styled-components';

export const StyledCounter = styled.div`

  display:flex;
  flex:1;
  border: 1px solid ${(props)=> props.border};
  border-radius:2px;
  background-color: ${({ theme})=> theme.primaryLight};
  color:${({ theme})=> theme.primaryDark};
  text-align: center;
  height: fit-content;
  margin-top:0.5rem;
  margin-right: 2%;
 


  button{
    background-color:transparent;
    border:none;

    svg{
      color:#999;

      &:hover{
      cursor: pointer;
  color:${({ theme})=> theme.primaryDark};

    }
    }

    &:hover{
      cursor: pointer;
  color:${({ theme})=> theme.primaryDark};

    }
 
  }
`;

export const Quantity = styled.p`
  font-weight:600;
  font-size:1.2rem;
  padding:0 1em ;
  
`;