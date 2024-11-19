import { useRecoilCallback, useRecoilValue } from "recoil"
import { AuthState } from "../../state/auth"
import { redirect, useNavigate } from "@tanstack/react-router"

export interface UseAuthResponse {
    login:()=>void,
    logout:()=>void,
    isLogged:()=>boolean

}

const useAuth = ():UseAuthResponse=>{
    const islogin = useRecoilValue(AuthState)
    
    const login = useRecoilCallback(({set})=>()=>{

        set(AuthState,true)
    })
    const logout = useRecoilCallback(({reset})=>()=>{
        
        try{
            //await logoutAPi()
            console.log("logout")      
            reset(AuthState)
            

        }catch(err){
            console.log(err)

        }finally{
            
        }
        

    })
    const isLogged =()=> islogin


    return {login,logout,isLogged}

}

export default useAuth
export type AuthContext = ReturnType<typeof useAuth>;