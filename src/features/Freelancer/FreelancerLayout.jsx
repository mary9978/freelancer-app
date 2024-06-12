import React,{useState} from 'react'
import AppLayout from '../../ui/AppLayout'
import SideBar from '../../ui/SideBar'
import { TiThList } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";

function FreelancerLayout() {
    const [accordion, setAccordion] = useState([
        {
          key: 1,
          icon: <MdDashboard />,
          title: "داشبورد",
          link: "/freelancer",
          submenu: [],
          isOpen: false,
        },
        {
          key: 2,
          icon: <TiThList />,
          link: "/freelancer/proposals",
          title: "درخواست ها",
          submenu: [],
          isOpen: false,
        },
        {
            key: 3,
            icon: <TiThList />,
            link: "/freelancer/projects",
            title: " پروژه ها",
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
  )
}

export default FreelancerLayout