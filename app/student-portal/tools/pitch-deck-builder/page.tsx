"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Download, Share2 } from "lucide-react"

export default function PitchDeckBuilderPage() {
  const [slides, setSlides] = useState([
    { id: 1, title: "المشكلة", type: "problem", completed: true },
    { id: 2, title: "الحل", type: "solution", completed: true },
    { id: 3, title: "السوق المستهدف", type: "market", completed: false },
    { id: 4, title: "نموذج العمل", type: "business-model", completed: false },
    { id: 5, title: "الفريق", type: "team", completed: false },
  ])

  const [currentSlide, setCurrentSlide] = useState(1)

  const slideTemplates = [
    { type: "problem", title: "المشكلة", description: "حدد المشكلة التي يحلها مشروعك" },
    { type: "solution", title: "الحل", description: "اشرح الحل المبتكر الذي تقدمه" },
    { type: "market", title: "السوق المستهدف", description: "حدد جمهورك المستهدف وحجم السوق" },
    { type: "business-model", title: "نموذج العمل", description: "كيف ستحقق الأرباح؟" },
    { type: "team", title: "الفريق", description: "قدم أعضاء فريقك وخبراتهم" },
    { type: "traction", title: "الإنجازات", description: "أظهر التقدم والنتائج المحققة" },
    { type: "financials", title: "التوقعات المالية", description: "عرض الإيرادات والتكاليف المتوقعة" },
    { type: "funding", title: "التمويل المطلوب", description: "كم تحتاج وكيف ستستخدم الأموال؟" },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">منشئ العروض التقديمية</h1>
            <p className="text-muted-foreground mt-2">أنشئ عرضاً تقديمياً احترافياً لمشروعك الناشئ</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 ml-2" />
              معاينة
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 ml-2" />
              تحميل
            </Button>
            <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
              <Share2 className="h-4 w-4 ml-2" />
              مشاركة
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Slides Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">الشرائح</CardTitle>
                <Button size="sm" variant="outline" className="w-full">
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة شريحة
                </Button>
              </CardHeader>
              <CardContent className="space-y-2">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      currentSlide === slide.id
                        ? "border-[#18A39E] bg-[#18A39E]/10"
                        : "border-border hover:border-[#18A39E]/50"
                    }`}
                    onClick={() => setCurrentSlide(slide.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">
                          {index + 1}. {slide.title}
                        </p>
                        <Badge
                          variant={slide.completed ? "default" : "secondary"}
                          className={slide.completed ? "bg-[#18A39E]" : ""}
                        >
                          {slide.completed ? "مكتملة" : "قيد العمل"}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">قوالب الشرائح</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {slideTemplates.map((template) => (
                  <div
                    key={template.type}
                    className="p-2 rounded border border-dashed border-border hover:border-[#18A39E] cursor-pointer transition-colors"
                  >
                    <p className="font-medium text-sm">{template.title}</p>
                    <p className="text-xs text-muted-foreground">{template.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>تحرير الشريحة: {slides.find((s) => s.id === currentSlide)?.title}</CardTitle>
                  <Badge variant="outline">
                    شريحة {currentSlide} من {slides.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="content">المحتوى</TabsTrigger>
                    <TabsTrigger value="design">التصميم</TabsTrigger>
                    <TabsTrigger value="notes">الملاحظات</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-4 mt-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="slide-title">عنوان الشريحة</Label>
                        <Input
                          id="slide-title"
                          placeholder="أدخل عنوان الشريحة"
                          defaultValue={slides.find((s) => s.id === currentSlide)?.title}
                        />
                      </div>

                      <div>
                        <Label htmlFor="slide-content">محتوى الشريحة</Label>
                        <Textarea
                          id="slide-content"
                          placeholder="أدخل محتوى الشريحة هنا..."
                          className="min-h-[200px]"
                          defaultValue={
                            currentSlide === 1
                              ? "المشكلة التي نحلها:\n\n• نقص في الحلول التقنية المبتكرة\n• صعوبة الوصول للخدمات الرقمية\n• الحاجة لحلول مخصصة للسوق المحلي"
                              : currentSlide === 2
                                ? "الحل المبتكر:\n\n• منصة تقنية شاملة\n• واجهة سهلة الاستخدام\n• دعم كامل للغة العربية\n• تكامل مع الأنظمة المحلية"
                                : ""
                          }
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="slide-image">رابط الصورة</Label>
                          <Input id="slide-image" placeholder="https://example.com/image.jpg" />
                        </div>
                        <div>
                          <Label htmlFor="slide-layout">تخطيط الشريحة</Label>
                          <select className="w-full p-2 border border-border rounded-md">
                            <option>نص فقط</option>
                            <option>نص + صورة</option>
                            <option>صورة فقط</option>
                            <option>قائمة نقاط</option>
                            <option>جدول</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="design" className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>لون الخلفية</Label>
                        <div className="flex gap-2 mt-2">
                          <div className="w-8 h-8 rounded bg-white border-2 border-border cursor-pointer"></div>
                          <div className="w-8 h-8 rounded bg-[#18A39E] cursor-pointer"></div>
                          <div className="w-8 h-8 rounded bg-blue-500 cursor-pointer"></div>
                          <div className="w-8 h-8 rounded bg-gray-100 cursor-pointer"></div>
                        </div>
                      </div>
                      <div>
                        <Label>حجم الخط</Label>
                        <select className="w-full p-2 border border-border rounded-md mt-2">
                          <option>صغير</option>
                          <option>متوسط</option>
                          <option>كبير</option>
                          <option>كبير جداً</option>
                        </select>
                      </div>
                      <div>
                        <Label>نوع الخط</Label>
                        <select className="w-full p-2 border border-border rounded-md">
                          <option>Cairo</option>
                          <option>Amiri</option>
                          <option>Tajawal</option>
                          <option>Almarai</option>
                        </select>
                      </div>
                      <div>
                        <Label>محاذاة النص</Label>
                        <select className="w-full p-2 border border-border rounded-md">
                          <option>يمين</option>
                          <option>وسط</option>
                          <option>يسار</option>
                          <option>ضبط</option>
                        </select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="notes" className="space-y-4 mt-6">
                    <div>
                      <Label htmlFor="speaker-notes">ملاحظات المتحدث</Label>
                      <Textarea id="speaker-notes" placeholder="أضف ملاحظات للمتحدث هنا..." className="min-h-[150px]" />
                    </div>
                    <div>
                      <Label htmlFor="slide-duration">مدة الشريحة (بالدقائق)</Label>
                      <Input id="slide-duration" type="number" placeholder="5" min="1" max="30" />
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between mt-6 pt-6 border-t">
                  <Button
                    variant="outline"
                    disabled={currentSlide === 1}
                    onClick={() => setCurrentSlide(Math.max(1, currentSlide - 1))}
                  >
                    الشريحة السابقة
                  </Button>
                  <Button
                    className="bg-[#18A39E] hover:bg-[#16918A]"
                    onClick={() => {
                      // Mark current slide as completed
                      setSlides(
                        slides.map((slide) => (slide.id === currentSlide ? { ...slide, completed: true } : slide)),
                      )
                    }}
                  >
                    حفظ الشريحة
                  </Button>
                  <Button
                    variant="outline"
                    disabled={currentSlide === slides.length}
                    onClick={() => setCurrentSlide(Math.min(slides.length, currentSlide + 1))}
                  >
                    الشريحة التالية
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
