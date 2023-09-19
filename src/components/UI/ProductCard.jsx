import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/product-card.css"

const ProductCard = ({product}) => {
    const {id, title, image01: productImg, price} = product;
    return (
        <div className="product__item">
            <figure className="product__img">
                <img src={productImg} alt="product-image" className="w-50"/>
            </figure>
            <div className="product__content">
                <h5>
                    <Link to={`/foods/:${id}`}>{title}</Link>
                </h5>
                <div>
                    <p className="product__price">${Number(price).toFixed(2)}</p>
                    <button className="addToCart__btn">Add to Cart</button>
                </div>
            </div>

            
        </div>
    );
};

export default ProductCard;