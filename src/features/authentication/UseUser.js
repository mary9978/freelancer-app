import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../services/authServices"

export default function UseUser() {
    return useQuery({
        queryKey:['get-user'],
        queryFn: getUser,
        retry:false,
        refetchOnWindowFocus: true
    })    
}


