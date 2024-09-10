import React from 'react'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table';
import { getBlockedUsers } from '@/lib/block-service';
import { format } from "date-fns";
const CommunityPage = async () => {
    const blockedUsers = await getBlockedUsers();

    const formattedData = blockedUsers.map(block => ({
        ...block,
        userId: block.blocked.id,
        imageUrl: block.blocked.imageUrl,
        usernam: block.blocked.username,
        createdAt: format(new Date(block.blocked.createdAt), "dd/MM/yyyy"),
    }))
  return (
    <div className='p-6'>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>Community Settings</h1>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  )
}

export default CommunityPage
