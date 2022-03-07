import {
  StyledExtraFlavor,
  Wrapper,
  Title,
  Span,
  TextContainer,
  Text,
  ImgContainer,
  Image,
} from "./ExtraFlavor.styled";
import { Link } from "react-router-dom";
import Button from "../Button";
import chocoBar from "../../assets/IMG/Snack-Bar-Mockup-removebg-preview.png";

const ExtraFlavor = () => {
  return (
    <StyledExtraFlavor>
      <Wrapper>
        <Title>
          ...PLUS <Span>ONE</Span>
        </Title>
        <Title>
          <Span>SECRET</Span>CHUNK
        </Title>
      </Wrapper>

      <TextContainer>
        <Text>ENJOY OUR LIMITED EDITION FLAVOR WHILE SUPPLIES LAST</Text>
      </TextContainer>

      <ImgContainer>
        <Image src={chocoBar} />
      </ImgContainer>

      <Link to="Product/DOUBLE%20DARK%20MINT">
        <Button
          text={"BUY NOW"}
          shadowColor="#191D1E"
          color="#191D1E"
          bgColor="#fff"
          width="176px"
        ></Button>
      </Link>
    </StyledExtraFlavor>
  );
};

export default ExtraFlavor;
