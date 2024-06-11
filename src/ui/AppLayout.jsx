import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import Header from "./Header";
import SideBar from "./SideBar";
import { TiThList } from "react-icons/ti";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function AppLayout({children}) {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const handler = useFullScreenHandle();

  return (
    <FullScreen className="bg-transparent" handle={handler}>
      <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
        <Header
          onFullScreen={handler.enter}
          collapseMenu={collapseMenu}
          onCollapse={() => setCollapseMenu(!collapseMenu)}
        />
        {children}
        <div className="overflow-y-auto">
          <div className="mx-auto max-w-screen-lg mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </FullScreen>
  );
}

export default AppLayout;
