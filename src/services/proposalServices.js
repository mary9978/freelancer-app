import http from "./httpServices";

export function getProjectApi (id){
   return http.get(`/project/${id}`).then(({data}) => data.data);
}
export function updateProposalStatus ({id,data}){
   return http.patch(`/proposal/${id}`,data).then(({data}) => data.data);
}


export function getProposalsApi (){
   return http.get(`/proposal/list`).then(({data}) => data.data);
}