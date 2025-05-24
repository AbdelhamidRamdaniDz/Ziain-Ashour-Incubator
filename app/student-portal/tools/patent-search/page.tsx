"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, ExternalLink, Calendar, MapPin, FileText, AlertTriangle } from "lucide-react"

export default function PatentSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [countryFilter, setCountryFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const searchResults = [
    {
      id: 1,
      title: "نظام إدارة المشاريع الذكي باستخدام الذكاء الاصطناعي",
      patentNumber: "US10,123,456",
      inventors: ["أحمد محمد علي", "فاطمة حسن أحمد"],
      assignee: "شركة التقنية المتقدمة",
      filingDate: "2023-03-15",
      publicationDate: "2024-01-20",
      country: "الولايات المتحدة",
      status: "منح",
      abstract:
        "يتعلق هذا الاختراع بنظام إدارة مشاريع يستخدم خوارزميات الذكاء الاصطناعي لتحسين كفاءة إدارة المهام وتوزيع الموارد...",
      similarity: 85,
      riskLevel: "عالي",
    },
    {
      id: 2,
      title: "منصة تعليمية تفاعلية للتعلم عن بُعد",
      patentNumber: "EP3,456,789",
      inventors: ["سارة أحمد محمد"],
      assignee: "معهد التعليم الرقمي",
      filingDate: "2022-11-08",
      publicationDate: "2023-08-12",
      country: "الاتحاد الأوروبي",
      status: "قيد المراجعة",
      abstract:
        "منصة تعليمية تدمج تقنيات الواقع المعزز والذكاء الاصطناعي لتوفير تجربة تعليمية تفاعلية ومخصصة للطلاب...",
      similarity: 65,
      riskLevel: "متوسط",
    },
    {
      id: 3,
      title: "تطبيق محمول لإدارة الصحة الشخصية",
      patentNumber: "CN202310456789",
      inventors: ["لي وانغ", "تشانغ لي"],
      assignee: "شركة الصحة الذكية",
      filingDate: "2023-05-22",
      publicationDate: "2023-12-01",
      country: "الصين",
      status: "منح",
      abstract: "تطبيق محمول يستخدم أجهزة الاستشعار الذكية لمراقبة الصحة الشخصية وتقديم توصيات صحية مخصصة...",
      similarity: 45,
      riskLevel: "منخفض",
    },
    {
      id: 4,
      title: "نظام دفع إلكتروني آمن باستخدام البلوك تشين",
      patentNumber: "JP2023-123456",
      inventors: ["تاكيشي ياماموتو", "هيروشي ساتو"],
      assignee: "بنك طوكيو التقني",
      filingDate: "2023-01-10",
      publicationDate: "2023-09-15",
      country: "اليابان",
      status: "منح",
      abstract: "نظام دفع إلكتروني يستخدم تقنية البلوك تشين لضمان الأمان والشفافية في المعاملات المالية الرقمية...",
      similarity: 30,
      riskLevel: "منخفض",
    },
  ]

  const filteredResults = searchResults.filter((patent) => {
    const matchesSearch =
      patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = countryFilter === "all" || patent.country === countryFilter
    const matchesStatus = statusFilter === "all" || patent.status === statusFilter

    return matchesSearch && matchesCountry && matchesStatus
  })

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "عالي":
        return "destructive"
      case "متوسط":
        return "default"
      case "منخفض":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 80) return "text-red-600"
    if (similarity >= 60) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">البحث في براءات الاختراع</h1>
            <p className="text-muted-foreground mt-2">ابحث عن براءات الاختراع المشابهة لفكرتك لتجنب التعارض</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 ml-2" />
              تصدير النتائج
            </Button>
            <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
              <FileText className="h-4 w-4 ml-2" />
              حفظ البحث
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <Card>
          <CardHeader>
            <CardTitle>البحث المتقدم</CardTitle>
            <CardDescription>استخدم الفلاتر للحصول على نتائج أكثر دقة</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search-query">كلمات البحث</Label>
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="search-query"
                    placeholder="ابحث في العناوين والملخصات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <Button className="bg-[#18A39E] hover:bg-[#16918A] mt-6">
                <Search className="h-4 w-4 ml-2" />
                بحث
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="country-filter">البلد</Label>
                <select
                  id="country-filter"
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="w-full p-2 border border-border rounded-md"
                >
                  <option value="all">جميع البلدان</option>
                  <option value="الولايات المتحدة">الولايات المتحدة</option>
                  <option value="الاتحاد الأوروبي">الاتحاد الأوروبي</option>
                  <option value="الصين">الصين</option>
                  <option value="اليابان">اليابان</option>
                  <option value="كوريا الجنوبية">كوريا الجنوبية</option>
                </select>
              </div>

              <div>
                <Label htmlFor="date-filter">تاريخ النشر</Label>
                <select
                  id="date-filter"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full p-2 border border-border rounded-md"
                >
                  <option value="all">جميع التواريخ</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="older">أقدم من 2021</option>
                </select>
              </div>

              <div>
                <Label htmlFor="status-filter">حالة البراءة</Label>
                <select
                  id="status-filter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full p-2 border border-border rounded-md"
                >
                  <option value="all">جميع الحالات</option>
                  <option value="منح">منح</option>
                  <option value="قيد المراجعة">قيد المراجعة</option>
                  <option value="مرفوض">مرفوض</option>
                  <option value="منتهي الصلاحية">منتهي الصلاحية</option>
                </select>
              </div>

              <div>
                <Label htmlFor="classification">التصنيف</Label>
                <select id="classification" className="w-full p-2 border border-border rounded-md">
                  <option value="all">جميع التصنيفات</option>
                  <option value="G06">معالجة البيانات</option>
                  <option value="H04">الاتصالات</option>
                  <option value="A61">الطب والصحة</option>
                  <option value="B25">الأدوات والآلات</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">نتائج البحث ({filteredResults.length} براءة اختراع)</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 ml-2" />
              فلاتر متقدمة
            </Button>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-4">
          {filteredResults.map((patent) => (
            <Card key={patent.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{patent.title}</CardTitle>
                    <CardDescription className="mt-2">
                      رقم البراءة: {patent.patentNumber} | {patent.country}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant={getRiskColor(patent.riskLevel)}>خطر {patent.riskLevel}</Badge>
                    <div className={`text-sm font-medium ${getSimilarityColor(patent.similarity)}`}>
                      تشابه: {patent.similarity}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>تاريخ التقديم: {patent.filingDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>تاريخ النشر: {patent.publicationDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>الحالة: {patent.status}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">المخترعون: </span>
                      <span className="text-muted-foreground">{patent.inventors.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-medium">المالك: </span>
                      <span className="text-muted-foreground">{patent.assignee}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">الملخص:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{patent.abstract}</p>
                </div>

                {patent.similarity >= 70 && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm text-red-600 dark:text-red-400">
                      تحذير: هذه البراءة تظهر تشابهاً عالياً مع فكرتك. يُنصح بمراجعة قانونية.
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 ml-2" />
                      عرض التفاصيل
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 ml-2" />
                      تحميل PDF
                    </Button>
                  </div>
                  <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
                    إضافة للمقارنة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">لا توجد نتائج</h3>
              <p className="text-muted-foreground">جرب تغيير كلمات البحث أو الفلاتر للحصول على نتائج أفضل</p>
            </CardContent>
          </Card>
        )}

        {/* Patent Analysis Tools */}
        <Card>
          <CardHeader>
            <CardTitle>أدوات تحليل البراءات</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="landscape" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="landscape">خريطة البراءات</TabsTrigger>
                <TabsTrigger value="trends">اتجاهات التقديم</TabsTrigger>
                <TabsTrigger value="freedom">حرية التشغيل</TabsTrigger>
              </TabsList>

              <TabsContent value="landscape" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">التوزيع الجغرافي</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>الولايات المتحدة</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>الاتحاد الأوروبي</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>الصين</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>اليابان</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>أخرى</span>
                          <span className="font-medium">5%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">أهم المالكين</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>شركة التقنية المتقدمة</span>
                          <span className="font-medium">12 براءة</span>
                        </div>
                        <div className="flex justify-between">
                          <span>معهد التعليم الرقمي</span>
                          <span className="font-medium">8 براءات</span>
                        </div>
                        <div className="flex justify-between">
                          <span>شركة الصحة الذكية</span>
                          <span className="font-medium">6 براءات</span>
                        </div>
                        <div className="flex justify-between">
                          <span>بنك طوكيو التقني</span>
                          <span className="font-medium">4 براءات</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="trends" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">اتجاهات التقديم السنوية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>2024</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded">
                            <div className="w-3/4 h-2 bg-[#18A39E] rounded"></div>
                          </div>
                          <span className="font-medium">156 براءة</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>2023</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded">
                            <div className="w-full h-2 bg-[#18A39E] rounded"></div>
                          </div>
                          <span className="font-medium">203 براءة</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>2022</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded">
                            <div className="w-4/5 h-2 bg-[#18A39E] rounded"></div>
                          </div>
                          <span className="font-medium">178 براءة</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>2021</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-gray-200 rounded">
                            <div className="w-2/3 h-2 bg-[#18A39E] rounded"></div>
                          </div>
                          <span className="font-medium">134 براءة</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="freedom" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">تحليل حرية التشغيل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-medium text-green-800 dark:text-green-400 mb-2">المناطق الآمنة</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        يمكنك تطوير منتجك في هذه المجالات دون مخاطر قانونية عالية:
                      </p>
                      <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 mt-2">
                        <li>واجهات المستخدم المبتكرة</li>
                        <li>خوارزميات التحليل المخصصة</li>
                        <li>تقنيات الأمان الجديدة</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">مناطق الحذر</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">تحتاج لمراجعة قانونية قبل التطوير:</p>
                      <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 mt-2">
                        <li>أنظمة إدارة المشاريع الأساسية</li>
                        <li>تقنيات التعلم الآلي المعيارية</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-medium text-red-800 dark:text-red-400 mb-2">مناطق عالية المخاطر</h4>
                      <p className="text-sm text-red-700 dark:text-red-300">تجنب هذه المجالات أو احصل على ترخيص:</p>
                      <ul className="list-disc list-inside text-sm text-red-700 dark:text-red-300 mt-2">
                        <li>خوارزميات الذكاء الاصطناعي المحددة</li>
                        <li>أنظمة الدفع الإلكتروني</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
