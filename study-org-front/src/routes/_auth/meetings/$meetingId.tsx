import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetMeetingByIDSuspense,useGetMeetingByID } from '@/api/endpoints/testGen'
import { MeetingEdit } from './-components/MeetingEdit'
import { Suspense } from 'react'

export const Route = createFileRoute('/_auth/meetings/$meetingId')({
  component: () => (
    <Suspense fallback={<div>読み込み中...</div>}>
      <RouteComponent />
    </Suspense>
  ),
  loader: async ({ params,context }) => {
    console.log('param', params)
    if (isNaN(Number(params.meetingId))) {
      alert('Invalid Pokemon ID')
      throw redirect({ to: '/meetings' })
    }
  },
})

function RouteComponent() {

  const { meetingId } = Route.useParams()
  const {data} = useGetMeetingByIDSuspense(Number(meetingId))
  return (
    <>
      <MeetingEdit editData={data} ></MeetingEdit>    
    </>

  )
}
