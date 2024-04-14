import React from 'react'
import Accordion from './Accordion';
function SideBar({accordion,toggleAccordion}) {
  return (
    <div className=" row-start-1 row-span-2 border-e border-gray-200">
    <h2 className="text-3xl mt-8 text-center">داشبورد</h2>
    {accordion.map((a) => {
      return (
        <Accordion
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