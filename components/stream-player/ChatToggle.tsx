"use client";
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { useChatSidebar } from '@/store/use-chat-sidebar';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import React from 'react'

export const ChatToggle = () => {
    const { collapsed, onExpand, onCollapse } = useChatSidebar((state) => state);

    const label = collapsed ? 'Expanded' : 'Collapsed';

    const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

    const onToogle = () => {
        if (collapsed) {
            onExpand();
        }else {
            onCollapse();
        }
    }

  return (
    <Hint label={label} side='right' asChild>
        <Button onClick={onToogle} className='h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent' variant={'ghost'}>
            <Icon className='h-4 w-4'/>
        </Button>
    </Hint>
  )
}
