import {
  StyledFlavorSection,
  SmallTitle,
  BigTitle,
  Text,
  ImageContainer,
  Image,
  TextContent,
} from "./FlavorSection.styled";
import { Link } from "react-router-dom";
import Button from "../Button";
import VarietyPack from "../../assets/IMG/Chocolate-Bar-Packaging-Mockup-removebg-preview.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

const FlavorSection = () => {
  // const imgRef = useRef(null);

  // useEffect(() => {
  //   const el = imgRef.current;
  //   gsap.fromTo(
  //     el,
  //     { opacity:0 },
  //     {opacity:1, duration: 3, 
  //       scrollTrigger: { 
  //         trigger: el,
 
          

        
  //       } }
  //   );
  // }, []);

  return (
    <StyledFlavorSection>
      <ImageContainer>
        <Image src={VarietyPack} />
      </ImageContainer>

      <SmallTitle>4 CHEEKY</SmallTitle>
      <BigTitle>DELICIOUS</BigTitle>
      <SmallTitle>FLAVORS TO SAVOR</SmallTitle>

      <TextContent  >
        <Text>FAIRTRADE DARK CHOCOLATE</Text>
        <Text>PLANT-BASED CARAMEL</Text>
        <Text>ZERO SUGAR</Text>
        <Text>GLUTEN FREE</Text>
      </TextContent>

      <Link to="Product/VARIETY%20PACK">
        <Button
          text={"BUY NOW"}
          shadowColor="#191D1E"
          color="#fff"
          bgColor="#EB3581"
          width="176px"
        ></Button>
      </Link>
    </StyledFlavorSection>
  );
};

export default FlavorSection;
