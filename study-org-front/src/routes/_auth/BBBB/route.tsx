import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InformationCard } from '../../../common/components/InformationCard'
import { Card } from '../../../common/components/Card'
import { ModalWrapper } from '@/common/components/ModalWrapper'

import { useSetRecoilState } from 'recoil'
import { ModalVisibilityState } from '@/state/modalState'
import { TestButton } from '@/common/components/TestButton'

export const Route = createFileRoute('/_auth/BBBB')({
  component: RouteComponent,
})

function RouteComponent() {
  const setOpen=useSetRecoilState(ModalVisibilityState("error"))
  const clickHandler= ()=>{
    setOpen(true)
  }
  return (
    <>
        <InformationCard message='AAAAAAAAAAAAAA'></InformationCard>
        <TestButton onClick={clickHandler} >OPEN</TestButton>
        <ModalWrapper title='AAAAAAA' modalType='error'><Card header={<>aaaa</>} content={"Content"} ></Card></ModalWrapper>
        
    </>

)
}
