import React from 'react'
import DropdownFilter from '../../../ui/DropdownFilter';


function ProjectsHeader() {
  return (
    <div className='flex items-center gap-x-4 my-4'>
        <h2 className='text-3xl'>لیست پروژه ها</h2>
        <DropdownFilter/>
    </div>
  )
}

export default ProjectsHeader