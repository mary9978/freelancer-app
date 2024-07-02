import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({options,filterField}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  const handleCLick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <div className='flex justify-center items-center gap-x-2'>
        <span>وضعیت : </span>
        <div 
        className='flex items-center border border-secondary-100 bg-secondary-0 gap-x-2 p-2 rounded-lg text-sm'>
            {options.map(({value,label}) => {
                let isActive = value === currentFilter;
                return <button
                disabled={isActive}
                onClick={()=>handleCLick(value)}
                 className={`px-4 whitespace-nowrap rounded-lg py-1 font-bold transition-all duration-300
                 ${isActive ? 'bg-primary-900 text-white':'bg-secondary-0 text-secondary-800'}`}
                 key={value}>{label}</button>
            })}
        </div>
    </div>
  )
}

export default Filter