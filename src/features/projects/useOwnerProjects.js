import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectServices";

export default function useOwnerProjects() {
    //we get something
    const {data,isLoading} = useQuery({
        queryKey:['owner-project'],
        queryFn: getOwnerProjectsApi,
        retry:false,
        refetchOnWindowFocus: true
    });
    const {projects} = data || {};
    return {isLoading , projects};
}