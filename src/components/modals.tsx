"use client";
import React, { Fragment, useEffect, useState } from "react";
import CreateWorkSpaceModel from "@/features/workspaces/components/create-workspace-model";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Fragment>
      <CreateWorkSpaceModel />
    </Fragment>
  );
};

export default Modals;
