"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Bell, FileText, Home, MessageSquare, PanelLeft, Search, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function AdminPortalLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/admin-portal",
      active: pathname === "/admin-portal",
    },
    {
      label: "Applications",
      icon: FileText,
      href: "/admin-portal/applications",
      active: pathname === "/admin-portal/applications",
    },
    {
      label: "Patent Review",
      icon: FileText,
      href: "/admin-portal/patents",
      active: pathname === "/admin-portal/patents",
    },
    {
      label: "Resource Manager",
      icon: FileText,
      href: "/admin-portal/resources",
      active: pathname === "/admin-portal/resources",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/admin-portal/analytics",
      active: pathname === "/admin-portal/analytics",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/admin-portal/messages",
      active: pathname === "/admin-portal/messages",
    },
    {
      label: "Students",
      icon: Users,
      href: "/admin-portal/students",
      active: pathname === "/admin-portal/students",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin-portal/settings",
      active: pathname === "/admin-portal/settings",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 z-30 hidden h-full flex-col border-r bg-background md:flex",
            isCollapsed ? "w-[70px]" : "w-56",
          )}
        >
          <div className="flex h-14 items-center px-4">
            <div className="flex w-full items-center justify-between">
              {!isCollapsed && <span className="text-lg font-semibold">Admin Portal</span>}
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <PanelLeft className="h-4 w-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background pl-8 pr-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid gap-1 px-2">
              {routes.map((route, i) => (
                <Link
                  key={i}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    route.active ? "bg-accent text-accent-foreground" : "transparent",
                    isCollapsed ? "justify-center" : "",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{route.label}</span>}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main
          className={cn("flex-1 transition-all duration-200 ease-in-out", isCollapsed ? "md:pl-[70px]" : "md:pl-56")}
        >
          <div className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  3
                </span>
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground">AP</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Admin Portal</p>
                  <p className="text-xs text-muted-foreground">Professor</p>
                </div>
              </div>
            </div>
          </div>
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
