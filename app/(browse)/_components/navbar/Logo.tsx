import React from 'react'
import { Poppins } from "next/font/google"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';


const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const logo = () => {
  return (
    <Link href={'/'}>
      <div className='flex items-center gap-x-4 hover:opacity-75 transition'>
        <div className='bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink'>
          <Image 
            alt='Gamehub'
            src={'/spoky.svg'}
            height={32}
            width={32}
          />
        </div>
        <div className={cn("hidden lg:block",font.className)}>
          <p className='text-lg font-semibold'>Gamehub</p>
          <p className='text-xs text-muted-foreground'>let&apos;s play</p>
        </div>
      </div>
    </Link>
  )
}

export default logo
