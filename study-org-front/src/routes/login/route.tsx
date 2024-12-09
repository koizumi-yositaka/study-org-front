import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { TestButton } from '../../common/components/TestButton'
import useAuth from '../-hooks/useAuth'
import { LabelAndErrorMsgWrapper } from '../_auth/-components/LabelAndErrorMsgWrapper';
import { InputText } from '../../common/components/InputText';
import { UserInputs, useUserForm } from '../-hooks/useUserForm';
import { usePostUserLogin } from '@/api/endpoints/testGen';
 
export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  //login状態
  const {login,isLogged} = useAuth();
  const {mutateAsync,data,isPending} = usePostUserLogin({
    mutation:{
    onSuccess: (data) => {
      console.log('Login success:', data);
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  }});

  //const {formRender} = useCustomForm({validationSchema,formSchema})
  const navi =useNavigate()
  const {        
    register,
        setValue,
        errors,
        isValid,
        handleSubmit
    }=useUserForm();
 
  const clickHandler=async (data:UserInputs)=>{
    console.log(data)
    await mutateAsync({ data: { email: 'admin@example.com', password: 'pass' } });
    login()
    navi({"to":"/home"})
  }
  return (
  <div className='p-4'>
    {/* <TestButton onClick={clickHandler} variant={"danger"}>login</TestButton> */}
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
    <h1 className="text-3xl font-bold underline">
      Hello world!{isLogged()?"ログイン":"アウト"}
    </h1>     
    {isPending ? <>LOGIN中</>:
      <form className='space-y-6' onSubmit={handleSubmit(clickHandler)}>
        <LabelAndErrorMsgWrapper variant={"normal"} label={"email"} errorElem={errors.email ?errors.email.message:""}>
          <InputText {...register("email")} placeholder='name'></InputText>
        </LabelAndErrorMsgWrapper>
        <LabelAndErrorMsgWrapper variant={"normal"} label={"password"} errorElem={errors.password ?errors.password.message:""}>
          <InputText {...register("password")} placeholder='password'></InputText>
        </LabelAndErrorMsgWrapper>
        <TestButton disabled={!isValid}  type={"submit"} variant={"danger"}>login</TestButton>
      </form>}

    </div>

  </div>
  )
}

