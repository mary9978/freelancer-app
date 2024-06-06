import React from "react";

function RadioInput({value,name,label,register,checked,validationSchema}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600 font-vazir">
      <input
        className="w-4 h-4 cursor-pointer form-radio text-primary-400 focus:ring-primary-400"
        type="radio"
        id={value}
        value={value}
        name={name}
        {...register(name,validationSchema)}
        checked={checked}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
