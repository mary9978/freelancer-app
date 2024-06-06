import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { AiFillProject } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Accordion from "./Accordion";
import Header from "./Header";
import SideBar from "./SideBar";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { TiHome } from "react-icons/ti";
function AppLayout() {
  const [accordion, setAccordion] = useState([
    {
      key: 1,
      icon: <TiHome />,
      title: "داشبورد",
      link:'/owner',
      submenu:[],
      isOpen: false,
    },
    {
      key: 2,
      icon: <FaRegListAlt/> ,
      link:'/owner/projects',
      title: "لیست پروژه ها",
      submenu:[],
      isOpen: false,
    },
    {
        key: 3,
        icon:<MdOutlineLibraryAdd/>,
        title:'ایجاد پروژه جدید',
        link:'',
        submenu:[],
        isOpen:'false'
    },
    {
        key: 4,
        icon: <IoLogOutOutline/>,
        title: 'خروج از حساب کاربری',
        link:'',
        submenu:[],
        isOpen: false
    }
  ]);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordion.map((accord) => {
      if (accord.key === accordionkey && accordion.submenu.length !== 0) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
     <Header/>

    <SideBar accordion = {accordion} toggleAccordion={toggleAccordion}/>
      <div className="overflow-y-auto">
        <div className="mx-auto max-w-screen-lg mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
