import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset>
          <Helmet>
            <title>AcquireEase – Modernize Acquisitions</title>
            <meta name="description" content="Approachable acquisition platform connecting buyers and sellers with guided workflows and AI assistance." />
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/'} />
          </Helmet>

          <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center gap-3">
              <SidebarTrigger className="mr-1" />
              <NavLink to="/" className="font-semibold text-lg text-gradient-brand">AcquireEase</NavLink>
              <div className="ml-auto flex items-center gap-3">
                <div className="hidden md:block w-64">
                  <Input placeholder="Search…" className="h-9" />
                </div>
                <Button variant="ghost" size="icon" aria-label="Notifications">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <main className="container py-8 animate-enter">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
