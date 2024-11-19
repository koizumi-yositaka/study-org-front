import { cva, VariantProps } from 'class-variance-authority'
import { HTMLProps, ReactNode } from 'react'

interface HeaderUlProps extends HTMLProps<HTMLElement>,VariantProps<typeof headerUlVariants> {

    contents:ReactNode[]
}
const headerUlVariants = cva("flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0",{
  variants:{
    variant:{
      normal: "border-gray-100 ",
   

    },
  },
  defaultVariants:{
    variant:"normal"
  }
})


export const HeaderCompUl = ({variant,className,contents}:HeaderUlProps) => {
  return (
    <ul className={headerUlVariants({variant,className})}>

        {
            contents.map(x=> <li>{x}</li>)

        }

      </ul>
  )
}
