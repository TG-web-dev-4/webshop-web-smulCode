import { StyledFooter, Logo,Text,Form,Input,Wrapper,Container,BrandName} from "./Footer.styled";
import Button from "../Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {useState} from "react"

const Footer = ({color,bgColor}) => {
    const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
//TODO: CHANGE ONSUBMIT TO THANKS FOR SUBSCRIBING 
    setEmail("")
  }


  return (
    <StyledFooter>
      <Logo color={color} bgColor={bgColor}>CHUNKS!</Logo>
      <Text>LET’S PASS NOTES - SUBSCRIBE TO OUR EMAIL LIST.</Text>
      <Form onSubmit={handleSubmit}>
      <Input 
          placeholder="Email"
          value={email}
        onChange={(e) => setEmail(e.target.value)}
          />
        <Button
          text="SUBMIT"
          shadowColor="#FFF"
          color="#191D1E"
          bgColor={color}
          width="100%"
        />
      </Form>
      <Wrapper>
        <Container>
          <FacebookIcon />
          <InstagramIcon />
        </Container>
        <Text color="#999">PRIVACY POLICY • TERMS OF USE</Text>
        <BrandName color="#999">© 2022 CHUNKS LLC</BrandName>
      </Wrapper>
    </StyledFooter>
  );
};


Footer.defaultProps = {
  color: "#EB3581",
  bgColor: "#EB3581",
};
export default Footer;
