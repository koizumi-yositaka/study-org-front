import { createFileRoute, redirect } from '@tanstack/react-router'
import { useGetMeetingByIDSuspense } from '@/api/endpoints/testGen'
import { MeetingEdit } from './-components/MeetingEdit'

export const Route = createFileRoute('/_auth/meetings/$meetingId')({
  component: RouteComponent,
  loader: async ({ params }) => {
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

  console.log(data)
  return (
    <>
      {/* <p>id:{data.id}</p>
      <p>title:{data.title}</p> */}
      <MeetingEdit>
        
      </MeetingEdit>
    </>

  )
}
