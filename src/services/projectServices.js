import http from "./httpServices";

export function getOwnerProjectsApi() {
    return http.get('/project/owner-projects').then(({data}) => data.data);
}

// export function getProjectApi (id){
//     console.log(id);
//     http.get(`/project/${id}`,data).then(({data}) => console.log('aaaa',data.data));
// }



export function removeProjectApi(id) {
    return http.delete(`/project/${id}`).then(({data}) => data.data);
}
export function createProjectApi (data){
    return http.post(`/project/add`,data).then(({data}) => data.data);
}

export function editProjectApi ({id,newProject}){
    return http.patch(`/project/update/${id}`,newProject).then(({data}) => data.data);
}
export function toggleProjectStatusApi ({id,data}){
    return http.patch(`/project/${id}`,data).then(({data}) => data.data);
}





