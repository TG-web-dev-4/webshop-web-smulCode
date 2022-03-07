import { bool } from "prop-types";
import { StyledMenu,CartTitle,CartBag} from "./Cart.Styled";
import CartAnnouncement from "../CartAnnouncement";
import CartSuggestion from "../CartSuggestion";
import CartCheckout from "../CartCheckout";
import CartItem from "../CartItem";
import { useSelector, useDispatch } from "react-redux";
import {useState,useEffect} from "react"


const Menu = ({ open }) => {
const shoppingCartItem = useSelector((state) => state.shoppingCartReducer);

// console.log(shoppingCartItem.total)



  return (
    <StyledMenu open={open}>
    <CartTitle>YOUR CART</CartTitle>
    {shoppingCartItem.total >= 30 ? (<CartAnnouncement title={" "} subTitle={"CONGRATS! YOU QUALIFY FOR FREE SHIPPING!"}   />) : <CartAnnouncement   /> }
 
<CartBag> 


    {shoppingCartItem.addedItems ? (<CartItem items={shoppingCartItem.addedItems}/>): (" nope")}
 
 {shoppingCartItem.addedItems[0]  ? (""): ( <CartSuggestion />)}


</CartBag>
   
    <CartCheckout total={shoppingCartItem.total}/>
    </StyledMenu>
  );
};


Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;


