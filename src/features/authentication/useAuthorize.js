import { useLocation } from "react-router-dom";
import UseUser from "./UseUser";

export default function useAuthorize() {
    const {data,isLoading} = UseUser();
    const {user} = data || {};
    const {pathname} = useLocation();
 

    //shows user status
    let isVerified = false;
    if(user && user.status == 2) isVerified = true;

    let authenticated = false;
    if(user) authenticated = true;

    let authorized = false;
    const ROLES = {
        admin:"ADMIN",
        freelancer:"FREELANCER",
        owner:"OWNER"
    }
    const recievedRole = pathname.split('/').at(1);
    if(Object.keys(ROLES).includes(recievedRole)){
      if(user && user.role == ROLES[recievedRole]){
        authorized = true;
      } 
    }
    return {authenticated,authorized,isLoading,isVerified};
  
}