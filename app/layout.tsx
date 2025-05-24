import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "حاضنة أعمال جامعة الجلفة",
  description: "University startup incubator platform for students and entrepreneurs",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
