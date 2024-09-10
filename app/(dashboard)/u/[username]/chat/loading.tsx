import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { ToggleCardSkeleton } from './_components/ToggleCard'

const CahtLoading = () => {
  return (
    <div className='p-6 space-y-4'>
      <Skeleton className='h-10 w-[200px]' />
      <div className='space-y-4'>
        <ToggleCardSkeleton />
        <ToggleCardSkeleton />
        <ToggleCardSkeleton />
      </div>
    </div>
  )
}

export default CahtLoading
