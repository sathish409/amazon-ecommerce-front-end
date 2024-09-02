import React, { useState } from 'react'
import { UserLayout } from '../../components/layouts/UserLayout'
import { CustomInput } from '../../components/custom_input/CustomInput'
import { Button, Form } from 'react-bootstrap'
import { changePassword } from '../../helpers/axiosHelper'
import { toast } from 'react-toastify';


const initialState= {
  oldPassword:"",
  newPassword:"",
  confirmPassword:"",
}
const MyProfile = () => {
const [form, setForm] = useState(initialState)

const handleOnChange= (e)=>{
  const {name, value} = e.target
  setForm({
    ...form,
    [name]:value,
  })
  console.log(form)
}

const handleOnChangePassword =async(e)=>{
  e.preventDefault()

  const {confirmPassword, ...rest} =form
  if(!rest.password === confirmPassword){
    return toast.error("Password do not match")
  }
  const pending =  changePassword(rest)
  toast.promise(pending, {
    pending:"please wait....",
  })
  const {status, message} = await pending
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

]
const passwordUpdate=[

  
  {
    label:"Enter your old Password",
    name:"oldPassword",
    placeholder:"******",
    type:"password",
    required:true,
 
    },
  {
    label:"Enter your new Password",
    name:"newPassword",
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
    <UserLayout title="My-Profile">
  <div>
    <Form className='form-center mt-2 rounded bg-light border p-5 shadow'>
<h4>User Profile</h4>
{inputs.map((item, i)=><CustomInput key={i} {...item}/>)

}
<div className="d-grid m-2">
<Button type='submit' variant='warning'>Update your details</Button>
</div>
</Form>
<hr />
<Form onSubmit={handleOnChangePassword} className='form-center mt-2 rounded bg-light border shadow p-5'>
<h4>Change password</h4>
<hr />
{passwordUpdate.map((item, i)=><CustomInput onChange={handleOnChange} key={i} {...item}/>)

}
<div className="d-grid m-2">
<Button type='submit' variant='warning'>Change your password</Button>
</div>
</Form>
    </div>
    </UserLayout>
  
  )
}

export default MyProfile