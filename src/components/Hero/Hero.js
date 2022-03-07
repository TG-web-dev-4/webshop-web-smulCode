import {Container, Wrapper,Headline,Content,CenterContent,Image,Span,BottomContent,
Title,
FirstLine,
SecondLine,
SubTitle,
ImgContainer,
ContainerBtn
} from "./Hero.styled"
import chocoBar from "../../assets/IMG/choco-part-bar.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from "../Button";
import { Link } from "react-router-dom";
import {useRef, useEffect} from "react";
import gsap from "gsap";




const Hero = () => {

  const ContentRef = useRef(null);
  const ArrowRef = useRef(null);

  useEffect(() => {
   const el = ContentRef.current;
   const Arrow = ArrowRef.current;

   gsap.fromTo(el, {x:"-=10",y:"-=15"},{x:0,y:0,repeat:-1, duration:4, ease:"Power1.easeInOut" ,yoyo: true,})
   gsap.fromTo(Arrow, {y:15,},{y:0,repeat:-1, duration:1, ease:"power1" ,yoyo: true,})




  }, [])
  

  return (
    <Container>
      <Wrapper  >
        <Headline>CHUNKS!</Headline>
        <Content />
      </Wrapper>
      <CenterContent>
        <ImgContainer ref={ContentRef}> 
        
        <Image src={chocoBar}></Image>
        </ImgContainer>
      </CenterContent>
      <BottomContent>
        <Title>
          <FirstLine>
            <Span>HEALTHY </Span>
            CHUNKS
          </FirstLine>
          <SecondLine>
            OF
            <Span> HEAVEN</Span>
          </SecondLine>
        </Title>
        <SubTitle>Plant-based candy bars zero sugar</SubTitle>
      </BottomContent>
     <ContainerBtn> 


      <Link to="Product/VARIETY%20PACK">
      <Button text={"BUY NOW"} shadowColor="#fff" color="#191D1E" bgColor="#EB3581" width="176px">
      </Button>
      </Link>
     </ContainerBtn>
      <KeyboardArrowDownIcon ref={ArrowRef}/>
    </Container>
  );
};

export default Hero;
