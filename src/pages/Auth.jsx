import React from 'react'
import CheckOTPForm from '../features/authentication/CheckOTPForm'
import SendOTPForm from '../features/authentication/SendOTPForm'

function Auth() {
  return (
    <div className='grid place-items-center h-screen'>
        {/* <SendOTPForm/> */}
        <CheckOTPForm/>
    </div>
  )
}

export default Auth