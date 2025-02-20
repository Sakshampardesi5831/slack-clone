"use client";
import React from "react";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { userGetWorkSpacesById } from "@/features/workspaces/api/use-getById-workspaces";
const WorkSpaceIdPage = () => {
  const workspaceId = useWorkSpaceId();
  const { data } = userGetWorkSpacesById({ id: workspaceId });
  return <div> {JSON.stringify(data)} WorkSpaceIdPage</div>;
};

export default WorkSpaceIdPage;
