

import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { HeaderComp } from './_auth/-components/HeaderComp';
import { LayoutA } from './-layout/layout-A';
import SideBar from './_auth/-components/SideBar';

export const Route = createFileRoute('/_auth')({
    component:RootComponent,
    beforeLoad: async ({ context }) => {
    const { isLogged } = context.auth;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },

})
function RootComponent() {
  
    console.log("読み込まれた")
  return (
<>
    <div className="h-svh max-h-svh">
        
        <div className="flex w-full">
            <div>
                <SideBar></SideBar>
            </div>
            <div className="flex flex-1 flex-col h-screen">
                <HeaderComp></HeaderComp>
                <div className="p-4 overflow-auto">
                    <Outlet></Outlet>      
                </div>
                
            </div>
           
        </div>
        
        
    </div>

    </>

  )
}

