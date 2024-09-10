import { stringToColor } from '@/lib/utils';
import { ReceivedChatMessage } from '@livekit/components-react'
import React from 'react'
import { format } from 'date-fns'


interface ChatMessageProps {
    data: ReceivedChatMessage;
}

const ChatMessage = ({data}: ChatMessageProps) => {
    const color = stringToColor(data.from?.name || "");
  return (
    <div className='flex gap-2 p-2 rounded-md hover:bg-white/5'>
      <p className='text-sm text-white/40'>{format(data.timestamp, "hh:mm")}</p>
      <div className='flex flex-wrap items-baseline whitespace-nowrap'>
        <p className='text-sm font-semibold whitespace-nowrap'>
            <span className='truncate' style={{color: color}}>{data.from?.name}</span>:
        </p>
        <p className='text-sm break-all'>
            {data.message}
        </p>
      </div>
    </div>
  )
}

export default ChatMessage
