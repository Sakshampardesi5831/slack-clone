"use client";
import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModel } from "../store/use-create-workspace-model";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkSpace } from "../api/use-create-workspaces";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const CreateWorkSpaceModel = () => {
  const [open, setOpen] = useCreateWorkspaceModel();
  const [name, setName] = useState("");
  const router = useRouter();
  const { mutate, isPending } = useCreateWorkSpace();
  const handleClose = () => {
    setOpen(false);
    setName("");
    //clear form
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutate(
        { name },
        {
          onSuccess(id) {
            console.log("result data", id);
            toast.success("Workspace created successfully");
            router.push(`/workspace/${id}`);
            handleClose();
          },
        }
      );
    } catch (error: any) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  };
  return (
    <Fragment>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader className="">
            <DialogTitle className="mb-1">Add a Work space</DialogTitle>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                value={name}
                required
                disabled={isPending}
                autoFocus
                minLength={3}
                placeholder="WorkSpace name eg: 'Work','Personal','Home'"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={isPending} variant="default">
                  Create
                </Button>
              </div>
            </form>
            {/* <DialogDescription>
              Add a new workspace to get started
            </DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateWorkSpaceModel;
