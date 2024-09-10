"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className='h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground'>
      <p>Somethig went wrong</p>
      <Button variant={'secondary'} asChild>
        <Link href={'/'}>Go back home</Link>
      </Button>
    </div>
  )
}

export default Error
