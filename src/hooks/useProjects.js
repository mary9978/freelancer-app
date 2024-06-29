import { useQuery } from "@tanstack/react-query";
import { getProjectListApi } from "../services/projectServices";
export default function useProjects(params) {
    const {data,isLoading} = useQuery({
        queryKey:['projects'],
        queryFn:getProjectListApi ,
        retry:false,
        refetchOnWindowFocus: true
    });
    const {projects} = data || {};
    return {isLoading , projects};
}