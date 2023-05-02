import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import SpecialOffer from "./pages/SpecialOffer";
import {
  Routes, Route, Redirect, Link, Navigate
} from "react-router-dom";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
function App () {
  const user = useSelector((state) => state.user.currentUser);
  //compare with admin
  

// console.log(user)
  
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/specialoffer" element={<SpecialOffer />} />
          <Route path="/auth/login" element={user ? <Navigate to="/" replace /> :  <Login />} />
          {/* <Route path="/auth/login" element={  <Login />} /> */}
          {/* <Route path="/register" element={user ? <Navigate to="/" replace /> :  <Register />} /> */}
          
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
  );
}

export default App;

//reserv copy
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
// import Success from "./pages/Success";
// import {
//   BrowserRouter as Router, Routes, Route, Redirect, Link, Navigate
// } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

// const App = () => {
//   const user = useSelector((state) => state.user.currentUser);


  
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products/:category" element={<ProductList />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/success" element={<Success />} />
//           <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />} />
//           <Route path="/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
          
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//   );
// }

// export default App;
