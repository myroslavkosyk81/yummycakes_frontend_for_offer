import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
    /* width: 100vw; */
    height: 60vh;
    background: 
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/shop-d66d7.appspot.com/o/Cake%2FSite%2FCakes2.png?alt=media&token=767a2b28-d7b0-42f7-8a2e-a4fec1fc0b1f") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  /* background-color: white; */
  ${mobile({ width: "75%"})}
`;

const Title = styled.h1`
  //Sorry, I can't show all code. But don't worry, it works!
`;
const Form = styled.form`
 //Sorry, I can't show all code. But don't worry, it works!
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px;
  padding: 10px;
`;

const Button = styled.button`
 //Sorry, I can't show all code. But don't worry, it works!
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  //Sorry, I can't show all code. But don't worry, it works!

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }
  return (
    <>
    <Navbar />
    <Announcement />
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"
            //Sorry, I can't show all code. But don't worry, it works!
          <Input placeholder="password" type = "password"
            //Sorry, I can't show all code. But don't worry, it works!
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    <Footer />
    </>
  )
}

export default Login
