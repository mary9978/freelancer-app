import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi, editProjectApi, toggleProjectStatusApi } from "../../services/projectServices";
import toast from "react-hot-toast";
export default function useToggleProjectStatus() {
    const queryClient = useQueryClient();

    const {mutate:toggleProject,isPending:isUpdating}=useMutation({
        mutationFn: toggleProjectStatusApi,
        onSuccess:(data)=>{
            toast.success('وضعیت پروژه با موفقیت تغییر کرد');
            //لیست پروژه های کاربر رو دوباره بگیره
            queryClient.invalidateQueries({
                queryKey:['owner-project']
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
    });
    return {toggleProject,isUpdating}
}