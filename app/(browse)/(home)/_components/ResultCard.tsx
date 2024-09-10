import { Stream, User } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
import { Thumbnail, ThumbnailSkeleton } from './Thumbnail';
import { UserAvatar, UserAvatarSekeleton } from '../../_components/sidebar/UserAvatar';
import { Skeleton } from '@/components/ui/skeleton';

interface ResultCardProps {
    data: Stream & { 
        user: User,
        isLive: boolean,
        name: string,
        thumbnailUrl: string | null;
    };
}

export const ResultCard = ({data}: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
        <div className='h-full w-full space-y-4'>
            <Thumbnail
                src={data.thumbnailUrl}
                fallback={data.user.imageUrl}
                isLive={data.isLive}
                username={data.user.username}
            />
            <div className='flex gap-x-3'>
                <UserAvatar 
                    username={data.user.username}
                    imageUrl={data.user.imageUrl}
                    isLive={data.isLive}
                />
                <div className='flex flex-col text-sm overflow-hidden truncate'>
                    <p className='truncate font-semibold hover:text-blue-500'>{data.name}</p>
                    <p className='text-muted-foreground'>{data.user.username}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export const ResultCardSkeleton = () => {
    return (
        <div className='h-full w-full space-y-4'>
            <ThumbnailSkeleton />
            <div className='flex gap-x-3'>
                <UserAvatarSekeleton />
                <div className='flex flex-col gap-y-1'>
                    <Skeleton className='h-4 w-32'/>
                    <Skeleton className='h-3 w-24'/>
                </div>
            </div>
        </div>
    )
}