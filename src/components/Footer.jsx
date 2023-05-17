import {
  Business,
  Facebook,
  Instagram,
  LocalPhone,
  Mail,
  Payment,
  Pinterest,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30vh;
  width: 100vw;
  padding: 20px;
  background-color: #fed3d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({flexDirection:'column',height:'100%'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ justifyContent:'center' })}
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ margin: "5px" })}
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 7px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  font-weight: 900;
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const PaymentItem = styled.div`
    margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOPIFY</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          aspernatur sequi consequuntur, nam ex nobis deleniti delectus odit
          qui!
        </Desc>
        <SocialContainer>
          <SocialIcon color="4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E1306C">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Kids Fashion</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Business style={{marginRight:'10px'}} />
            Chandnichowk Street, F-34, Delhi
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{marginRight:'10px'}} /> +1 234 567 890
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:'10px'}} /> Shopify@gmail.com
        </ContactItem>
        <ContactItem>
            <Payment style={{marginRight:'10px'}} /> Contribute
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
