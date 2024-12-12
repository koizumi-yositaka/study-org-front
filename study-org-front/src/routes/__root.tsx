import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { AuthContext } from './-hooks/useAuth';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent
})



type RouterContext = {
  auth: AuthContext;
};

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}


