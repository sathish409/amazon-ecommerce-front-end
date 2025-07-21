import React from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllReviewAction } from '../product/ProductAction'

const ReviewTable = () => {
    const dispatch = useDispatch()
    const {reviewsList} = useSelector((state)=>state.productInfo)
   useEffect(()=>{
      dispatch(getAllReviewAction())
   },[dispatch])
  return (
    <UserLayout>
    <div><Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>ProductName</th>
          <th>Title</th>
          <th>Message</th>
          <th>Rating</th>

        </tr>
      </thead>
      <tbody>
  {reviewsList.map(({_id, status, productName,title, message, num}, i)=>(
          <tr key={_id}>
          
          <td>{i + 1}</td>
          <td className={status === "active" ? "text-success" : "text-danger"}>{status}</td>
          <td>{productName}</td>
          <td>{title}</td>
          <td>{message}</td>
          <td>{num}</td>


        </tr>       
            ))}
       
      </tbody>
    </Table></div>
    </UserLayout>

  )
}

export default ReviewTable