"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Users, FileText, Award, BookOpen, TrendingUp, Download, Activity } from "lucide-react"

export default function AnalyticsPage() {
  // Mock chart data
  const projectsData = [
    { month: "يناير", projects: 12 },
    { month: "فبراير", projects: 18 },
    { month: "مارس", projects: 25 },
    { month: "أبريل", projects: 22 },
    { month: "مايو", projects: 30 },
    { month: "يونيو", projects: 35 },
  ]

  const categoryData = [
    { category: "تكنولوجيا", count: 45, percentage: 35 },
    { category: "صحة", count: 32, percentage: 25 },
    { category: "تعليم", count: 28, percentage: 22 },
    { category: "بيئة", count: 23, percentage: 18 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">لوحة التحليلات</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">إحصائيات ومؤشرات أداء المنصة والطلاب</p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="month">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">أسبوعي</SelectItem>
                  <SelectItem value="month">شهري</SelectItem>
                  <SelectItem value="year">سنوي</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 ml-2" />
                تصدير التقرير
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">المشاريع المسجلة</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">128</p>
                  <p className="text-sm text-green-600 mt-1">+12% من الشهر الماضي</p>
                </div>
                <div className="h-12 w-12 bg-[#18A39E] rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">براءات الاختراع</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">47</p>
                  <p className="text-sm text-green-600 mt-1">+8% من الشهر الماضي</p>
                </div>
                <div className="h-12 w-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">المستخدمون النشطون</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">342</p>
                  <p className="text-sm text-green-600 mt-1">+15% من الشهر الماضي</p>
                </div>
                <div className="h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">الورشات المنجزة</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">89</p>
                  <p className="text-sm text-green-600 mt-1">+5% من الشهر الماضي</p>
                </div>
                <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>نمو المشاريع الشهري</CardTitle>
              <CardDescription>عدد المشاريع المسجلة خلال الأشهر الستة الماضية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectsData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.month}</span>
                    <div className="flex items-center gap-3 flex-1 mx-4">
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#18A39E] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(item.projects / 35) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white w-8">{item.projects}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Categories */}
          <Card>
            <CardHeader>
              <CardTitle>توزيع المشاريع حسب الفئة</CardTitle>
              <CardDescription>النسبة المئوية للمشاريع في كل فئة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.count} مشروع ({item.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-[#18A39E] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Activity */}
          <Card>
            <CardHeader>
              <CardTitle>نشاط المستخدمين</CardTitle>
              <CardDescription>إحصائيات النشاط اليومي</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-[#18A39E]" />
                    <span className="text-sm font-medium">تسجيلات دخول اليوم</span>
                  </div>
                  <span className="text-lg font-bold">156</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">مستخدمون جدد</span>
                  </div>
                  <span className="text-lg font-bold">23</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">معدل النمو</span>
                  </div>
                  <span className="text-lg font-bold">+12%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>الأنشطة الأخيرة</CardTitle>
              <CardDescription>آخر الأحداث في المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2">
                  <div className="h-2 w-2 bg-[#18A39E] rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">مشروع جديد مسجل</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">منذ 5 دقائق</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2">
                  <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">براءة اختراع جديدة</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">منذ 15 دقيقة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">طالب جديد انضم</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">منذ 30 دقيقة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">ورشة عمل مكتملة</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">منذ ساعة</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>مؤشرات الأداء</CardTitle>
              <CardDescription>مقاييس الأداء الرئيسية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">معدل إكمال المشاريع</span>
                    <span className="text-sm font-bold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">رضا المستخدمين</span>
                    <span className="text-sm font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-[#18A39E] h-2 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">معدل النشاط</span>
                    <span className="text-sm font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
