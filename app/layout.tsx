"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Footer } from "@/components/footer"

// تعريف الخطوط
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' })

// تعريف سياق المصادقة
interface AuthContextType {
  isLoggedIn: boolean
  user: any | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
})

// مكون مزود المصادقة
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    // التحقق من وجود توكن عند تحميل الصفحة
    const token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
      // يمكنك إضافة منطق للتحقق من صلاحية التوكن وجلب بيانات المستخدم
    }
  }, [])

  const login = (token: string) => {
    localStorage.setItem("token", token)
    setIsLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// مكون التخطيط الرئيسي
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/faviconV2.png" />
        <meta name="theme-color" content="#18A39E" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-arabic min-h-screen bg-background`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <MainNav />
              <main className="flex-1 container mx-auto px-4 py-6">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
