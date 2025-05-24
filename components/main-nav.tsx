"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  const isLoggedIn = pathname.includes("/student-portal") || pathname.includes("/admin-portal")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      dir="rtl"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Logo</span>
            </div>
            <span className="text-xl font-bold text-primary">حاضنة</span>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pl-0" dir="rtl">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Logo</span>
                </div>
                <span className="text-xl font-bold text-primary">حاضنة</span>
              </Link>
              <div className="mt-8 flex flex-col space-y-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  الرئيسية
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  من نحن
                </Link>
                <Link href="/news" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  الأخبار
                </Link>
                <Link href="/partners" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  شركاؤنا
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  تواصل معنا
                </Link>
                {isLoggedIn && (
                  <>
                    <Link href="/resources/courses" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      الدورات
                    </Link>
                    <Link href="/resources/tools" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      الأدوات
                    </Link>
                    <Link href="/mentors" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      المرشدون
                    </Link>
                  </>
                )}
                <div className="pt-4 space-y-2">
                  {!isLoggedIn && (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full">
                          تسجيل الدخول
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full">قدّم مشروعك</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>الرئيسية</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>من نحن</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>الأخبار</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>شركاؤنا</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>تواصل معنا</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {isLoggedIn && (
                <>
                  <NavigationMenuItem>
                    <Link href="/resources/courses" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>الدورات</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/resources/tools" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>الأدوات</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/mentors" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>المرشدون</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          {!isLoggedIn && (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">تسجيل الدخول</Button>
              </Link>
              <Link href="/register">
                <Button>قدّم مشروعك</Button>
              </Link>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="تبديل الوضع المظلم" />
            <Moon className="h-4 w-4" />
          </div>

          {isLoggedIn && (
            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/student-portal">
                <Button variant="ghost">بوابة الطلاب</Button>
              </Link>
              <Link href="/admin-portal">
                <Button variant="ghost">بوابة الإدارة</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
