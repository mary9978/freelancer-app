import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalServices";

export default function useCreateProposals() {
    const queryClient = useQueryClient();
    const {mutate:createProposal,isPending:isCreating}=useMutation({
        mutationFn: createProposalApi,
        onSuccess:(data)=>{
            toast.success('پروپوزال با موفقیت ارسال شد');
            queryClient.invalidateQueries({
                queryKey:['proposal']
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message);
        }
    });
    return {createProposal,isCreating}
}