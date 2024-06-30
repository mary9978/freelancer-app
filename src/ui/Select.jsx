import React from "react";

function Select({ options, value,onChange }) {
  return (
      <select
      className="rounded-2xl shadow-xl text-primary-100"
       value={value} onChange={onChange}>
        {options.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
  );
}

export default Select;
