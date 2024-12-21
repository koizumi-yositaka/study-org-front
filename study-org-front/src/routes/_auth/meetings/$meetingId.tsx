import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetMeetingByIDSuspense } from '@/api/endpoints/testGen'
import { MeetingEdit } from './-components/MeetingEdit'
import { Suspense } from 'react'

export const Route = createFileRoute('/_auth/meetings/$meetingId')({
  component: () => (
    <Suspense fallback={<div>読み込み中...</div>}>
      <RouteComponent />
    </Suspense>
  ),
  loader: async ({ params,context }) => {
    if (isNaN(Number(params.meetingId))) {
      throw redirect({ to: '/meetings' })
    }
    return {
      crumb: `Meeting ${params.meetingId}`,
    };
  },
})

function RouteComponent() {
  const { meetingId } = Route.useParams()
  const {data} = useGetMeetingByIDSuspense(Number(meetingId))
  return (
      <MeetingEdit editData={data} ></MeetingEdit>
  )
}
