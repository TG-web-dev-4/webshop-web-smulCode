import {StyledSignUp,Container,Text} from './SignUp.styled';
import Button from '../Button'
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
  <StyledSignUp>
    <Container> 



    <Text>Didn’t make an account yet to manage your subscriptin? Sign up below with the same email you used to place your order.</Text>
    <Link to="/register">
    <Button
            text="SIGN UP"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
          />
    </Link>
    </Container>

  </StyledSignUp>);
};

export default SignUp;
