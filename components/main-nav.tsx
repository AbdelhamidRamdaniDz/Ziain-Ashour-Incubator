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
import { Menu, Moon, Sun, Globe, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageToggle } from "./language-toggle"
import { ModeToggle } from "./mode-toggle"
import { UserNav } from "./user-nav"

const languages = [
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
]

const mainMenuItems = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "عن الحاضنة",
    href: "/about",
  },
  {
    title: "الخدمات",
    href: "/services",
    submenu: [
      { title: "احتضان المشاريع", href: "/services/incubation" },
      { title: "التدريب والتطوير", href: "/services/training" },
      { title: "الاستشارات", href: "/services/consulting" },
      { title: "التمويل", href: "/services/funding" },
    ],
  },
  {
    title: "الموارد",
    href: "/resources",
    submenu: [
      { title: "المدونة", href: "/blog" },
      { title: "الوثائق", href: "/documents" },
      { title: "الأدلة", href: "/guides" },
      { title: "الشركاء", href: "/partners" },
    ],
  },
  {
    title: "الأخبار",
    href: "/news",
  },
  {
    title: "تواصل معنا",
    href: "/contact",
  },
]

export function MainNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentLang, setCurrentLang] = React.useState("ar")

  const isLoggedIn = pathname.includes("/student-portal") || pathname.includes("/admin-portal")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    // Here you would typically implement language switching logic
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
              <img src="/faviconV2.png" alt="Logo" className="h-10 w-10 object-contain" />
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
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src="/faviconV2.png" alt="Logo" className="h-10 w-10 object-contain" />
                </div>
                <span className="text-xl font-bold text-primary">حاضنة</span>
              </Link>
              <div className="mt-8 flex flex-col space-y-4">
                {mainMenuItems.map((item) => (
                  <div key={item.href}>
                    {item.submenu ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="w-full justify-between">
                            {item.title}
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          {item.submenu.map((subItem) => (
                            <DropdownMenuItem key={subItem.href} asChild>
                              <Link href={subItem.href} onClick={() => setIsOpen(false)}>
                                {subItem.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium block"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                {isLoggedIn && (
                  <>
                    <Link href="/student-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      بوابة الطلاب
                    </Link>
                    <Link href="/admin-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      بوابة الإدارة
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {[...mainMenuItems].reverse().map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.submenu ? (
                    <DropdownMenu dir="rtl">
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className={navigationMenuTriggerStyle()}>
                          {item.title}
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48" dir="rtl">
                        {[...item.submenu].reverse().map((subItem) => (
                          <DropdownMenuItem key={subItem.href} asChild>
                            <Link href={subItem.href}>{subItem.title}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageToggle />

          {/* Theme Toggle */}
          <ModeToggle />

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

          {isLoggedIn && (
            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/student-portal">
                <Button variant="ghost">بوابة الطلاب</Button>
              </Link>
              <Link href="/admin-portal">
                <Button variant="ghost">بوابة الإدارة</Button>
              </Link>
              <UserNav />
            </div>
          )}

          {/* User Navigation */}
        </div>
      </div>
    </header>
  )
}
