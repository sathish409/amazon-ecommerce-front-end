import React from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteReviewAction, getAllReviewAction, patchReviewAction } from '../product/ProductAction'
import Form from 'react-bootstrap/Form';

const ReviewTable = () => {
    const dispatch = useDispatch()
    const {reviewsList} = useSelector((state)=>state.productInfo)
   useEffect(()=>{
      dispatch(getAllReviewAction())
   },[dispatch])

   const handleOnStatusUpdate= (e)=>{
     const {value, checked} = e.target;
     if(window.confirm("Are you sure you want to change")){
      //call the server and update the status
      dispatch(patchReviewAction({
        _id:value,
        status: checked ? "active" : "inactive"}))
     }

 console.log(value, checked)
   }

   const handleOnDelete=(_id)=>{
       if(window.confirm("Are you sure you want to delete")){
      //call the server and update the status
      dispatch(deleteReviewAction(_id))
     }
   }
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
          <th>Delete</th>


        </tr>
      </thead>
      <tbody>
  {reviewsList.map(({_id, status, productName,title, message, num}, i)=>(
          <tr key={_id}>
          
          <td>{i + 1}</td>
          <td className={status === "active" ? "text-success" : "text-danger"}>
                <Form>
      <Form.Check // prettier-ignore
        type="switch"
        checked={status === "active"}
        id="custom-switch"
        label={status}
        onChange={handleOnStatusUpdate}
        value={_id}
      />
        </Form>
         
           </td>
          <td>{productName}</td>
          <td>{title}</td>
          <td>{message}</td>
          <td>{num}</td>
          <td>
            <Button onClick={()=>handleOnDelete(_id)} type='submit' variant='danger'>
Delete
            </Button>
          </td>



        </tr>       
            ))}
       
      </tbody>
    </Table></div>
    </UserLayout>

  )
}

export default ReviewTable