import { DefaultValue, selectorFamily } from "recoil"
import { atomFamily } from "recoil"

export type ModalType=
| "confirm"
| "error"


export const ModalVisibilityState = atomFamily<boolean,ModalType>({
    key:"ModalVisibilityState",
    default:false  
})

export const stateModal=selectorFamily<boolean,ModalType>({
    key:"modal/state",
    get:(modalType)=>({get})=>{
        return get(ModalVisibilityState(modalType))
    },
    set:(modalType)=>({set,reset},newVal)=>{
        if(newVal instanceof DefaultValue){
            reset(ModalVisibilityState(modalType))
            return
        }
        set(ModalVisibilityState(modalType),newVal)
    }
})