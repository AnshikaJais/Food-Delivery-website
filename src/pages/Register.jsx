import React, {useRef} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";

import "../styles/login.css";

const Register = () => {
    const signupNameRef = useRef("");
    const signupEmailRef = useRef("");
    const signupPasswordRef = useRef("");
    const submitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <Helmet title="Register">
            <CommonSection title="Register"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form action="" className="form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="text" placeholder="Full name" required ref={signupNameRef}/>
                                </div>
                                <div className="form__group">
                                    <input type="text" placeholder="Email" required ref={signupEmailRef}/>
                                </div>
                                <div className="form__group">
                                    <input type="text" placeholder="Password" required ref={signupPasswordRef}/>
                                </div>
                                <button className="addToCart__btn" type="submit">Register</button>
                            </form>
                            <Link to="/login" className="register__btn">Already have a account?{"     "} Sign in</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;