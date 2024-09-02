import React from 'react'
import { CustomInput } from '../../components/custom_input/CustomInput'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";

const SignUp = () => {
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
  
    <Form className='border form-center bg-light  p-4 rounded mt-5'>
    <h2>Create account</h2>
    <hr />
        {inputs.map((item, i)=>  <CustomInput key={i} {...item}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="primary"> Submit</Button>
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

export default SignUp