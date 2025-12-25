import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { MainLayout } from '../../components/layouts/MainLayout'
import { getCatIdProductsAction } from '../product/ProductAction'
import { getAllCatIdProducts } from '../../helpers/axiosHelper'
import { CustomCard } from '../../components/custom_input/CustomCard'
import { Col, Container, Row } from 'react-bootstrap';

const SearchPage = () => {
    const {form} = useParams()
    const dispatch = useDispatch()
    const {searchProduct} = useSelector((state)=>state.productInfo)
console.log(searchProduct)
  
    useEffect(()=>{
      dispatch(getCatIdProductsAction(form))
    },[form])



  return (
   <MainLayout>
   <div>
   <Container className='mt-5 fluid flex-grow-1'>
<Row >
  <Col className='d-flex
   justify-content-between  mt-2 gap-3'>
  
  {searchProduct.map((item, i)=><Link to={`/product-landing/${item._id}`} className='nav-link'>
    <CustomCard  className="h-100" key={i} product={item}/>
    
    </Link>
  
  )}
  
  </Col>
</Row>
</Container>
 
   </div>
   </MainLayout>
   
 
  )
}

export default SearchPage