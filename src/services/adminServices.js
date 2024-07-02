import http from "./httpServices";


export function getUserListApi (){
    return http.get(`/admin/user/list`).then(({data}) => data.data);
 }