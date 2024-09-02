import React, { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { verifyUserEmail } from '../../helpers/axiosHelper'
//show spinner
//grab quary strings from url
//call server with  e and c
//remove spinner and show message from server

const VerifyEmail = () => {
  const [showSpinner, SetShowSpinner]= useState(true)
  const [resp, setResp]= useState({})
const [searchParams]= useSearchParams()
const associate = searchParams.get("e")
const token = searchParams.get("c")

useEffect(()=>{

  userEmailVerification()

},[userEmailVerification])

const userEmailVerification = async()=>{
  const response = await verifyUserEmail({associate, token})
  SetShowSpinner(false)
  setResp(response)
}

  return (
    <div>
    <div className='text-center'>Sathish Website</div>
    <hr />
    <div className="text-center mt-5">
      {showSpinner &&  <Spinner variant="primary" animation="border"/> }
     
          </div>
          <Alert className='w-50 m-auto' variant={resp.status === "success" ? "success" : "danger"}>
            {resp.message}
            </Alert>/
    </div>
  )
}

export default VerifyEmail