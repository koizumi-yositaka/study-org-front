import * as React from 'react'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    beforeLoad:()=>{
        throw redirect({
            "to":"/login"
        })
    },
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /!'
}
