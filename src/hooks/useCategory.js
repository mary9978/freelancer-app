import {  useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryServices";

export default function useCategories() {
    const {data,isLoading} = useQuery({
        queryKey:['categories'],
        queryFn: getCategoryApi
    });
    const {categories : rawCategory =[]} = data || {};
    const categories = 
    rawCategory.map(item => ({label:item.title , value : item._id, id:item._id}));
    const transformedCategories = rawCategory.map((item) => ({
        label: item.title,
        value: item.englishTitle,
      }));
    return {isLoading,categories,transformedCategories};
}