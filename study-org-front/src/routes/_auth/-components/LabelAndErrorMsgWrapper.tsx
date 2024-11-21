import { cva, VariantProps } from "class-variance-authority"
import { ReactNode } from "react"
import { LabelComp } from "../../../common/components/LabelComp"

interface LabelAndErrorMsgWrapperProps extends VariantProps<typeof inputTextVariants> {
    children:ReactNode,
    label:ReactNode,
    errorElem?:ReactNode
}

const inputTextVariants = cva("",{
  variants:{
    variant:{
      normal: "",
      dark:""
    },
    withSize:{
      sm: "",
      md: "",
      lg: ""
    }
  }
})

export const LabelAndErrorMsgWrapper = ({children,variant,label,errorElem}:LabelAndErrorMsgWrapperProps) => {
  return (
        <div>
            <LabelComp variant={variant}>{label}</LabelComp>   
            {children}
            {errorElem && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errorElem}</p>}
        </div>
  )
}
