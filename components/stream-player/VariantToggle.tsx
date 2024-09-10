"use client";
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar';
import { MessageSquare, Users } from 'lucide-react';
import React from 'react'

export const VariantToggle = () => {
    const { variant, onChangeVariant } = useChatSidebar((state) => state);

    const isChat = variant  === ChatVariant.CHAT;

    const Icon = isChat ? Users : MessageSquare;

    const onToggle = () => {
        const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
        onChangeVariant(newVariant);
    }

    const label = isChat ? 'Community' : 'Go back to chat';

  return (
    <Hint label={label} side='right' asChild>
        <Button onClick={onToggle} className='h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent' variant={'ghost'}>
            <Icon className='h-4 w-4'/>
        </Button>
    </Hint>
  )
}
