import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const queryClient= useQueryClient();
    const navigate = useNavigate();
    const {mutate:logout,isPending} = useMutation({
        mutationFn:logoutApi,
        onSuccess:(data)=>{
            //remove all request from cookies
            queryClient.removeQueries();
            navigate('/auth',{replace:true})
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
     });
     return {logout,isPending}
}