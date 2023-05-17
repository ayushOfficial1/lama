import styled from "styled-components";
import img1 from "../images/pexels-tofroscom-257849.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${img1});
  background-size: cover;
  background-position: center;
 
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  width: 25%;
  padding: 20px;
  background-color: white;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;

  min-width: 60%;
  /* width: 80%; */
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  margin-bottom: 10px;
  font-size: 15px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  opacity: 1;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="UserName" />
          <Input placeholder="Password" />
        </Form>
        <Button>LOGIN</Button>
        <Link href="#">Forget Password?</Link>
        <Link href="#">Create New Account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
