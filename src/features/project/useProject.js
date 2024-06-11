import { useQuery } from "@tanstack/react-query";
import {getProjectApi} from '../../services/proposalServices';
import { useParams } from 'react-router-dom'
export default function useProject() {
    const {id} = useParams();
    //we get something
    const {data,isLoading,error} = useQuery({
        queryKey:['project',id],
        queryFn: ()=> getProjectApi(id)
    });
    const {project} = data || {};
    return {isLoading , project};
}