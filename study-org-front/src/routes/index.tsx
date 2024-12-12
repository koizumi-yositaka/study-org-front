
import { createFileRoute, redirect } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
    beforeLoad:()=>{
        throw redirect({
            "to":"/login"
        })
    }
})


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
