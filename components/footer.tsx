"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

const footerLinks = [
  {
    title: "روابط سريعة",
    links: [
      { label: "الرئيسية", href: "/" },
      { label: "عن الحاضنة", href: "/about" },
      { label: "الخدمات", href: "/services" },
      { label: "الأخبار", href: "/news" },
      { label: "تواصل معنا", href: "/contact" },
    ],
  },
  {
    title: "الخدمات",
    links: [
      { label: "احتضان المشاريع", href: "/services/incubation" },
      { label: "التدريب والتطوير", href: "/services/training" },
      { label: "الاستشارات", href: "/services/consulting" },
      { label: "التمويل", href: "/services/funding" },
      { label: "المرشدون", href: "/mentors" },
    ],
  },
  {
    title: "الموارد",
    links: [
      { label: "المدونة", href: "/blog" },
      { label: "الأسئلة الشائعة", href: "/faq" },
      { label: "الوثائق", href: "/documents" },
      { label: "الأدلة", href: "/guides" },
      { label: "الشركاء", href: "/partners" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t" dir="rtl">
      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src="/faviconV2.png" alt="Logo" className="h-10 w-10 object-contain" />
              </div>
              <span className="text-xl font-bold text-primary">حاضنة</span>
            </Link>
            <p className="text-muted-foreground text-right">
              نساعد رواد الأعمال على تطوير أفكارهم وتحويلها إلى مشاريع ناجحة من خلال توفير الموارد والدعم اللازم
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-semibold text-lg text-right">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label} className="text-right">
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="text-right">
              <h3 className="text-2xl font-semibold mb-2">اشترك في النشرة البريدية</h3>
              <p className="text-muted-foreground">
                احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني
              </p>
            </div>
            <form className="flex gap-4">
              <Button type="submit">
                <Mail className="ml-2 h-4 w-4" />
                اشتراك
              </Button>
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="bg-background text-right"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} حاضنة جامعة زيان عاشور. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
