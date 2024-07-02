import React from "react";

function RHFSelect({label,name,register,options}) {
  return (
    <div className="px-4">
      <label htmlFor={name}>{label}</label>
      <select
      className="w-full rounded-xl bg-secondary-200 font-bYekan"
      id={name}
       {...register(name)}>
        {
            options.map((option) =>{
                return(
                    <option
                     className="font-bYekan"
                     value={option.value} key={option.value}>{option.label}</option>
                )
            })
        }
      </select>
    </div>
  );
}

export default RHFSelect;
