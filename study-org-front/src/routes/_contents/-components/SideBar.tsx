import React, { HTMLProps } from 'react'
import { SideBarMenu } from './SideBarMenu'
import { cva, VariantProps } from 'class-variance-authority'
import { SideBarObjType } from '../-types/type'
import { SideBarMulti } from './SideBarMulti'
interface SideBarProps extends HTMLProps<HTMLDivElement>,VariantProps<typeof sideBarVariants> {


}
const sideBarVariants = cva("transition-all duration-300 ease-in-out flex-shrink-0 w-60",{
  variants:{
    variant:{
      normal: "bg-gray-800 text-white",
   

    },
  },
  defaultVariants:{
    variant:"normal"
  }
})
const sideBarULWrapperVariants = cva("h-full px-3 p-4 overflow-y-auto ",{
  variants:{
    variant:{
      normal: "bg-gray-50 dark:bg-gray-800 bg-white",

    }
  },
  defaultVariants:{
    variant:"normal"
  }
})

//utilsのsvgPathで画像名を追加

//今後はサーバーサイドで管理かな？
const SideBatObj:SideBarObjType[]=[
   {
      to:"/AAAA",
      label:"KANBAN",
      svgKey:"KANBAN",
      rightLabel:"AA"
   },
   {
      to:"/BBBB",
      label:"USERS",
      svgKey:"USERS",
      rightLabel:""
   },
   {
      to:"/",
      label:"USERS333",
      svgKey:"USERS",
      rightLabel:"",
      contents:[
         {
            to:"/AAAA",
            label:"KANBAN2",
            svgKey:"KANBAN",
            rightLabel:"AA"
         },
         {
            to:"/BBBB",
            label:"USERS2",
            svgKey:"USERS",
            rightLabel:""
         },
      ]
   }
]

export const SideBar = ({className,variant}:SideBarProps) => {
   console.log(SideBatObj)
  return (


<div className={sideBarVariants({className,variant})}>
    <h5 className=" px-5 p-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
   <div className={sideBarULWrapperVariants({className,variant})} >
      <ul className="space-y-2 font-medium">

         {
            SideBatObj.map(x => {
               console.log(x,x.contents && x.contents?.length > 0 )
               return (
                  <li key={x.label}>
                     {
                     x.contents && x.contents?.length > 0 ?
                     <SideBarMulti label={x.label} rightLabel={x.rightLabel} svgKey={x.svgKey} contents={x.contents}></SideBarMulti>
                     : <SideBarMenu to={x.to} label={x.label} rightLabel={x.rightLabel} svgKey={x.svgKey}></SideBarMenu>
                     }

                  </li>

               )
                
            })
         }
       
         {/* <li>
            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
         </li> */}

      </ul>
   </div>
</div>

  )
}
