import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { contextProvide } from "../AuthContext/UserContext";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(contextProvide);
    const location = useLocation();
    console.log(user, loading)
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
    
}

export default PrivateRouter