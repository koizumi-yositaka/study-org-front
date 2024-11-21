import { cva, VariantProps } from 'class-variance-authority'
import React, { HTMLProps, ReactNode } from 'react'

interface InformationCardProps extends HTMLProps<HTMLDivElement> {
  message:string
}


export const InformationCard = ({message}:InformationCardProps) => {
  return (
    <div className="nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 border-blue-200 bg-blue-100 text-blue-900">
        <div className="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20" className="mt-1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z">
                </path>
            </svg>
        </div>
        <div className="w-full min-w-0 leading-7">
            <p className="mt-6 leading-7 first:mt-0">{message}</p>
        </div>
    </div>
  )
}
