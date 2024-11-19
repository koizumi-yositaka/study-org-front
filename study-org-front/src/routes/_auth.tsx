import * as React from 'react'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { LayoutA } from './_auth/-layout/layout-A';
import { HeaderComp } from './_auth/-components/HeaderComp';

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
    <LayoutA 
    header={<HeaderComp message='AAAA'></HeaderComp>} 
    content={<Outlet></Outlet>}
    footer={ <div>Footer</div>}
    ></LayoutA>
  )
}

