import React, { useEffect } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAProductAction } from '../product/ProductAction'

const Cart = () => {
  const {_id} = useParams()
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.productInfo)

  const {thumbnail, quantity, producttype} = product
console.log(product)
  useEffect(()=>{
    _id && dispatch(getAProductAction(_id))
  },[_id, dispatch])
  console.log(_id)
  return (
    <MainLayout title="cart list">
  <div>
    <Container className="shopping shadow">
     <Row>
      <Col className='mt-3'>
   <h3>Shopping cart</h3>
   <p>Deselect all items</p>
   <hr />
      </Col>
     </Row>
     <div className='p-3 d-flex justify-content-between'>
      <div  className='img'>
      <img src= {thumbnail} alt="" width={80} />
      </div>
      <div  className='details'>
      <h5>
      {producttype}
      </h5>
      <p >only {quantity} left stock (more on the way)</p>
     
      </div>
     </div>
    </Container>
  </div>
    </MainLayout>
  
  )
}

export default Cart