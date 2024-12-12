import { createFileRoute } from '@tanstack/react-router'
import { ContentCard } from '@/common/components/ContentCard'
import { TestButton } from '@/common/components/TestButton'


export const Route = createFileRoute('/_auth/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='space-y-6'>
      <ContentCard title={"近くの予定"}> </ContentCard>
      <ContentCard title={"明日の予定"}> </ContentCard>
      <ContentCard title={"明日の予定"}> </ContentCard>
      <TestButton>予定の追加</TestButton>
    </div>
    


  )
}
