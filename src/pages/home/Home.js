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
        <CarouselInput className="carousel"/>
    
        <Container className="products mt-5 fluid">
             <div className="On-sale mt-3">
          <h4>On sale</h4>
          <hr />
        </div>
        <Row className="g-3 p-3 shadow rounded">
           
          
            {productList.map(
              (item, i) =>
                item.onsale === true && (  <Col className="" key={item._id} xs={6} md={4} lg={3}>
                  <Link
                    to={`/product-landing/${item._id}`}
                    className="nav-link"
                  >
                    <CustomCard key={i} product={item}/>
                  </Link>
                    </Col>
                )
            )}
   
        </Row>

        <div className="On-sale mt-3">
          <h4>Trending</h4>
          <hr />
        </div>
        <Row className="g-3 p-3 shadow rounded">
          
            {productList.map(
          
              (item, i) =>    
              
                item.trending === true && (
                  <Col key={item._id} xs={6} md={4} lg={3}>
                  <Link
                    to={`/product-landing/${item._id}`}
                    className="nav-link"
                  >
                    <CustomCard className="h-100" key={i} product={item}/>
                  </Link>
                    </Col>
                )
                    )}

        </Row>
        </Container>

      </div>
    </MainLayout>
  );
};

export default Home;
