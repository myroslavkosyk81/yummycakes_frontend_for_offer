
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive.js"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import logo from './img/Cakes2.png';
import baner from './img/CakesBaner.png';
import { logOut } from '../redux/userRedux.js';

const Container = styled.div`
    height: 160px;
    ${mobile({ height: "155px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px", flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14 px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    /* font-weight: bold; */
    ${mobile({ fontSize: "24px"})}
`
const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    ${mobile({display: "none",  width: "105px", height: "105px"})}
`
const Baner = styled.h1`
    /* font-weight: bold; */
    /* display: none; */
    ${mobile({ display: "block", fontSize: "24px"})}
`
const ImageB = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    ${mobile({width: "100%", height: "105px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    ${mobile({ flex: 2, justifyContent: "center",})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    const dispatch = useDispatch();
   //Sorry, I can't show all code. But don't worry, it works!
    const quantity = useSelector(state=>state.cart.quantity);
    
    const handleClick = () => {
        //Sorry, I can't show all code. But don't worry, it works!
        console.log(user)
    };

  return (
    <Container>
        
        <Wrapper>
            <Left>
                
                
                </Left>
            <Center>
                
                <Baner >
                   <Link to="/"> 
                    <ImageB src={baner}/>
                    </ Link>
                    
                </Baner>
            </Center>
            <Right>
                {user ? (<>
                    <MenuItem style={{padding: "12px"}}>
                    <Link style={{ textDecoration: 'none', color: "#f5845e"}} onClick={handleClick}>LOG OUT</ Link>
                    </MenuItem>
                
                
                </>) : (<>
                <MenuItem style={{padding: "12px"}}>
                    <Link style={{ textDecoration: 'none', color: "#f5845e"}} to="/register">REGISTER</ Link>
                </MenuItem>
                <MenuItem style={{padding: "12px"}}>
                    <Link style={{ textDecoration: 'none', color: "#f5845e"}}  to="/auth/login">SIGN IN</ Link>
                </MenuItem>
                </>)}
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon style={{color: "#f5845e"}} />
                        </Badge>
                    </MenuItem>
                </Link>
                
            </Right>
            
        </Wrapper>
      
    </Container>
  )
}

export default Navbar
