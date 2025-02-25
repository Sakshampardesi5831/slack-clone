"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useWorkSpaceId } from "@/hooks/use-workspace-id";
import { userGetWorkSpacesById } from "@/features/workspaces/api/use-getById-workspaces";
import { useGetWorkSpaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModel } from "@/features/workspaces/store/use-create-workspace-model";
import { Loader, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
const WorkSpaceSwitcher = () => {
  const router = useRouter();
  const workSpaceId = useWorkSpaceId();

  const [_open, setOpen] = useCreateWorkspaceModel();
  const { data: workspace, isLoading: workSpaceLoading } =
    userGetWorkSpacesById({ id: workSpaceId });
  const { data: workspaces } = useGetWorkSpaces();

  const filterWorkSpaces = workspaces?.filter(
    (workspace) => workspace._id !== workSpaceId
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          {workSpaceLoading ? (
            <Loader className=" size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workSpaceId}`)}
          className="cursor-pointer flex-col justify-start items-start capitalize"
        >
          {workspace?.name}
          <span className="text-xs text-muted-foreground">
            Active Work space
          </span>
        </DropdownMenuItem>
        {filterWorkSpaces?.map((workspaces) => (
          <DropdownMenuItem
            key={workspaces._id}
            className="cursor-pointer capitalize overflow-hidden"
            onClick={() => router.push(`/workspace/${workspaces._id}`)}
          >
            <div className=" flex justify-center items-center shrink-0 size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-lg rounded-md ">
              {workspaces?.name.charAt(0).toUpperCase()}
            </div>
            <p className="truncate">{workspaces.name}</p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className=" flex items-center justify-center size-9 relative overflow-hidden bg-[#F2F2F2] text-slate-800 font-semibold text-lg rounded-md ">
            <Plus />
          </div>
          Create a new Workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkSpaceSwitcher;
