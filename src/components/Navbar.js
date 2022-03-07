import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from '@mui/icons-material/Person';

import { useState, useRef,useEffect } from "react";
import { useOnClickOutside } from "../hooks";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import CartMenuBurger from "../components/CartMenuBurger";
import { Link } from "react-router-dom";

import { auth, db, logout } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Container = styled.div`
  height: 70px;
  position:fixed;
  width: 100%;
  /* background-color:${(props) => props.color}; */
  /* background-color:red; */
 /* background:red; */
  z-index: 100;



`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: ${({ theme, open }) =>
    open ? theme.primaryDark : theme.primaryAccent};
  color: ${(props) => props.LogoColor};

  a {
    text-decoration: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 35px;
  color: ${(props) => props.color};
 
`;



const Navbar = ({ bgColor, color, LogoColor }) => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const node = useRef();
  const point =useRef();

  const [user, loading, error] = useAuthState(auth);
 





  const containerRef = useRef(null);

  useEffect(() => {
  
    const el = containerRef.current;

    const showAnim = gsap.from(el, { 
      yPercent: -100,
      paused: true,
      duration: 0.2,
      backgroundColor:"transparent",
    
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      // markers: {startColor: "green", endColor: "red", fontSize: "1rem"},
   
      onLeaveBack: () => {


        gsap.to(el, {backgroundColor:"transparent"})
      },
      
     
      onUpdate: (self) => {
        gsap.to(el, {backgroundColor:"#EB3581"})
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }, []);



  useOnClickOutside(node, () => setOpen(false));
  useOnClickOutside(point, () => setOpenCart(false));
  return (
    <Container ref={containerRef} color={color} >
      <Wrapper>
        <Left ref={node}>
          <Burger color={color} bgColor={bgColor} open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Left>
        <Center>
          <Logo LogoColor={LogoColor} open={open} setOpen={setOpen}>
            <Link to="/">CHUNKS!</Link>
          </Logo>
        </Center>
        <Right  ref={point}>
          <MenuItem color={color} open={open} setOpen={setOpen}>
            <Link to="/Login/">
             {!user ? <PersonOutlineOutlinedIcon /> : <PersonIcon/>}
              
            </Link>
          </MenuItem>
          <MenuItem open={open} setOpen={setOpen}>
            <CartMenuBurger
              bgColor={bgColor}
              color={color}
              open={openCart}
              setOpen={setOpenCart}
            />
            <Cart open={openCart} setOpen={setOpenCart} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
