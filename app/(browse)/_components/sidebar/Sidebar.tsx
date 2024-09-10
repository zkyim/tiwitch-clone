import React from 'react'
import Wrapper from './wrapper'
import {Toggle, ToggleSkeleton} from './Toggle'
import {Recommended, RecommendedSkeleton} from './Recommended'
import { getRecommended } from '@/lib/recommended-service'
import { getFollwedUsers } from '@/lib/follow-service'
import {Following, FollowingSkeleton} from './Following'

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const follows = await getFollwedUsers();
  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <Following data={follows} />
        <Recommended data={recommended}/>
      </div>
    </Wrapper>
  )
}


export const SidebarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[2D2E35] z-50'>
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}