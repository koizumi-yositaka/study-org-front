import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
const validationSchema  = z.object(
{
  title: z.string().min(1,{message:"タイトルは必須"}).max(500,{message:"タイトルは最大500"}),
  detail: z.string().min(1, { message: "パスワードを入力してください" }),
  openerId:z.coerce.number().min(1, "１以上の数値を指定してください。"),
  eventDate:z.string().date(),
  startTime:z.string().length(4),
  endTime:z.string().length(4),
  
}
);

export type MeetingInputs = z.infer<typeof validationSchema>;
const defaultVal:MeetingInputs={
  title:"",
  detail:"",
  openerId:0,
  eventDate:"",
  startTime:"",
  endTime:""
}

export const useMeetingForm=(defaultvalue?:MeetingInputs | undefined)=>{
    const form= useForm<MeetingInputs>({
        mode: "onTouched",
        defaultValues:defaultvalue || defaultVal,
        resolver: zodResolver(validationSchema), 
    })
    return form
}


  

