import { ButtonHTMLAttributes, ReactNode } from 'react'
import {cva, VariantProps} from "class-variance-authority"
import { cn } from '../../utils/utils'
import { LoadingSpinner } from './LoadingSpinner'
import { Button } from '@/components/ui/button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants> {
  children:ReactNode,
  pending?:boolean
}

const buttonVariants = cva("rouded-md font-medium text-white shadow inline-flex items-center",{
  variants:{
    variant:{
      primary: "bg-sky-500 hover:bg-sky-600",
      secondary:"bg-slate-500 hover:bg-slate-600",
      danger : "bg-red-500 hover:bg-red-600"
    },
    size: {
      sm: "text-sm sx-4 py-2",
      md: "text-base px-6 py-4",
      lg: "text-xl px-8 py-10"
    }
  },
  defaultVariants:{
    variant:"primary",
    size:"md"
  }
})

export const TestButton = ({children,className,variant,size,pending,...props}:ButtonProps) => {
  return (
    <Button type="button" 
    // className={twMerge(
    //   "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
    //   className
    // )}
    className={cn(
        buttonVariants({variant,size,className}),
        {"bg-orange-500 ":pending})}
    disabled={pending}
    {...props}
    >

      {children}
      {pending && <LoadingSpinner className='ml-2'></LoadingSpinner>} 
    </Button>
  )
}

//使う側
//<TestButton className="">  tailwind-merge で統合

//CVA class variance authority
//https://cva.style/docs/getting-started/variants