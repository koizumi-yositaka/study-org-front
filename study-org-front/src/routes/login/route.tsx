import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { TestButton } from '../../common/components/TestButton'
import useAuth from '../-hooks/useAuth'
import { useRecoilValue } from 'recoil';
import { AuthSelector } from '../../state/auth';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const {login} = useAuth();
  const navi =useNavigate()
  const auth =useRecoilValue(AuthSelector)
  const clickHandler=()=>{
    login()
    navi({"to":"/home"})
  }
  return (
  <>
    <h1 className="text-3xl font-bold underline">
      Hello world!{auth?"AAA":"CCC"}
    </h1>
    <Link to="/home">AAA</Link>
    <TestButton onClick={clickHandler} variant={"danger"}>login</TestButton>

  </>
  )
}
