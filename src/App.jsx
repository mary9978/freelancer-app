import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfile from "./pages/CompleteProfile";
import "./App.css";
import Auth from "./pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import Owner from "./pages/OwnerDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/project";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerAppLayout from "./features/Owner/OwnerAppLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/Freelancer/FreelancerLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./features/admin/AdminDashboard";
const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>

         <Route
         path="/admin"
         element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}
         >
           <Route index element={<Navigate to={'dashboard'}/>} replace/>
           <Route path="dashboard" element={<AdminDashboard/>} />
           <Route path="users" element={<h2>user list</h2>} />
         </Route>


          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerAppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} />} replace />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>

          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} />} replace />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>

          <Route path="/" element={<Navigate to={"/auth"} />} replace />
          <Route path="/auth" element={<Auth />} />
          <Route exact path="/complete-profile" element={<CompleteProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
