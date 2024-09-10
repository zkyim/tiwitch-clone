import React, { useTransition } from 'react'
import { Button } from '../ui/button';
import { useAuth } from '@clerk/nextjs';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { onFollow, Unfollow } from '@/actions/follow';
import { toast } from 'sonner';
import { Skeleton } from '../ui/skeleton';

interface ActionsProps {
    isFollowing: boolean;
    isHost: boolean;
    hostIdentity: string;
}

export const Actions = ({
    isFollowing,
    isHost,
    hostIdentity
}: ActionsProps) => {
    const [isPending, startTransaction] = useTransition();
    const router = useRouter()
    const { userId } = useAuth();

    const handleFollow = () => {
        startTransaction(() => {
            onFollow(hostIdentity)
            .then(() => toast.success(`You are now following`))
            .catch(() => toast.error("Something went wrong"));
        })
    }

    const handleUnfollow = () => {
        startTransaction(() => {
            Unfollow(hostIdentity)
            .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
            .catch(() => toast.error("Something went wrong"));
        })
    }

    const toggleFollow = () => {
        if (!userId) return router.push('/sign-up');
        if (isHost) return;

        if (isFollowing) {
            handleUnfollow();
        }else {
            handleFollow()
        }
    }

  return (
    <Button
        onClick={toggleFollow}
        disabled={isPending || isHost}
        variant={'primary'}
        size={'sm'}
        className='w-full lg:w-auto'
    >
      <Heart className={cn("h-4 w-4 mr-2",
        isFollowing ? "fill-white" : "fill-none"
      )}/>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  )
}


export const ActionsSkeleton = () => {
    return (
        <Skeleton className='h-10 w-full lg:w-24'/>
    )
}