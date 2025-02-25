'use client';
import React from 'react'
import ToolBar from './toolbar'
import SideBar from './sidebar';
interface WorkSpaceIdLayoutProps {
  children: React.ReactNode
}
const WorkSpaceLayout = ({children}:WorkSpaceIdLayoutProps) => {
  return (
    <div className='h-full'>
        <ToolBar/>
        <div className='flex h-[calc(100vh-40px)]'>
         <SideBar/>
        {children}
        </div>
    </div>
  )
}

export default WorkSpaceLayout