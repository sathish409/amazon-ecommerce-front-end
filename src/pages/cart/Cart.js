import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { CustomCard } from '../../components/custom_input/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { decrementProductItem, deleteProductItem, incrementProductItem } from '../product/ProductAction'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CustomCart } from '../../components/custom_input/CustomCart'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { FaCaretRight } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Image } from "react-bootstrap";


const Cart = () => {
      const [index, setIndex] = useState(0);
      const [selectedIndex, setSelectedIndex] = useState(0);
      const navigate = useNavigate()
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const {_id} = useParams()

    const {cartList} = useSelector((state)=>state.productInfo)

useEffect(()=>{
  if(!cartList){
    navigate("/")
  }
}, [navigate])


    console.log(_id)
    const calculateSubtotal = (cartList) => {
        return cartList.reduce((accumulator, qty) => {
          return accumulator + qty.price ;
        }, 0); // Initial value of accumulator is 0
      };
      console.log(cartList)


const subtotal = calculateSubtotal(cartList);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);




  return (
    <MainLayout >
 <div className="mt-4 ">
  <div className="bag-items">
    <h4>Shopping cart</h4>
  </div>
  <div className="">
    {cartList.map(({producttype,discountPrice,productquantity, productname,qty, images ,price ,_id}, i)=>
   <Row key={i} className='p-3 align-items-center g-0'>
      <Col xs ="auto" className='image p-0 me-2'>
        <Image
           
    src ={images?.length > 0
      ? `http://localhost:8000${images[selectedIndex]}`
      : "/placeholder.png" // <-- add a fallback image
  }
              alt="product"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
              className="shadow rounded"
            />
      </Col>
      <Col className='product-details p-5'>
      <h3>Product:{producttype}</h3>
      <p>{productname}</p>
      <div className="qty">
        <span>Quantity</span>
        <span>{productquantity}</span>
        <div className="">
<button onClick={() => dispatch(incrementProductItem({_id, qty}))}>
  +
</button>
<button onClick={() => dispatch(decrementProductItem({_id, qty}))}>
  -
</button>


        </div>
      </div>
      <div className="price d-flex align-items-center ">
        <div className="price-left me-2">
          <Button type='submit' variant='danger'>
<MdOutlineDelete onClick={()=>dispatch(deleteProductItem({_id}))}/>
          </Button>
          
        </div>
        <div className="price-right">
          <p className='line-through'>${discountPrice}</p>
          ${price}</div>
      </div>

      </Col>
    </Row>
    )}
    <div className="total-price p-3">
      <h3>Summary of the products</h3>
      <div className="d-flex summary">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="summary">
        <span>Estimated Delivery</span>
        <span>Free</span>
      </div>
      <div className="line bg-border">
   <hr />
      </div>

   <div className="summary mb-3">
        <span>Total</span>
        <span>{subtotal}</span>
      </div>
  <Link  to={`/checkout/${subtotal}`} className='nav-link'>
        <div className='d-flex'>
   
    <Button variant='warning' type='submit'>Proceed to checkout</Button>
  
        
        </div>
        </Link>

    </div>

 
  </div>

 </div>
 
    </MainLayout>
  )
}

export default Cart