"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Plus, TrendingUp, Users, Target, BarChart3 } from "lucide-react"

export default function MarketResearchPage() {
  const [researchProgress, setResearchProgress] = useState(65)

  const competitors = [
    {
      name: "شركة التقنية المتقدمة",
      market_share: "25%",
      strengths: "تقنية قوية، علامة تجارية معروفة",
      weaknesses: "أسعار مرتفعة، خدمة عملاء ضعيفة",
      threat_level: "عالي",
    },
    {
      name: "حلول الأعمال الذكية",
      market_share: "15%",
      strengths: "أسعار تنافسية، انتشار جيد",
      weaknesses: "تقنية قديمة، دعم محدود",
      threat_level: "متوسط",
    },
    {
      name: "منصة الابتكار",
      market_share: "10%",
      strengths: "حلول مبتكرة، فريق شاب",
      weaknesses: "قاعدة عملاء صغيرة، تمويل محدود",
      threat_level: "منخفض",
    },
  ]

  const marketTrends = [
    { trend: "التحول الرقمي", impact: "إيجابي", percentage: "+45%" },
    { trend: "الذكاء الاصطناعي", impact: "إيجابي", percentage: "+60%" },
    { trend: "العمل عن بُعد", impact: "إيجابي", percentage: "+30%" },
    { trend: "الأمن السيبراني", impact: "تحدي", percentage: "+25%" },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">بحث السوق</h1>
            <p className="text-muted-foreground mt-2">اجمع وحلل بيانات السوق لمشروعك الناشئ</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">التقدم: {researchProgress}%</div>
            <Progress value={researchProgress} className="w-32" />
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="competitors">المنافسون</TabsTrigger>
            <TabsTrigger value="customers">العملاء</TabsTrigger>
            <TabsTrigger value="trends">الاتجاهات</TabsTrigger>
            <TabsTrigger value="analysis">التحليل</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">حجم السوق</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2.5M</div>
                  <p className="text-xs text-muted-foreground">+12% من العام الماضي</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">المنافسون</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-muted-foreground">منافس مباشر</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">العملاء المحتملون</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">50K</div>
                  <p className="text-xs text-muted-foreground">في السوق المستهدف</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">معدل النمو</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18%</div>
                  <p className="text-xs text-muted-foreground">نمو سنوي</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>معلومات السوق الأساسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="market-size">حجم السوق الإجمالي</Label>
                    <Input id="market-size" placeholder="مثال: 10 مليون دولار" />
                  </div>
                  <div>
                    <Label htmlFor="target-market">السوق المستهدف</Label>
                    <Input id="target-market" placeholder="مثال: الشركات الصغيرة والمتوسطة" />
                  </div>
                  <div>
                    <Label htmlFor="growth-rate">معدل النمو السنوي</Label>
                    <Input id="growth-rate" placeholder="مثال: 15%" />
                  </div>
                  <div>
                    <Label htmlFor="market-maturity">نضج السوق</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>ناشئ</option>
                      <option>نامي</option>
                      <option>ناضج</option>
                      <option>متراجع</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="market-description">وصف السوق</Label>
                  <Textarea
                    id="market-description"
                    placeholder="اكتب وصفاً مفصلاً عن السوق المستهدف..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">تحليل المنافسين</h2>
              <Button className="bg-[#18A39E] hover:bg-[#16918A]">
                <Plus className="h-4 w-4 ml-2" />
                إضافة منافس
              </Button>
            </div>

            <div className="space-y-4">
              {competitors.map((competitor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{competitor.name}</CardTitle>
                        <CardDescription>حصة السوق: {competitor.market_share}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          competitor.threat_level === "عالي"
                            ? "destructive"
                            : competitor.threat_level === "متوسط"
                              ? "default"
                              : "secondary"
                        }
                      >
                        تهديد {competitor.threat_level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">نقاط القوة</h4>
                        <p className="text-sm text-muted-foreground">{competitor.strengths}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">نقاط الضعف</h4>
                        <p className="text-sm text-muted-foreground">{competitor.weaknesses}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>إضافة منافس جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="competitor-name">اسم المنافس</Label>
                    <Input id="competitor-name" placeholder="اسم الشركة المنافسة" />
                  </div>
                  <div>
                    <Label htmlFor="market-share">حصة السوق</Label>
                    <Input id="market-share" placeholder="مثال: 20%" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="strengths">نقاط القوة</Label>
                    <Textarea id="strengths" placeholder="اذكر نقاط قوة المنافس..." />
                  </div>
                  <div>
                    <Label htmlFor="weaknesses">نقاط الضعف</Label>
                    <Textarea id="weaknesses" placeholder="اذكر نقاط ضعف المنافس..." />
                  </div>
                </div>
                <Button className="bg-[#18A39E] hover:bg-[#16918A]">حفظ المنافس</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تحليل العملاء المستهدفين</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer-segment">شريحة العملاء</Label>
                    <Input id="customer-segment" placeholder="مثال: الشركات الناشئة" />
                  </div>
                  <div>
                    <Label htmlFor="customer-size">حجم الشريحة</Label>
                    <Input id="customer-size" placeholder="مثال: 5000 شركة" />
                  </div>
                  <div>
                    <Label htmlFor="age-range">الفئة العمرية</Label>
                    <Input id="age-range" placeholder="مثال: 25-45 سنة" />
                  </div>
                  <div>
                    <Label htmlFor="income-level">مستوى الدخل</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>منخفض</option>
                      <option>متوسط</option>
                      <option>مرتفع</option>
                      <option>مرتفع جداً</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="customer-needs">احتياجات العملاء</Label>
                  <Textarea
                    id="customer-needs"
                    placeholder="اكتب احتياجات ومشاكل العملاء المستهدفين..."
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="buying-behavior">سلوك الشراء</Label>
                  <Textarea
                    id="buying-behavior"
                    placeholder="كيف يتخذ العملاء قرارات الشراء؟"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>اتجاهات السوق</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{trend.trend}</h4>
                        <Badge
                          variant={trend.impact === "إيجابي" ? "default" : "destructive"}
                          className={trend.impact === "إيجابي" ? "bg-[#18A39E]" : ""}
                        >
                          {trend.impact}
                        </Badge>
                      </div>
                      <div className="text-lg font-bold text-[#18A39E]">{trend.percentage}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>إضافة اتجاه جديد</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="trend-name">اسم الاتجاه</Label>
                    <Input id="trend-name" placeholder="مثال: التجارة الإلكترونية" />
                  </div>
                  <div>
                    <Label htmlFor="trend-impact">التأثير</Label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option>إيجابي</option>
                      <option>سلبي</option>
                      <option>محايد</option>
                      <option>تحدي</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="trend-percentage">النسبة المئوية</Label>
                    <Input id="trend-percentage" placeholder="مثال: +25%" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="trend-description">وصف الاتجاه</Label>
                  <Textarea id="trend-description" placeholder="اشرح كيف يؤثر هذا الاتجاه على مشروعك..." />
                </div>
                <Button className="bg-[#18A39E] hover:bg-[#16918A]">إضافة الاتجاه</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تحليل SWOT للسوق</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="market-strengths">نقاط القوة في السوق</Label>
                      <Textarea
                        id="market-strengths"
                        placeholder="ما هي الفرص الإيجابية في السوق؟"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="market-opportunities">الفرص</Label>
                      <Textarea
                        id="market-opportunities"
                        placeholder="ما هي الفرص المتاحة؟"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="market-weaknesses">نقاط الضعف في السوق</Label>
                      <Textarea
                        id="market-weaknesses"
                        placeholder="ما هي التحديات في السوق؟"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="market-threats">التهديدات</Label>
                      <Textarea id="market-threats" placeholder="ما هي المخاطر المحتملة؟" className="min-h-[100px]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الخلاصة والتوصيات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="market-summary">ملخص بحث السوق</Label>
                    <Textarea
                      id="market-summary"
                      placeholder="اكتب ملخصاً شاملاً لنتائج بحث السوق..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recommendations">التوصيات</Label>
                    <Textarea
                      id="recommendations"
                      placeholder="ما هي توصياتك بناءً على نتائج البحث؟"
                      className="min-h-[150px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-[#18A39E] hover:bg-[#16918A]">حفظ التحليل</Button>
                    <Button variant="outline">تصدير التقرير</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
