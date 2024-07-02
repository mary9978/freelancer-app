import React from 'react'
import Stat from './Stat';
import { FaUserTie } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { LuGitPullRequest } from "react-icons/lu";

function DashboardStats({users,projects,proposals}) {
  return (
    <div div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:grid-cols-3 mt-4">
      <Stat
        title="تعداد کاربران"
        icon={<FaUserTie className="w-10 h-10 text-secondary-500" />}
        value={users.length}
      />
       <Stat
        title="پروژه ها"
        icon={<AiOutlineProject className="w-10 h-10 text-secondary-500" />}
        value={projects.length}
      />
       <Stat
        title="درخواست ها"
        icon={<LuGitPullRequest className="w-10 h-10 text-secondary-500" />}
        value={proposals.length}
      />
    </div>
  )
}

export default DashboardStats