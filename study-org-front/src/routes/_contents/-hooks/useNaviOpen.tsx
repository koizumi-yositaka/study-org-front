import { useRecoilCallback } from "recoil"
import { SideBarState } from "../-state/sideBarState"


export interface UseSideBarOpenResponse {
    open:()=>void,
    close:()=>void


}

const useSideBarOpen = ():UseSideBarOpenResponse=>{
    const open = useRecoilCallback(({set})=>()=>{
        set(SideBarState,true)
    })
    const close = useRecoilCallback(({set})=>async()=>{
        set(SideBarState,false)
    
    })


    return {open,close}

}

export default useSideBarOpen