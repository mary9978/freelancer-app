import React from "react";

function RHFSelect({label,name,register,options}) {
  return (
    <div className="">
      <label className="text-secondary-900 font-bYekan" htmlFor={name}>{label}</label>
      <select
      className="w-full rounded-xl bg-secondary-400 text-secondary-500 font-bYekan"
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
