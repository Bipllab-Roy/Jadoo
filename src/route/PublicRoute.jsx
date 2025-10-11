import { Navigate, useLocation } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Loading from "../components/Loading"


const PublicRoute = ({children}) => {
    const {currentUser,loading}=useAuth()
    const location = useLocation()

    if(loading)return <Loading/>
    
    //if your exists and email is verified, redirect to home
    if (currentUser && currentUser.emailVerified) {
      return <Navigate to={"/"} state={{from: location}} replace />
    }
    

    return children
   
}

export default PublicRoute
