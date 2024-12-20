import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Controller } from 'react-hook-form'
interface ControlledCalendarProps {
  field: any;
  defaultValue?: Date | null;
}
export const CalendarPopup = ({field,defaultValue=null}:ControlledCalendarProps) => {

    return (
                  <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    defaultMonth={new Date(field.value)}
                    selected={new Date(field.value)}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
  )
}
