import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function ProjectHeader({project}) {
   const navigate = useNavigate();
  return (
    <div className='flex items-center gap-4'>
        <MdArrowForward onClick={()=>navigate(-1)} 
        className='cursor-pointer'/>
       <h6>درخواست های پروژه <strong>{project.title}</strong></h6>
       
    </div>
  )
}

export default ProjectHeader