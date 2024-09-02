import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { UserLayout } from '../../components/layouts/UserLayout'

const Product = () => {
 
  return (
    
   <UserLayout title="Product">
   <div className='mt-1 d-flex justify-content-center gap-2 p-2'>
    <h4>No of products found!</h4>
    <input type="text" />
    <Button className=''>
        <Link className="nav-link" to="/add-product">
        Add a product</Link>
    </Button>
</div>

   </UserLayout>
 
  )
}

export default Product