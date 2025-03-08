import React from "react";
import AppSidebar from "../components/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar/Navbar";
import AppRoutes from "@/routes/AppRoutes";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <div className="sticky top-0 z-10 bg-white dark:bg-black flex w-full h-10 border-b-[0.1px]">
          <SidebarTrigger className={"h-10 w-10 text-5xl"} />
          <Navbar />
        </div>
        <div className="px-10 ">
          <AppRoutes />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
