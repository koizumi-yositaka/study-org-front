import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/settings')({
  component: RouteComponent,
    loader: () => {
    return {
      crumb: 'Settings',
    };
  },
})

function RouteComponent() {
  return 'Hello /_contents/settings!'
}
