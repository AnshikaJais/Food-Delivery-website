import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFood from "../pages/AllFood.jsx";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/Checkout.jsx";
import Contact from "../pages/Contact.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/foods" element={<AllFood/>} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Routers;