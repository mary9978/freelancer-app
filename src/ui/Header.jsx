import { MdSearch, MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import UseUser from "../features/authentication/UseUser";
import { RiFullscreenLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import {MdLogout} from 'react-icons/md'
import { useForm } from "react-hook-form";
import userAvatar from '../assets/images/user-1.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleLogout from "../features/authentication/ToggleLogout";
import SettingToggle from "./SettingToggle";
function Header({onCollapse,collapseMenu,onFullScreen}) {
 
   const {data,isLoading} = UseUser();
   const {register,formState:errors} = useForm();
  return (
    <div className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-4">
    <nav className={`flex basis-full items-center justify-between w-full mx-auto px-4 sm:px-6 md:px-8
    ${isLoading ? 'blur-sm opacity-50':''}`}>
      <IoMenu 
      onClick={onCollapse}
      className="w-6 h-6 cursor-pointer"/>
      <div className="flex gap-x-4 items-center">
        <div className="flex justify-center items-center">
          <MdOutlineSearch className="w-5 h-5 text-gray-400"/>
          <input 
          className="border-none w-3/4"
          type="text"
           name="search" 
           placeholder="جست و جوی پروژه ها ..."
          />
          
        </div>
        <ToggleLogout/>
       
        <RiFullscreenLine 
        onClick={onFullScreen}
        className="w-5 h-5 text-gray-400 cursor-pointer"
        />
        <div className="relative">
          <IoMdNotificationsOutline className="w-6 h-6 text-gray-500"/>
          <div className="absolute left-4
           bottom-4  w-4 h-4 rounded-full
            bg-green-500 flex items-center justify-center
          ">
            <span className="text-white text-xs">2</span>
          </div>
          
        </div>
        <Link to={'dashboard'}>
        <img src={userAvatar} className="w-8 h-8 rounded-full" alt="" />
        </Link>
        <SettingToggle/>
      </div>
    </nav>
   </div>
  )
}

export default Header