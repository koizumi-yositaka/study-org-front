
import { InputText } from '@/common/components/InputText'

import { MeetingInputs, useMeetingForm } from '@/routes/-hooks/useMeetingForm'
import { useMeetingService } from '@/service/meeting/useMeetingService'
import { CalendarPopup } from '@/common/components/CalendarPopup'
import { TestButton } from '@/common/components/TestButton'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { MeetingForm } from '@/api/model'
import { format } from 'date-fns'
import { TimeSelector } from '@/common/components/TimeSelector'
import { LoginUserIdState } from '@/state/auth'
import { useRecoilValue } from 'recoil'
import { Link } from '@tanstack/react-router'

interface MeetingEditProp{
    editData:MeetingForm | null,
    isAdd?:boolean
}

export const MeetingEdit = ({editData,isAdd=false}:MeetingEditProp) => {
    const userID = useRecoilValue(LoginUserIdState) 
    const defaultObj: MeetingInputs= {
        title:editData?.title || "",
        detail:editData?.detail || "",
        openerId:userID ,
        eventDate:editData?.eventDate || "2023-09-12",
        startTime:editData?.startTime || "0900",
        endTime:editData?.endTime || "0900"
    }
    const form=useMeetingForm(defaultObj);  
    const {callReserveMeeting} = useMeetingService()
    const {isPending,mutateAsync}=callReserveMeeting()
    const clickHandler =async (data:MeetingForm,event?: React.BaseSyntheticEvent)=>{
        event?.preventDefault();
        const result = await mutateAsync({data});
    }

    
  return (
  <div className='p-4'>
    <Link to={"/meetings"}>戻る</Link>
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">

    <Form {...form}>
      <form onSubmit={form.handleSubmit(clickHandler)} className="space-y-8">


        <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel>title</FormLabel>
                <FormControl>
                    <InputText placeholder="shadcn" {...field}/>
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
                <FormItem>
                <FormLabel>detail</FormLabel>
                <FormControl>
                    <InputText placeholder="shadcn" {...field}/>
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        <FormField
          control={form.control}
          name="eventDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
                <CalendarPopup field={{...field,
                        value: field.value ? new Date(field.value) : undefined, 
                        onChange: (date: Date | undefined) => {
                            field.onChange(date ? format(date, "yyyy-MM-dd") : "")
                        }
                }}
              />
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>開始時刻</FormLabel>
                    <TimeSelector field={field}/>
                    <FormMessage />
                </FormItem>
            )}
            />
        <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>終了時刻</FormLabel>
                    <TimeSelector field={field}/>
                    <FormMessage />
                </FormItem>
            )}
            />
            <TestButton pending={isPending} disabled={!form.formState.isValid}  type={"submit"} variant={"danger"}>login</TestButton>
      </form>
    </Form>
    </div>
  </div>
  )
}