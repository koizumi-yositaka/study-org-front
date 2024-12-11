import { atom, DefaultValue, selector } from "recoil";



interface UserInfo {
    email:string, 
    role:string, //TODO ENUM
    isLogin:boolean
}


export const AuthState = atom<boolean>({
    key:"auth/islogin",
    default:false
})

export const RoleState = atom<string>({
    key:"auth/role",
    default:"C"
})

export const LoginEmailState = atom<string>({
    key:"auth/email",
    default:""
})

export const AuthSelector = selector({
    key:"auth/state",
    get:({get})=>{
        return {
            isLogin:get(AuthState),
            role:get(RoleState),
            loginEmail:get(LoginEmailState)
        }
    },
    set:({set,reset},newval)=>{
        if(newval instanceof DefaultValue){
            reset(AuthState)
            reset(RoleState)
            reset(LoginEmailState)
            return 
        } 
        const {isLogin,role,loginEmail}=newval
        set(AuthState,isLogin)
        set(RoleState,role)
        set(LoginEmailState,loginEmail)

        //TODO set処理

    }
})