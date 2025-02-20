import React from 'react'



interface WorkSpaceIdPageProps {
    params: {
        workspaceId: string
    }
}

const WorkSpaceIdPage = ({params}:WorkSpaceIdPageProps) => {
  return (
    <div> {params.workspaceId} WorkSpaceIdPage</div>
  )
}

export default WorkSpaceIdPage