import React, {useRef} from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";

import "../styles/login.css";

const Login = () => {
    const loginNameRef = useRef("");
    const loginPasswordRef = useRef("");
    const submitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <Helmet title="Login">
            <CommonSection title="Login"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form action="" className="form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="text" placeholder="Email" required ref={loginNameRef}/>
                                </div>
                                <div className="form__group">
                                    <input type="text" placeholder="Password" required ref={loginPasswordRef}/>
                                </div>
                                <button className="addToCart__btn" type="submit">Login</button>
                            </form>
                            <Link to="/register" className="register__btn">Don't have a account?{"  "} Create an account</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;