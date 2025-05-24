"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Save, Download, Share, RefreshCw, TrendingUp, TrendingDown, Shield, AlertTriangle } from "lucide-react"

export default function SWOTAnalysisPage() {
  const [swotData, setSWOTData] = useState({
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
  })

  const updateSWOT = (field: string, value: string) => {
    setSWOTData((prev) => ({ ...prev, [field]: value }))
  }

  const swotSections = [
    {
      id: "strengths",
      title: "نقاط القوة (Strengths)",
      description: "العوامل الداخلية الإيجابية",
      icon: TrendingUp,
      color: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800",
      iconColor: "text-green-600",
      placeholder:
        "• فريق عمل متخصص ومتمرس\n• تقنية مبتكرة ومتطورة\n• علاقات قوية مع العملاء\n• موقع استراتيجي ممتاز\n• سمعة جيدة في السوق",
      examples: ["الخبرة والمهارات", "الموارد المالية", "التقنية والابتكار", "العلامة التجارية", "الموقع الجغرافي"],
    },
    {
      id: "weaknesses",
      title: "نقاط الضعف (Weaknesses)",
      description: "العوامل الداخلية السلبية",
      icon: TrendingDown,
      color: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800",
      iconColor: "text-red-600",
      placeholder:
        "• نقص في الخبرة التسويقية\n• موارد مالية محدودة\n• اعتماد على موردين قلائل\n• نقص في الكوادر المتخصصة\n• عمليات غير مؤتمتة",
      examples: ["نقص الموارد", "ضعف في المهارات", "مشاكل في العمليات", "ضعف الموقع", "سمعة سيئة"],
    },
    {
      id: "opportunities",
      title: "الفرص (Opportunities)",
      description: "العوامل الخارجية الإيجابية",
      icon: Shield,
      color: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600",
      placeholder:
        "• نمو السوق المحلي\n• دعم حكومي للمشاريع الناشئة\n• تطور التقنيات الجديدة\n• تغيير في سلوك المستهلكين\n• فرص التوسع الإقليمي",
      examples: ["نمو السوق", "التطورات التقنية", "التغييرات التنظيمية", "الاتجاهات الاجتماعية", "الشراكات الجديدة"],
    },
    {
      id: "threats",
      title: "التهديدات (Threats)",
      description: "العوامل الخارجية السلبية",
      icon: AlertTriangle,
      color: "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800",
      iconColor: "text-yellow-600",
      placeholder:
        "• منافسة شديدة في السوق\n• تغييرات في القوانين\n• تقلبات اقتصادية\n• تطور تقنيات بديلة\n• تغيير في أذواق العملاء",
      examples: [
        "المنافسة القوية",
        "التغييرات التنظيمية",
        "الركود الاقتصادي",
        "التطورات التقنية",
        "تغيير سلوك العملاء",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">تحليل SWOT</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">تحليل نقاط القوة والضعف والفرص والتهديدات لمشروعك</p>
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

      <Card>
        <CardHeader>
          <CardTitle>ما هو تحليل SWOT؟</CardTitle>
          <CardDescription>
            تحليل SWOT هو أداة تخطيط استراتيجي تساعد في تقييم نقاط القوة والضعف والفرص والتهديدات المرتبطة بمشروع أو
            منظمة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium">نقاط القوة</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">العوامل الداخلية الإيجابية</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-medium">نقاط الضعف</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">العوامل الداخلية السلبية</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium">الفرص</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">العوامل الخارجية الإيجابية</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-medium">التهديدات</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">العوامل الخارجية السلبية</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {swotSections.map((section) => {
          const Icon = section.icon
          return (
            <Card key={section.id} className={section.color}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${section.iconColor}`} />
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder={section.placeholder}
                  value={swotData[section.id as keyof typeof swotData]}
                  onChange={(e) => updateSWOT(section.id, e.target.value)}
                  className="min-h-[200px] resize-none"
                />
                <div>
                  <h4 className="font-medium mb-2">أمثلة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {section.examples.map((example, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>الاستراتيجيات المقترحة</CardTitle>
          <CardDescription>بناءً على تحليل SWOT، إليك بعض الاستراتيجيات المقترحة</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">استراتيجية SO (القوة + الفرص)</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  استخدم نقاط القوة لاستغلال الفرص المتاحة في السوق
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">استراتيجية WO (الضعف + الفرص)</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">تحسين نقاط الضعف للاستفادة من الفرص المتاحة</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                  استراتيجية ST (القوة + التهديدات)
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  استخدم نقاط القوة لمواجهة التهديدات الخارجية
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">استراتيجية WT (الضعف + التهديدات)</h4>
                <p className="text-sm text-red-700 dark:text-red-300">تقليل نقاط الضعف وتجنب التهديدات</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>خطة العمل التالية</CardTitle>
          <CardDescription>الخطوات المقترحة بناءً على تحليل SWOT</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#18A39E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h4 className="font-medium">تعزيز نقاط القوة</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">ركز على تطوير وتعزيز نقاط القوة الحالية</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#18A39E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h4 className="font-medium">معالجة نقاط الضعف</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">وضع خطط لتحسين أو تقليل تأثير نقاط الضعف</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#18A39E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h4 className="font-medium">استغلال الفرص</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">تطوير استراتيجيات للاستفادة من الفرص المتاحة</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#18A39E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h4 className="font-medium">التأهب للتهديدات</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">وضع خطط طوارئ للتعامل مع التهديدات المحتملة</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
