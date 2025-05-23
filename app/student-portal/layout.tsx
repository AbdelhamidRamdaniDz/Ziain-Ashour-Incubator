"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { StudentSidebar } from "@/components/student-sidebar"

export default function StudentPortalLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <StudentSidebar
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
          className={cn("fixed inset-y-0 z-30 hidden h-full w-56 flex-col md:flex", isCollapsed && "w-[70px]")}
        />
        <main
          className={cn("flex-1 transition-all duration-200 ease-in-out", isCollapsed ? "md:pl-[70px]" : "md:pl-56")}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
