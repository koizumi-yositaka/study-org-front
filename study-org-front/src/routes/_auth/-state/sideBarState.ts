import { atom, DefaultValue, selector } from "recoil";

export const SideBarState = atom<boolean>({
    key:"display/isShoeSideBar",
    default:true
})

export const SideBarStateSelector = selector({
    key:"display/sideBarState",
    get:({get})=>{
        return get(SideBarState)
    },
    set:({set,reset},newval)=>{
        if(newval instanceof DefaultValue){
            reset(SideBarState)
            return 
        }
        set(SideBarState,newval)
    }
})