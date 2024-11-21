import { ReactNode } from "react"
import SideBar from "../-components/SideBar"
import { useRecoilValue } from "recoil"
import { HeaderComp } from "../-components/HeaderComp"
import { Outlet } from "@tanstack/react-router"
import { useDesignContext } from "../../../context/designContext"


interface LayoutProps {
    header:ReactNode,
    content:ReactNode,
    footer:ReactNode
    
}


export const LayoutA = ({header,content,footer}:LayoutProps) => {
    const design=useDesignContext()
  return (
   
    <div className="h-svh max-h-svh">
        
        <div className="flex w-full">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="flex flex-1 flex-col h-screen">
                <HeaderComp></HeaderComp>
                <div className="p-4 overflow-auto">
                    <Outlet/>       
                </div>
                
            </div>
        </div>
        
        
    </div>


  )
}
