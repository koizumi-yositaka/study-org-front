import { Calendar, Home, Inbox, Plus, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
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
    to: "/meetings/2",
    icon: Search,
  },
  {
    title: "Meetings",
    to: "/meetings",
    icon: Settings,
    rightComponent: ()=> (
        <SidebarMenuAction >
          <Link to={"/meetings/add"}>
          <Plus /> <span className="sr-only">Add Project</span>
          </Link>
          
        </SidebarMenuAction>
    )
  },
  {
    title: "Settings",
    to: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  console.log("appsidebar render")
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
                  {item.rightComponent && item.rightComponent()}
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
