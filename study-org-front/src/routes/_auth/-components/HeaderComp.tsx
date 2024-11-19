import { cva, VariantProps } from "class-variance-authority"
import { HTMLProps } from "react"
import { HeaderCompUl } from "./HeaderCompUl"
import { HeaderMenuLink, HeaderMenuLinkProps } from "./HeaderCompMenuLink"
import  HeaderMenuLinkWithDropDown  from "./HeaderCompMenuLinkWithDropDown"
import { LinkFactoryProps } from "./LinkFactory"


interface HeaderProps extends HTMLProps<HTMLDivElement>,VariantProps<typeof headerVariants> {
    message:string

}
const headerVariants = cva("",{
  variants:{
    variant:{
      normal: "bg-white border-gray-200 dark:bg-[#647687] dark:border-gray-700",
   

    },
  },
  defaultVariants:{
    variant:"normal"
  }
})
export interface HeaderMenuType extends LinkFactoryProps{
    level:string,
    label?:string,
    itemsInfo:HeaderMenuLinkProps[]
}
const headerInfo:HeaderMenuType[]=[
    {to:"/home",children:"XXX",level:"main",itemsInfo:[]},
    {to:"/home",children:"XXX",level:"main",itemsInfo:[]},
    {to:"/home",children:"XXX2",level:"main",itemsInfo:[]},
    {to:"/BBBB",label:"XXX",level:"dropdown",itemsInfo:[
        {to:"/CCCC",children:"XXX"},
        {to:"/settings",children:"XXX2"},
    ]},
]



// const contentsA=[
//     <HeaderMenuLink to={"/"} label="XXX" level={"main"}></HeaderMenuLink>,
//     <HeaderMenuLink to={"/"} label="XXX" level={"main"}></HeaderMenuLink>,
//     <HeaderMenuLinkWithDropDown to={"/"} label={"AAAA"} itemsInfo={}></HeaderMenuLinkWithDropDown>
// ]
//TODO useCallBack
const contents = headerInfo.map(x =>{
    switch(x.level){
        case "main":
            return <HeaderMenuLink to={x.to} level={x.level}>{x.children}</HeaderMenuLink>
        case "dropdown":
            return <HeaderMenuLinkWithDropDown label={x.label??""} to={x.to} itemsInfo={x.itemsInfo}></HeaderMenuLinkWithDropDown>
    }
})



export const HeaderComp = ({variant,className,message}:HeaderProps) => {
    
  return (

        <nav className={headerVariants({variant,className})}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {message}
            </div>
            <div className="hidden w-full md:block md:w-auto">
                <HeaderCompUl contents={contents}></HeaderCompUl>
            </div>
        </div>
        </nav>





  )
}

