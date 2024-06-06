import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi, editProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";
export default function useEditProject() {
    const queryClient = useQueryClient();
    //we post data using mutate fn
    const {mutate:editProject,isPending:isEditing}=useMutation({
        mutationFn: editProjectApi,
        onSuccess:(data)=>{
            toast.success('پروژه با موفقیت ویرایش شد');
            //لیست پروژه های کاربر رو دوباره بگیره
            queryClient.invalidateQueries({
                queryKey:['owner-project']
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
    });
    return {isEditing,editProject}
}