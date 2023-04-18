import { Navigate, Outlet } from "react-router-dom"
import { useLogin } from "../context/LoginContext"

function ProtectedRoute() {
    
    const {logged} = useLogin()
    
  return (
    <div>
        {logged ? <Outlet/> : <Navigate  to="/" />}
    </div>
  )
}

export default ProtectedRoute