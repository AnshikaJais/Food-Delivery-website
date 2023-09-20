import React from 'react';
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import CartItem from "./CartItem.jsx";
import { cartUIActions } from "../../store/shopping-cart/cartUISlice.js";

import "../../styles/shopping-cart.css"

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const toggleCart = () => dispatch(cartUIActions.toggle());
    return (
        <div className="cart__container">
            <ListGroup className="cart">
                <div className="cart__close" onClick={toggleCart}>
                    <span><i className="ri-close-fill"></i></span>
                </div>
                <div className="cart__item-list">
                    {
                        cartProducts.length === 0 ? <h6 className="text-center mt-5">No items added to the cart</h6> : cartProducts.map((product)=> <CartItem key={product.id} product={product}/>)
                    }
                </div>
                <div className="cart__bottom d-flex align-items-center justify-content-between">
                    <h6>Subtotal amount: <span>{`$${isNaN(totalAmount) ? "0.00" : Number(totalAmount).toFixed(2)}`}</span></h6>
                    <button><Link to="/checkout">Checkout</Link></button>
                </div>
            </ListGroup>
        </div>
    );
};

export default Cart;