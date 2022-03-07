import styled from "styled-components";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Medium, Large } from "../responsive";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondaryBg};
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding: 2rem 1rem;
  ${Medium({ width: "60%", margin: "0 auto" })};
  ${Large({ width: "40%", margin: "0 auto" })};
`;

const Title = styled.h1`
  padding-top: 20%;
  ${Large({ paddingBottom: "0%", paddingTop: "10%" })};

  grid-column: span 2;
  font-size: 5vw;
  text-align: center;
  font-weight: 800;
  line-height: 1rem;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1em;
`;

const WelcomeMessage = styled.div`
  background: white;
  border-radius: 10px;
  height: 30vh;

  padding: 2rem 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const UserData = styled.div`
  font-size: 2rem;

  margin: 0.5em 0;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1rem;
  ${Large({ paddingTop: "0" })};
`;

const UserView = styled.div`
  border-top: 2px solid black;
  margin: 1em 0;
`;

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Dashboard";
  }, []);
  return (
    <Container>
      <Navbar color="black" LogoColor="black" />

      <Title>Account overview</Title>
      <Wrapper>
        <UserContainer>
          <WelcomeMessage>
            <Span>Hi {name},</Span>
            <Text>here you will find all your relevant information</Text>
          </WelcomeMessage>
          <UserView>
            <UserData>Name: {name}</UserData>
            <UserData>Email: {user?.email}</UserData>
          </UserView>
        </UserContainer>

        <Button
          text="LOG OUT"
          shadowColor="#191D1E"
          color="#fff"
          bgColor="Black"
          width="100%"
          onClick={logout}
        />
      </Wrapper>

      <Footer />
    </Container>
  );
};
export default Dashboard;
