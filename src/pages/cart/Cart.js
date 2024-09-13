import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { CustomCard } from '../../components/custom_input/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAProductAction, postToCart } from '../product/ProductAction'
import { Link, useParams } from 'react-router-dom'
import { CustomCart } from '../../components/custom_input/CustomCart'
import { Button } from 'react-bootstrap'

const Cart = () => {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const {_id} = useParams()
    const {cartList} = useSelector((state)=>state.productInfo)
   
    const calculateSubtotal = (cartList) => {
        return cartList.reduce((accumulator, item) => {
          return accumulator + item.price ;
        }, 0); // Initial value of accumulator is 0
      };
      console.log(cartList)


const subtotal = calculateSubtotal(cartList);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);




  return (
    <MainLayout >
          <div className="sh-list d-flex mt-1">
           <div className="left">
            <div className="sh-nav d-flex">
                <div>
                <h4>Shopping Cart</h4>
                <span>Deselect all items</span>
                </div>
                <div className='mt-5'>
                <span>price</span>
            
                </div>  

</div>
<hr />
<div className="listOf-items gap-2">
{
            cartList.map((item, i)=>
            <CustomCart key={i} {...item}/>)
        }
        
            </div>
    
          
            </div> 
            <div className="right">
            <p>Subtotal ({cartList.length}) : ${subtotal}</p>
            <p><input type="checkbox" />This order contains a gift</p>
            <Link  to="/checkout" className='nav-link'>
        <div className='d-flex justify-content-center '>
   
    <Button variant='warning' type='submit'>Proceed to checkout</Button>
  
        
        </div>
        </Link>
            </div>
           
  
     

    </div>
 
    </MainLayout>
  )
}

export default Cart