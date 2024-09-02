import React, { useRef } from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import Table from 'react-bootstrap/Table';
import Form  from 'react-bootstrap/Form';
import { postCategory } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';
import { Button, Col, Row } from 'react-bootstrap';
import { CategoryTable } from '../../components/tables/CategoryTable.js';
const Category = () => {

  const titleRef = useRef("")

  const title = titleRef.current.value;

  const handleOnSubmit=async(e)=>{
    e.preventDefault()

    const pending = postCategory({title})
    toast.promise(pending,{
      pending:"please wait...",
    }   
    )
    const {status, message} = await pending
toast[status](message)

  }
  
  return (
    <UserLayout title="Category">
  <div>

    <h4>Add new category</h4>
    <hr />
    <Form onSubmit={handleOnSubmit}>
      <Row className='m-4 g-2'>
        <Col md={6}>
        <Form.Control 
        ref={titleRef}
        required={true}
        placeholder='Add new category here'/>
        </Col>
                

        <Col md={4} className='d-flex justify-content-center'>
        <Button type='submit'>Add new category</Button>
        </Col>
      </Row>
       

    </Form>
  
 <CategoryTable/>
    </div>
    </UserLayout>
  
  )
}

export default Category