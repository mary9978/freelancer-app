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
const queryClient = new QueryClient();
function App() {
  return (
  <DarkModeProvider>
     <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/owner" element={<OwnerAppLayout />}>
            <Route index element={<Navigate to={"dashboard"} />} replace />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>

          <Route path="/" element={<h2>Home page</h2>} />
          <Route path="/auth" element={<Auth />} />
          <Route exact path="/complete-profile" element={<CompleteProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
  </DarkModeProvider>
     
   
  );
}

export default App;
