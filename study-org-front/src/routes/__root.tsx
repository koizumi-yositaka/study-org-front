import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { AuthContext } from './-hooks/useAuth';
import { QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent
})



type RouterContext = {
  auth: AuthContext;
  queryClient:QueryClient;
};

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}


