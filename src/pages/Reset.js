import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Medium, Large, ExtraExtraLarge } from "../responsive";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  ${Medium({ width: "60%", margin: "0 auto" })};
  ${Medium({ width: "40%", margin: "0 auto" })};
`;

const Title = styled.h1`
  padding-top: 20%;
  ${Medium({ paddingBottom: "5%" })};
  ${Large({ paddingBottom: "5%", paddingTop: "10%" })};

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

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log(error);
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Reset Password";
  }, []);

  return (
    <Container>
      <Navbar color="black" LogoColor="black" />

      <Title>RESET</Title>
      <Wrapper>
        <Form>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text="RESET PASSWORD"
            shadowColor="#191D1E"
            color="#fff"
            bgColor="Black"
            width="100%"
            onClick={() => sendPasswordReset(email)}
          />
          Don't have an account?
          <Link to="/Register">Register now</Link>
        </Form>
      </Wrapper>

      <Footer />
    </Container>
  );
};
export default Reset;
