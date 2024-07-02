import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function ProjectHeader({project}) {
   const navigate = useNavigate();
  return (
    <div className='flex items-center gap-4'>
        <MdArrowForward
         className={'text-secondary-400 font-bYekan text-lg cursor-pointer'}
         onClick={()=>navigate(-1)} 
        />
       <h6 className='text-secondary-400 font-bYekan'>درخواست های پروژه <strong text-secondary-400 ms-2 font-bYekan font-extrabold>" {project.title} "</strong></h6>
       
    </div>
  )
}

export default ProjectHeader