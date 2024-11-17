import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRecoilValue } from 'recoil';
import { AuthSelector} from './state/auth';
const queryClient = new QueryClient()
export type MyRouterContext= {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: boolean
}
// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}


function App() {
const auth =useRecoilValue(AuthSelector)
  return (

<Suspense fallback={<div>Loading...</div>}>
<ErrorBoundary fallback={<div>Error...</div>}>
<QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false} />
<RouterProvider context={auth} router={router} defaultNotFoundComponent={()=><h1>見つからず</h1>}/>
</QueryClientProvider>
</ErrorBoundary>

</Suspense>
     
  )
}

export default App