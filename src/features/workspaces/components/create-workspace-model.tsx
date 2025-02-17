"use client";
import React, { Fragment } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateWorkspaceModel } from "../store/use-create-workspace-model";
const CreateWorkSpaceModel = () => {
  const [open, setOpen] = useCreateWorkspaceModel();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new workspace</DialogTitle>
            <DialogDescription>
              Add a new workspace to get started
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateWorkSpaceModel;
