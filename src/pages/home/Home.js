import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { CarouselInput } from "../../components/layouts/CarouselInput";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { CustomCard } from "../../components/custom_input/CustomCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { productList } = useSelector((state) => state.productInfo);

  console.log(productList);
  return (
    <MainLayout>
      <div className="home">
        <CarouselInput />
    
        <Container className="mt-5 fluid">
        <Row >
              <div className="On-sale mt-3">
          <h4>On sale</h4>
          <hr />
        </div>
          <Col className="d-flex justify-content-between flew-wrap mt-5 gap-3">
            {productList.map(
              (item, i) =>
                item.onsale === true && (
                  <Link to={`/product-landing/${item._id}`} className="">
                    <CustomCard {...item} />
                  </Link>
                )
            )}
          </Col>
        </Row>

        <div className="On-sale mt-3">
          <h4>Trending</h4>
          <hr />
        </div>
        <Row className="mt-5">
          <Col className="sale d-flex justify-content-between mt-2 gap-3">
            {productList.map(
              (item, i) =>
                item.trending === true && (
                  <Link
                    to={`/product-landing/${item._id}`}
                    className="nav-link"
                  >
                    <CustomCard {...item} />
                  </Link>
                )
            )}
          </Col>
        </Row>
        </Container>

      </div>
    </MainLayout>
  );
};

export default Home;
