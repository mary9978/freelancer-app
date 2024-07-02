import React, { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { authenticated, authorized, isLoading,isVerified } = useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated && !isLoading) navigate("auth");
    if(!isVerified && !isLoading) {
      toast.error('پروفایل شما در انتظار بررسی است');
      navigate('/');
    }
    if (!authorized && !isLoading) navigate("/not-access", { replace: true });
  }, [authenticated, authorized, isLoading]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-secondary-100 h-screen">
        <Loading />
      </div>
    );
  }
  if (authenticated && authorized) {
    return children;
  }
  return children;
}

export default ProtectedRoute;
