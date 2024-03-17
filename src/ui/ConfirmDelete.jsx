import React from 'react'

function ConfirmDelete({projectTitle,onClose,onConfirmDelete}) {
  return (
    <div className='p-4'>
        <h3 className='font-bold font-PlusJakartaSans text-base my-4'>آیا از حذف "{projectTitle}" مطمئن هستید </h3>
         <div className='flex justify-between'>
            <button 
            className='btn btn--primary'
            onClick={onClose}
            >لغو</button>
            <button 
            className='btn btn-danger'
            onClick={onConfirmDelete}
            >تایید</button>
         </div>
    </div>
  )
}

export default ConfirmDelete