import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { CarouselInput } from '../../components/layouts/CarouselInput'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { CustomCard } from '../../components/custom_input/CustomCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const {productList} = useSelector((state)=>state.productInfo)

  console.log(productList)
  return (
  <MainLayout>
    <div className='home'>
    <CarouselInput/>
    <div className="On-sale mt-3">
      <h4>On sale</h4>
      <hr />
    </div>
<Container className='mt-5 fluid'>
<Row>
  <Col className='d-flex justify-content-between flex-wrap mt-2 gap-3'>
  {productList.map((item, i)=> item.onsale === true && <CustomCard  {...item}/>)}
  </Col>
</Row>
</Container>
 
<div className="On-sale mt-3">
      <h4>On sale</h4>
      <hr />
    </div>
<Container className='mt-5 fluid'>
<Row>
  <Col className='d-flex justify-content-between flex-wrap mt-2 gap-3'>
  
  {productList.map((item, i)=> item.trending === true && <Link to={`/cart/${item._id}`} className='nav-link'>
    <CustomCard  {...item}/></Link>)}
  </Col>
</Row>
</Container>
    </div>
  </MainLayout>
  )
}

export default Home