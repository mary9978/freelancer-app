import React from "react";

function RadioInput({id,name,label,onChange,checked}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600 font-vazir">
      <input
        className="w-4 h-4 cursor-pointer form-radio text-primary-400 focus:ring-primary-400"
        type="radio"
        id={id}
        name={name}
        value={id}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
