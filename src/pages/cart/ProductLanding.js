import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAProductAction, postToCart } from '../product/ProductAction'
import { FaStar, FaVolumeHigh } from "react-icons/fa6";

const ProductLanding = () => {
  const [qty, setQty] = useState(1)
  const {_id} = useParams()
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.productInfo)

const {thumbnail,productname, producttype, price, quantity, description} = product
console.log(product)
const handleOnChange=(e)=>{
  const {value}= e.target;
  setQty(value)
  console.log(qty)
}

const handleOnAddToCart=(product)=>{
// setForm(
//  [ ...form,
//   product,]
// )
//get product id, quantity
if(quantity > qty){
  dispatch(postToCart({product, qty}))
}
else{
  alert("Sorry for the inconvenience, product is not available")
}


}
  useEffect(()=>{
    _id && dispatch(getAProductAction(_id))

  },[_id])


  console.log(_id)
  return (
    <MainLayout title="cart list">

    <div className="wrapper">
     <div className='bottom p-3 d-flex justify-content-between gap-2'>
      <div  className='thumbnail'>
      <img src= {thumbnail} alt="" width={100} />
      </div>
      <div  className='details'>
      <h5>
      {producttype}
      </h5>

      <p >only {quantity} left stock (more on the way)</p>
      <div className='star'>
      <FaStar className='text-warning' />
      <FaStar className='text-warning' />
      <FaStar className='text-warning' />
      <FaStar className='text-warning' />
      <FaStar className='text-warning' />
      </div>
      <hr />
      <p className='co'>Price: {price}$</p>
      <input onChange={handleOnChange} value={qty} type="number" />

      <div className="add text-center mb-2">
        <Link to={`/cart/${_id}`}>
      <Button onClick={()=>handleOnAddToCart(product)} variant='warning' type='submit'>Add to cart</Button>
      </Link>
     </div>
     <div className="add text-center mb-2">
      <Button variant='warning' type='submit'>Buy now</Button>
     </div>
     <hr />
     <div className="description">
      <h4>About this item</h4>
      <p>{description}</p>
     </div>

      </div>
  
      </div>

     </div>
     <div className="recco">
      <h3>Reccommondations</h3>
      <hr />
     </div>
  

    </MainLayout>
  
  )
}

export default ProductLanding