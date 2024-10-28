import React from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const OrderHistory = () => {

  const {purchaseHistory} = useSelector((state)=> state.userInfo.user)

  console.log(purchaseHistory)
  return (
    <UserLayout title="Order History">
  <div>



    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Id</th>
          <th>Purchase Date</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody >
      {purchaseHistory.map(({productId, quantity, purchaseDate, _id}, i)=>(
         <tr key={_id}>
               <td>{i + 1}</td>
         <td>{productId}</td>
         <td>{purchaseDate.slice(0, 10)}</td>
         <td>{quantity}</td>
    <td>
      <Button variant="warning" >Give Review</Button>
    </td>
       </tr>
      ))}
       
      </tbody>
    </Table>
  </div>
    </UserLayout>
  
  )
}

export default OrderHistory