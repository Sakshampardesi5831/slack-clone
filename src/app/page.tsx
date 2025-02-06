"use client";
import { Fragment } from "react";
import {useAuthActions} from '@convex-dev/auth/react';
import { Button } from "@/components/ui/button";
export default function Home() {
  const {signOut} =useAuthActions();
  return (
    <Fragment>
     <div className="p-8">
       <Button
        onClick={()=>signOut()}
       >Sign out</Button>
     </div>
    </Fragment>
  );
}
