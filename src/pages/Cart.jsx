import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {useSelector, useDispatch} from "react-redux";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";

import "../styles/cart-page.css";
import {cartActions} from "../store/shopping-cart/cartSlice.js";
import {Link} from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItems.length === 0
                                    ? <h5 className="text-center">Your cart is empty!</h5>
                                    :  <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cartItems.map(item => <Tr key={item.id} product={item}/>)
                                        }
                                        </tbody>
                                     </table>
                            }
                            {
                                cartItems.length > 0
                                &&
                                <div className="mt-5">
                                    <h6 className="cart__subtotal">Subtotal: <span>${Number(totalAmount).toFixed(2)}</span></h6>
                                    <p className="cart__desc">
                                        Taxes and shipping will be calculated at checkout
                                    </p>
                                    <div className="cart__page-btn">
                                        <button className="addToCart__btn"><Link to="/foods">Continue Shopping</Link></button>
                                        <button className="addToCart__btn"><Link to="/checkout">Proceed to checkout</Link></button>
                                    </div>
                                </div>
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({product}) => {
    const dispatch = useDispatch();
    const {id, image01, title, price, quantity} = product;
    const deleteItem = () => dispatch(cartActions.deleteItem(id));
    return(
        <tr>
            <td className="text-center cart__img-box">
                <img src={image01} alt="cart-item-image"/>
             </td>
            <td className="text-center">{title}</td>
            <td className="text-center">{`$${Number(price).toFixed(2)}`}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center cart__item-del" onClick={deleteItem}><i class="ri-delete-bin-line"/></td>
        </tr>
    )
}

export default Cart;