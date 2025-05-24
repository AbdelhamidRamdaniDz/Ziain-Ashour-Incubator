"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, Download, Share, RefreshCw, TrendingUp, DollarSign, Calculator, PieChart } from "lucide-react"

export default function FinancialProjectionsPage() {
  const [projectionData, setProjectionData] = useState({
    // Revenue projections
    year1Revenue: "",
    year2Revenue: "",
    year3Revenue: "",
    // Cost projections
    year1Costs: "",
    year2Costs: "",
    year3Costs: "",
    // Initial investment
    initialInvestment: "",
    // Monthly recurring costs
    monthlyOperatingCosts: "",
    // Growth rate
    revenueGrowthRate: "",
    costGrowthRate: "",
  })

  const updateProjection = (field: string, value: string) => {
    setProjectionData((prev) => ({ ...prev, [field]: value }))
  }

  // Calculate projections
  const calculateProjections = () => {
    const year1Rev = Number.parseFloat(projectionData.year1Revenue) || 0
    const year1Cost = Number.parseFloat(projectionData.year1Costs) || 0
    const revenueGrowth = Number.parseFloat(projectionData.revenueGrowthRate) || 0
    const costGrowth = Number.parseFloat(projectionData.costGrowthRate) || 0

    const projections = []
    for (let year = 1; year <= 3; year++) {
      const revenue = year === 1 ? year1Rev : year1Rev * Math.pow(1 + revenueGrowth / 100, year - 1)
      const costs = year === 1 ? year1Cost : year1Cost * Math.pow(1 + costGrowth / 100, year - 1)
      const profit = revenue - costs
      const margin = revenue > 0 ? (profit / revenue) * 100 : 0

      projections.push({
        year,
        revenue,
        costs,
        profit,
        margin,
      })
    }
    return projections
  }

  const projections = calculateProjections()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ar-DZ", {
      style: "currency",
      currency: "DZD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">التوقعات المالية</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">إنشاء وتحليل التوقعات المالية لمشروعك</p>
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

      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="input">إدخال البيانات</TabsTrigger>
          <TabsTrigger value="projections">التوقعات</TabsTrigger>
          <TabsTrigger value="analysis">التحليل</TabsTrigger>
          <TabsTrigger value="charts">الرسوم البيانية</TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#18A39E]" />
                  توقعات الإيرادات
                </CardTitle>
                <CardDescription>أدخل التوقعات المالية للإيرادات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">إيرادات السنة الأولى (دج)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 1000000"
                    value={projectionData.year1Revenue}
                    onChange={(e) => updateProjection("year1Revenue", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">معدل نمو الإيرادات السنوي (%)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 25"
                    value={projectionData.revenueGrowthRate}
                    onChange={(e) => updateProjection("revenueGrowthRate", e.target.value)}
                  />
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">نصائح للإيرادات</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• ادرس السوق المستهدف بعناية</li>
                    <li>• احسب عدد العملاء المتوقع</li>
                    <li>• حدد متوسط قيمة الشراء</li>
                    <li>• اعتبر الموسمية في المبيعات</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#18A39E]" />
                  توقعات التكاليف
                </CardTitle>
                <CardDescription>أدخل التوقعات المالية للتكاليف</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">تكاليف السنة الأولى (دج)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 600000"
                    value={projectionData.year1Costs}
                    onChange={(e) => updateProjection("year1Costs", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">معدل نمو التكاليف السنوي (%)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 15"
                    value={projectionData.costGrowthRate}
                    onChange={(e) => updateProjection("costGrowthRate", e.target.value)}
                  />
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">أنواع التكاليف</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• التكاليف الثابتة (الإيجار، الرواتب)</li>
                    <li>• التكاليف المتغيرة (المواد الخام)</li>
                    <li>• تكاليف التسويق والإعلان</li>
                    <li>• التكاليف الإدارية والقانونية</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#18A39E]" />
                  الاستثمار الأولي
                </CardTitle>
                <CardDescription>رأس المال المطلوب لبدء المشروع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">الاستثمار الأولي (دج)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 500000"
                    value={projectionData.initialInvestment}
                    onChange={(e) => updateProjection("initialInvestment", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">التكاليف التشغيلية الشهرية (دج)</label>
                  <Input
                    type="number"
                    placeholder="مثال: 50000"
                    value={projectionData.monthlyOperatingCosts}
                    onChange={(e) => updateProjection("monthlyOperatingCosts", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ملخص سريع</CardTitle>
                <CardDescription>نظرة عامة على الأرقام المدخلة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>إيرادات السنة الأولى:</span>
                    <span className="font-medium">
                      {projectionData.year1Revenue
                        ? formatCurrency(Number.parseFloat(projectionData.year1Revenue))
                        : "غير محدد"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>تكاليف السنة الأولى:</span>
                    <span className="font-medium">
                      {projectionData.year1Costs
                        ? formatCurrency(Number.parseFloat(projectionData.year1Costs))
                        : "غير محدد"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>الربح المتوقع:</span>
                    <span className="font-medium text-[#18A39E]">
                      {projectionData.year1Revenue && projectionData.year1Costs
                        ? formatCurrency(
                            Number.parseFloat(projectionData.year1Revenue) -
                              Number.parseFloat(projectionData.year1Costs),
                          )
                        : "غير محدد"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projections" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>التوقعات المالية لثلاث سنوات</CardTitle>
              <CardDescription>عرض تفصيلي للتوقعات المالية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right p-4 font-medium">السنة</th>
                      <th className="text-right p-4 font-medium">الإيرادات</th>
                      <th className="text-right p-4 font-medium">التكاليف</th>
                      <th className="text-right p-4 font-medium">الربح</th>
                      <th className="text-right p-4 font-medium">هامش الربح</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map((projection) => (
                      <tr key={projection.year} className="border-b">
                        <td className="p-4">السنة {projection.year}</td>
                        <td className="p-4 text-green-600">{formatCurrency(projection.revenue)}</td>
                        <td className="p-4 text-red-600">{formatCurrency(projection.costs)}</td>
                        <td className="p-4 font-medium">
                          <span className={projection.profit >= 0 ? "text-green-600" : "text-red-600"}>
                            {formatCurrency(projection.profit)}
                          </span>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant={
                              projection.margin >= 20
                                ? "default"
                                : projection.margin >= 10
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {projection.margin.toFixed(1)}%
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إجمالي الإيرادات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(projections.reduce((sum, p) => sum + p.revenue, 0))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">خلال 3 سنوات</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">إجمالي التكاليف</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {formatCurrency(projections.reduce((sum, p) => sum + p.costs, 0))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">خلال 3 سنوات</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">صافي الربح</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#18A39E]">
                  {formatCurrency(projections.reduce((sum, p) => sum + p.profit, 0))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">خلال 3 سنوات</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>تحليل الربحية</CardTitle>
                <CardDescription>تقييم الأداء المالي المتوقع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>نقطة التعادل:</span>
                    <Badge className="bg-[#18A39E] hover:bg-[#16918A]">السنة الأولى</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>العائد على الاستثمار:</span>
                    <span className="font-medium text-green-600">
                      {projectionData.initialInvestment && projections[0]?.profit
                        ? `${((projections[0].profit / Number.parseFloat(projectionData.initialInvestment)) * 100).toFixed(1)}%`
                        : "غير محدد"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>فترة الاسترداد:</span>
                    <span className="font-medium">
                      {projectionData.initialInvestment && projections[0]?.profit
                        ? `${(Number.parseFloat(projectionData.initialInvestment) / projections[0].profit).toFixed(1)} سنة`
                        : "غير محدد"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تحليل المخاطر</CardTitle>
                <CardDescription>تقييم المخاطر المالية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">مخاطر متوسطة</h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• اعتماد على نمو مستمر للإيرادات</li>
                      <li>• حساسية للتغيرات في السوق</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">نقاط إيجابية</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• هامش ربح صحي</li>
                      <li>• نمو متوقع في الإيرادات</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>سيناريوهات مختلفة</CardTitle>
              <CardDescription>تحليل الحساسية للتوقعات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-green-600 mb-2">السيناريو المتفائل</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">نمو إيرادات +50%</p>
                  <div className="text-lg font-bold text-green-600">
                    {projections[0] ? formatCurrency(projections[0].profit * 1.5) : "غير محدد"}
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-blue-600 mb-2">السيناريو الأساسي</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">النمو المتوقع</p>
                  <div className="text-lg font-bold text-blue-600">
                    {projections[0] ? formatCurrency(projections[0].profit) : "غير محدد"}
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium text-red-600 mb-2">السيناريو المتشائم</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">نمو إيرادات -30%</p>
                  <div className="text-lg font-bold text-red-600">
                    {projections[0] ? formatCurrency(projections[0].profit * 0.7) : "غير محدد"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#18A39E]" />
                الرسوم البيانية
              </CardTitle>
              <CardDescription>تمثيل بصري للتوقعات المالية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">الرسوم البيانية قيد التطوير</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  سيتم إضافة الرسوم البيانية التفاعلية قريباً لعرض التوقعات المالية بصرياً
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
