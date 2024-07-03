import React from 'react'
import EmptyIcon from '../../public/emptyValue.jpg';
function Empty({title}) {
   return (
    <div className='flex flex-col items-center justify-center'>
      <img className='rounded-xl' src={EmptyIcon} alt='no value found'/>
      <h2 className='font-bYekan text-secondary-400 mt-4 text-2xl'>{title} یافت نشد</h2>
    </div>
   )
   
}

export default Empty