"use client";
import { Fragment } from "react";
import {useAuthActions} from '@convex-dev/auth/react';
import UserButton from "@/features/auth/components/user-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  const {signOut} =useAuthActions();
  return (
    <Fragment>
     <div className="p-8">
      <UserButton/>
       {/* <Button
        onClick={()=>signOut()}
       >Sign out</Button> */}
     </div>
    </Fragment>
  );
}
