import { createFileRoute } from '@tanstack/react-router'
import { MeetingEdit } from '../-components/MeetingEdit'

export const Route = createFileRoute('/_auth/meetings/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MeetingEdit editData={null} isAdd={true}></MeetingEdit>
  )
}
