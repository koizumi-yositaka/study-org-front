import { useToast } from '@/hooks/use-toast'
import { ReactNode } from '@tanstack/react-router'
import React, { Children } from 'react'
interface ContentCard{
    title:string,
    children:ReactNode
}

export const ContentCard = ({title,children}:ContentCard) => {

  return (
    <div>
    <p className='p-2'>{title}</p>
      <div className="min-h-36 w-full p-4 bg-white border border-gray-200 rounded-lg shadow">
        
        <div className="w-full min-w-0 leading-7">
            <p className="mt-6 leading-7 first:mt-0">{children}</p>
        </div>
    </div>

    </div>

  )
}