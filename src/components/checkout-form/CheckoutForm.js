import React, { useEffect, useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { postPayment, reduceProductQty } from '../../helpers/axiosHelper';

import { useSelector } from 'react-redux';

export const CheckoutForm = (add) => {
    const [credit, setCredit]= useState({})
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useSelector((state)=> state.userInfo)
    console.log(user)
    const {_id} = user
    const {cartList} = useSelector((state)=> state.productInfo)
    console.log(cartList)
    const calculateSubtotal = (cartList) => {
      return cartList.reduce((accumulator, item) => {
        return accumulator + item.price ;
      }, 0); // Initial value of accumulator is 0
    };



const subtotal = calculateSubtotal(cartList);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(subtotal)
    useEffect(()=>{
        setCredit(add)
    },[add])
    console.log(credit)

    const handleOnSubmit=async(e)=>{
      e.preventDefault();
      //you should have user and order details

      if(!stripe || !elements){
              // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
        return alert("not ready to process the payment");
      }
      //call api to get the client secret
      const obj=  {
        total: subtotal,
        currency:"aud",
        paymentMethodType:"card",
      }
      console.log(obj)
      const data = await postPayment(obj)
      console.log(data)
   const clientSecret = data.clientSecret
     const {paymentIntent} = await stripe.confirmCardPayment(clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)
       
          }
        }
      )
      console.log(paymentIntent)
      if(paymentIntent.status === "succeeded"){
        alert("your order has been processed successfully")
       const {status, purchaseHistory} = reduceProductQty({cartList, _id})
       if (status === "success"){
        console.log([purchaseHistory])
       }
        console.log(cartList, _id)
      }
      else{
        alert("Couldn't process the payment, please try again later")
      }
    }
  return (
    <form  onSubmit={handleOnSubmit}>
    <CardElement options={{hidePostalCode:true}}/>
    <button >Submit</button>
  </form>
  )
}
