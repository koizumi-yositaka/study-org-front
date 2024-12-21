import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
const validationSchema  = z.object(
{
//   /** 名前 */
//   nickname: z.string().min(1, { message: "名前を入力してください" }),
//   /** 年齢 */
//   age: z
//     .number({ message: "年齢を半角数字で入力してください" })
//     .int({ message: "年齢を整数で入力してください" })
//     .gte(12, { message: "年齢を12歳以上で入力してください" }),
  /** メールアドレス */
  email: z
      .string()
      .min(1, { message: "メールアドレスを入力してください" })
      .email({ message: "メールアドレスの形式で入力してください" })
      .max(30,{message: "正しく入力してください"})
  ,
  password: z.string().min(1, { message: "パスワードを入力してください" }),
}
);

export type UserInputs = z.infer<typeof validationSchema>;

export const useUserForm=(defaultvalue?:UserInputs | undefined)=>{
    const {register, setValue,formState:{errors,isValid}, handleSubmit} 
    = useForm<UserInputs>({mode: "onTouched",
        resolver: zodResolver(validationSchema), 
    })
    console.log(defaultvalue)
    return {
        register,
        setValue,
        errors,
        isValid,
        handleSubmit
    }

}


  

