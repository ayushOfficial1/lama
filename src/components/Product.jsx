import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fafd;
  position: relative;
`;
const Circle = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  &:hover{
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ecf7fe;
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
