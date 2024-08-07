import React from 'react'
import { IoMdClose } from 'react-icons/io'
import useOutSideClick from '../hooks/useOutSideClick';
function Modal({isOpen,onClose,title,children}) {
  const modalRef = useOutSideClick(onClose);
  return (
    isOpen && 
    <div className='backdrop-blur-sm fixed left-0 top-0 z-50
     w-full h-screen bg-secondary-800 bg-opacity-30' >
        <div  ref={modalRef} className='fixed left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto p-2'>
         <div className='flex items-center justify-between border-b border-secondary-900 p-2'>
            <p className='font-bYekan text-lg text-secondary-400'>{title}</p>
            <IoMdClose className='w-6 h-6 text-secondary-500 hover:cursor-pointer' onClick={onClose}/>
         </div> 
         {children} 
        </div>
     </div>
  )
}

export default Modal