import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CustomInput } from '../../components/custom_input/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import {  postProduct } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';
import { getAllProductAction } from './ProductAction';




const AddProduct = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const {catList} = useSelector((state)=>state.categoryInfo)


  useEffect(()=>{
   dispatch(getAllProductAction())
  },[dispatch])

 const handleOnSubmit=async(e)=>{
  e.preventDefault()

  const pending = postProduct(form)
  toast.promise(pending, 
    {
      pending:"please wait..."
    })
    const {status, message} = await pending
    toast[status](message)
    

 } 

 const handleOnChange= (e)=>{
 const {name, value} = e.target;

 setForm({
  ...form,
  [name]:value,
 })
 }



    const inputs=[
        {
          label:"Product Name",
          name:"productname",
          placeholder:"IPHONE",
          type:"text",
          required:true,
      },
      {
        label:"Product Type",
        name:"producttype",
        placeholder:"iphone-14",
        type:"text",
        required:true,
    },

    {
      label:"SKU",
      name:"sku",
      placeholder:"456789",
      type:"text",
      required:true,
    },
    {
      label:"Thumbnail",
      name:"thumbnail",
      placeholder:"http:/...",
      type:"text",
      required:true,
      },
      {
        label:"Quantity",
        name:"quantity",
        placeholder:"240",
        type:"number",
        required:true,
        },
        {
          label:"Price",
          name:"price",
          placeholder:"2400$",
          type:"number",
          required:true,
          },
          {
            label:"On Sale",
            name:"onsale",
            placeholder:"OnSale",
            type:"boolean",
            
            }, 
            {
              label:"Discount",
              name:"discount",
              placeholder:"20%",
              type:"text",
              
              }, 
              {
                label:"Trending",
                name:"trending",
                placeholder:"latest",
                type:"boolean",
           
                },
                {
                  label: "Description",
                  name: "description",
                  as: "textarea",
                  rows: "7",
                  placeholder: "Details of the product",
                  required: true,
                },          

    
    ]
  return (
    <div>
         <div className="text-center">
      <Link to="/">
      <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" width={150} />
      </Link>
      </div>
          <div className='bg-light text-dark p-5'>
    <Form onSubmit={handleOnSubmit} className='form-center border shadow bg-light rounded mt-5 p-4'>
    <h2>Add a product</h2>
    <hr /> 
    <Form.Group className='mb-3'>
<Form.Label>Select a Category</Form.Label>
<Form.Select name='parentCatId' onChange={handleOnChange}>
<option value="">---Select a Category---</option>
{catList.map((item) => (

        <option key={item._id} value={item._id}>
          {item.title}
        </option>
      ))}
</Form.Select>
    </Form.Group>

        {inputs.map((item, i)=>  <CustomInput key={i} {...item} onChange={handleOnChange}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="warning">
           {""}
     Add Product
           </Button>
        </div>
    </Form>
    
    </div>
    </div>
  )
}

export default AddProduct