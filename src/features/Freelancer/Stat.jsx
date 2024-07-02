import React from 'react'

function Stat({icon,title,value}) {
  return (
    <div className="card--stat">
    <div className="w-14 h-14 rounded-full bg-secondary-100 flex justify-center items-center">
      {icon}
    </div>
    <div className="flex flex-col">
      <p className="text-bYekan font-semibold text-xl">{title}</p>
      <span className="text-bYekan font-normal text-2xl">
        {value}
      </span>
    </div>
  </div>
  )
}

export default Stat