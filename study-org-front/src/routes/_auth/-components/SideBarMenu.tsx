import { Link } from '@tanstack/react-router'
import { cva, VariantProps } from 'class-variance-authority'
import React, { AnchorHTMLAttributes } from 'react'
import { SVGComponent } from '../../../common/components/SVGComponent'


interface SideBarProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof sideBarVariants>{ 
  to:string,
  label:string,
  svgKey:string,
  rightLabel?:string
}

const sideBarVariants = cva("flex items-center p-2 rounded-lg group",{
    
  variants:{
    variant:{
      normal: "text-gray-900 hover:bg-[#D9E2E9] ",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})

export const SideBarMenu = ({className,variant,to,label,rightLabel,svgKey}:SideBarProps) => {
  return ( 

    <Link to={to} className={sideBarVariants({variant,className})} activeProps={{ className: 'underline' }}>
      
    
      <SVGComponent svgKey={svgKey} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"/>
      <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
      {!!rightLabel && <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{rightLabel}
        </span>} 
    </Link>
  //       <LinkFactory to={to} className={sideBarVariants({variant,className})} activeProps={{ className: 'underline' }}>
      
  //     <SVGComponent svgKey={svgKey} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"/>
  //     <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
  //     {!!rightLabel && <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{rightLabel}
  //       </span>} 
  // </LinkFactory>
  )
}
