"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const isLoggedIn = pathname.includes("/student-portal") || pathname.includes("/admin-portal")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Logo linkWrapper={false} />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Logo linkWrapper={false} />
              </Link>
              <div className="mt-8 flex flex-col space-y-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  About
                </Link>
                <Link href="/news" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  News & Blog
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Apply Now
                </Link>
                {isLoggedIn ? (
                  <>
                    <Link href="/student-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Student Portal
                    </Link>
                    <Link href="/admin-portal" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Admin Portal
                    </Link>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                    Login
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Ziain Ashour</div>
                          <p className="text-sm leading-tight text-white/90">University Startup Incubator – Jelfa</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/about"
                        >
                          <div className="text-sm font-medium leading-none">Mission & Vision</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our goals and values
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/team"
                        >
                          <div className="text-sm font-medium leading-none">Our Team</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet our professors and mentors
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/partners"
                        >
                          <div className="text-sm font-medium leading-none">Partners</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our industry and academic partners
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>News & Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          {isLoggedIn ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/student-portal">
                <Button variant="ghost">Student Portal</Button>
              </Link>
              <Link href="/admin-portal">
                <Button variant="ghost">Admin Portal</Button>
              </Link>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Apply Now</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
