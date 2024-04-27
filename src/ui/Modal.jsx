import React, { useRef } from 'react'
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io'
function Modal({isOpen,onClose,title,children}) {
   const modalRef = useRef();
   useEffect(()=>{
     function handleOutsideClick(e){
      if(modalRef.current && !modalRef.current.contains(e.target) ){
         onClose();
      }
    }
     document.addEventListener('click',handleOutsideClick,true);
     return ()=>{
      document.removeEventListener('click',handleOutsideClick,true);
     }
   },[onClose])
  return (
    isOpen && 
    <div className='backdrop-blur-sm fixed left-0 top-0 z-50
     w-full h-screen bg-secondary-800 bg-opacity-30' >
        <div  ref={modalRef} className='fixed left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto p-2'>
         <div className='flex items-center justify-between border-b border-secondary-900 p-2'>
            <p>{title}</p>
            <IoMdClose className='w-5 h-5 hover:cursor-pointer' onClick={onClose}/>
         </div> 
         {children} 
        </div>
     </div>
  )
}

export default Modal