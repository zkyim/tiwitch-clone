import React from 'react'
import Logo from './_conponets/Logo'
const LayoutAuth = ({
    children,
}: {
    children: React.ReactNode,
}) => {
  return (
    <div className='h-full flex flex-col py-5 items-center justify-center space-y-6'>
      <Logo />
      {children}
    </div>
  )
}

export default LayoutAuth
