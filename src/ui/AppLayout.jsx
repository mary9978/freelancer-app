import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { AiFillProject } from "react-icons/ai";

import { IoCreate } from "react-icons/io5";

import { FaUser } from "react-icons/fa";
import Accordion from "./Accordion";
import Header from "./Header";
import SideBar from "./SideBar";
function AppLayout() {
  const [accordion, setAccordion] = useState([
    {
      key: 1,
      icon: <GoHomeFill />,
      title: "داشبورد",
      link:'/owner',
      data: ``,
      isOpen: false,
    },
    {
      key: 2,
      icon: <AiFillProject/> ,
      link:'/owner/projects',
      title: "لیست پروژه ها",
      data: "",
      isOpen: false,
    },
    {
        key: 3,
        icon:<IoCreate/>,
        title:'ایجاد پروژه جدید',
        link:'',
        data:'',
        isOpen:'false'
    },
    {
        key: 4,
        icon: <FaUser/>,
        title: 'اطلاعات کاربری',
        link:'',
        data:'',
        isOpen: false
    }
  ]);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordion.map((accord) => {
      if (accord.key === accordionkey) {
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
