import React from 'react';
import {Container, Row, Col} from "reactstrap";
import "../../styles/category.css";
import categoryImg01 from "../../assets/images/category-01.png";
import categoryImg02 from "../../assets/images/category-02.png";
import categoryImg03 from "../../assets/images/category-03.png";
import categoryImg04 from "../../assets/images/category-04.png";

const categoryData = [
    {
        display: "Fastfood",
        imageUrl: categoryImg01
    },
    {
        display: "Pizza",
        imageUrl: categoryImg02
    },
    {
        display: "Asian food",
        imageUrl: categoryImg03
    },
    {
        display: "Raw meat",
        imageUrl: categoryImg04
    },
]
const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((cat, index)=>(
                        <Col lg="3" md="4" sm="6" xs="6" key={index}>
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={cat.imageUrl} alt={cat.display}/>
                                </div>
                                <h6 className="category__title">{cat.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Category;