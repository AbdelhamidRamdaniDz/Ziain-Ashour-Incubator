"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Search, ThumbsUp, ThumbsDown, HelpCircle } from "lucide-react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])
  const [feedback, setFeedback] = useState<{ [key: number]: "up" | "down" | null }>({})

  // Mock FAQ data
  const faqCategories = [
    {
      id: 1,
      title: "عام",
      description: "أسئلة عامة حول الحاضنة والخدمات",
      questions: [
        {
          id: 1,
          question: "ما هي حاضنة جامعة زين عاشور للمشاريع الناشئة؟",
          answer:
            "حاضنة جامعة زين عاشور للمشاريع الناشئة هي منصة متكاملة تهدف إلى دعم الطلاب وريادي الأعمال في تطوير أفكارهم وتحويلها إلى مشاريع ناجحة. نوفر التدريب، الإرشاد، التمويل، والدعم التقني اللازم لنمو المشاريع الناشئة.",
          helpful: 45,
          notHelpful: 3,
        },
        {
          id: 2,
          question: "من يمكنه الانضمام إلى الحاضنة؟",
          answer:
            "يمكن لجميع طلاب الجامعة والخريجين الجدد (خلال سنتين من التخرج) التقدم للانضمام إلى الحاضنة. كما نرحب بريادي الأعمال من خارج الجامعة الذين لديهم أفكار مبتكرة ومشاريع واعدة.",
          helpful: 38,
          notHelpful: 2,
        },
        {
          id: 3,
          question: "ما هي شروط القبول في الحاضنة؟",
          answer:
            "شروط القبول تشمل: وجود فكرة مشروع واضحة ومبتكرة، الالتزام بحضور البرامج التدريبية، تقديم خطة عمل أولية، والاستعداد للعمل بجدية على تطوير المشروع. يتم تقييم الطلبات من قبل لجنة متخصصة.",
          helpful: 32,
          notHelpful: 5,
        },
      ],
    },
    {
      id: 2,
      title: "البرامج والخدمات",
      description: "معلومات حول البرامج التدريبية والخدمات المقدمة",
      questions: [
        {
          id: 4,
          question: "ما هي البرامج التدريبية المتاحة؟",
          answer:
            "نقدم مجموعة شاملة من البرامج التدريبية تشمل: أساسيات ريادة الأعمال، تطوير نماذج الأعمال، التسويق الرقمي، إدارة الأموال، القيادة وإدارة الفرق، تطوير المنتجات، والعروض التقديمية. جميع البرامج متاحة باللغة العربية ومصممة خصيصاً للسوق المحلي.",
          helpful: 42,
          notHelpful: 1,
        },
        {
          id: 5,
          question: "هل يمكنني الحصول على إرشاد شخصي؟",
          answer:
            "نعم، نوفر برنامج إرشاد شخصي مع خبراء ومرشدين متخصصين في مختلف المجالات. يمكنك حجز جلسات فردية مع المرشدين لمناقشة تحديات مشروعك والحصول على نصائح مخصصة لحالتك.",
          helpful: 35,
          notHelpful: 2,
        },
        {
          id: 6,
          question: "ما هي الأدوات المتاحة لتطوير المشاريع؟",
          answer:
            "نوفر مجموعة من الأدوات التفاعلية مثل: نموذج العمل التجاري، تحليل SWOT، مولد الشخصيات المستهدفة، التوقعات المالية، منشئ العروض التقديمية، أدوات أبحاث السوق، وأدوات إدارة المشاريع. جميع الأدوات مجانية ومتاحة 24/7.",
          helpful: 28,
          notHelpful: 3,
        },
      ],
    },
    {
      id: 3,
      title: "التمويل والاستثمار",
      description: "أسئلة حول فرص التمويل والاستثمار",
      questions: [
        {
          id: 7,
          question: "هل تقدم الحاضنة تمويلاً للمشاريع؟",
          answer:
            "نعم، نقدم عدة أنواع من الدعم المالي: منح بدء التشغيل (حتى 50,000 ريال)، قروض ميسرة بدون فوائد، وربط المشاريع الواعدة بالمستثمرين والصناديق الاستثمارية. التمويل يعتمد على جودة المشروع ومرحلة تطويره.",
          helpful: 52,
          notHelpful: 4,
        },
        {
          id: 8,
          question: "كيف يمكنني التقدم للحصول على تمويل؟",
          answer:
            "للتقدم للحصول على تمويل، يجب أولاً إكمال البرنامج التدريبي الأساسي وتقديم خطة عمل مفصلة. بعدها يمكنك تقديم طلب التمويل عبر المنصة، وسيتم تقييم طلبك من قبل لجنة متخصصة خلال 2-3 أسابيع.",
          helpful: 29,
          notHelpful: 6,
        },
      ],
    },
    {
      id: 4,
      title: "التقنية والدعم",
      description: "مساعدة تقنية ودعم استخدام المنصة",
      questions: [
        {
          id: 9,
          question: "كيف يمكنني الوصول إلى المواد التعليمية؟",
          answer:
            "بعد تسجيل الدخول إلى حسابك، يمكنك الوصول إلى جميع المواد التعليمية من خلال قسم 'الدورات التدريبية' في لوحة التحكم. المواد متاحة على شكل فيديوهات، ملفات PDF، وأدوات تفاعلية.",
          helpful: 33,
          notHelpful: 2,
        },
        {
          id: 10,
          question: "ماذا أفعل إذا واجهت مشكلة تقنية؟",
          answer:
            "في حالة مواجهة أي مشكلة تقنية، يمكنك التواصل مع فريق الدعم التقني عبر نظام الرسائل في المنصة، أو إرسال بريد إلكتروني إلى support@incubator.zu.edu.sa. نحن نستجيب لجميع الاستفسارات خلال 24 ساعة.",
          helpful: 41,
          notHelpful: 1,
        },
      ],
    },
  ]

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((q) => ({ ...q, categoryTitle: category.title })),
  )

  // Filter questions based on search
  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleFeedback = (questionId: number, type: "up" | "down") => {
    setFeedback((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === type ? null : type,
    }))
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">الأسئلة الشائعة</h1>
          <p className="text-muted-foreground">
            إجابات على الأسئلة الأكثر شيوعاً حول حاضنة جامعة زين عاشور للمشاريع الناشئة
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">نتائج البحث ({filteredQuestions.length})</h2>
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <Card key={`search-${question.id}`}>
                    <Collapsible open={openItems.includes(question.id)} onOpenChange={() => toggleItem(question.id)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="text-right flex-1">
                              <CardTitle className="text-lg">{question.question}</CardTitle>
                              <Badge variant="outline" className="mt-2 text-xs">
                                {question.categoryTitle}
                              </Badge>
                            </div>
                            {openItems.includes(question.id) ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed mb-4">{question.answer}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-muted-foreground">هل كانت هذه الإجابة مفيدة؟</span>
                              <div className="flex gap-2">
                                <Button
                                  variant={feedback[question.id] === "up" ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => handleFeedback(question.id, "up")}
                                  className="h-8 w-8 p-0"
                                >
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant={feedback[question.id] === "down" ? "destructive" : "outline"}
                                  size="sm"
                                  onClick={() => handleFeedback(question.id, "down")}
                                  className="h-8 w-8 p-0"
                                >
                                  <ThumbsDown className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {question.helpful} مفيدة • {question.notHelpful} غير مفيدة
                            </div>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">لم يتم العثور على أسئلة تطابق بحثك</p>
              </div>
            )}
          </div>
        )}

        {/* Categories */}
        {!searchQuery && (
          <div className="space-y-6">
            {faqCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.questions.map((question) => (
                    <Card key={question.id} className="border-l-4 border-l-[#18A39E]">
                      <Collapsible open={openItems.includes(question.id)} onOpenChange={() => toggleItem(question.id)}>
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-right flex-1">{question.question}</CardTitle>
                              {openItems.includes(question.id) ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed mb-4">{question.answer}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <span className="text-sm text-muted-foreground">هل كانت هذه الإجابة مفيدة؟</span>
                                <div className="flex gap-2">
                                  <Button
                                    variant={feedback[question.id] === "up" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handleFeedback(question.id, "up")}
                                    className="h-8 w-8 p-0"
                                    style={{
                                      backgroundColor: feedback[question.id] === "up" ? "#18A39E" : "transparent",
                                    }}
                                  >
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant={feedback[question.id] === "down" ? "destructive" : "outline"}
                                    size="sm"
                                    onClick={() => handleFeedback(question.id, "down")}
                                    className="h-8 w-8 p-0"
                                  >
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {question.helpful} مفيدة • {question.notHelpful} غير مفيدة
                              </div>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Support */}
        <Card className="mt-8 bg-[#18A39E]/5 border-[#18A39E]/20">
          <CardContent className="text-center py-8">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-[#18A39E]" />
            <h3 className="text-lg font-semibold mb-2">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-muted-foreground mb-4">تواصل مع فريق الدعم للحصول على مساعدة شخصية</p>
            <Button style={{ backgroundColor: "#18A39E" }}>تواصل مع الدعم</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
