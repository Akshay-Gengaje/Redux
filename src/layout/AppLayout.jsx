import React from "react";
import Navbar from "../components/navbar/Navbar";
import AppSidebar from "../components/sidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout = ({children}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className={"h-10 w-10 text-5xl"}/>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AppLayout;
