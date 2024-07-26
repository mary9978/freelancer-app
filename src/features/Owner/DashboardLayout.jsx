import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardStats from './DashboardStats'
import useOwnerProjects from '../projects/useOwnerProjects';
import Loading from '../../ui/Loading';
function DashboardLayout() {
  const {isLoading , projects} =useOwnerProjects();
  console.log('dashboard layout',projects);
  if(isLoading) return <Loading/>;
  
  return (
    <div>
        <DashboardHeader/>
        <DashboardStats projects={projects}/>
    </div>
  )
}

export default DashboardLayout