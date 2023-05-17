import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fde8eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ height: "25vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  margin: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Desc = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
  ${mobile({ fontSize: "15px" })}
`;

const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  ${mobile({ display: "flex", justifyContent: "center", alignItems: "center", width:'80%', height:'30px' })}
`;
const Input = styled.input`
  height: 100%;
  border: none;
  flex: 8;
  padding-left: 30px;
`;
const Button = styled.button`
  height: 100%;
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>GET ALL THE LATEST UPDATES</Desc>
      <InputContainer>
        <Input placeholder="YOUR EMAIL" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
