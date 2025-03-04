"use client";
import React, { Fragment } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "../api/useCurrentUser";
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";
const UserButton = () => {
  const { data, isLoading } = useCurrentUser();
  const {signOut} =useAuthActions()
  if (isLoading) {
    return (
      <Fragment>
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </Fragment>
    );
  }
  if (!data) {
    return null;
  }
  const { name, email, image } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <Fragment>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-none relative">
          <Avatar className="size-10 hover:opacity-75 transition ">
            <AvatarImage alt={name} src={image} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="right" className="w-60">
          <DropdownMenuItem onClick={()=>{signOut()}} className="h-10">
            <LogOut className="size-4 mr-2  " />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  );
};

export default UserButton;
