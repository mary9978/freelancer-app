import React,{useState} from 'react'
import Accordion from './Accordion';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function SideBar({accordion,toggleAccordion,isCollapseMenu,hanleToggleMenu}) {
  return (
    <div className={`hidden lg:block row-start-1 p-4 row-span-2 ease-in-out duration-300 border-e bg-gray-800 border-gray-200 ${isCollapseMenu ? 'w-14 ease-in-out duration-500' : 'ease-in-out duration-500'}`}>
     <div className='flex justify-between items-center'>
        {!isCollapseMenu && <p className='text-3xl font-bYekan font-bold text-[#636578]'>متریالایز</p>}
        <div className='cursor-pointer' onClick={hanleToggleMenu}>
        {isCollapseMenu ?
          <MdKeyboardDoubleArrowLeft onClick={hanleToggleMenu}  className='icon'/>         :
         <MdKeyboardDoubleArrowRight  className='icon'/>
         }
        </div>
        
     </div>
    {accordion.map((a) => {
      return (
        <Accordion
          isMenuCollapse={isCollapseMenu}
          key={a.key}
          title={a.title}
          data={a.data}
          icon = {a.icon}
          isOpen={a.isOpen}
          path={a.link}
          toggleAccordion={() => toggleAccordion(a.key)}
        />
      );
    })}
  </div>
  )
}

export default SideBar