import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useGetMeetingSuspense } from '@/api/endpoints/testGen';

export const Route = createFileRoute('/_auth/meetings')({
    loader: () => {
    
    const { data, error, isLoading } = useGetMeetingSuspense();
    console.log('AAABBB',data)
  },
})
