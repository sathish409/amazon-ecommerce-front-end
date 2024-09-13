import React, {  useEffect, useRef } from 'react'
import { CustomInput } from '../../components/custom_input/CustomInput'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInSellerUser } from '../../helpers/axiosHelper';
import { autoLogin, getUserAction } from './userAction';
import {useDispatch, useSelector} from 'react-redux'





const SignIn = () => {
const emailRef = useRef("")
const passwordRef = useRef("")
const dispatch = useDispatch()

const navigate = useNavigate()
const location= useLocation()

 const {user} = useSelector((state)=>state.userInfo)
 const fromLocation= location?.state?.from?.location?.pathname || "/dashboard"
 console.log(location)
 useEffect(()=>{
user?._id && navigate(fromLocation);

!user?._id && dispatch(autoLogin())
 },[user?._id, dispatch, navigate, fromLocation])


const handleOnSubmit=async(e)=>{
  e.preventDefault()

 
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

 //axios

 const {status, jwts}= await signInSellerUser({email, password})

 if(status === "success"){

  const { accessJWT, refreshJWT }= jwts;
  sessionStorage.setItem("accessJWT", accessJWT )
  localStorage.setItem("refreshJWT", refreshJWT )
  dispatch(getUserAction())

  return;
 }

 

}



  const inputs=[
{
  label:"Enter your email",
  name:"email",
  placeholder:"sat@boga",
  type:"email",
  required:true,
  passRef:emailRef,
  },

{
  label:"Password",
  name:"password",
  placeholder:"******",
  type:"password",
  required:true,
  passRef:passwordRef,
  },

]
  return (
    <div className='bg-light text-dark p-5'>
      <div className="text-center">
      <Link to="/">
      <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" width={150} />
      </Link>
      </div>
  
    <Form onSubmit={handleOnSubmit} className='form-center border  bg-light rounded mt-5 p-4'>
    <h2>Sign In</h2>
    <hr />
        {inputs.map((item, i)=>  <CustomInput key={i} {...item}/>)}
<div className="d-grid mt-2">
        <Button type="submit" variant="warning">
           {""}
         Continue
           </Button>
        </div>
        <div className="forgot-password mt-4 text-center">
        Forgot password ?
        {""}
        {""}
          <Link  to="/reset-password">
   Reset Now
          </Link>
        </div>
     
        <div className="d-grid mt-4 text-center">
        <h5>New to Amazon?</h5>
        <Link to="/signup">
     <Button type='click' variant='light'>Create Your New Amazon Account</Button>
        </Link>
        </div>
    </Form>
    
    </div>

  )
}

export default SignIn