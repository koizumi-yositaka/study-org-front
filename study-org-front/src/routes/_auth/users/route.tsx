import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/users')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Users',
    };
  },
})

function RouteComponent() {
  return 'Hello /_contents/Users!'
}
