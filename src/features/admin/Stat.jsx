import React from 'react'

function Stat({icon,title,value}) {
  return (
    <div className="bg-secondary-400 cursor-pointer shadow-2xl ease-in-out duration-200 hover:scale-y-105 rounded-xl p-4 flex gap-x-4">
    <div className="w-14 h-14 rounded-full bg-secondary-100 flex justify-center items-center">
      {icon}
    </div>
    <div className="flex flex-col">
      <p className="font-bYekan font-semibold text-2xl">{title}</p>
      <span className="font-bYekan font-normal text-2xl">
        {value}
      </span>
    </div>
  </div>
  )
}
export default Stat;
