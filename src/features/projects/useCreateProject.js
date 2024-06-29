import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";
export default function useCreateProject() {
    const queryClient = useQueryClient();
    //we post data using mutate fn
    const {mutate:createProject,isPending:isCreating}=useMutation({
        mutationFn: createProjectApi,
        onSuccess:(data)=>{
            toast.success('پروژه با موفقیت ایجاد شد');
            //لیست پروژه های کاربر رو دوباره بگیره
            queryClient.invalidateQueries({
                queryKey:['owner-project']
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
    });
    return {createProject,isCreating}
}