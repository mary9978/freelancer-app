import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalServices";

export default function useProposals() {
    const {data,isLoading,error} = useQuery({
        queryKey:['proposal'],
        queryFn : getProposalsApi,
        retry:false,
        refetchOnWindowFocus: true
    });
    const {proposals} = data || {};
    console.log(error)
    return {proposals,isLoading}
}