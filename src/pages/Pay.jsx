import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const KEY =
  "pk_test_51N7zCsSFwyXrzRM75qspJUlXb7I436xqQ78OeGWzPiIHOUF4GbDkisoFSw7ROE69957TNDsdUrbmR10wckBiQIjI004YXuqKCK";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 20px 30px;
  font-weight: 700;
  text-align: center;
  background-color: black;
  color: white;
`;
const Pay = () => {
  const navigate =  useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 10000,
          }
        );

        console.log(res.data);
        navigate('/success')
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken,navigate]);
  return (
    <Container>
      {stripeToken ? (
        <span>Your Payment is Processing. Please Wait.....</span>
      ) : (
        <StripeCheckout
          name="Ayush"
          image="https://picsum.photos/200/300"
          billingAddress
          shippingAddress
          amount={10000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>Pay Now</Button>
        </StripeCheckout>
      )}
    </Container>
  );
};

export default Pay;
