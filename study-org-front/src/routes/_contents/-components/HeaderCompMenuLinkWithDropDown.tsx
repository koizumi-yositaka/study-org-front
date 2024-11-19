import { LinkProps } from "@tanstack/react-router"
import { cva, VariantProps } from "class-variance-authority"
import { AnchorHTMLAttributes, ReactNode, useState } from "react"
import { HeaderMenuLink, HeaderMenuLinkProps } from "./HeaderCompMenuLink"

//trigerbutton
interface HeaderMenuLinkWithDropDownTriggerButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof headerMenuLinkWithDropDownTriggerButtonVariants>{ 
  label:string,
  isShow:boolean,
  toggle:React.Dispatch<React.SetStateAction<boolean>>

}
const headerMenuLinkWithDropDownTriggerButtonVariants = cva("flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto ",{
    
  variants:{
    variant:{
      normal: "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})
const HeaderMenuLinkWithDropDownTriggetButton = ({variant,label,isShow,toggle}:HeaderMenuLinkWithDropDownTriggerButtonProps)=>{
  const clickHandler = ()=>{
    toggle(prev => !prev)
  }
  return (
        <button onClick={clickHandler} id="dropdownNavbarLink" className={headerMenuLinkWithDropDownTriggerButtonVariants({variant})}>
          {label} 
          <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${
            isShow ? "rotate-180" : "rotate-0"
          }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
  )
}
//navbar dropdown
//trigerbutton
interface DropDownProps extends LinkProps, VariantProps<typeof dropDownWrapperVariants>{ 
  items:ReactNode[]
}
const dropDownWrapperVariants = cva("absolute z-10 font-normal  divide-y  rounded-lg shadow w-44 ",{
    
  variants:{
    variant:{
      normal: "bg-white divide-gray-100 dark:bg-gray-700 dark:divide-gray-600",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})
const dropDownVariants = cva("py-2 text-sm",{
    
  variants:{
    variant:{
      normal: "text-gray-700 dark:text-gray-400",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})
const DropDown = ({variant,items}:DropDownProps)=>{
  const clickHandler = ()=>{

  }
  return (
    <div id="dropdownNavbar" className={dropDownWrapperVariants({variant})}>
        <ul className={dropDownVariants({variant})}>
          {
            items.map(x => <li>{x}</li>)
          }
        </ul>
        <div className="py-1">
            <a onClick={clickHandler} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </div>
    </div>
  )
}


//wrapper
interface HeaderMenuLinkWithDropDownProps extends LinkProps, VariantProps<typeof headerMenuLinkWithDropDownVariants>{ 
  itemsInfo:HeaderMenuLinkProps[],
  label:string

}


const headerMenuLinkWithDropDownVariants = cva("",{
    
  variants:{
    variant:{
      normal: "text-white  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})

//navi dropdown menu

const HeaderMenuLinkWithDropDown = ({variant,label,itemsInfo}:HeaderMenuLinkWithDropDownProps) => {
  const items =itemsInfo.map(x => <HeaderMenuLink to={x.to} variant={"sub"} level={"sub"} >{x.children}</HeaderMenuLink>)
  const [isShow,setIsShow]=useState<boolean>(false)
  return ( 
  
      //  <Link to={to} className={headerMenuLinkWithDropDownVariants({variant,level,className})}>{label}</Link>
            <div className="relative">
                <HeaderMenuLinkWithDropDownTriggetButton label={label} variant={variant} isShow={isShow} toggle={setIsShow}/>
                {/* <!-- Dropdown menu --> */}
               {isShow && <DropDown variant={variant} items={items}/>}
            </div>
  )
}


export default HeaderMenuLinkWithDropDown