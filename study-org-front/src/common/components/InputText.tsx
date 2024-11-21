import {  InputHTMLAttributes } from 'react'

import {cva, VariantProps} from "class-variance-authority"

import React from 'react'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement>,VariantProps<typeof inputTextVariants> {
    withSize?:|"sm"|"md"|"lg",

}

const inputTextVariants = cva("border border-gray-300 block p-2.5 text-sm rounded-lg",{
  variants:{
    variant:{
      normal: "text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  ",
      dark:"dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    },
    withSize:{
      sm: "",
      md: "w-50",
      lg: "w-full"
    }
  },
  defaultVariants:{
    variant:"normal",
    withSize:"lg"

  }
})

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(({className,withSize,variant,...props},ref) => {
  return (
    <input type="text" className={inputTextVariants({variant,withSize,className})} {...props} ref={ref}/>
  )
});
InputText.displayName = 'Input';
export {InputText}

//使う側
//<TestButton className="">  tailwind-merge で統合

//CVA class variance authority
//https://cva.style/docs/getting-started/variants