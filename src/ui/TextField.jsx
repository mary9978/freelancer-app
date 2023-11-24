import React from 'react'

function TextField({...arg}) {
    console.log(arg);
  return (
    <>
    <label className={'font-vazir text-md mt-2 font-normal text-right text-secondary-400'}
     htmlFor={arg.name}>
       {arg.labelText}
    </label>
      <input
      name={arg.name}
      autoComplete='off'
      value={arg.value}
      id={arg.name}
      onChange={arg.onChange}
       className={'textField__input mt-3'} type={arg.type}/>
    </>    
  )
}

export default TextField