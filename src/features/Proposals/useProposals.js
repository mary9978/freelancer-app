import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalServices";

export default function useProposals() {
    const {data,isLoading} = useQuery({
        queryKey:['proposal'],
        queryFn : getProposalsApi,
        retry:false,
        refetchOnWindowFocus: true
    });
    const {proposals} = data || {};
    return {proposals,isLoading}
}