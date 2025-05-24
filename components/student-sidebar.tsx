"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  Home,
  Lightbulb,
  MessageSquare,
  Presentation,
  Search,
  Settings,
  ShoppingBag,
  PenToolIcon as Tool,
  Users,
  PanelLeft,
  PanelRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean
  onToggle: () => void
}

export function StudentSidebar({ className, isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "لوحة التحكم",
      icon: Home,
      href: "/student-portal",
      active: pathname === "/student-portal",
    },
    {
      label: "الدورات",
      icon: BookOpen,
      href: "/student-portal/courses",
      active: pathname === "/student-portal/courses",
    },
    {
      label: "المكتبة الرقمية",
      icon: FileText,
      href: "/student-portal/library",
      active: pathname === "/student-portal/library",
    },
    {
      label: "تقديم براءة اختراع",
      icon: FileText,
      href: "/student-portal/patent-submission",
      active: pathname === "/student-portal/patent-submission",
    },
    {
      label: "منشئ العروض التقديمية",
      icon: Presentation,
      href: "/student-portal/presentations",
      active: pathname === "/student-portal/presentations",
    },
    {
      label: "إدارة المهام",
      icon: Calendar,
      href: "/student-portal/tasks",
      active: pathname === "/student-portal/tasks",
    },
    {
      label: "لوحة مؤشرات الأداء",
      icon: BarChart3,
      href: "/student-portal/kpi",
      active: pathname === "/student-portal/kpi",
    },
    {
      label: "أدوات الأعمال",
      icon: Tool,
      href: "/student-portal/tools",
      active: pathname === "/student-portal/tools",
    },
    {
      label: "مركز الابتكار",
      icon: Lightbulb,
      href: "/student-portal/innovation",
      active: pathname === "/student-portal/innovation",
    },
    {
      label: "طلب المعدات",
      icon: Tool,
      href: "/student-portal/equipment",
      active: pathname === "/student-portal/equipment",
    },
    {
      label: "منتدى المعرفة",
      icon: MessageSquare,
      href: "/student-portal/forum",
      active: pathname === "/student-portal/forum",
    },
    {
      label: "سوق الشركات الناشئة",
      icon: ShoppingBag,
      href: "/student-portal/marketplace",
      active: pathname === "/student-portal/marketplace",
    },
    {
      label: "الفرص",
      icon: Calendar,
      href: "/student-portal/opportunities",
      active: pathname === "/student-portal/opportunities",
    },
    {
      label: "شركاء الأعمال",
      icon: Users,
      href: "/student-portal/partners",
      active: pathname === "/student-portal/partners",
    },
    {
      label: "الرسائل",
      icon: MessageSquare,
      href: "/student-portal/messages",
      active: pathname === "/student-portal/messages",
    },
    {
      label: "الإعدادات",
      icon: Settings,
      href: "/student-portal/settings",
      active: pathname === "/student-portal/settings",
    },
  ]  

  return (
    <div className={cn("relative flex flex-col border-r bg-background", className)}>
      <div className="flex h-14 items-center px-4">
        <div className="flex w-full items-center justify-between">
          {!isCollapsed && <span className="text-lg font-semibold">Student Portal</span>}
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={onToggle}>
            {isCollapsed ? (
              <PanelRight className="h-4 w-4" />
            ) : (
              <PanelLeft className="h-4 w-4" />
            )}
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
  )
}
