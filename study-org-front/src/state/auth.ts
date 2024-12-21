import { atom, DefaultValue, selector } from "recoil";





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
export const LoginUserIdState = atom<number>({
    key:"auth/userID",
    default:0
})

export const AuthSelector = selector({
    key:"auth/state",
    get:({get})=>{
        return {
            isLogin:get(AuthState),
            role:get(RoleState),
            loginEmail:get(LoginEmailState),
            userId:get(LoginUserIdState)
        }
    },
    set:({set,reset},newval)=>{
        if(newval instanceof DefaultValue){
            reset(AuthState)
            reset(RoleState)
            reset(LoginEmailState)
            reset(LoginUserIdState)
            return 
        } 
        const {isLogin,role,loginEmail,userId}=newval
        set(AuthState,isLogin)
        set(RoleState,role)
        set(LoginEmailState,loginEmail)
        set(LoginUserIdState,userId)

        //TODO set処理

    }
})