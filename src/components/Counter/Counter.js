import { StyledCounter, Quantity } from "./Counter.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions";
import { decrement } from "../../actions";
import { AddQuantity, SubtractQuantity } from "../../actions";
import {useEffect} from "react"

const Counter = ({ border, product }) => {
  const shoppingCartReducer = useSelector((state) => state.shoppingCartReducer);


  const addItem = () => {
  
    dispatch(AddQuantity(product.id));
    dispatch(increment());
  };
  const SubstractItem = () => {
    if(shoppingCartReducer.total === 0  || shoppingCartReducer.total < 1 ){
      return 

    }
    dispatch(SubtractQuantity(product.id));
    dispatch(decrement());
  };

  const dispatch = useDispatch();




  return (

<>
{ isNaN(product.quantity)? ("") : ( <StyledCounter border={border}>
      <button onClick={SubstractItem}>
        <RemoveIcon />
      </button>
      <Quantity>

        {product.quantity}
     

      </Quantity>
      <button onClick={addItem}>
        <AddIcon />
      </button>
    </StyledCounter>) }

</>    
   
  );
};

export default Counter;
