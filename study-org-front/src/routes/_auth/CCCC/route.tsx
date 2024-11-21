import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export const Route = createFileRoute('/_auth/CCCC')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" >
      <p className='p-2'>あなた</p>
      <div className="min-h-60 nextra-callout overflow-x-auto flex rounded-lg border p-2 border-blue-200 bg-gray-100 text-blue-900">
        
        <div className="w-full min-w-0 leading-7">
            <p className="mt-6 leading-7 first:mt-0">AAAAA</p>
        </div>
    </div>
  </TabsContent>
  <TabsContent value="password">
          <p className='p-2'>わたし</p>
      <div className="min-h-60 nextra-callout overflow-x-auto flex rounded-lg border p-2 border-blue-200 bg-gray-100 text-blue-900">
        
        <div className="w-full min-w-0 leading-7">
            <p className="mt-6 leading-7 first:mt-0">BBBBBB</p>
        </div>
    </div>
  </TabsContent>
</Tabs>
  )
}
