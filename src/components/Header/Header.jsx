import React, {useEffect, useRef} from 'react';
import {Container} from "reactstrap";
import logo from "../../assets/images/res-logo.png"
import {cartUIActions} from "../../store/shopping-cart/cartUISlice.js"
import "../../styles/header.css"
import {useSelector, useDispatch} from "react-redux";
import {Link, NavLink} from "react-router-dom";

const nav_links = [
    {
        display: "Home",
        path: "/home"
    },{
        display: "Foods",
        path: "/foods"
    },{
        display: "Cart",
        path: "/cart"
    },{
        display: "Contact",
        path: "/contact"
    },

]
const Header = () => {
    const dispatch = useDispatch();
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
    const toggleCart = () => dispatch(cartUIActions.toggle());


    useEffect(()=>{
        const headerSticky = () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) headerRef.current.classList.add("header__shrink");
            else headerRef.current.classList.remove("header__shrink");
        }

        window.addEventListener("scroll", headerSticky);
        return () => window.removeEventListener("scroll", headerSticky);
    }, [])
    return (


        <header className="header" ref={headerRef}>
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <h5>Tasty Treat</h5>
                    </div>

                    {/*  menu  */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {nav_links.map((link, index)=>(
                                <NavLink
                                    to={link.path}
                                    key={index}
                                    className={activeClass => activeClass.isActive ? "active__menu" : ""}
                                >{link.display}</NavLink>
                            ))}
                        </div>
                    </div>

                    {/*  nav right icon  */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" onClick={toggleCart }>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">{isNaN(totalQuantity) ? 0 : totalQuantity}</span>
                        </span>
                        <span className="user">
                            <Link to={"/login"} ><i className="ri-user-line"></i></Link>
                        </span>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>

        </header>
    );
};

export default Header;