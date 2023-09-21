import React from 'react';
import {Link} from "react-router-dom";
import {cartActions} from "../../store/shopping-cart/cartSlice.js";
import {useDispatch} from "react-redux";

import "../../styles/product-card.css"

const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const {id, title, image01, price} = product;
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id, title, image01, price
        }))
    }
    return (
        <div className="product__item">
            <figure className="product__img">
                <img src={image01} alt="product-image" className="w-50"/>
            </figure>
            <div className="product__content">
                <h5>
                    <Link to={`/foods/${id}`}>{title}</Link>
                </h5>
                <div>
                    <p className="product__price">${Number(price).toFixed(2)}</p>
                    <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>

            
        </div>
    );
};

export default ProductCard;