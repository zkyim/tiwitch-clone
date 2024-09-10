"use client";
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import React, { useEffect, useState } from 'react'
import { ToggleSkeleton } from './Toggle';
import { RecommendedSkeleton } from './Recommended';

const Wrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isClient, setIsClient] = useState(false);
    const { collapsed } = useSidebar((state) => state);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return (
        <aside className={cn('fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50',
            collapsed && "w-[70px]"
        )}>
            <ToggleSkeleton />
            <RecommendedSkeleton />
        </aside>
    );

  return (
    <aside className={cn('fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50',
        collapsed && "w-[70px]"
    )}>
        {children}
    </aside>
  )
}
export default Wrapper
