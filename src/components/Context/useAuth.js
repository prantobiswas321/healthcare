import { useContext } from "react";
import { authcontext } from "./AuthProvider";


const useAuth = () => {
    return useContext(authcontext);
}

export default useAuth;