import {  LinkProps } from "@tanstack/react-router"
import { cva, VariantProps } from "class-variance-authority"
import { LinkFactory } from "./LinkFactory"


export interface HeaderMenuLinkProps extends  LinkProps,VariantProps<typeof headerMenuLinkVariants>{ 
  className?:string

}

const headerMenuLinkVariants = cva("",{
    //block px-4 py-2 
  variants:{
    variant:{

      normal: "text-white  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent",
      sub:"hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    },
    level:{
        main:"block py-2 px-3 rounded",
        sub:"block px-4 py-2"
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})

export const HeaderMenuLink = ({variant,level,className,to,children}:HeaderMenuLinkProps) => {
  //return linkFactory({to,className:headerMenuLinkVariants({variant,level,className}),children,isDummy})
  return (
    <LinkFactory to={to} className={headerMenuLinkVariants({variant,level,className})}>
      {children}
    </LinkFactory>
  )
}
