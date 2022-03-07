
import { bool, func } from 'prop-types';
import { StyledBurger } from './CartMenuBurger.styled';
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";

const Burger = ({ open, setOpen,color,bgColor }) => {
  const items = useSelector((state) => state.shoppingCartReducer);


  let totalBagItems = items.total / items.Products[0].price;
 

  return (
    
    <StyledBurger color={color} bgColor={bgColor} open={open} onClick={() => setOpen(!open)}>
      <div><CloseIcon/></div>
      <Badge  badgeContent={totalBagItems} color="secondary" >
      {totalBagItems === 0 ?    <ShoppingCartOutlinedIcon  />    : <ShoppingCartIcon/>}
           
       </Badge>
    </StyledBurger>
    
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;