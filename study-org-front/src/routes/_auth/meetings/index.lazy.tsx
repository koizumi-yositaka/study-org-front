import { createLazyFileRoute } from '@tanstack/react-router'
import { useSearchMeetingsSuspense } from '@/api/endpoints/testGen'
import { MeetingList } from './-components/MeetingList'


export const Route = createLazyFileRoute('/_auth/meetings/')({
  component: RouteComponent,
  errorComponent: () => <div>AAA</div>,
  pendingComponent: () => <div>load</div>,
})

function RouteComponent() {
  const { data, isFetching } = useSearchMeetingsSuspense()

  return isFetching ? (
    'sdsd'
  ) : (
    <>
      <MeetingList meetings={data}></MeetingList>
      
    </>
  )
}
