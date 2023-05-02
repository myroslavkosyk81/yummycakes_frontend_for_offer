import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/reduxCart";
import { useDispatch } from "react-redux";


const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh"})}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    //Sorry, I can't show all code. But don't worry, it works!
`;
const FilterContainer = styled.div`
    //Sorry, I can't show all code. But don't worry, it works!
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
//Sorry, I can't show all code. But don't worry, it works!
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
    
`;
const AddContainer = styled.div`
    //Sorry, I can't show all code. But don't worry, it works!;
const Amount = styled.span`
   //Sorry, I can't show all code. But don't worry, it works!
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #ecd5d5;
    }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    //Sorry, I can't show all code. But don't worry, it works!
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () =>{
           //Sorry, I can't show all code. But don't worry, it works!
        };
        getProduct()
    }, [id]);

    const handleQuantity = (type) => {
       //Sorry, I can't show all code. But don't worry, it works!
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    };
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        //Sorry, I can't show all code. But don't worry, it works!
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Weight</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)} >
                           //Sorry, I can't show all code. But don't worry, it works!
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleQuantity("inc")} />
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
