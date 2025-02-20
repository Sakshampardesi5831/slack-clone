'use client';
import React from 'react'
import ToolBar from './toolbar'
interface WorkSpaceIdLayoutProps {
  children: React.ReactNode
}
const WorkSpaceLayout = ({children}:WorkSpaceIdLayoutProps) => {
  return (
    <div className='h-full'>
        <ToolBar/>
        {children}
    </div>
  )
}

export default WorkSpaceLayout