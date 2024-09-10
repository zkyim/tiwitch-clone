
import React, { Suspense } from 'react';
import Navbar from './_components/navbar/Navbar';
import {Sidebar, SidebarSkeleton} from './_components/sidebar/Sidebar';
import Container from './_components/Container';

const BrowseLayout = ({
    children,
}: {
    children: React.ReactNode,
}) => {
  return (
    <>
        <Navbar />
        <div className='flex h-full pt-20'>
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>
          <Container>
            {children}
          </Container>
        </div>
    </>
  )
}

export default BrowseLayout
