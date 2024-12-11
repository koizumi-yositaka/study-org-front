import { useRecoilCallback, useRecoilValue } from "recoil"
import { AuthState, LoginEmailState, RoleState } from "../../state/auth"
import { redirect, useNavigate } from "@tanstack/react-router"
import { UserResponseDTO } from "@/api/model"

export interface UseAuthResponse {
    login:(data:UserResponseDTO)=>void,
    logout:()=>void,
    isLogged:()=>boolean

}

const useAuth = ():UseAuthResponse=>{
    const islogin = useRecoilValue(AuthState)
    
    const login = useRecoilCallback(({set})=>(data:UserResponseDTO)=>{

        set(AuthState,true)
        set(LoginEmailState,data.email)
        set(RoleState,data.role)
    })
    const logout = useRecoilCallback(({reset})=>()=>{
        
        try{
            //await logoutAPi()
            console.log("logout")      
            reset(AuthState)
            reset(LoginEmailState)
            reset(RoleState)
            

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