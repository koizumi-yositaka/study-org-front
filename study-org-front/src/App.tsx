import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DesignContext } from './context/designContext';
import useAuth from './routes/-hooks/useAuth';
import { Toaster } from './components/ui/toaster';

const queryClient = new QueryClient()
// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider、
    queryClient: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}


function App() {
const auth = useAuth()
const defaultDesign:DesignContext={
    variant:"normal",
    isDummy:false
}
const [design]=useState<DesignContext>(defaultDesign)
console.log("here",design)
  return (
<DesignContext.Provider value={design}>

<QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false} />
<RouterProvider context={{auth,queryClient}} router={router} defaultNotFoundComponent={()=><h1>見つからず</h1>}/>
<Toaster/>
</QueryClientProvider>

</DesignContext.Provider>
  )
}

export default App
