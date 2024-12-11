

import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { HeaderComp } from './_auth/-components/HeaderComp';
import { LayoutA } from './-layout/layout-A';

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
        <LayoutA 
    header={<HeaderComp></HeaderComp>} 
    content={<Outlet></Outlet>}
    footer={ <div>Footer</div>}
    ></LayoutA>
    </>

  )
}

