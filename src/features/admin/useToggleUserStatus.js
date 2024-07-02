import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { toggleUserStatusApi } from "../../services/adminServices";

function useToggleUserStatus() {
   const {isPending:isCreating,mutate:toggleProjectStatus} =  useMutation({
        mutationFn: toggleUserStatusApi,
        onSuccess:(data)=>{
            toast.success('وضعیت کاربر با موفقیت تغییر کرد')
        },
        onError:(error)=>{
            toast.error('this is error');
        }
    });
    return {isCreating,toggleProjectStatus}
}

export default useToggleUserStatus
