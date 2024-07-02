import http from "./httpServices";


export function getUserListApi (){
    return http.get(`/admin/user/list`).then(({data}) => data.data);
}

export function toggleUserStatusApi ({userId,data}){
    return http.patch(`/admin/user/verify/${userId}`,data).then(({data}) => data.data);
}