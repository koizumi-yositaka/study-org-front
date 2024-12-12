import { LabelAndErrorMsgWrapper } from '../../-components/LabelAndErrorMsgWrapper'
import { InputText } from '@/common/components/InputText'
import { Textarea } from '@/components/ui/textarea'
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { cn } from '@/utils/utils'

export const MeetingEdit = () => {
  return (
  <div className='p-4'>
    {/* <TestButton onClick={clickHandler} variant={"danger"}>login</TestButton> */}
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
   
      <form className='space-y-6'>
        <LabelAndErrorMsgWrapper variant={"normal"} label={"email"} errorElem={""}>
          <InputText placeholder='name'></InputText>
        </LabelAndErrorMsgWrapper>
        <LabelAndErrorMsgWrapper variant={"normal"} label={"email"} errorElem={""}>
          <Textarea placeholder='name' maxLength={500} className='min-h-48'></Textarea>
        </LabelAndErrorMsgWrapper>
        <Popover>
            <PopoverContent side='top' className="w-auto p-0" align="end">
                <Calendar
                mode="single"
                disabled={(date) =>
                    date < new Date()
                }
                initialFocus
                />
            </PopoverContent>
            <PopoverTrigger asChild>
     
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                 "text-muted-foreground"
                    )}
                >

                    <span>Pick a date</span>
               
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
 
            </PopoverTrigger>

            </Popover>
      </form>

    </div>

  </div>
  )
}
