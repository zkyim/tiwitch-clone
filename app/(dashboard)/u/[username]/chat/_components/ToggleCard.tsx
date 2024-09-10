"use client"
import { updateStream } from '@/actions/stream';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import React, { useTransition } from 'react'
import { toast } from 'sonner';

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    field: string;
    label: string;
    value: boolean;
}

export const ToggleCard = ({
    field,
    label,
    value
}: ToggleCardProps) => {
  const [isPending, startTransaction] = useTransition();
  const onChange = () => {
    startTransaction(() => {
        updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"))
    })
  }
  return (
    <div className='rounded-xl bg-muted p-6'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold shrink-0'>{label}</p>
        <div className='space-y-2'>
            <Switch
                disabled={isPending}
                onCheckedChange={onChange}
                checked={value}
            >
                {value ? "On" : "Off"}
            </Switch>
        </div>
      </div>
    </div>
  )
}

export const ToggleCardSkeleton = () => {
  return (
    <Skeleton className='rounded-xl p-10 w-full'/>
  )
}