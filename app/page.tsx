"use client"

import { ArrowDown, Users, Award, BookOpen, Lightbulb, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Contact from "@/components/contact"
import About from "@/components/about"
import Partners from "@/components/partners"
import DevelopersSection from "@/components/developers"
export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary/10 to-background py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              مرحباً بكم في حاضنة جامعة زيان عاشور
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              ندعم الطلاب والأساتذة في رحلتهم الريادية من الفكرة إلى السوق
            </p>
            <div className="mt-8">
              <Button size="lg" className="gap-2" onClick={scrollToContact}>
                تواصل معنا
                <ArrowDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <About/>
      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">آراء طلابنا</h2>
            <p className="mt-4 text-muted-foreground">ماذا يقول الطلاب عن تجربتهم مع حاضنة الجامعة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>أح</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">أحمد محمد</div>
                    <div className="text-sm text-muted-foreground">طالب هندسة البرمجيات</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "الحاضنة ساعدتني في تطوير مشروعي من مجرد فكرة إلى منتج حقيقي. الدعم والإرشاد كان ممتازاً."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>فز</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">فاطمة الزهراء</div>
                    <div className="text-sm text-muted-foreground">طالبة إدارة أعمال</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "تعلمت الكثير عن ريادة الأعمال والتسويق. المرشدون محترفون ويقدمون نصائح قيمة."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>يع</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">يوسف عبدالله</div>
                    <div className="text-sm text-muted-foreground">طالب ذكاء اصطناعي</div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "البيئة الإبداعية والأدوات المتاحة ساعدتني في تحويل فكرتي إلى نموذج أولي ناجح."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <Partners/>
      {/* Contact Section */}
      <Contact/>

      <DevelopersSection />
    
    </div>
  )
}
