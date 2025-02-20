"use client";
import { Fragment, useEffect, useMemo } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import UserButton from "@/features/auth/components/user-button";
import { Button } from "@/components/ui/button";
import { useGetWorkSpaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModel } from "@/features/workspaces/store/use-create-workspace-model";
import { useRouter } from "next/navigation";
export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModel();
  const { data, isLoading } = useGetWorkSpaces();
  const router=useRouter();

  const workSpaceId = useMemo(() => {
    return data?.[0]?._id;
  }, [data]);
  useEffect(() => {
    if (isLoading) return;
    if (workSpaceId) {
      //console.log("Redirect to work space");
      router.replace(`/workspace/${workSpaceId}`);
    
    } else if (!open) {
      setOpen(true);
      console.log("Open creation model");
    }
  }, [workSpaceId, isLoading, setOpen, open]);
  return (
    <Fragment>
      <div className="p-8">
        <UserButton />
      </div>
    </Fragment>
  );
}
