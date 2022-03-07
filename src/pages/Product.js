import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductSelect from "../components/ProductSelect";
import Slider from "../components/Slider";
import ProductShowCase from "../components/ProductShowCase";
import FixedShoppingCart from "../components/FixedShoppingCart";
import ProductInfo from "../components/ProductInfo";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Container = styled.div``;

const ProductPage = () => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = id;
  }, [id]);

  return (
    <Container>
      <Navbar
        bgColor={product.color}
        LogoColor={product.bgColor}
        color={product.bgColor}
      />
      <ProductSelect color={product.bgColor} />
      <ProductShowCase color={product.bgColor} />
      <FixedShoppingCart color={product.bgColor} />
      <ProductInfo color={product.color} bgColor={product.bgColor} />
      <Footer color={product.bgColor} bgColor={product.color} />
    </Container>
  );
};

export default ProductPage;
