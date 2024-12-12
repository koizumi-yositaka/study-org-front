import  { useCallback } from 'react'
import {
	  
	AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog"
import { ReactNode } from '@tanstack/react-router';
import { ModalType, ModalVisibilityState } from '@/state/modalState';
import { useRecoilState } from 'recoil';
import { AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog';


interface ModalWrapper {
	title:string,
    children:ReactNode,
	modalType:ModalType, //登録が必要
	cancelLabel?:string,
	execLabel?:string,
	cancelHandler?:()=>void,
	exeHandler?:()=>void
}
export const ModalWrapper = ({title,children,modalType,exeHandler,cancelHandler,cancelLabel,execLabel}:ModalWrapper) => {
	const [isShow,setIsShow] = useRecoilState(ModalVisibilityState(modalType))
	const cancel = useCallback(()=>{
		if(cancelHandler)cancelHandler()
	},[cancelHandler])
	const exec = useCallback(()=>{
		if(exeHandler)exeHandler()
	},[exeHandler])
  return (

    <AlertDialog open={isShow} onOpenChange={setIsShow}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {children}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
           <AlertDialogCancel onClick={cancel}>{cancelLabel || "Cancel"}</AlertDialogCancel>
          {execLabel !== undefined && <AlertDialogAction onClick={exec}>{execLabel}</AlertDialogAction>}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}
