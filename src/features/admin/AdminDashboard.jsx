import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardStats from './DashboardStats'
import useUser from './useUser';
import Loading from '../../ui/Loading';

function AdminDashboard() {
   const {data,isLoading} = useUser();
   const {users} = data || {};
   if(isLoading) return <Loading/>
  return (
    <div>
        <DashboardHeader/>
        <DashboardStats users={users}/>
    </div>
  )
}

export default AdminDashboard