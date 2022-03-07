import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import { Medium, Large } from "../responsive";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */

  background-color: ${({ theme }) => theme.secondaryBg};
`;

const FlexContainer = styled.div`
  ${Large({
    padding: "8% 15%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "10% 1fr",
    placeItems: "center",
    gap: "0 10%",
  })};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  ${Medium({ width: "60%", margin: "0 auto" })};
  ${Large({ width: "100%", margin: "0 auto" })};
`;

const Title = styled.h1`
  padding-top: 20%;
  ${Large({ paddingTop: "0" })};

  grid-column: span 2;
  font-size: 10vw;
  text-align: center;
  font-weight: 800;
  line-height: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin: 2em 0px;

    text-decoration: underline;
    cursor: pointer;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 5px 0;
  padding: 1em;
  border-radius: 8px;
  border: none;
`;

const Message = styled.p`
  font-size: 1em;
  padding: 1em 0;
  ${Medium({ paddingTop: "25%" })};
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (loading) {
      //TODO: maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Login";
  }, []);

  return (
    <Container>
      <Navbar color="black" LogoColor="black" />
      <FlexContainer>
        <Title>LOG IN</Title>
        <Wrapper>
          <Message>
            NOTE: Account login and management is only available for customers
            with active subscription orders
          </Message>
          <Form>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              text="LOGIN"
              shadowColor="#191D1E"
              color="#fff"
              bgColor="Black"
              width="100%"
              onClick={() => logInWithEmailAndPassword(email, password)}
            />

            <Button
              text="WITH GOOGLE"
              shadowColor="#191D1E"
              color="#fff"
              bgColor="Black"
              width="100%"
              onClick={signInWithGoogle}
            />

            <Link to="/reset">FORGOT PASSWORD?</Link>
          </Form>
        </Wrapper>
        <SignUp />
      </FlexContainer>
      <Footer />
    </Container>
  );
};
export default Login;
