import styled from "styled-components";

export const StyledCardItem = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.secondaryBg};


`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 100%; */
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryLight};
  width: 100%;
  margin: 0.5em 0;


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
  padding-top: 0.3em;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  padding-top: 0.5em;

  svg {
    margin-top: 5px;
  }
`;

export const Quantity = styled.p`
  font-size: 1.5rem;
`;
export const Right = styled.div`
  flex: 1;
  position: relative;
  align-items: flex-end;

  svg{
    position: absolute;
    right:10%;
    top:10%;
    &:hover{
      cursor: pointer;
    }
  }
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  position: absolute;
  bottom: 0;
  right: 1rem;
`;
