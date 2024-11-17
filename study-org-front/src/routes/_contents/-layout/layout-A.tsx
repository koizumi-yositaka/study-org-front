import { ReactNode } from "react"
import { SideBar } from "../-components/SideBar"
import { SideBarState } from "../-state/sideBarState"
import { useRecoilValue } from "recoil"
import useSideBarOpen from "../-hooks/useNaviOpen"


interface LayoutProps {
    header:ReactNode,
    content:ReactNode,
    footer:ReactNode
    
}


export const LayoutA = ({header,content,footer}:LayoutProps) => {
    const isSidebarOpen =useRecoilValue(SideBarState)
    const {open,close} = useSideBarOpen();
  return (
   
    <div className="h-svh max-h-svh">
        <div className="sticky top-0 w-full">
            <div className="bg-orange-500 py-2">
                <h1 className="text-center text-xl">Header</h1>
            </div>
        </div>
        <div className="flex h-svh max-h-svh">
        {
           isSidebarOpen && <SideBar></SideBar>
        }
        <div className="h-full flex-1">

            
            <div>
            content
            </div>
            
            <div>
            footer
            </div>
        </div>
        </div>

    </div>


  )
}
