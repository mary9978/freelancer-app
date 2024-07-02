import React from "react";

function DropDown({ isOpen, children }) {
  return (
    <>
      {isOpen && (
        <div className={`absolute z-50 left-4 border-gray-600  bg-secondary-100 border shadow-xl rounded-lg hover:cursor-pointer p-2 w-[200px]`}>
          {children}
        </div>
      )}
    </>
  );
}

export default DropDown;
