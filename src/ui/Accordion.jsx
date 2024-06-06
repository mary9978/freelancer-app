import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Accordion(props) { 
    console.log(props.isOpen);
    return ( 
        <div className="px-4 rounded-md mb-1"> 
            <NavLink 
            to={props.path}
                className="items-center flex justify-between w-full p-4 text-right bg-transparent  
                            transition duration-300 text-white"
                onClick={props.toggleAccordion} 
            > 
            <div className="flex gap-x-3">
                {props.icon} 
                {props.title} 
            </div>
                
                <span className={`float-left transform 
                                 transition-transform duration-300`}> 
                   <RiArrowDropDownLine fontSize={24}/>
                </span> 
            </NavLink> 


            {props.isOpen && ( 
                <div className=" "> 
                    {props.data} 
                </div> 
            )} 
        </div> 
    ); 
}; 