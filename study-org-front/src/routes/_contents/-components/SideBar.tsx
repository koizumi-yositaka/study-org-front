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
      normal: "bg-[#F7F9FA] text-white",
   

    },
  },
  defaultVariants:{
    variant:"normal"
  }
})
const sideBarULWrapperVariants = cva("h-full px-3 p-4 overflow-y-auto ",{
  variants:{
    variant:{
      normal: "bg-white bg-[#F7F9FA] ",

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


      </ul>
   </div>
</div>

  )
}
