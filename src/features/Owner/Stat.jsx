import React from "react";

function Stat({icon,value,title}) {
  return (
    <div className="bg-secondary-400 cursor-pointer shadow-xl ease-in-out duration-200 hover:scale-y-105 rounded-xl p-4 flex gap-x-4">
      <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-PlusJakartaSans font-semibold text-2xl">{title}</p>
        <span className="text-PlusJakartaSans font-normal text-2xl">
          {value}
        </span>
      </div>
    </div>
  );
}

export default Stat;
