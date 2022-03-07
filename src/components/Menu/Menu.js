import { useState } from "react";
import { bool } from "prop-types";
import {
  StyledMenu,
  StyledButton,
  Wrapper,
  BrandTitle,
  Nav,
  Container,
  Text,
  Image,
  ImgContainer,
} from "./Menu.styled";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CartMenuBurger from "../CartMenuBurger";
import Cart from "../Cart";
import { useSelector} from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Menu = ({ open, setOpen }) => {
  const [productName, setProductName] = useState("");
  const { id } = useParams();

  const products = useSelector((state) => state.productsReducer);
  let navigate = useNavigate();

  const handleClick = (e) => {
    setOpen(false);
  };

  const selection =
    products &&
    products.map((product) => {
      return (
        <StyledButton
          key={product.id}
          bgColor={product.color}
          color={product.bgColor}
        >
          <Link
            to={`/Product/${product.name}`}
            onClick={() => {
              handleClick();
            }}
          >
            <Text>{product.name}</Text>

            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>

            <Text>BUY NOW</Text>
          </Link>
        </StyledButton>
      );
    });

  return (
    <StyledMenu open={open}>
      {/* <Nav>
     
    
      <CartMenuBurger open={openCart} setOpen={setOpenCart} />
          <Cart open={openCart} setOpen={setOpenCart} /> 

      </Nav>  */}

      {selection}
      <Wrapper>
        <StyledButton bgColor="#191D1E" color="#FFF">
          <Link to="/">CONTACT</Link>
        </StyledButton>
        <StyledButton bgColor="#191D1E" color="#FFF">
          <Link to="/">FAQ</Link>
        </StyledButton>
      </Wrapper>
      <Container>
        <StyledButton bgColor="#191D1E" color="#FFF">
          <Link to="/Login">LOGIN</Link>
        </StyledButton>
      </Container>

      <Wrapper>
        <>
          <FacebookIcon />
          <InstagramIcon />
        </>
        <BrandTitle>© 2022 CHUNKS LLC</BrandTitle>
      </Wrapper>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
