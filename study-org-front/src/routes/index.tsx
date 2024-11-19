import * as React from 'react'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { TestButton } from '../common/components/TestButton'

export const Route = createFileRoute('/')({
    beforeLoad:()=>{
        throw redirect({
            "to":"/login"
        })
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <Link to={"/home"}>AAA</Link>
}

// import * as React from 'react'
// import { createFileRoute, createRootRouteWithContext, Outlet, redirect } from '@tanstack/react-router'

// import { LayoutA } from './-layout/layout-A'
// import { HeaderComp } from './-components/HeaderComp'
// import { AuthContext } from '../-hooks/useAuth';
// type RouterContext = {
//   auth: AuthContext;
// };
// export const Route = createRootRouteWithContext<>()({
//   component: RootComponent,
//   beforeLoad:({context,location})=>{
//     console.log("bewforeload",context)
//     const {isLogged}=context.auth
//     if(!isLogged()){
//       console.log("redirect")
//         throw redirect({
//             "to":"/login"
//         })
//     }
//   }
// })

// function RootComponent() {
//     console.log("読み込まれた")
//   return (
//     <LayoutA 
//     header={<HeaderComp message='AAAA'></HeaderComp>} 
//     content={<Outlet></Outlet>}
//     footer={ <div>Footer</div>}
//     ></LayoutA>
//   )
// }
