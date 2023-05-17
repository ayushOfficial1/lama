import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ fontSize:'12px', textAlign:'center' })}
`

const Announcements = () => {
  return (
    <Container>Biggest Great Indian Sale is here ! Minimum 40% Discount!!</Container>
  )
}

export default Announcements