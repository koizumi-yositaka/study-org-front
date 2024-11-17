import { cva, VariantProps } from "class-variance-authority"
import { SVGProps } from "react"
import { pathPair } from "../../utils/svgPaths"

interface SvgCompProps extends SVGProps<SVGSVGElement>, VariantProps<typeof svgVariants>{ 
  svgKey:string
}

const svgVariants = cva("",{
  variants:{
    variant:{
      nothing:"",
      menu: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
    }
  },
  defaultVariants:{
    variant:"menu",
  }
})
export const SVGComponent = ({className,svgKey,variant,...props}:SvgCompProps) => {
  const d = svgKey in pathPair?pathPair[svgKey]:""
  return (
    <svg className={svgVariants({variant,className})} {...props}>
      <path d={d}/>
    </svg>
  )
}
