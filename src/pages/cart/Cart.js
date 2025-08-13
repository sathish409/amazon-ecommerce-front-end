import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { CustomCard } from '../../components/custom_input/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAProductAction, postToCart } from '../product/ProductAction'
import { Link, useParams } from 'react-router-dom'
import { CustomCart } from '../../components/custom_input/CustomCart'
import { Button, Table } from 'react-bootstrap'
import { FaCaretRight } from "react-icons/fa";

const Cart = () => {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const {_id} = useParams()

    const {cartList} = useSelector((state)=>state.productInfo)
   
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
{!cartList.length && (<div className="listOf-items gap-2">

      <div className="empty border rounded">
        <span>Your Cart list is empty</span>
        <span>SHop today's deal</span>
        <div className="d-flex g-5 ">
    <Link to="/signin">
                          <FaCaretRight />
                          <Button className='rounded ' type='submit' variant='warning'> Sign In to your account</Button>
                        </Link>
                  <Link to="/signup">
                          <FaCaretRight />
                          <Button  type='submit' variant='warning'> Sign up</Button>
                        </Link>          
        </div>
     
        
      </div>
            </div>) }

{cartList.length && (<div className="listOf-items gap-2">

   <div><Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>thumbnail</th>
          <th>productquantity</th>
          <th>discountPrice</th>
          <th>productname</th>
        

        </tr>
      </thead>
      <tbody>
  {cartList.map(({thumbnail, productquantity,discountPrice, productname}, i)=>(
          <tr key={_id}>
          
          <td>{i + 1}</td>

          <td>
            <img src={thumbnail} alt="" width={100} /></td>
          <td>{productquantity}</td>
          <td>{discountPrice}</td>
          <td>{productname}</td>
        </tr>       
            ))}
              <td className=''>${subtotal}</td>
       
      </tbody>
    </Table></div>
            </div>) }
            

    
          
            </div> 
            <div className="right">
            <p>Subtotal ({cartList.length})  ${subtotal}</p>
            <p><input type="checkbox" />This order contains a gift</p>
            <Link  to={`/checkout/${subtotal}`} className='nav-link'>
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