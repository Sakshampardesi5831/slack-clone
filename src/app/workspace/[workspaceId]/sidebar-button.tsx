import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { Fragment } from "react";
import { IconType } from "react-icons/lib";

interface SideBarButtonProps {
  icon: LucideIcon | IconType;
  label: string;
  isActive?: boolean;
}

const SideBarButton = ({ icon: Icon, label, isActive }: SideBarButtonProps) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group">
        <Button
          variant="transparent"
          className={cn(
            "size-9 p-2 group-hover:bg-accent/20",
            isActive && "bg-accent/20"
          )}
        >
          <Icon className="size-5 group-hover:scale-110 transition-all" />
        </Button>
        <span className="text-[11px] text-white group-hover:text-accent">{label}</span>
      </div>
    </Fragment>
  );
};

export default SideBarButton;
