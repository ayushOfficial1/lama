import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import styled from "styled-components";
import img1 from "../images/domino-164_6wVEHfI-unsplash.jpg";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:'10px'})}
`;
const Title = styled.h1`
  font-weight: 900;
  text-align: center;
`;

const Top = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  background-color: ${(props) =>
    props.type == "filled" ? "black" : "transparent"};
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  background-color: palegoldenrod;
  width: 200px;
`;
const Details = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #d8d8d8;
  height: 1px;
  border: none;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${mobile({ padding:'10px', marginBottom:'0px' })}
`;
const ProductAmount = styled.span`
  margin: 0px 10px;
  font-size: 24px;
  font-weight: 400;
  ${mobile({  margin:' 0px 15px' , fontSize:'20px'})}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({  fontSize:'22px' })}
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 52vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 20px;
`;
const SummaryItems = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  flex: 2;
`;
const SummaryItemPrice = styled.span`
  flex: 1;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 700;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName>
                    <b>Product:</b>NIKE RED HAMMER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>02934820349
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>28
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 10000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={img1} />
                <Details>
                  <ProductName>
                    <b>Product:</b>NIKE RED HAMMER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>02934820349
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>28
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs 10000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItems>
              <SummaryItemText>Sub Total :</SummaryItemText>
              <SummaryItemPrice>Rs 9000</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems>
              <SummaryItemText>Shipping Price :</SummaryItemText>
              <SummaryItemPrice>Rs 500</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems>
              <SummaryItemText>Discount :</SummaryItemText>
              <SummaryItemPrice>Rs 1500</SummaryItemPrice>
            </SummaryItems>
            <SummaryItems type="total">
              <SummaryItemText>Final Amount :</SummaryItemText>
              <SummaryItemPrice> Rs 8000</SummaryItemPrice>
            </SummaryItems>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
