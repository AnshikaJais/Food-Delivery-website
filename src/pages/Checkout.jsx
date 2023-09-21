import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import {useSelector} from "react-redux";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";

import "../styles/checkout.css";

const Checkout = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const shippingCharges = 30;
    const totalAmount = Number(cartTotalAmount) + shippingCharges;

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredCountry, setEnteredCountry] = useState("");
    const [enteredCity, setEnteredCity] = useState("");
    const [enteredPostalCode, setEnteredPostalCode] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        const userShippingAddress = {
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhoneNumber,
            country: enteredCountry,
            city: enteredCity,
            postalCode:  enteredPostalCode,
        }
        console.log(userShippingAddress);
    }
    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout"/>
                <section>
                    <Container>
                        <Row>
                            <Col lg="8" md="6">
                                <h6 className="mb-4">Shipping Address</h6>
                                <form  className="checkout__form" onSubmit={submitHandler}>
                                    <div className="form__group">
                                        <input type="text" placeholder="Enter your name" onChange={e => setEnteredName(e.target.value)} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" placeholder="Enter your email" onChange={e => setEnteredEmail(e.target.value)} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="number" placeholder="Phone Number" onChange={e => setEnteredPhoneNumber(e.target.value)} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" placeholder="Country" onChange={e => setEnteredCountry(e.target.value)} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" placeholder="City" onChange={e => setEnteredCity(e.target.value)} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="number" placeholder="Postal code" onChange={e => setEnteredPostalCode(e.target.value)} required/>
                                    </div>
                                    <button className="addToCart__btn">Payment</button>
                                </form>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="checkout__bill">
                                    <h6 className="d-flex align-items-center justify-content-between mb-3">Subtotal: <span>{`$${Number(cartTotalAmount).toFixed(2)}`}</span></h6>
                                    <h6 className="d-flex align-items-center justify-content-between mb-4">Shipping Cost: <span>{`$${Number(shippingCharges).toFixed(2)}`}</span></h6>
                                    <div className="checkout__total">
                                        <h5 className="d-flex align-items-center justify-content-between">Total:  <span>{`$${Number(totalAmount).toFixed(2)}`}</span></h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
        </Helmet>
    );
};

export default Checkout;