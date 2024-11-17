import * as React from 'react'
import { createFileRoute, createRootRouteWithContext, Outlet, redirect } from '@tanstack/react-router'
import { MyRouterContext } from '../../App'

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  beforeLoad:({context,location})=>{
    if(context.auth){
      console.log("redirect")
        throw redirect({
            "to":"/login"
        })
    }
  }
})

function RootComponent() {
    console.log("読み込まれた")
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
