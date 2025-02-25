import UserButton from "@/features/auth/components/user-button";
import React from "react";
import WorkSpaceSwitcher from "./workspaceswitcher";
import SideBarButton from "./sidebar-button";
import {
  BellIcon,
  Home,
  MessageSquareIcon,
  MoreHorizontal,
} from "lucide-react";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 pt-[9px] pb-4">
      <div className="flex justify-center items-center">
        <WorkSpaceSwitcher />
      </div>
      <SideBarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SideBarButton icon={MessageSquareIcon} label="Message" />
      <SideBarButton icon={BellIcon} label="Activity" />
      <SideBarButton icon={MoreHorizontal} label="More" />
      <div className="flex justify-center items-center mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};

export default SideBar;
