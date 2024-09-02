import React, { useState } from 'react'
import { CustomInput } from '../../components/custom_input/CustomInput'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";
import { postSellerUser } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';

const initialState ={
    fname:"",
    lname:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
}

const SellerSignUp = () => {

    const [seller, setSeller]= useState(initialState)
    const handleOnChange=(e)=>{
        const {name, value} =e.target

        setSeller({
            ...seller,
            [name]:value,
        })
  
    }
    const handleOnSubmit=async(e)=>{
        e.preventDefault()

        console.log(seller)

        const {confirmPassword, ...rest} = seller;
        if(confirmPassword !== rest.password){
            return alert("password do not match")
        }

      
       const pending =  postSellerUser(rest)
       toast.promise(pending, {
      pending:"please wait...",

       })
       const {status, message}=await pending
       toast[status](message)
      

      
    }

    const inputs=[
        {
          label:"Fisrt Name",
          name:"fname",
          placeholder:"sathish",
          type:"text",
          required:true,
      },
      {
        label:"Last Name",
        name:"lname",
        placeholder:"Boga",
        type:"text",
        required:true,
    },
    {
      label:"Email",
      name:"email",
      placeholder:"sat@boga",
      type:"email",
      required:true,
      },
    {
      label:"Phone Number",
      name:"phone",
      placeholder:"456789",
      type:"text",
      required:true,
    },
    {
      label:"Password",
      name:"password",
      placeholder:"******",
      type:"password",
      required:true,
      },
      {
        label:"Confirm Password",
        name:"confirmPassword",
        placeholder:"******",
        type:"password",
        required:true,
        },
    
    ]
  return (
    <div className='bg-light text-dark p-3'>
      <div className="text-center">
      <Link to="/">
      <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" width={150} />
      </Link>
      </div>
  
    <Form onSubmit={handleOnSubmit} className='border form-center bg-light  p-4 rounded mt-5'>
    <h2>Create account</h2>
    <hr />
        {inputs.map((item, i)=>  <CustomInput onChange={handleOnChange} key={i} {...item}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="primary"> Submit</Button>
        {""}
        </div>

        <div className="">
            Already have an account? {""}
            <Link to="/signin">
            Signin <FaCaretRight />
            </Link>
        </div>
    </Form>
    
    </div>
  )
}

export default SellerSignUp;