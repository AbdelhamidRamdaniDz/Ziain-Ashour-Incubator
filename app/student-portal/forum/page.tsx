"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Plus, Search, Clock, User } from "lucide-react"

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock forum data
  const forumSections = [
    {
      id: "faqs",
      title: "الأسئلة الشائعة",
      description: "الأسئلة المتكررة والإجابات المفيدة",
      threads: [
        {
          id: 1,
          title: "كيف أقدم طلب براءة اختراع؟",
          author: "أحمد محمد",
          replies: 12,
          lastUpdate: "منذ ساعتين",
          isSticky: true,
          tags: ["براءة اختراع", "إجراءات"],
        },
        {
          id: 2,
          title: "ما هي متطلبات التسجيل في الحاضنة؟",
          author: "فاطمة علي",
          replies: 8,
          lastUpdate: "منذ 4 ساعات",
          isSticky: false,
          tags: ["تسجيل", "متطلبات"],
        },
        {
          id: 3,
          title: "كيف أحصل على تمويل لمشروعي؟",
          author: "محمد حسن",
          replies: 15,
          lastUpdate: "منذ يوم",
          isSticky: false,
          tags: ["تمويل", "استثمار"],
        },
      ],
    },
    {
      id: "projects",
      title: "مشاريعي ومشاكلها",
      description: "مناقشة المشاريع والتحديات التقنية",
      threads: [
        {
          id: 4,
          title: "مشكلة في تطوير تطبيق الجوال",
          author: "سارة أحمد",
          replies: 6,
          lastUpdate: "منذ 3 ساعات",
          isSticky: false,
          tags: ["تطوير", "تطبيقات"],
        },
        {
          id: 5,
          title: "كيف أختار النموذج التجاري المناسب؟",
          author: "عمر خالد",
          replies: 9,
          lastUpdate: "منذ 5 ساعات",
          isSticky: false,
          tags: ["نموذج تجاري", "استراتيجية"],
        },
        {
          id: 6,
          title: "تحديات التسويق الرقمي للمشاريع الناشئة",
          author: "ليلى محمود",
          replies: 11,
          lastUpdate: "منذ يومين",
          isSticky: false,
          tags: ["تسويق", "رقمي"],
        },
      ],
    },
    {
      id: "support",
      title: "الدعم الفني",
      description: "المساعدة في المشاكل التقنية",
      threads: [
        {
          id: 7,
          title: "مشكلة في تسجيل الدخول للمنصة",
          author: "يوسف عبدالله",
          replies: 3,
          lastUpdate: "منذ ساعة",
          isSticky: false,
          tags: ["تقني", "دخول"],
        },
        {
          id: 8,
          title: "كيف أرفع ملفات المشروع؟",
          author: "نور الدين",
          replies: 5,
          lastUpdate: "منذ 6 ساعات",
          isSticky: false,
          tags: ["رفع ملفات", "تقني"],
        },
      ],
    },
  ]

  const filteredSections = forumSections.map((section) => ({
    ...section,
    threads: section.threads.filter(
      (thread) =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.author.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">المنتدى الطلابي</h1>
              <p className="text-muted-foreground mt-2">شارك الأفكار واطرح الأسئلة وتفاعل مع زملائك الطلاب</p>
            </div>
            <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">
              <Plus className="w-4 h-4 ml-2" />
              موضوع جديد
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ابحث في المواضيع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Forum Sections */}
        <Tabs defaultValue="faqs" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faqs">الأسئلة الشائعة</TabsTrigger>
            <TabsTrigger value="projects">مشاريعي ومشاكلها</TabsTrigger>
            <TabsTrigger value="support">الدعم الفني</TabsTrigger>
          </TabsList>

          {filteredSections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#18A39E]" />
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.threads.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">لا توجد مواضيع تطابق البحث</div>
                    ) : (
                      section.threads.map((thread) => (
                        <Card key={thread.id} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                                <AvatarFallback>{thread.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1 space-y-2 mr-4">
                                <div className="flex items-center gap-2">
                                  {thread.isSticky && (
                                    <Badge variant="secondary" className="bg-[#18A39E]/10 text-[#18A39E]">
                                      مثبت
                                    </Badge>
                                  )}
                                  <h3 className="font-semibold text-foreground hover:text-[#18A39E] transition-colors">
                                    {thread.title}
                                  </h3>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {thread.author}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="w-4 h-4" />
                                    {thread.replies} رد
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {thread.lastUpdate}
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  {thread.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>إجراءات سريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Plus className="w-6 h-6 text-[#18A39E]" />
                <span>طرح سؤال جديد</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <MessageCircle className="w-6 h-6 text-[#18A39E]" />
                <span>مشاركة مشروع</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Search className="w-6 h-6 text-[#18A39E]" />
                <span>البحث المتقدم</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
