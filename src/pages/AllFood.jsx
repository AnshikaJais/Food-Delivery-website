import React, {useState, useEffect} from 'react';
import ReactPaginate from "react-paginate";
import {Col, Container, Row} from "reactstrap";

import Helmet from "../components/Helmet/Helmet.jsx";
import CommonSection from "../components/UI/CommonSection.jsx";
import ProductCard from "../components/UI/ProductCard.jsx";

import "../styles/all-foods.css";
import "../styles/pagination.css";

import products from "../assets/fake-data/products.js"

const AllFood = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const searchedProducts = products
        .filter((item)=>{
            if(searchTerm.value === "") return item;
            if(item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
        })
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProducts.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(searchedProducts.length / productPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }

    return (
        <Helmet title="All Foods">
            <CommonSection title="All Foods"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="search__widget d-flex align-items-center justify-content-between">
                                <input
                                    className="w-75"
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span className="search__icon"><i className="ri-search-line"></i></span>
                            </div>

                        </Col>
                        <Col lg="6" md="6" sm="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select>
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically A-Z</option>
                                    <option value="descending">Alphabetically Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        {
                            displayPage
                                .map((product)=> (
                                <Col lg="3" md="4" sm="6" xs="6" key={product.id}>
                                    {" "}
                                    <ProductCard product={product}/>
                                </Col>
                            ))
                        }
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel='Prev'
                                nextLabel="Next"
                                containerClassName="paginationBttns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllFood;