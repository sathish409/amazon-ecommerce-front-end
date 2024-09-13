import React from 'react'
import { GoLock } from "react-icons/go";
import { Link } from 'react-router-dom'
import { CustomInput } from '../../components/custom_input/CustomInput';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const {user} = useSelector((state)=>state.userInfo)
  const {cartList} = useSelector((state)=>state.productInfo)
console.log(user)
  const inputs=[
    {
      label:"Fisrt Name",
      name:"fname",
      placeholder:"sathish",
      type:"text",
      required:true,
      value:user.fname
  },
  {
    label:"Last Name",
    name:"lname",
    placeholder:"Boga",
    type:"text",
    required:true,
    value:user.lname
},
{
  label:"Email",
  name:"email",
  placeholder:"sat@boga",
  type:"email",
  required:true,
  value:user.email
  },
{
  label:"Phone Number",
  name:"phone",
  placeholder:"456789",
  type:"text",
  required:true,
  value:user.phone
},
{
  label:"Address",
  name:"address1",
  placeholder:"unit-3",
  type:"text",
  required:true,
},
{
  name:"address2",
  placeholder:"8 lower",
  type:"text",
  required:true,
},
{
  label:"Postcode",
  name:"postcode",
  placeholder:"2145",
  type:"text",
  required:true,
},
{
  label:"City/Suburb",
  name:"city",
  placeholder:"wenty",
  type:"text",
  required:true,
},
{
  label:"State/Territory",
  name:"state",
  placeholder:"8 lower",
  type:"text",
  required:true,
},



]
  return (
    <div className='wrapper'>
      <div className="am-box">
      <div className="nav-bar d-flex border">
        <div className="am-img">
      <Link to="/">
      <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" width={150} />
      </Link>
      </div> 
      <div className="checkout">
        <h4>Checkout({cartList.length})</h4>
      </div>
      <div className="signin">
        <Link to="/"> <GoLock /></Link>
     
      </div>
      </div>
      </div>
    
      <span>1 Enter a new delivery address</span>
      <div className="container d-flex mt-4">
  
        <div className="left border p-4">
   
  <Form  className='rounded '>
    <h2>Add a new address</h2>
    <hr />
        {inputs.map((item, i)=>  <CustomInput key={i} {...item}/>)}
<div className="d-grid mt-2">
    
        </div>
    </Form>
    <Form.Group className='mb-3 form-group'>
<Form.Label>City/Suburb</Form.Label>
<Form.Select name='parentCatId'>
<option value="">---Select a Category---</option>
        <option >
   
        </option>
   
</Form.Select>
    </Form.Group>
    <Form.Group className='mb-3 form-group'>
<Form.Label>City/Suburb</Form.Label>
<Form.Select name='parentCatId'>
<option value="">---Select a Category---</option>
        <option >
   
        </option>
   
</Form.Select>
    </Form.Group>
    <Button variant='warning' type='submit'>Use this address</Button>
        </div>
        <div className="right border">

        </div>
      </div>
     <div className="method ">
     <hr />
<div className="payment-method">
  2 {""} Payment Method
</div>
<hr />
<div className="items-delivery">
  3  Items and delivery
</div>
<hr />
     </div>
    </div>
  )
}

export default CheckOut
