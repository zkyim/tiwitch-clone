"use client";
import React, { useMemo } from 'react'
import { Hint } from '../hint';
import { Info } from 'lucide-react';

interface ChatInfoProps {
    isDelayed: boolean;
    isFollowersOnly: boolean;
}

export const ChatInfo = ({
    isDelayed,
    isFollowersOnly
}: ChatInfoProps) => {
    const hint = useMemo(() => {
        if (isFollowersOnly && !isDelayed) return "Only followers can chat";
        if (isDelayed && !isFollowersOnly) return "Messages are delayed 3 seconds";
        if (isDelayed && isFollowersOnly) return "Only followers can chat. Messages are delayed 3 seconds"
        return "";
    }, [isDelayed, isFollowersOnly])
    const label = useMemo(() => {
        if (isFollowersOnly && !isDelayed) return "Followers only";
        if (isDelayed && !isFollowersOnly) return "Slow mode";
        if (isDelayed && isFollowersOnly) return "Followers only & Slow mode"
        return "";
    }, [isDelayed, isFollowersOnly])

    if (!isDelayed && !isFollowersOnly) return null;
  return (
    <div className='p-2 text-muted-foreground bg-white/5 border border-white/10 rounded-t-md flex items-center gap-x-2'>
        <Hint label={hint} asChild>
            <Info className='h-4 w-4'/>
        </Hint>
        <p className='text-xs'>{label}</p>
    </div>
  )
}
