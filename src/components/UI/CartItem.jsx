import React from 'react';
import {ListGroupItem} from "reactstrap";
import {useDispatch} from "react-redux";

import {cartActions} from "../../store/shopping-cart/cartSlice.js";

import "../../styles/cart-item.css"
const CartItem = ({product}) => {
    const {id, title, image01, price, quantity, totalPrice} = product;
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id, title, image01, price
        }))
    }
    const decrementItem = () =>{
        dispatch(cartActions.removeItem(id));
    }
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    }
    return (
        <ListGroupItem className="border-0 cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={image01} alt="product image"/>
                <div className="cart__product-info d-flex align-items-center gap-4 justify-content-between w-100">
                    <div className="">
                        <h6 className="cart__product-title">{title}</h6>
                        <p className="d-flex align-items-center gap-5 cart__product-price">{quantity}x <span>{`$${Number(totalPrice).toFixed(2)}`}</span></p>
                        <div className="d-flex align-items-center gap-3 justify-content-between increase__decrease-btn">
                            <span className="decrease-btn" onClick={decrementItem}><i className="ri-subtract-line"></i></span>
                            <span className="quantity">{quantity}</span>
                            <span className="increase-btn" onClick={incrementItem}><i className="ri-add-line"></i></span>
                        </div>
                    </div>
                    <span className="delete-btn" onClick={deleteItem}><i className="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default CartItem;