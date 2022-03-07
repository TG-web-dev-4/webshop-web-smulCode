import React from 'react';

import Slider from '../Slider'


import {
  StyledProductShowCase,
  ReviewScore,
  AmountReviews,
  Description,
} from "./ProductShowCase.styled";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const ProductShowCase = ({color}) => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
  }, [id]);


  return (
    <StyledProductShowCase>
      <Slider color={color}/>

      <ReviewScore>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <AmountReviews>({product.reviews})</AmountReviews>
      </ReviewScore>

      <Description>{product.description}</Description>
    </StyledProductShowCase>
  );
};

export default ProductShowCase;
