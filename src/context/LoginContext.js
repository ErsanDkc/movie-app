import { createContext, useContext, useState } from "react";

const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    
    const email = JSON.parse(localStorage.getItem("info"))?.email
    
    const [logged,setLogged] = useState(email ? true : false)
    const [username,setUserName] = useState(JSON.parse(localStorage.getItem("user")) || "")
    const values = {
        logged,
        setLogged,
        username,
        setUserName
    }


    return <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
}

export const useLogin = () => useContext(LoginContext)