"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const hidebarPaths = [
    "/student-portal",
    "/admin-portal",
  ]

  const showbar = !hidebarPaths.some(path => pathname === path || pathname.startsWith(path + "/"))

  return (
    <>
      {showbar && <MainNav />}
        <main className="flex-1">{children}</main>
      {showbar && <Footer />}
    </>
  )
}
