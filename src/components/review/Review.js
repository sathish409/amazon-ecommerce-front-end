import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import {CustomInput} from '../custom_input/CustomInput';
import { Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";

 

export const Review = ({_id, productId, productName}) =>{

const [rating, setRating]= useState({num:5})
const handleOnChange =(e)=>{
    const  {name, value}= e.target;
setRating({
    ...rating,
    [name]:value,
})

}
const handleOnStar=(num)=>{
    console.log(num)
    setRating({
        ...rating,
        num,
    })
}
const handleOnSubmit= (e)=>{
    e.preventDefault()
    const obj = {
        ...rating,  _id, productId, productName
    }
  console.log(obj)
}


  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
            <h3>you are giving review to {productName}</h3>
            <CustomInput onChange={handleOnChange}
            name="title"
            label="Title"
            required={true}
            placeholder="best product"
            />
  <Form.Group className='mb-2'>
        <Form.Label>select rating</Form.Label>
     <div className=''>
        {
            Array(5).fill("").map((str, i)=><FaStar onClick={()=>handleOnStar(i + 1)} className={rating.num > i ? 'new-star text-warning' : "new-star"}/>)
        }
       
        </div>
     
    </Form.Group>

          <CustomInput onChange={handleOnChange}
          as="textarea"
          name="message"
          label="detail review"
          required = {true}
          row="5"
          placeholder="best product ..."
         
        />
          <Button type='submit'>Submit review</Button>

        </Form>
    </div>
  )
}
