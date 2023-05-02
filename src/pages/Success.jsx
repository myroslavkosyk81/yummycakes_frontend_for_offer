import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <>
    <Navbar />
    <Announcement />
    <Container>
       <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
        <Link to="/"> 
          <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </ Link>
      
    </div>
    </Container>
   
    <Footer />
    </>

    
  );
};

export default Success;