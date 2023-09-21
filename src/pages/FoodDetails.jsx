import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import {useDispatch} from "react-redux";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";
import ProductCard from "../components/UI/ProductCard.jsx";

import "../styles/product-details.css"
import products from "../assets/fake-data/products.js";
import {cartActions} from "../store/shopping-cart/cartSlice.js";

const FoodDetails = () => {
    const {id} = useParams();
    const product = products.find(item => item.id === id);
    const {title, price, category, desc, image01} = product;
    const [previousImg, setPreviousImg] = useState(product.image01);
    const relatedProducts = products.filter((item) => item.category === category);

    const dispatch = useDispatch();

    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredReview, setEnteredReview] = useState("");


    useEffect(()=>{
        setPreviousImg(product.image01);
        window.scroll(0,0);
    }, [product]);

    const addItem = () => {
        dispatch(cartActions.addItem({id, title, price, image01}));
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setEnteredName("");
        setEnteredEmail("");
        setEnteredReview("");
    }

    return (
        <Helmet title="Product-details">
            <CommonSection title={title}/>
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="2" md="2" sm="2" >
                            <div className="product__images">
                                <div className="image__item " onClick={()=>setPreviousImg(product.image01)}>
                                    <img src={product.image01} alt={"product-image"} className="w-50"/>
                                </div>
                                <div className="image__item" onClick={()=>setPreviousImg(product.image02)}>
                                    <img src={product.image02} alt={"product-image"} className="w-50"/>
                                </div>
                                <div className="image__item" onClick={()=>setPreviousImg(product.image03)}>
                                    <img src={product.image03} alt={"product-image"} className="w-50"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="4" sm="4" className="product__main-imgContainer">
                            <div className="product__main-img" >
                                <img src={previousImg} alt="product main image" className="w-100"/>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <div className="single__product-content">
                                <h2 className="product__title mb-3">{title}</h2>

                                <p className="single-product__price">{" "}Price: <span>{`$${Number(price).toFixed(2)}`}</span></p>
                                <p className="category">Category: <span>{category}</span></p>
                                <button className="addToCart__btn food__detail-btn" onClick={addItem}>Add to Cart</button>
                            </div>
                        </Col>
                        <Col lg="12" md="12" sm="12">
                            <div className="tabs">
                                <h6 className={`${tab === "desc" ? "tab__active" : ""}`} onClick={() => setTab("desc")}>Description</h6>
                                <h6 className={`${tab === "rev" ? "tab__active" : ""}`} onClick={() => setTab("rev")}>Review</h6>
                            </div>
                            {
                                tab === "desc" ?
                                    <div className="tab__content">
                                        <p>
                                            {desc}
                                        </p>
                                    </div>
                                    :
                                    <div className="tab__form">
                                        <div className="review mb-3">
                                            <div className="user__name mb-0">John Doe</div>
                                            <div className="user__email">johndoe222@gmail.com</div>
                                            <div className="feedback__text">Great work</div>
                                        </div>
                                        <div className="review mb-3">
                                            <div className="user__name mb-0">John Doe</div>
                                            <div className="user__email">johndoe222@gmail.com</div>
                                            <div className="feedback__text">Great work</div>
                                        </div>
                                        <div className="review mb-3">
                                            <div className="user__name mb-0">John Doe</div>
                                            <div className="user__email">johndoe222@gmail.com</div>
                                            <div className="feedback__text">Great work</div>

                                        </div>
                                        <form action="form" onSubmit={submitHandler}>
                                            <div className="form__group">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name.."
                                                    value={enteredName}
                                                    onChange={(e)=>setEnteredName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form__group">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your email.."
                                                    value={enteredEmail}
                                                    onChange={(e)=>setEnteredEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form__group">
                                                <textarea
                                                    rows={5}
                                                    type="text"
                                                    placeholder="Enter your review.."
                                                    value={enteredReview}
                                                    onChange={(e)=>setEnteredReview(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button className="addToCart__btn form__submit-btn" type="submit">Submit</button>
                                        </form>
                                    </div>
                            }
                        </Col>
                        <Col lg="12" className="mb-4 mt-4">
                            <h2 className="related__product-title">You might also like</h2>
                        </Col>
                        {
                            relatedProducts.map(item=> (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                                    <ProductCard product={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;