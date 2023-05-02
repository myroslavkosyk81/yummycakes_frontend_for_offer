import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from "styled-components";

const Container = styled.div`
    /* width: 100vw; */
    height: 55vh;
    background-size: cover;
      display: flex;
     
    align-items: center;
    justify-content: center;
    
`;
const BackGround = styled.img`
height: 55vh;
  background-size: cover;
      display: flex;
      opacity: 0.2;
    
`
const Content = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  
`
const Desc = styled.h1`
display: flex;
align-items: center;
justify-content: center;
padding: 10%;
text-align: center;
color: rgb(243, 107, 62)
`
const SpecialOffer = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <BackGround src="https://firebasestorage.googleapis.com/v0/b/shop-d66d7.appspot.com/o/Cake%2FSite%2FCakes2.png?alt=media&token=767a2b28-d7b0-42f7-8a2e-a4fec1fc0b1f">
          
        </BackGround>
        <Content>
          <Desc>Order 3 or more everyday cakes and get 50% discount</Desc>
          <Desc>WE WILL MADE YOUR HOLIDAY TASTE</Desc>
          </Content>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default SpecialOffer;

