"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, HelpCircle, Mail, Phone, MessageSquare, Search, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const faqs = [
  {
    id: "1",
    question: "كيف يمكنني التسجيل في الحاضنة؟",
    answer:
      "يمكنك التسجيل من خلال ملء نموذج التسجيل المتاح على الموقع. ستحتاج إلى تقديم معلومات عن مشروعك وفريقك، بالإضافة إلى رفع ملف PDF يوضح فكرة مشروعك بالتفصيل.",
  },
  {
    id: "2",
    question: "ما هي شروط القبول في الحاضنة؟",
    answer:
      "يجب أن تكون طالباً مسجلاً في الجامعة، وأن يكون لديك فكرة مشروع مبتكرة وقابلة للتطبيق. كما يُفضل وجود فريق عمل متكامل ودراسة أولية للمشروع.",
  },
  {
    id: "3",
    question: "هل يمكنني تغيير معلومات مشروعي بعد التسجيل؟",
    answer:
      "نعم، يمكنك تحديث معلومات مشروعك من خلال لوحة التحكم الخاصة بك. ولكن التغييرات الجوهرية قد تتطلب موافقة من إدارة الحاضنة.",
  },
  {
    id: "4",
    question: "ما هي الخدمات التي تقدمها الحاضنة؟",
    answer:
      "نقدم التوجيه والإرشاد، ورش العمل التدريبية، الوصول إلى المختبرات والمعدات، التواصل مع المرشدين والخبراء، والمساعدة في تطوير نماذج الأعمال.",
  },
  {
    id: "5",
    question: "كم تستغرق عملية مراجعة الطلبات؟",
    answer:
      "عادة ما تستغرق عملية مراجعة الطلبات من 5 إلى 10 أيام عمل. سيتم إشعارك بالنتيجة عبر البريد الإلكتروني المسجل.",
  },
  {
    id: "6",
    question: "هل يمكنني الانضمام لأكثر من مشروع؟",
    answer: "يُسمح للطالب بالمشاركة في مشروع واحد فقط كعضو أساسي، ولكن يمكن المساهمة في مشاريع أخرى كمستشار أو متطوع.",
  },
  {
    id: "7",
    question: "كيف يمكنني الوصول إلى المعدات والمختبرات؟",
    answer:
      "يمكنك حجز المعدات والمختبرات من خلال نظام الحجز الإلكتروني في البوابة الطلابية. تأكد من قراءة قواعد الاستخدام والسلامة قبل الحجز.",
  },
  {
    id: "8",
    question: "هل هناك رسوم للانضمام إلى الحاضنة؟",
    answer:
      "لا، جميع خدمات الحاضنة مجانية للطلاب المسجلين في الجامعة. هدفنا هو دعم الابتكار وريادة الأعمال بين الطلاب.",
  },
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const filteredFaqs = faqs.filter((faq) => faq.question.includes(searchTerm) || faq.answer.includes(searchTerm))

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 mb-6">
              <ArrowRight className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>

          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#18A39E]/10 rounded-full">
                <HelpCircle className="h-8 w-8 text-[#18A39E]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">مركز المساعدة</h1>
            <p className="text-lg text-muted-foreground">نحن هنا لمساعدتك في رحلتك الريادية</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-[#18A39E]" />
                  الأسئلة الشائعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="ابحث في الأسئلة الشائعة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">لم يتم العثور على نتائج مطابقة لبحثك</div>
                )}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>تواصل سريع</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Mail className="h-5 w-5 text-[#18A39E]" />
                  <div>
                    <p className="font-medium">البريد الإلكتروني</p>
                    <p className="text-sm text-muted-foreground">support@incubator.univ-djelfa.dz</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Phone className="h-5 w-5 text-[#18A39E]" />
                  <div>
                    <p className="font-medium">الهاتف</p>
                    <p className="text-sm text-muted-foreground">+213 27 87 XX XX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-[#18A39E]" />
                  أرسل استفساراً
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="example@univ-djelfa.dz"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">فئة الاستفسار *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر فئة الاستفسار" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registration">التسجيل والقبول</SelectItem>
                        <SelectItem value="technical">مشكلة تقنية</SelectItem>
                        <SelectItem value="project">استفسار عن المشروع</SelectItem>
                        <SelectItem value="equipment">المعدات والمختبرات</SelectItem>
                        <SelectItem value="mentoring">الإرشاد والتوجيه</SelectItem>
                        <SelectItem value="events">الفعاليات وورش العمل</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع الاستفسار *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="موضوع مختصر للاستفسار"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">تفاصيل الاستفسار *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="اكتب تفاصيل استفسارك هنا..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#18A39E] hover:bg-[#18A39E]/90">
                    <Send className="h-4 w-4 ml-2" />
                    إرسال الاستفسار
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>ملاحظة:</strong> سنقوم بالرد على استفسارك خلال 24-48 ساعة عمل. للاستفسارات العاجلة، يرجى
                    التواصل معنا هاتفياً.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
