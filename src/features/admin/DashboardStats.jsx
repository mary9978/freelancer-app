import React from 'react'
import Stat from './Stat';
import { FiUsers } from "react-icons/fi";
function DashboardStats({users}) {
    const undefinedUser = users.map(user=> user.status !== 1).length;
  return (
    <div div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:grid-cols-3 mt-4">
      <Stat
        title="تعداد کاربران"
        icon={<FiUsers className="w-10 h-10 text-secondary-500" />}
        value={users.length}
      />
       <Stat
        title="کاربران تعیین وضعیت نشده"
        icon={<FiUsers className="w-10 h-10 text-secondary-500" />}
        value={undefinedUser}
      />
    </div>
  )
}

export default DashboardStats