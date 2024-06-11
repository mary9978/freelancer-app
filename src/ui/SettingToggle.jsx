import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdViewDay, MdModeNight } from "react-icons/md";
import useOutSideClick from "../hooks/useOutSideClick";
import { useDarkMode } from "../context/DarkModeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
function SettingToggle() {
  const [openSetting, setOpenSetting] = useState(false);
  const dropDownRef = useOutSideClick(() => setOpenSetting(false));
  const {isDarkMode,toggleDark} = useDarkMode();
  return (
    <div className="relative" ref={dropDownRef}>
      <IoMdSettings
        onClick={() => setOpenSetting(!openSetting)}
        className="w-5 h-5 text-gray-500 animate-waving-hand cursor-pointer"
      />
      {openSetting && (
        <ul className="bg-white border p-2 shadow-lg w-[120px] rounded-md absolute left-0 top-7 cursor-pointer">
          {isDarkMode ? 
          <div className="flex gap-2 items-center">
          <CiLight className="w-4 h-4 text-primary-700" onClick={toggleDark}/> 
          <span className="text-secondary-400">تم روشن</span>
          </div>
          : 
          <div className="flex gap-2 items-center">
           <MdDarkMode className="w-4 h-4 text-secondary-700" onClick={toggleDark}/>
           <span className="text-secondary-400">تم تاریک</span>
          </div>
         }
        </ul>
      )}
    </div>
  );
}

export default SettingToggle;
