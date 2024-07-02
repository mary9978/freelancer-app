import React,{useState} from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { IoHomeSharp } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
function OwnerAppLayout() {
    const [accordion, setAccordion] = useState([
        {
          key: 1,
          icon: <IoHomeSharp />,
          title: "داشبورد",
          link: "dashboard",
          submenu: [],
          isOpen: false,
        },
        {
          key: 2,
          icon: <AiOutlineProject />,
          link: "projects",
          title: "لیست پروژه ها",
          submenu: [],
          isOpen: false,
        },
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
    <AppLayout>
       <SideBar toggleAccordion={toggleAccordion} accordion={accordion}/>
    </AppLayout>
  );
}

export default OwnerAppLayout;
