import { ReactNode } from "react"
import { SideBar } from "../-components/SideBar"
import { SideBarState } from "../-state/sideBarState"
import { useRecoilValue } from "recoil"
import useSideBarOpen from "../-hooks/useNaviOpen"
import { HeaderComp } from "../-components/HeaderComp"
import { Outlet } from "@tanstack/react-router"
import { useDesignContext } from "../../../context/designContext"


interface LayoutProps {
    header:ReactNode,
    content:ReactNode,
    footer:ReactNode
    
}


export const LayoutA = ({header,content,footer}:LayoutProps) => {
    const isSidebarOpen =useRecoilValue(SideBarState)
    const design=useDesignContext()
    const {open,close} = useSideBarOpen();
  return (
   
    <div className="h-svh max-h-svh">
        <div className="sticky top-0 w-full">
            {/* <div className="bg-[#647687] py-5">
                
            </div> */}
            <HeaderComp message="Hello" variant={design.variant} ></HeaderComp>
        </div>
        <div className="flex h-svh max-h-svh">
        {
           isSidebarOpen && <SideBar></SideBar>
        }
        <div className="h-full flex-1">

            
            <div className="h-full">
                <Outlet/>
            </div>
        
        </div>
        </div>

    </div>


  )
}
