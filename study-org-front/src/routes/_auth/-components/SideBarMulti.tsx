import { cva, VariantProps } from 'class-variance-authority'
import { AnchorHTMLAttributes, useState } from 'react'
import { SVGComponent } from '../../../common/components/SVGComponent'
import { SideBarObjType } from '../-types/type'
import { SideBarMenu } from './SideBarMenu'


interface SideBarMultiProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof sideBarMultiVariants>{ 
  label:string,
  svgKey:string,
  contents:SideBarObjType[],
  rightLabel?:string
}

const sideBarMultiVariants = cva("flex items-center p-2 rounded-lg group text-base transition duration-75",{
    
  variants:{
    variant:{
      normal: "text-gray-900 hover:bg-gray-100 hover:bg-[#D9E2E9]  w-full",
    }
  },
  defaultVariants:{
    variant:"normal"
  }
})

export const SideBarMulti = ({className,svgKey,variant,contents,label}:SideBarMultiProps) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const clickHandler =()=>{
        setIsOpen((prev) => !prev)
    }
  return ( 
<>
    <button onClick={clickHandler} type="button" className={sideBarMultiVariants({variant,className})}>
        <SVGComponent svgKey={svgKey} variant={"menu"}></SVGComponent>
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{label}</span>
        <svg 
            className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>
    {
        isOpen &&
        (
            <ul id="dropdown-example" className="py-2 space-y-2 transition-all duration-300 opacity-100 translate-y-0" >
                {
                    contents.map(x => {
                        return (
                            <li><SideBarMenu to={x.to} label={x.label} rightLabel={x.rightLabel} svgKey={""}></SideBarMenu></li>
                        )
                    })
                }
            </ul>
        )
    }



</>
      
  )
}
