import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Ziain Ashour University Startup Incubator provides resources, mentorship, and support to help students
              transform innovative ideas into successful businesses.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/resources/library" className="text-muted-foreground hover:text-foreground">
                  Digital Library
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="text-muted-foreground hover:text-foreground">
                  Business Tools
                </Link>
              </li>
              <li>
                <Link href="/resources/events" className="text-muted-foreground hover:text-foreground">
                  Events Calendar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Ziain Ashour University, Jelfa, Algeria</p>
            <p className="text-sm text-muted-foreground">Email: contact@ziainashour-incubator.edu</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ziain Ashour University Startup Incubator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
