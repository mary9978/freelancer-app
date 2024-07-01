import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import Header from "./Header";
import SideBar from "./SideBar";
import { TiThList } from "react-icons/ti";

function AppLayout({children}) {
  
  const [name,setName] = useState('maryam');
  const hanleToggleMenu =()=>{
    setIsCollapseMenu(!isCollapseMenu)
  }
  return (
      <div className="grid bg-background-app-rgb h-screen grid-rows-[70px_1fr] grid-cols-1 lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr]">
        <Header/>
        {children}
        <div className="overflow-y-auto">
          <div className="mx-auto max-w-screen-lg mt-4">
            <Outlet />
          </div>
        </div>
      </div>
  );
}

export default AppLayout;
