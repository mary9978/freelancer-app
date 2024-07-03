import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiOutlineCollection } from "react-icons/hi";
import Stat from "./stat";
function DashboardStats({ projects }) {
  const projectLength = projects.length;
  const numOfAcceptedProject = projects.map((pr) => pr.status == 2).length;
  const numOfProjectProposal = projects.reduce((acc, curr) => {
    return acc + curr.proposals.length;
  }, 0);
  return (
    <div div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:grid-cols-3">
      <Stat
        title="پروژه ها"
        icon={<CiGrid41 className="w-10 h-10 text-secondary-500" />}
        value={projectLength}
      />

      <Stat
        title="پروژه های واگذار شده"
        icon={<HiMiniCurrencyDollar className="w-9 h-9 text-secondary-500" />}
        value={numOfAcceptedProject}
      />

      <Stat
        title="درخواست ها"
        icon={<HiOutlineCollection className="w-10 h-10 text-secondary-500" />}
        value={numOfProjectProposal}
      />
    </div>
  );
}

export default DashboardStats;
