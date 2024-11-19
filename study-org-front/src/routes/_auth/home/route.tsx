import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <p className="text-blue-600 font-bold text-5xl ">Hello Tailwind</p>
    </>
  )
}
