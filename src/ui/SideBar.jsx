import React from 'react'
import Accordion from './Accordion';
function SideBar({accordion,toggleAccordion,isMenuCollapse=false}) {
  return (
    <div className={`row-start-1  row-span-2 border-e bg-[#2B3A49] border-gray-200 ${isMenuCollapse ? 'w-10' : ''}`}>
    {isMenuCollapse ? '':<h2 className="text-3xl text-white font-PlusJakartaSans font-bold my-8 text-center">فریلنسری اپ</h2>}
    {isMenuCollapse ? '' :<p className='text-white ms-4 mb-2 font-PlusJakartaSans'>منو اصلی</p>}
    {accordion.map((a) => {
      return (
        <Accordion
        isMenuCollapse={isMenuCollapse}
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