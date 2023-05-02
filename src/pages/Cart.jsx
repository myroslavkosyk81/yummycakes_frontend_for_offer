import { Add, Remove } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

import {userRequest} from "../requestMethods";
import { cleanCart } from "../redux/reduxCart";
import { deleteProduct } from "../redux/apiCalls";
// import { deletePrice } from '../redux/apiCalls';
import { deleteTotalSuccess, deleteQuantitySuccess } from '../redux/reduxCart';

const KEY = process.env.REACT_APP_STRIPE;


const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
//Sorry, I can't show all code. But don't worry, it works!
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    ${mobile({ flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`;
//Sorry, I can't show all code. But don't worry, it works!
const Button = styled.button`
    width: 50%;
    padding: 10px;
    background-color: #eb9292;
    color: white;
    font-weight: 600;
    ${mobile({ width: "50%"})}
`;

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    // console.log(cart);
    const dispatch = ....;
    const [.] = useState(null);
    const navigate = useNavigate()
    const onToken = (token) =>{
        setStripeToken(token);
    };
    // console.log(stripeToken)
    useEffect(() =>{
        
        const makeRequest = async () =>{
            try{
                const res = await userRequest.post(
                    "/ckeckout/payment", {
                        //Sorry, I can't show all code. But don't worry, it works!
                    }
                );
                console.log(res.data);
                navigate("/success", {state: res.data});
                {handleClickPayment()};
            }catch(err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    },[stripeToken, cart.total, navigate, dispatch])

    
    const handleClick = () => {
        //Sorry, I can't show all code. But don't worry, it works!
    };
  
    const handleClickPayment = () => {
        
            //Sorry, I can't show all code. But don't worry, it works!
        ;
    };
  
    const handleDelete = (_id) => {
       //Sorry, I can't show all code. But don't worry, it works!
        }
      };
    const handleDeleteProdTotal = (total) => {
        //Sorry, I can't show all code. But don't worry, it works!
      };
    const handleDeleteQuantity = (quantity) => {
        //Sorry, I can't show all code. But don't worry, it works!
      };
   
  return (
    <Container>
        <Navbar />
        <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>
                        <Link style={{ textDecoration: 'none'}} to="/"> 
                            CONTINUE SHOPPING
                        </ Link>
                    </TopButton>
                    {/* <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts> */}
                    <TopButton type="filled">CHECKOT NOW</TopButton>
                </Top>
                <Button onClick={handleClick}>Clean cart</Button>
                <Bottom>
                    <Info>  
                        {cart.products.map((product, i)=>(
                        <Product key={i}>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>-------</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>----------</b>{product.size}</ProductSize>
                                   -
                                    <Button onClick={() => {-----------; handleDeleteProdTotal(------); handleDeleteQuantity(product.quantity)}}>Remove</Button>
                                    
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove>
                                        
                                    </Remove>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr />
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping</SummaryItemText>
                            <SummaryItemPrice>$ 0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ {cart.discount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Shop"
                            // image="./logo192.png"
                           ------
                            -----
                            ------
                            -----
                            -------
                            stripeKey={KEY}
                            >
                                <Button>CHEKOUT NOW</Button>
                            </StripeCheckout>
                        
                    </Summary>
                </Bottom>
            </Wrapper>
        <Footer />
      
    </Container>
  )
}
    
export default Cart
