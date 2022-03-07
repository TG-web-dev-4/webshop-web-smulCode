import {
   StyledProductInfo,
   ChocoContainer,
   Image,
   Wrapper,
   BigTitle,
   Span,
   Container,
   Circle,
   Title,
   Text,
   Disclaimer,
   GridContainer
   



} from "./ProductInfo.styled";
import chocobar from "../../assets/IMG/choco-part-bar.png";
import coconut from "../../assets/IMG/coconut.png";
import chocochunk from "../../assets/IMG/piece.png";
import sugar from "../../assets/IMG/sugar.png";
import nuts from "../../assets/IMG/nut.png";

const ProductInfo = ({ color, bgColor }) => {
  return (
    <StyledProductInfo bgColor={bgColor} color={color}>
      <ChocoContainer> 

      <Image src={chocobar}/>
      </ChocoContainer>
      <Wrapper>
        <BigTitle>HEAVY ON THE</BigTitle>
        <BigTitle>
          <Span>GOOD</Span>
          <Span>STUFF</Span>
        </BigTitle>

        <BigTitle>EASY ON THE SWEET STUFF</BigTitle>
      </Wrapper>

<GridContainer>

      <Container>
        <Circle color={color}>
          <Image src={sugar}/>
        </Circle>
        <Title>ZERO GRAM OF SUGAR</Title>
        <Text>
          Our bars contain 99% less sugar than traditional candy bars* without
          relying on alternative sweeteners.
        </Text>

        <Disclaimer>
          *Versus the leading brand on an equivalent weight basis
        </Disclaimer>
      </Container>


      <Container>
        <Circle color={color}>
          <Image  src={coconut}/>
        </Circle>
        <Title>REAL INGREDIENTS</Title>
        <Text>
        Made with good stuff like Madagascar vanilla,almond butter and coocnut milk. Artifical who?
        </Text>

       
      </Container>
      <Container>
        <Circle color={color}>
          <Image src={chocochunk} />
        </Circle>
        <Title>FAIRTRADE CHOCOLATE</Title>
        <Text>
        Responsibly sourced from organic, sustainable growers, our fairtrade dark chocolate has absolitely no dark secrets
        </Text>

       
      </Container>


      <Container>
        <Circle color={color}>
          <Image src={nuts} />
        </Circle>
        <Title>PLANT-BASED</Title>
        <Text>
        With entirely plant-based,vegan recipes,these bars are practically* salads
        </Text>

        <Disclaimer style={{padding:"1.4rem"}}>
        *Not actually salads. More fun and more delicious than salads
        </Disclaimer>
      </Container>
</GridContainer>
    </StyledProductInfo>
  );
};

export default ProductInfo;
