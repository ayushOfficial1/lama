import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  margin: 30px;
  display: inline;
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  font-weight: 700;
  text-align: center;
  background-color: teal;
  color: white;
`;
const Success = () => {
  return (
    <Container>
      <Box>
        <TitleBox>SUCCESSFULL</TitleBox>
        Your Order is Being Prepared. Thank You for using Shopify!
      </Box>
    </Container>
  );
};

export default Success;
