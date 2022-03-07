import {
  StyledSlider,
  Wrapper,
  RadioButton,
  ImgSlider,
  ImgContainer,
  Image,

} from "./slider.styled";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";


const Slider = ({color}) => {
  const products = useSelector((state) => state.productsReducer);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const findSelected = products.find((product) => product.name === id);
    setProduct(findSelected);
    setSlideIndex(0)
  }, [id]);

  const [slideIndex, setSlideIndex] = useState(0);
 
  const handleClick = (index) => {
   setSlideIndex(index)
   
  };

  return (
    <StyledSlider>
      <Wrapper >
        <RadioButton onClick={() => handleClick(0)} color={slideIndex === 0 ? color : "transparent"}/>
        <RadioButton onClick={() => handleClick(1)}  color={slideIndex === 1 ? color : "transparent"}/>
        <RadioButton onClick={() => handleClick(2)} color={slideIndex === 2 ? color : "transparent"}/>
  
      </Wrapper>
<ImgSlider > 


      <ImgContainer  >
        <Image slideIndex={slideIndex} src={product.img} />
        <Image  slideIndex={slideIndex}src={product.imgFront} />
        <Image  slideIndex={slideIndex}src={product.imgOverhead} />
      </ImgContainer>
</ImgSlider>

      
    </StyledSlider>
  );
};

export default Slider;
