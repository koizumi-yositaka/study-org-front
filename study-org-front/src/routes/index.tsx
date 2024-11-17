import * as React from 'react'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { TestButton } from '../common/components/TestButton'

export const Route = createFileRoute('/')({
    beforeLoad:()=>{
        throw redirect({
            "to":"/login"
        })
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <TestButton>AAA</TestButton>
}
