import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
    // access all queries
    const queryClient = useQueryClient();
     //request with delete,post , put => useMutation
    const {mutate:removeProject,isPending:isDeleting} = useMutation({
        mutationFn:removeProjectApi,
        onSuccess:(data)=>{
            console.log(data);
            toast.success('پروژه با موفقیت حذف شد');
            queryClient.invalidateQueries({
                queryKey:['owner-project']
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
     });
     return {removeProject,isDeleting};
}