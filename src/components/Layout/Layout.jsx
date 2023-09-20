import React from 'react';
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import Routes from "../../routes/Routers.jsx";
import Cart from "../UI/Cart.jsx";
import {useSelector} from "react-redux";

const Layout = () => {
    const cartIsVisible = useSelector(state => state.cartUI.cartIsVisible);
    return (
        <div>
            <Header/>
            {cartIsVisible && <Cart/>}
            <div>
                <Routes/>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;