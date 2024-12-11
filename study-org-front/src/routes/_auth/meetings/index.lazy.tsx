import * as React from 'react'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useGetMeetingSuspense } from '@/api/endpoints/testGen'
import { MeetingList } from './-components/MeetingList'
import { Outdent } from 'lucide-react'

export const Route = createLazyFileRoute('/_auth/meetings/')({
  component: RouteComponent,
  errorComponent: () => <div>AAA</div>,
  pendingComponent: () => <div>load</div>,
})

function RouteComponent() {
  const { data, error, isFetching } = useGetMeetingSuspense()

  return isFetching ? (
    'sdsd'
  ) : (
    <>
      <MeetingList meetings={data}></MeetingList>
    </>
  )
}
