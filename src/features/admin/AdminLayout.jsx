import React,{useState} from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { FaClipboardList } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { LuGitPullRequest } from "react-icons/lu";
function AdminLayout() {
  const [accordion, setAccordion] = useState([
    {
      key: 1,
      icon: <IoHomeSharp />,
      title: " داشبورد",
      link: "dashboard",
      submenu: [],
      isOpen: false,
    },
    {
      key: 2,
      icon: <FaClipboardList />,
      title: "لیست کاربران",
      link: "users",
      submenu: [],
      isOpen: false,
    },
    {
      key: 3,
      icon: <AiOutlineProject />,
      title: "لیست پروژه ها",
      link: "projects",
      submenu: [],
      isOpen: false,
    },
    {
      key: 3,
      icon: <LuGitPullRequest />,
      title: "لیست درخواست ها",
      link: "proposals",
      submenu: [],
      isOpen: false,
    },
  ]);
  const [isCollapseMenu, setIsCollapseMenu] = useState(false);
  const hanleToggleMenu =()=>{
    setIsCollapseMenu(!isCollapseMenu);
  }
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
    <AppLayout isMenuCollapse={isCollapseMenu} >
      <SideBar 
      isCollapseMenu={isCollapseMenu}
      hanleToggleMenu={hanleToggleMenu}
      toggleAccordion={toggleAccordion} 
      accordion={accordion} />
    </AppLayout>
  );
}

export default AdminLayout;
