import React, { useRef, useState } from 'react'
import { CustomInput } from '../../components/custom_input/CustomInput'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';
import { requestOtp, resetPassword } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';

const initialstate={
  otp:"",
  newPassword:"",
  confirmPassword:"",
}

const ResetPassword = () => {
const emailRef= useRef("")
const [showOtp, setShowOtp]= useState(true)
const [resp, setResp] = useState({})
const [form, setForm] = useState(initialstate)



const handleOnRequestOtp=async(e)=>{
  e.preventDefault()

 const email = emailRef.current.value
 if(!email){
  return toast.error("email is required")
 }
 const pending = requestOtp(email)
 toast.promise(pending,
{ 
  pending:"please wait...",

}
 )
 const response = await pending;
 setResp(response)
 setForm({email})
 console.log(response)
response.status ===
"success" && setShowOtp(false)
}
const handleOnChange =(e)=>{
  const {name, value} = e.target;
  setForm ({
    ...form,
    [name]:value,
  })
  console.log(form)
}
const handleOnResetPasswordSubmit= async(e)=>{
  e.preventDefault()

  const {confirmPassword, ...rest} = form
  if(!rest.password === confirmPassword){
    return toast.error("Password do not match")
  }
  const pending =  resetPassword(rest)
  console.log(rest)
  toast.promise(pending,
    {
    
    pending:"please wait...",
  
  })
  const result = await pending;
  setResp(result)
}




  const inputsOtp=[
{
  label:"Enter your email",
  name:"email",
  placeholder:"sat@boga",
  type:"email",
  required:true,
passRef:emailRef,
  }

]



const passwordReset=[
  {
    label:"OTP",
    name:"otp",
    placeholder:"1234",
    type:"password",
    required:true,
 
    },
  {
    label:"Enter your new Password",
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
    <div className='bg-light text-dark p-5'>
      <div className="text-center">
      <Link to="/">
      <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" width={150} />
      </Link>
      </div>
      {
        resp.message && (
        <Alert variant={resp.status ==="success" ? "success" : "danger"}>
        {resp.message}

        </Alert>)
      }
      {
      showOtp ? (
      <>
          <Form onSubmit={handleOnRequestOtp} className='form-center border  bg-light rounded mt-5 p-4'>
    <h4>Request OTP to reset password</h4>
    <hr />
        {inputsOtp.map((item, i)=>  <CustomInput key={i} {...item}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="warning">
           {""}
       Request OTP
           </Button>
        </div>
        <div className="forgot-password mt-4 text-center">
    Ready to Sign In ?
        {""}
        {""}
          <Link  to="/signin">
   Sign in 
          </Link>
    
          Now
      
        </div>
     
        <div className="d-grid mt-4 text-center">
        <h5>New to Amazon?</h5>
        <Link to="/signup">
     <Button type='click' variant='light'>Create Your New Amazon Account</Button>
        </Link>
        </div>
    </Form>
      </>
      ) 
      : 
      (
      <>
         <Form onSubmit={handleOnResetPasswordSubmit} className='form-center border  bg-light rounded mt-5 p-4'>
    <h4>Enter your new password</h4>
    <hr />
        {passwordReset.map((item, i)=>  <CustomInput onChange={handleOnChange} key={i} {...item}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="warning">
           {""}
   Submit
           </Button>
        </div>
        <div className="forgot-password mt-4 text-center">
    Ready to Sign In ?
        {""}
        {""}
          <Link  to="/signin">
   Sign in 
          </Link>
    
          Now
      
        </div>
     
        <div className="d-grid mt-4 text-center">
        <h5>New to Amazon?</h5>
        <Link to="/signup">
     <Button type='click' variant='light'>Create Your New Amazon Account</Button>
        </Link>
        </div>
    </Form>
      </>
      )
      }
  {/* otp request form */}

    {/* password reset form */}

 
    </div>

  )
}

export default ResetPassword