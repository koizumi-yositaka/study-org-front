import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_contents/Users!'
}