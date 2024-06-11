import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Accordion(props) {
  return (
    <div className="px-4 rounded-md mb-1">
      <NavLink
        to={props.path}
        className="items-center flex justify-between w-full p-4 text-right bg-transparent  
          transition duration-300 text-gray-400 hover:text-white hover:bg-gray-500 hover:rounded-md"
        onClick={props.toggleAccordion}
      >
        <div className="flex items-center gap-x-3">
          {props.icon}
          {props.isMenuCollapse ? '':<p className="font-PlusJakartaSans font-md">{props.title} </p>}
        </div>
      </NavLink>
      
    </div>
  );
}
