import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useMediaPredicate } from "react-media-hook";
import {mobile} from "../responsive"

const Container = styled.div`
    padding: 20px;
    display: flex;
    /* height: 370px; */
    flex-wrap: wrap;
    justify-content: space-between;
    /* background-color: aqua; */;
    ${mobile({ height: "370px"})};
`
const Full = styled.div`

    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;

`

const Products = ({cat, filters, sort}) => {
  // console.log(cat, filters, sort)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=> {
    const getProducts = async ()=>{
      try{
       
        const res = await axios.get(cat 
         //Sorry, I can't show all code. But don't worry, it works!
        
        setProducts(res.data);
      }catch(err){
      }
    };
    getProducts()
  }, [cat]);
  useEffect(() => {
   //Sorry, I can't show all code. But don't worry, it works!
    );
  }, [products, cat, filters])

  useEffect(()=>{
    if(sort === "newest"){
      //Sorry, I can't show all code. But don't worry, it works!
      );
    } else if(sort === "asc"){
      //Sorry, I can't show all code. But don't worry, it works!
      );
    } else {
      //Sorry, I can't show all code. But don't worry, it works!
      );
    }
  },[sort])

  const products2 = Array.from(products);
  
  const ref = useRef();
  const smallerThan780 = useMediaPredicate("(max-width: 780px)");
  const biggerThan780 = useMediaPredicate("(min-width: 781px)");

 
  return (
    <Container>
      {smallerThan780 && 
      <div>
      <Parallax pages={4} ref={ref} style={{ 
        left: '0', 
        
        height: "370px",
        }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          onClick={() => ref.current.scrollTo(0)}
        >
          <div>  
        {cat
            ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
            : products2.slice(0, 20)
            .map((item) => <Product item={item} key={item._id} />)}
        </div>
        </ParallaxLayer>
      </Parallax>
    </div>}
    {biggerThan780 && 
       <Full>
          
        {cat
           //Sorry, I can't show all code. But don't worry, it works!
       
       </Full>
       }
    </Container>
    
  )
}

export default Products