"use client"
import { onBlock, onUnblock } from '@/actions/block';
import { onFollow, unfollow } from '@/actions/follow';
import { Button } from '@/components/ui/button'
import React, { useTransition } from 'react'
import { toast } from 'sonner';

interface ActionsProps {
    isFollowing: boolean;
    userId: string;
}

const Actions = ({
    isFollowing,
    userId,
}: ActionsProps) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
            .then((data) => toast.success(`You are now following ${data.following.username}`))
            .catch(() => toast.error("something went wrong"));
        })
    }

    const handleUnFollow = () => {
        startTransition(() => {
            unfollow(userId)
            .then((data) => toast.success(`You have unfollow ${data.following.username}`))
            .catch(() => toast.error("something went wrong"));
        })
    }

    const onClick = () => {
        if (isFollowing) {
            handleUnFollow();
        }else {
            handleFollow()
        }
    }

    const handleBlock = () => {
        startTransition(() => {
            onUnblock(userId)
            .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
            .catch(() => toast.error("something went wrong"));
        })
    }

  return (
    <>    
        <Button disabled={isPending} onClick={onClick} variant={'primary'}>
        {isFollowing ? "Unfollow" : "Follow"}
        </Button>
        <Button onClick={handleBlock}>
            Block
        </Button>
    </>
  )
}

export default Actions
