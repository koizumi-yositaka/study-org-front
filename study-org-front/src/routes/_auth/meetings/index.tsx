import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/meetings/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Meetings',
    };
  },
})

function RouteComponent() {
  console.log("INDEX")
  return ''
}
