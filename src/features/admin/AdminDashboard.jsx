import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import useUser from "./useUser";
import Loading from "../../ui/Loading";
import useProjects from "../../hooks/useProjects";
import useProposals from "../Proposals/useProposals";

function AdminDashboard() {
  const { data, isLoading } = useUser();
  const { isLoading: isLoadingProject, projects } = useProjects();
  const { proposals, isLoading: isLoadingProposals } = useProposals();
  const { users } = data || {};
  if (isLoading || isLoadingProject || isLoadingProposals) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <DashboardStats projects={projects} proposals={proposals} users={users} />
    </div>
  );
}

export default AdminDashboard;
