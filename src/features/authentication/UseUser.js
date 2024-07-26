import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../services/authServices"

export default function UseUser() {
    const {error,isLoading,data,isError} = useQuery({
        queryKey:['get-user'],
        queryFn:getUser,
        retry:false
    });
    return { data, isLoading };
}


