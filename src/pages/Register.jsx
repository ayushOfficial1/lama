import styled from "styled-components";
import img1 from "../images/averie-woodard-4nulm-JUYFo-unsplash.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(${img1});
  background-size: cover;
  background-position: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  width: 40%;
  padding: 20px;
  background-color: white;
  opacity: 0.9;
  z-index: 2;
  ${mobile({ width:'80%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Form = styled.form`
  /* width: 40%; */
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  margin: 20px 0px;
  font-weight: 500;
  font-size: 14px;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  font-size: 15px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  opacity: 1;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="FirstName" />
          <Input placeholder="LastName" />
          <Input placeholder="EMail" />
          <Input placeholder="UserName" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm-Password" />
        </Form>
        <Agreement>
          By clicking submit, you agree to our Terms of Service and Privacy
          Policy, which govern our use of your<b> personal data</b>.
        </Agreement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
