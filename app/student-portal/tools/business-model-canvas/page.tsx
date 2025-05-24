"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Save, Download, Share, RefreshCw, Lightbulb } from "lucide-react"

export default function BusinessModelCanvasPage() {
  const [canvasData, setCanvasData] = useState({
    keyPartners: "",
    keyActivities: "",
    keyResources: "",
    valuePropositions: "",
    customerRelationships: "",
    channels: "",
    customerSegments: "",
    costStructure: "",
    revenueStreams: "",
  })

  const updateCanvas = (field: string, value: string) => {
    setCanvasData((prev) => ({ ...prev, [field]: value }))
  }

  const canvasFields = [
    {
      id: "keyPartners",
      title: "الشركاء الرئيسيون",
      description: "من هم الشركاء والموردون الرئيسيون؟",
      placeholder: "اكتب عن الشركاء الاستراتيجيين، الموردين، التحالفات...",
      color: "bg-blue-50 dark:bg-blue-950",
    },
    {
      id: "keyActivities",
      title: "الأنشطة الرئيسية",
      description: "ما هي الأنشطة الأساسية المطلوبة؟",
      placeholder: "الإنتاج، حل المشاكل، المنصة/الشبكة...",
      color: "bg-green-50 dark:bg-green-950",
    },
    {
      id: "keyResources",
      title: "الموارد الرئيسية",
      description: "ما هي الموارد الأساسية المطلوبة؟",
      placeholder: "الموارد المادية، الفكرية، البشرية، المالية...",
      color: "bg-yellow-50 dark:bg-yellow-950",
    },
    {
      id: "valuePropositions",
      title: "عروض القيمة",
      description: "ما القيمة التي تقدمها للعملاء؟",
      placeholder: "المنتجات والخدمات التي تخلق قيمة لشريحة عملاء محددة...",
      color: "bg-red-50 dark:bg-red-950",
    },
    {
      id: "customerRelationships",
      title: "علاقات العملاء",
      description: "كيف تتفاعل مع العملاء؟",
      placeholder: "المساعدة الشخصية، الخدمة الذاتية، المجتمعات...",
      color: "bg-purple-50 dark:bg-purple-950",
    },
    {
      id: "channels",
      title: "القنوات",
      description: "كيف تصل إلى العملاء؟",
      placeholder: "المتاجر، الويب، الشركاء، المبيعات المباشرة...",
      color: "bg-indigo-50 dark:bg-indigo-950",
    },
    {
      id: "customerSegments",
      title: "شرائح العملاء",
      description: "من هم عملاؤك المستهدفون؟",
      placeholder: "السوق الجماهيري، الأسواق المتخصصة، المجموعات...",
      color: "bg-pink-50 dark:bg-pink-950",
    },
    {
      id: "costStructure",
      title: "هيكل التكاليف",
      description: "ما هي التكاليف الرئيسية؟",
      placeholder: "التكاليف الثابتة، المتغيرة، اقتصاديات الحجم...",
      color: "bg-orange-50 dark:bg-orange-950",
    },
    {
      id: "revenueStreams",
      title: "مصادر الإيرادات",
      description: "كيف تحقق الإيرادات؟",
      placeholder: "بيع الأصول، رسوم الاستخدام، الاشتراكات، الإعلانات...",
      color: "bg-teal-50 dark:bg-teal-950",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">نموذج العمل التجاري</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">أداة لتصميم وتطوير نموذج العمل التجاري لمشروعك</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            إعادة تعيين
          </Button>
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            مشاركة
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            تصدير
          </Button>
          <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">
            <Save className="w-4 h-4 mr-2" />
            حفظ
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#18A39E]" />
            نصائح لنموذج العمل التجاري
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">ابدأ بعرض القيمة</h4>
              <p className="text-gray-600 dark:text-gray-400">حدد بوضوح ما تقدمه من قيمة فريدة للعملاء</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">اعرف عملاءك</h4>
              <p className="text-gray-600 dark:text-gray-400">حدد شرائح العملاء بدقة واحتياجاتهم</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">فكر في الاستدامة</h4>
              <p className="text-gray-600 dark:text-gray-400">تأكد من أن نموذجك قابل للتطبيق مالياً</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {canvasFields.slice(0, 3).map((field) => (
            <Card key={field.id} className={field.color}>
              <CardHeader>
                <CardTitle className="text-lg">{field.title}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={field.placeholder}
                  value={canvasData[field.id as keyof typeof canvasData]}
                  onChange={(e) => updateCanvas(field.id, e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {canvasFields.slice(3, 6).map((field) => (
            <Card key={field.id} className={field.color}>
              <CardHeader>
                <CardTitle className="text-lg">{field.title}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={field.placeholder}
                  value={canvasData[field.id as keyof typeof canvasData]}
                  onChange={(e) => updateCanvas(field.id, e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {canvasFields.slice(6).map((field) => (
            <Card key={field.id} className={field.color}>
              <CardHeader>
                <CardTitle className="text-lg">{field.title}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder={field.placeholder}
                  value={canvasData[field.id as keyof typeof canvasData]}
                  onChange={(e) => updateCanvas(field.id, e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ملخص نموذج العمل</CardTitle>
          <CardDescription>نظرة عامة على نموذج العمل التجاري الخاص بك</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">نقاط القوة</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• عرض قيمة واضح ومميز</li>
                <li>• شرائح عملاء محددة بدقة</li>
                <li>• قنوات توزيع متنوعة</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">نقاط التحسين</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• تطوير شراكات استراتيجية أكثر</li>
                <li>• تنويع مصادر الإيرادات</li>
                <li>• تحسين هيكل التكاليف</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
