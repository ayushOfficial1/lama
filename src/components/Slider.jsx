import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import img1 from "../images/pexels-ary-shutter-805367.jpg";
import img2 from "../images/pexels-juan-mendez-1536619.jpg";
import img3 from "../images/pexels-nicolas-postiglioni-821411.jpg";
import {sliderItems} from "../data";
import { useState } from "react";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: #ffffcc; */
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #caf2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.75s ease;
  transform: translateX(${props=>props.slideIndex* -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  padding-right: 10px;
`;
const InfoContainer = styled.div`
  flex: 1;
  /* padding: 0px 250px 20px 50px; */
  padding: 270px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-weight: bolder;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }   
  }
    return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>
                {/* THINK LESS SHOP MORE ! FLAT 40% OFF ON THE ORDERS ABOVE 100$ */}
                {item.desc}
              </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
