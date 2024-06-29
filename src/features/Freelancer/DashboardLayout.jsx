import React from 'react'
import DashboardHeader from './DashboardHeader'
import Stats from './Stats'
import useProposals from '../Proposals/useProposals';
import Loading from '../../ui/Loading';
function DashboardLayout() {
  const { proposals,isLoading} = useProposals();
  if(isLoading) return <Loading/>
  return (
    <div>
        <DashboardHeader/>
        <Stats proposals={proposals}/>
    </div>
  )
}

export default DashboardLayout