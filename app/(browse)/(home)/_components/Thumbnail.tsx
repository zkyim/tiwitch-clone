import React from 'react'
import { UserAvatar } from '../../_components/sidebar/UserAvatar';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import LiveBadge from '@/components/LiveBadge';

interface ThumbnailProps {
    src: string | null;
    fallback: string; 
    username: string;
    isLive: boolean;
}

export const Thumbnail = ({
    src,
    fallback,
    username,
    isLive,
}: ThumbnailProps) => {
    let content;

    if (!src) {
        content = (
            <div className='bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:translate-y-1'>
                <UserAvatar size={'lg'} showBadge isLive={isLive} imageUrl={fallback} username={username}/>
            </div>
        )
    }else {
        content = (
            <Image 
                fill 
                src={src}
                alt='Thumbnail'
                className='object-cover transition-transform group-hover:translate-x-2 group-hover:translate-y-1 rounded-md'
            />
        )
    }
  return (
    <div className='group aspect-video relative rounded-md cursor-pointer'>
      <div className='rounded-md absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center' />
        {content}
        {isLive && src && (
            <div className='absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform'> 
                <LiveBadge />
            </div>
        )}
    </div>
  )
}

export const ThumbnailSkeleton = () => {
    return (
        <div className='group aspect-video relative rounded-md'>
            <Skeleton className='w-full h-full'/>
        </div>
    )
}