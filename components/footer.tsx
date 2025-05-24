import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const developers = [
  {
    name: "رمضاني عبدالحميد",
    role: "Full-stack devloper",
    avatar: "مأ",
    github: "https://github.com/AbdelhamidRamdaniDz",
    numberPhone: "0666564435",
  },
  {
    name: "مزيود علي سفيان",
    role: "Front-end devloper",
    avatar: "فز",
    github: "https://github.com/Corupe",
    numberPhone: "0549600502",
  },
  {
    name: "أوشفون محمد هشام",
    role: "UI/UX designer",
    avatar: "يع",
    github: "https://github.com",
    numberPhone: "0655919776",
  },
  {
    name: "برابح اياد حاتم",
    role: "Back-end devloper",
    avatar: "أس",
    github: "https://github.com/iyadber",
    numberPhone: "0699993047",
  },
  {
    name: "طارق لباز",
    role: "Front-end devloper",
    avatar: "أس",
    github: "https://github.com",
    numberPhone: "0667587718 ",
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background" dir="rtl">
      <div className="container py-12">
        {/* Platform Developers Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">مطورو المنصة</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {developers.map((developer, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors min-w-[280px]"
              >
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback className="text-sm">{developer.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{developer.name}</h4>
                  <p className="text-muted-foreground text-sm">{developer.role}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={developer.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href={developer.numberPhone}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">عن الحاضنة</h3>
            <p className="text-sm text-muted-foreground">
              حاضنة جامعة زيان عاشور تقدم الموارد والإرشاد والدعم لمساعدة الطلاب على تحويل الأفكار المبتكرة إلى مشاريع
              ناجحة.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  الأخبار
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">الدعم</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  المساعدة
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">جامعة زيان عاشور، الجلفة، الجزائر</p>
            <p className="text-sm text-muted-foreground">البريد: incubator@univ-djelfa.dz</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} حاضنة جامعة زيان عاشور. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
