import { useLogin } from "@/api/endpoints/testGen";

export const useUserService=()=>{
    const callLogin=()=>{
          return useLogin({
            mutation:{
            onSuccess: (data) => {
            console.log('Login success:', data);
            },
            onError: (error) => {
            console.error('Login error:', error);
            },
        }});
    }

    return {callLogin}
}