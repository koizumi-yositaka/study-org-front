import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"

// Menu items.
const items = [
  {
    title: "Home",
    to: "/home",
    icon: Home,
  },
  {
    title: "BBBB",
    to: "BBBB",
    icon: Inbox,
  },
  {
    title: "CCCC",
    to: "/CCCC",
    icon: Calendar,
  },
  {
    title: "users",
    to: "/users",
    icon: Search,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to} activeProps={{className:"underline"}}>
                    
                                          <item.icon />
                      <span>{item.title}</span>
        

                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>SSS</SidebarFooter>   
    </Sidebar>
  )
}
