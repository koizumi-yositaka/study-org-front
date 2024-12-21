import { FormControl } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react'
interface TimeSelectorProps {
  field: any;
  defaultValue?: string | null;
}


const timeMinutes = ["00","15","30","45"]
const timeHours = ["09","10","11","12","13","14","15","16","17","18","19"]

export const TimeSelector = ({field,defaultValue=null}:TimeSelectorProps) => {
    const setHour=(value:string )=>{
        const minutes = field.value.substring(2, 4); // 現在の分部分
        const hours = value.padStart(2, "0"); // 時部分（ゼロ埋め）
        field.onChange(hours + minutes); // 結合して更新
    }
    const setMinute=(value:string  )=>{
        const hours = field.value.substring(0, 2); // 現在の時部分
        const minutes = value.padStart(2, "0"); // 分部分（ゼロ埋め）
        field.onChange(hours + minutes); // 結合して更新       
    }
  return (
    <div className="flex items-end gap-2">
        <div className="grid gap-1 text-center">
            <Label htmlFor="hours" className="text-xs">
            Hours
            </Label>
            <Select onValueChange={setHour} defaultValue={field.value.substring(0, 2)}>
            <FormControl>
                <SelectTrigger>
                <SelectValue placeholder="00" />
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {timeHours.map((hour)=>(
                    <SelectItem value={hour}>{hour}</SelectItem>
                ))}
            </SelectContent>
            </Select>
        </div>

        <div className="flex items-end gap-2">
            <div className="grid gap-1 text-center">
                <Label htmlFor="Minutes" className="text-xs">
                Minutes
                </Label>
                <Select onValueChange={setMinute} defaultValue={field.value.substring(2, 4)}>
                <FormControl>
                    <SelectTrigger>
                    <SelectValue placeholder="00" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {timeMinutes.map((minute)=>(
                        <SelectItem value={minute}>{minute}</SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
        </div>
    </div>
  )
}
