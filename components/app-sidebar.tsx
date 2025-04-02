"use client"

import type * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  DatabaseIcon,
  DollarSignIcon,
  FileIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "./nav-documents"
import { NavMain } from "./nav-main"
import { NavHrModules } from "./nav-hr-modules"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
const data = {
  user: {
    name: "HR Manager",
    email: "hr@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Employees",
      url: "/employees",
      icon: UsersIcon,
    },
    {
      title: "Recruitment",
      url: "/recruitment",
      icon: UserPlusIcon,
    },
    {
      title: "Performance",
      url: "/performance",
      icon: ClipboardCheckIcon,
    },
    {
      title: "Attendance",
      url: "/attendance",
      icon: CalendarIcon,
    },
  ],
  hrModules: [
    {
      title: "Leave Management",
      url: "/leave-management",
      icon: CalendarIcon,
      isActive: true,
      items: [
        {
          title: "Pending Requests",
          url: "/leave-management/pending",
        },
        {
          title: "Approved Leaves",
          url: "/leave-management/approved",
        },
        {
          title: "Leave Types",
          url: "/leave-management/types",
        },
      ],
    },
    {
      title: "Payroll",
      url: "/payroll",
      icon: DollarSignIcon,
      items: [
        {
          title: "Current Payroll",
          url: "/payroll/current",
        },
        {
          title: "Payroll History",
          url: "/payroll/history",
        },
        {
          title: "Tax Information",
          url: "/payroll/tax",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "HR Reports",
      url: "/reports",
      icon: ClipboardListIcon,
    },
    {
      name: "Employee Records",
      url: "/employee-records",
      icon: DatabaseIcon,
    },
    {
      name: "HR Policies",
      url: "/policies",
      icon: FileIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">HR System</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavHrModules items={data.hrModules} />
        <NavDocuments title="HR Resources" items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

