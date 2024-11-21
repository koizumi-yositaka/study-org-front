import { cva, VariantProps } from "class-variance-authority"
import { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>,VariantProps<typeof labelVariants> {
    withSize?:|"sm"|"md"|"lg"
}

const labelVariants = cva("block mb-2 text-sm font-medium",{
  variants:{
    variant:{
      normal:"text-gray-900",
      dark:"text-white"
    }
  },
  defaultVariants:{
    variant:"normal"

  }
})
export const LabelComp = ({variant,className,children,...props}:LabelProps) => {
  return (
    <label className={labelVariants({variant,className})} {...props}>{children}</label>
  )
}
