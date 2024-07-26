import { useLocation } from "react-router-dom";
import UseUser from "./UseUser";

export default function useAuthorize() {
    const {data,isLoading} = UseUser();
    const {user} = data || {};


    const {pathname} = useLocation();
 
     console.log(user);
    //shows user status
    let isVerified = false;
    if(user && user.status == 2) isVerified = true;


    let authenticated = false;
    if(user) authenticated = true;

    let authorized = true;
    const ROLES = {
        admin:"ADMIN",
        freelancer:"FREELANCER",
        owner:"OWNER"
    }
   
    const desiredRole = pathname.split("/")[1];

    if (Object.keys(ROLES).includes(desiredRole)) {
      if (user != null && user.role == ROLES[desiredRole]) authorized = true;
    }
    return {authenticated,authorized,isLoading,isVerified};
  
}