import { Email, Facebook, Instagram, Map, PhoneIphone, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.img`
width: 20%;
`
const Desc = styled.p`
  margin: 10px 0px;
  flex-direction: row;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=> props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#e4e1e1"})}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
      
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: 'none', color: "black"}}> 
              Home
            </ Link>
          </ListItem>
          <ListItem>
            <Link to="/cart" style={{ textDecoration: 'none', color: "black"}}> 
              Cart
            </ Link>
          </ListItem>
          
        
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{marginRight: "10px"}}/>Ivano-Franfivsk
        </ContactItem>
        <ContactItem>
          <PhoneIphone style={{marginRight: "10px"}}/>+380 12 345 67 89
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight: "10px"}}/>mail@mail.ua
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      <Left>
         <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
        <Desc>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="https://portfolio-bice-five-17.vercel.app/">
            <div>Developed by</div>
              <Logo src="//Sorry, I can't show all code. But don't worry, it works!" />
        </ Link>
          
        </Desc>
        
        
       
      </Left>
    </Container>
  )
}

export default Footer
