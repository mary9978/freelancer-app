import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProposalStatus } from "../../services/proposalServices";
export default function useProposalStatus() {
    const queryClient = useQueryClient();
    const {mutate:toggleProposalStatus,isPending:isEditing}=useMutation({
        mutationFn: updateProposalStatus,
        onSuccess:(data)=>{
            toast.success('پروپوزال با موفقیت ویرایش شد');
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
    });
    return {isEditing,toggleProposalStatus}
}