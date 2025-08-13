import { NavLink, useLocation } from "react-router-dom";
import { Home, ClipboardList, Users, Handshake, FileText, MessageSquare, Settings as SettingsIcon, User, HelpCircle, ShoppingCart } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Onboarding", url: "/onboarding", icon: ClipboardList },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
  { title: "Matches", url: "/matches", icon: Handshake },
  { title: "Deal Room", url: "/deal", icon: FileText },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Documents", url: "/documents", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: SettingsIcon },
  { title: "Help", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  const location = useLocation();
  const getActive = (url: string) => location.pathname === url;

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>AcquireEase</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={getActive(item.url)}>
                    <NavLink to={item.url} end>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
