import { Navigate, Outlet } from "react-router-dom"
import { useLogin } from "../context/LoginContext"

function ProductedRoute({element}) {
    
    const {logged} = useLogin()
  return (
    <div>
        {logged ? <Outlet/> : <Navigate  to="/" />}
    </div>
  )
}

export default ProductedRoute