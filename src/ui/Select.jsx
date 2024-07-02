import React from "react";

function Select({ options, value,onChange }) {
  return (
      <select
      className="rounded-2xl shadow-xl bg-secondary-0 text-secondary-800"
       value={value} onChange={onChange}>
        {options.map((opt) => (
          <option
          className="rounded-lg"
          key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
  );
}

export default Select;
