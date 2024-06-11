import React from "react";

function RHFSelect({label,name,register,options}) {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <select
      className="w-full rounded-xl"
      id={name}
       {...register(name)}>
        {
            options.map((option) =>{
                return(
                    <option value={option.value} key={option.value}>{option.label}</option>
                )
            })
        }
      </select>
    </div>
  );
}

export default RHFSelect;
