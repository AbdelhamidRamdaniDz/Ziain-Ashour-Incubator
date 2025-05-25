import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#18A39E]/10 via-background to-background border-t" dir="rtl">
      <div className="container py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#18A39E]">عن الحاضنة</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              حاضنة جامعة زيان عاشور توفر بيئة محفزة للابتكار، وتقدم الموارد والإرشاد والدعم لتحويل الأفكار إلى مشاريع ناجحة.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#18A39E]">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#18A39E] text-muted-foreground transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#18A39E] text-muted-foreground transition">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#18A39E] text-muted-foreground transition">
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#18A39E] text-muted-foreground transition">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#18A39E]">الدعم</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#18A39E] text-muted-foreground transition">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#18A39E] text-muted-foreground transition">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#18A39E] text-muted-foreground transition">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-[#18A39E] text-muted-foreground transition">
                  المساعدة
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#18A39E]">تابعنا</h3>
            <div className="flex gap-4 justify-start mb-4">
              <Link href="#" className="text-muted-foreground hover:text-[#18A39E] transition">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#18A39E] transition">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#18A39E] transition">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#18A39E] transition">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>جامعة زيان عاشور، الجلفة، الجزائر</p>
              <p>البريد: <a href="mailto:incubator@univ-djelfa.dz" className="hover:text-[#18A39E] transition">incubator@univ-djelfa.dz</a></p>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} حاضنة جامعة زيان عاشور. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
