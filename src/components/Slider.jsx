import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
// import iphone from '../img/1.avif'
import { useState } from "react";
import {sliderItems} from "../data"
import {mobile} from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: coral;
    position: relative;
    overflow: hidden;
    ${mobile({ height: "25vh"})};
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * - 100}vw);
`
//Sorry, I can't show all code. But don't worry, it works!
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${mobile({ fontSize: "10px", padding: "3px"})}
`
const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        //Sorry, I can't show all code. But don't worry, it works!
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(

            <Slide bg={item.bg} key={item.id}>
               <ImgContainer>
                    <Image src={item.img} />
                    {/* <Image src="https://media.istockphoto.com/id/1197063336/es/foto/apple-iphone-11-pro-aislado-sobre-fondo-blanco.jpg?s=612x612&w=is&k=20&c=ky02UcPY4bYlKzOQ0Uc-MCcH-s0xLbu_1tJjQ2QjfiA=" /> */}
                    </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>
                        <Link to="/specialoffer" style={{ textDecoration: 'none', color: "#f5845e"}}> 
                            Show now
                        </ Link>
                    </Button>
                </InfoContainer> 
            </Slide>
            ))}
            
           
            
        </Wrapper>
        <Arrow  direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
