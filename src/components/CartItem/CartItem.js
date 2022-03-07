import {
  StyledCardItem,
  Container,
  Left,
  Image,
  Center,
  ProductTitle,
  Span,
  Wrapper,
  Right,
  Price,
} from "./CartItem.styled";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter";
import {useState,useEffect} from "react"
import CloseIcon from '@mui/icons-material/Close';
import { Remove } from "../../actions";

const CartItem = ({items}) => {
  const shoppingCartReducer = useSelector((state) => state.shoppingCartReducer);
  const dispatch = useDispatch();


  const itemsCart =
    items &&
    items.map((item) => {
     let totalPrice = item.quantity * Math.round((item.price  + Number.EPSILON) * 100) / 100;
   
      return (
        <Container key={item.id}>
        <Left>
          <Image src={item.img} />
        </Left>

        <Center>
          <ProductTitle>
            {item.name}
            <Span> 8 Pack</Span>
          </ProductTitle>
          <Wrapper>
            <Counter border="white"  product={item}  />
          </Wrapper>
        </Center>

        <Right>
          <CloseIcon onClick={() => dispatch(Remove(item.id))}/>
          <Price>€{totalPrice.toFixed(2)}</Price>
        </Right>
      </Container>
      )
    });

  
  return (
    <StyledCardItem>
      {itemsCart}
    </StyledCardItem>
  );
};

export default CartItem;
