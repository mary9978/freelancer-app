import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { LuListFilter } from "react-icons/lu";
import useOutSideClick from "../hooks/useOutSideClick";
function DropdownFilter() {
  const [openFilter, setOpenFilter] = useState(false);
  const ref = useOutSideClick(() => setOpenFilter(false));
  return (
    <div>
      <div className="relative">
        <LuListFilter
          onClick={() => setOpenFilter(true)}
          className="w-6 h-6 hover:cursor-pointer"
        />
        {openFilter && (
          <div className="bg-gray-200 w-[200px] rounded-xl p-4 absolute right-0 top-6">
            <ul className="space-y-3" ref={ref}>
              <li className="dropDown__item">بیشترین قیمت</li>
              <li className="dropDown__item">ددلاین بیشتر</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownFilter;
