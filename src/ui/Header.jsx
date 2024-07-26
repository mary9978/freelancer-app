import UseUser from "../features/authentication/UseUser";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import ToggleDark from "./ToggleDark";
import { useState } from "react";
import DropDown from "./DropDown";
import useOutSideClick from "../hooks/useOutSideClick";
import UserInfo from "./UserInfo";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const { data, isLoading } = UseUser();
  const user = data || {};
  const [isOpenLan, setsOpenLan] = useState(false);
  const ref = useOutSideClick(() => setsOpenLan(false));

  return (
    <div className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-transparent text-sm py-4">
      <nav
        className={`flex basis-full items-center justify-between w-full mx-auto px-4 sm:px-6 
        ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <RxHamburgerMenu 
        
        className="w-7 h-7 me-4 cursor-pointer text-secondary-500 md:hidden"/>
        {/* search */}
        <div className="flex justify-center items-center w-1/2">
          <MdOutlineSearch className="w-5 h-5 text-gray-400" />
          <input
            className="border-none w-3/4 text-sm lg:text-xl bg-transparent"
            type="text"
            name="search"
            placeholder="جست و جو"
          />
        </div>
        {/* other info*/}
        <div className="flex gap-x-4 items-center">
          <div className="relative" ref={ref}>
            <LuLanguages onClick={() => setsOpenLan(true)} className="icon" />
            <DropDown isOpen={isOpenLan}>
              <ul className="p-2">
                <li className="p-1 hover:bg-secondary-50 hover:cursor-pointer transition-all duration-300">
                  <p className="font-bYekan text-md text-gray-500">انگلیسی</p>
                </li>
                <li className="p-1 hover:bg-secondary-50 hover:cursor-pointer transition-all duration-300">
                  <p className="font-bYekan text-md text-gray-500">عربی</p>
                </li>
                <li className="p-1 hover:bg-secondary-50 hover:cursor-pointer transition-all duration-300">
                  <p className="font-bYekan text-md text-gray-500">فارسی</p>
                </li>
              </ul>
            </DropDown>
          </div>

          <ToggleDark />
          <div className="relative">
            <IoMdNotificationsOutline className="w-7 h-7 icon" />
            <div
              className="absolute left-4
           bottom-4  w-4 h-4 rounded-full
            bg-green-500 flex items-center justify-center
          "
            >
              <span className="text-white text-xs">2</span>
            </div>
          </div>
          <UserInfo user={user} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
