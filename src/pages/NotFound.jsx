import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();
  const handleBack = () =>{
    return navigate(-1);
  }
  return (
    <div className="flex justify-center  md:h-screen">
         <div className='w-full max-w-screen-sm'>
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            <h2 className='text-2xl font-PlusJakartaSans font-bold text-secondary-800 my-8'>صفحه مورد نظر یافت نشد</h2>
            <button 
            onClick={handleBack}
            // to={'/'}
            className='btn btn--primary mt-8'
            >بازگشت به صفحه قبلی</button>
         </div>
    </div>
  )
}

export default NotFound