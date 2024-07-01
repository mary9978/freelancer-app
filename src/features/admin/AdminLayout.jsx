import React,{useState} from "react";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { FaClipboardList } from "react-icons/fa6";
function AdminLayout() {
  const [accordion, setAccordion] = useState([
    {
      key: 1,
      icon: <FaClipboardList />,
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
    <AppLayout>
      <SideBar toggleAccordion={toggleAccordion} accordion={accordion} />
    </AppLayout>
  );
}

export default AdminLayout;
