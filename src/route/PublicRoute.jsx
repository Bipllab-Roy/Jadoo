import { Navigate, useLocation } from "react-router"
import { useAuth } from "../hooks/useAuth"
import Loading from "../components/Loading"


const PublicRoute = ({children}) => {
    const {currentUser,loading}=useAuth()
    const location = useLocation()

    if(loading)return <Loading/>

    if (currentUser) {
        return <Navigate to={"/"} state={{from: location}} replace />
    }
  return children
}

export default PublicRoute
