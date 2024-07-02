import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({isMenuCollapse,children}) {
  return (
      <div className={`grid bg-background-app-rgb h-screen grid-rows-[70px_1fr] grid-cols-1 lg:grid-rows-[auto_1fr] ${isMenuCollapse ? 'lg:grid-cols-[1rem_1fr]':'lg:grid-cols-[15rem_1fr]'} `}>
        <Header/>
        {children}
        <div className="overflow-y-auto">
          <div className="mx-auto max-w-screen-lg mt-4 px-4 lg:px-0">
            <Outlet  />
          </div>
        </div>
      </div>
  );
}

export default AppLayout;
