import { createFileRoute, Link } from '@tanstack/react-router'
import { TestButton } from '../../common/components/TestButton'
import useAuth from '../-hooks/useAuth'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const {login} = useAuth();
  const clickHandler=()=>{
    login()
  }
  return (
  <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Link to="/AAAA">AAA</Link>
    <TestButton onClick={clickHandler} variant={"danger"}>login</TestButton>

  </>
  )
}
