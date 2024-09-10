import { getSelfByUsername } from '@/lib/auth-service'
import { redirect } from 'next/navigation';
import React from 'react'
import Navbar from './_components/navbar/Navbar';
import { Sidebar } from './_components/sidebar/Sidebar';
import Container from './_components/Container';

const CreatorLayout = async ({
    children,
    params,
}: { 
    params: { username: string },
    children: React.ReactNode
}) => {
    const self = await getSelfByUsername(params.username);
    if (!self) redirect("/");

  return (
    <>
        <Navbar />
        <div className='flex h-full pt-20'>
            <Sidebar />
            <Container>
                {children}  
            </Container>
        </div>
    </>
  )
}

export default CreatorLayout
