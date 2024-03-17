import http from "./httpServices";

export function getOwnerProjectsApi() {
    return http.get('/project/owner-projects').then(({data}) => data.data);
}
export function removeProjectApi(id) {
    return http.get(`/project/${id}`).then(({data}) => data.data);
}
