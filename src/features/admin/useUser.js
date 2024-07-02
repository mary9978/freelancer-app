import { useQuery } from "@tanstack/react-query";
import { getUserListApi } from "../../services/adminServices";

export default function useUser() {
   const {data,isLoading} = useQuery({
    queryKey:['user-list'],
    queryFn: getUserListApi,
    retry:false,
    refetchOnWindowFocus: true
   });
   return {data,isLoading}
}