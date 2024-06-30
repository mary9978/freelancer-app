import { useQuery } from "@tanstack/react-query";
import { getProjectListApi } from "../services/projectServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
export default function useProjects() {
    const {search} = useLocation();
    const queryObj = queryString.parse(search);
    const {data,isLoading} = useQuery({
        queryKey:['projects',queryObj],
        queryFn:()=> getProjectListApi(search) ,
        retry:false,
        refetchOnWindowFocus: true
    });
    const {projects} = data || {};
    return {isLoading , projects};
}