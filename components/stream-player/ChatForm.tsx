"use client";
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { ChatInfo } from './ChatInfo';

interface ChatFormProps {
    onSubmit: () => void;
    onChange: (value: string) => void;
    value: string;
    isHidden: boolean;
    isFollowersOnly: boolean;
    isDelayed: boolean;
    isFollowing: boolean;
}

export const ChatForm = ({
    onSubmit,
    onChange,
    value,
    isDelayed,
    isFollowersOnly,
    isFollowing,
    isHidden,
}: ChatFormProps) => {
    const [isDelayBlocked, setIsDelayBlocked] = useState(false);

    const isFollowersOnlyAndNotFollowowing = isFollowersOnly && !isFollowing;
    const isDisabled = isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowowing;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value || isDisabled) return;

        if (isDelayed && !isDelayBlocked) {
            setIsDelayBlocked(true);
            setTimeout(() => {
                setIsDelayBlocked(false);
                onSubmit();
            }, 3000);
        }else {
            onSubmit();
        }
    }

    if (isHidden) return null;
  return (
    <form className='flex flex-col items-center gap-y-4 p-3' onSubmit={handleSubmit}>
        <div className='w-full'>
            <ChatInfo
                isDelayed={isDelayed}
                isFollowersOnly={isFollowersOnly}
            />
            <Input 
                onChange={(e) => onChange(e.target.value)}
                value={value}
                disabled={isDisabled}
                placeholder='Send a message'
                className={cn("border-white/10",
                    isFollowersOnly || isDelayed && "rounded-t-none border-t-0"
                )}
            />
        </div>
        <div className='ml-auto'>
            <Button type='submit' disabled={isDisabled} size={'sm'} variant={'primary'}>
                Chat
            </Button>
        </div>
    </form>
  )
}

export const ChatFormSkeleton = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 p-3'>
            <Skeleton className='w-full h-10'/>
            <div className='flex items-center gap-x-2 ml-auto'>
                <Skeleton className='h-7 w-7' />
                <Skeleton className='h-7 w-12' />
            </div>
        </div>
    )
}

