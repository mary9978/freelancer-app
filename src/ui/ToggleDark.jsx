import React from 'react'
import { FaRegSun } from "react-icons/fa6";
import { useDarkMode } from '../context/DarkModeContext';
import { MdDarkMode } from "react-icons/md";
function ToggleDark() { 
   const {isDarkMode,toggleDark} = useDarkMode();
  return (
    <>
      {isDarkMode ? <FaRegSun onClick={toggleDark} className='icon'/>:
       <MdDarkMode className='icon' onClick={toggleDark}/>}
    </>
    
  )
}

export default ToggleDark