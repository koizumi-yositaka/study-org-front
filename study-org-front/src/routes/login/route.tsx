import { createFileRoute } from '@tanstack/react-router'
import { TestButton } from '../../common/components/TestButton'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <TestButton variant={"danger"} className='dark:bg-red-600 bg-red-700 underline'>AAA</TestButton>
    <TestButton variant={"primary"} >BBB</TestButton>
    <TestButton variant={"secondary"} >CCC</TestButton>
    <TestButton variant={"secondary"} pending={true}>CCC</TestButton>
  </>
  )
}
