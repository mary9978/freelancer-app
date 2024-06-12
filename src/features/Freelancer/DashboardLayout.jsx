import React from 'react'
import DashboardHeader from './DashboardHeader'
import Stats from './Stats'

function DashboardLayout() {
  return (
    <div>
        {/* dashboard header
        dashboard stats */}
        <DashboardHeader/>
        <Stats/>
    </div>
  )
}

export default DashboardLayout