import http from "./httpServices"
export function getCategoryApi (){
    return http.get('/category/list').then(({data}) => data.data)
}