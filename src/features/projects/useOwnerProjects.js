import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectServices";

export default function useOwnerProjects() {
    //we get something
    const {data,isLoading,error,isError} = useQuery({
        queryKey:['owner-projects'],
        queryFn: getOwnerProjectsApi
    });
    const {projects} = data || {};
    console.log('*****',error,isError)
    return {isLoading , projects};
}