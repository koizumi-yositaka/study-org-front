import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/meetings/')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log("INDEX")
  return ''
}
