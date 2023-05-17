import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container = styled.div`
   //!This page has problems
`;
const Title = styled.h1`
  margin: 20px;
  ${mobile({ margin: "10px", fontSize:'24px', fontWeight:200, display:'flex', justifyContent:'center' })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({justifyContent:'space-evenly'})}

`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "10px", display:'flex', flexDirection:'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({  fontSize:'14px', fontWeight:200 })}

`;

//This is new
const Select = styled.select`
border: 1px solid lightgray;
  padding: 10px; 
  margin-right: 20px;
  background-color: transparent;
  ${mobile({ padding:'5px' , marginTop:'10px',margin:' 10px 0px'})}
`;
//This is new too
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Sizes
            </Option>
            <Option>XS</Option>
            <Option>SM</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price ⬆️</Option>
            <Option>Price ⬇️</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
