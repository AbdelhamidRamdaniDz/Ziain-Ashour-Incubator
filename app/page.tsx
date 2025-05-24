"use client"

import { ArrowDown, Users, Award, BookOpen, Lightbulb, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">لماذا تختارنا؟</h2>
            <p className="mt-4 text-muted-foreground">أرقام تتحدث عن نجاحنا في دعم المشاريع الريادية</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">85+</div>
              <div className="text-sm text-muted-foreground">مشروع محتضن</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">مرشد خبير</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">120+</div>
              <div className="text-sm text-muted-foreground">فعالية تدريبية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">براءة اختراع</div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">شركاؤنا</h2>
            <p className="mt-4 text-muted-foreground">نتعاون مع أفضل الشركات والمؤسسات لدعم مشاريعكم</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="text-center">
                  <div className="h-12 w-20 bg-muted rounded mb-2 mx-auto" />
                  <div className="text-xs text-muted-foreground">شريك {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">تواصل معنا</h2>
            <p className="mt-4 text-muted-foreground">لديك استفسار؟ نحن هنا لمساعدتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">الهاتف</div>
                    <div className="text-muted-foreground">+213 123 456 789</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">البريد الإلكتروني</div>
                    <div className="text-muted-foreground">incubator@univ-djelfa.dz</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">العنوان</div>
                    <div className="text-muted-foreground">جامعة زيان عاشور، الجلفة</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
