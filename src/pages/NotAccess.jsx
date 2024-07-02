import React from 'react'
import Icon from '../../public/image-access-denied.svg';
import { useNavigate } from 'react-router-dom';
function NotAccess() {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-screen bg-primary'>
        <div className='flex flex-col items-center'>
            <img className='w-20 h-20 lg:w-44 lg:h-44' src={Icon} alt='403 - not access'/>
            <h1 className='font-bYekan text-[5rem] lg:text-[9rem] font-bold'>403</h1>
            <p className='font-bYekan text-xl lg:text-3xl text-primary'>شما به این بخش دسترسی ندارید</p>
            <button
            className='font-bYekan bg-primary-900 mt-4 p-2 rounded-md text-white'
            onClick={()=>navigate(-1,{replace:true})}
            >بازگشت به صفحه قبلی</button>
        </div>
     
       
    </div>
  )
}

export default NotAccess