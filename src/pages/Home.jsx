import React, {useEffect, useState} from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/home.css"
import "../styles/hero-section.css";

import Category from "../components/UI/Category.jsx";
import Helmet from "../components/Helmet/Helmet.jsx";
import ProductCard from "../components/UI/ProductCard.jsx";
import TestimonialSlider from "../components/UI/TestimonialSlider.jsx";

import products from "../assets/fake-data/products.js"

import guyImg from "../assets/images/delivery-guy.png";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

const featureData = [
    {
        title: "Quick Delivery",
        imageUrl: featureImg01,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Super Dine In",
        imageUrl: featureImg02,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Easy Pick Up",
        imageUrl: featureImg03,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },

]

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(()=>{
        const filteredPizza = products.filter((product) => product.category === "Pizza");
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, [])

    useEffect(()=>{
        if(category === "ALL") setAllProducts(products);
        if(category === "BURGER"){
            const filteredProducts = products.filter((product) => product.category === "Burger");
            setAllProducts(filteredProducts);
        }
        if(category === "PIZZA"){
            const filteredProducts = products.filter((product) => product.category === "Pizza");
            setAllProducts(filteredProducts);
        }
        if(category === "BREAD"){
            const filteredProducts = products.filter((product) => product.category === "Bread");
            setAllProducts(filteredProducts);
        }
    }, [category])
    return (
        <Helmet title="Home">
            <section>
                <Container className="hero__container">
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 hero__title">
                                    <span>Hungry?</span> Just wait <br/>food at <span>your door</span>
                                </h1>
                                <p>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis deserunt distinctio facilis itaque, natus quaerat quibusdam rem.</span>
                                </p>
                                <div className="hero__btns d-flex align-items-center gap-5 mt-5">
                                    <button className="order__btn d-flex align-items-center justify-content-between">
                                        Order now <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                    <button className="all__foods-btn"><Link to="/foods">See all foods</Link></button>
                                </div>
                                <div className="hero__services d-flex align-items-center gap-4 mt-4">
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icons"><i className="ri-car-line"></i></span>
                                        <span>No shipping charges</span>
                                    </p>
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icons"><i className="ri-shield-check-line"></i></span>
                                        <span>100% secure checkout</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md="6" className="hero__img-container">
                            <div className="hero__img">
                                <img src={guyImg} alt="delivery-guy" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="category">
                <Category/>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col className="text-center" lg="12">
                            <h5 className="feature__subtitle mb-4">
                                What we serve
                            </h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">we will <span>take care</span></h2>
                            <p className="mt-4 mb-1 feature__text">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                            </p>
                            <p className="feature__text">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, molestias soluta.</span>
                        </p>
                        </Col>
                        {
                            featureData.map((feature, index)=> (
                                <Col lg="4" md="6" sm="12" key={index}>
                                    <div className="feature__item text-center px-5 py-3">
                                        <img src={feature.imageUrl} alt={feature.title} className="w-25"/>
                                        <h5 className="fw-bold mb-3">{feature.title}</h5>
                                        <p>{feature.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }
                        <Col lg="4" md="4"></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>
                        <Col lg="12">
                            <div className="food__category d-flex align-items-center justify-content-center gap-5">
                                <button
                                    className={`all_btn d-flex align-items-center gap-2 ${category === "ALL" ? "foodBtnActive" : ""}`}
                                    onClick={() => setCategory("ALL")}
                                >
                                    All
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""}`}
                                    onClick={() => setCategory("BURGER")}
                                >
                                    <img src={foodCategoryImg01} alt="food-category-image"/>
                                    Burger
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""}`}
                                    onClick={() => setCategory("PIZZA")}
                                >
                                    <img src={foodCategoryImg02} alt="food-category-image"/>
                                    Pizza
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""}`}
                                    onClick={() => setCategory("BREAD")}
                                >
                                    <img src={foodCategoryImg03} alt="food-category-image"/>
                                    Bread
                                </button>
                            </div>
                        </Col>
                        {
                            allProducts.map((product)=>(
                                <Col lg="3" md="4"  sm="6" xs="6" key={product.id} className="mt-5">
                                    <ProductCard product={product}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section className="why__tasty-treat">
                <Container>
                    <Row>
                        <Col lg="6" md="6" >
                            <div className="tasty-treat__img">
                                <img src={whyImg} alt="why-tasty-treat"/>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="why-tasty-treat">
                                <h2 className="tasty-treat__title mb-4">Why <span>Tasty Treat?</span></h2>
                                <p className="tasty-treat__desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    A amet animi aperiam atque, beatae dignissimos dolores eaque
                                    eius illum ipsum, laudantium nam nihil nisi officia quia ratione
                                    saepe, unde vero.
                                </p>
                                <ListGroup className="mt-5">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose-us__title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Fresh and tasty foods
                                        </p>
                                        <p className="choose-us__desc">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ab ad atque blanditiis consequuntur iste qui vitae.
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose-us__title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Quality Support
                                        </p>
                                        <p className="choose-us__desc">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ab ad atque blanditiis consequuntur iste qui vitae.
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose-us__title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Order from any location
                                        </p>
                                        <p className="choose-us__desc">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Ab ad atque blanditiis consequuntur iste qui vitae.
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-2">
                            <h2>Hot Pizza</h2>
                        </Col>
                        {hotPizza.map((pizza) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={pizza.id} className="mt-5">
                                <ProductCard product={pizza}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial">
                                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                                <h2 className="testimonial__title mb-4">
                                    What our {" "}
                                    <span>
                                        customers
                                    </span>
                                    {" "} are saying
                                </h2>
                                <p className="testimonial__desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Asperiores at commodi eaque eum expedita facere hic, similique sit!
                                </p>
                                <TestimonialSlider/>
                            </div>

                        </Col>
                        <Col lg="6" md="6" className="testimonial__img-container">
                            <div className="testimonial__img">
                                <img src={networkImg} alt="network-image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;