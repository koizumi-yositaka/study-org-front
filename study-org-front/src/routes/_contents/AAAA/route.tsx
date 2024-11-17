import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_contents/AAAA')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
            <>
            <h1>hoge</h1>
            <p className="text-blue-600 font-bold text-5xl ">
              Hello Tailwind
            </p>
        </>
  )
}
