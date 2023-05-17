import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import img1 from "../images/pexels-juan-mendez-1536619.jpg";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ margin: "10px",flexDirection:'column', padding:'5px'})}

`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:'40vh'})}

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({padding:'20px'})}
`;
const Title = styled.h1`
  font-weight: 300;
  ${mobile({fontSize:'25px'})}
`;
const Desc = styled.div`
  padding: 20px 0px;
  ${mobile({padding:'10px 0px'})}
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
  ${mobile({fontSize:'25px'})}
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({margin:'10px 0px', width:"100%"})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
 
`;
const FilterTitle = styled.span`
  font-weight: 200px;
  font-size: 20px;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  margin: 0px 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.option`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({marginRight:'25px',width:'100%'})}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  /* ${mobile({margin:'10px 20px'})} */
`;
const Amount = styled.option`
  font-size: 20px;
  font-weight: 900;
  height: 30px;
  width: 30px;
  border: 1px solid teal;
  margin: 0px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 15px;
  font-weight: 700;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #dcfefe;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src={img1} />
        </ImageContainer>
        <InfoContainer>
          <Title>Product</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            sequi blanditiis est unde voluptate, architecto obcaecati id placeat
            culpa perspiciatis.
          </Desc>
          <Price>Rs 8000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="blue" />
              <FilterColor color="navy" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption disabled selected>
                  XS
                </FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
