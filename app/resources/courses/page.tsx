"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Clock, User, Search, Filter } from "lucide-react"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")

  // Mock courses data
  const courses = [
    {
      id: 1,
      title: "أساسيات ريادة الأعمال",
      description: "تعلم المبادئ الأساسية لبناء مشروع ناجح من الصفر",
      instructor: "د. أحمد محمد",
      duration: "8 ساعات",
      lessons: 24,
      progress: 65,
      category: "ريادة الأعمال",
      level: "مبتدئ",
      rating: 4.8,
      students: 1250,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: false,
      isEnrolled: true,
    },
    {
      id: 2,
      title: "التسويق الرقمي للمشاريع الناشئة",
      description: "استراتيجيات التسويق الحديثة لنمو مشروعك الناشئ",
      instructor: "أ. فاطمة العلي",
      duration: "12 ساعة",
      lessons: 36,
      progress: 30,
      category: "تسويق",
      level: "متوسط",
      rating: 4.9,
      students: 890,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: false,
      isEnrolled: true,
    },
    {
      id: 3,
      title: "إدارة الأموال والاستثمار",
      description: "كيفية إدارة الأموال وجذب المستثمرين لمشروعك",
      instructor: "د. خالد السعيد",
      duration: "10 ساعات",
      lessons: 30,
      progress: 0,
      category: "مالية",
      level: "متقدم",
      rating: 4.7,
      students: 650,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: false,
      isEnrolled: false,
    },
    {
      id: 4,
      title: "تطوير المنتجات التقنية",
      description: "من الفكرة إلى المنتج: دليل شامل لتطوير المنتجات التقنية",
      instructor: "م. سارة أحمد",
      duration: "15 ساعة",
      lessons: 45,
      progress: 100,
      category: "تقنية",
      level: "متقدم",
      rating: 4.9,
      students: 420,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: true,
      isEnrolled: true,
    },
    {
      id: 5,
      title: "بناء الفريق والقيادة",
      description: "مهارات القيادة وبناء فريق عمل فعال",
      instructor: "د. محمد الزهراني",
      duration: "6 ساعات",
      lessons: 18,
      progress: 45,
      category: "إدارة",
      level: "متوسط",
      rating: 4.6,
      students: 780,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: false,
      isEnrolled: true,
    },
    {
      id: 6,
      title: "الابتكار وحل المشكلات",
      description: "تقنيات الابتكار والتفكير الإبداعي لحل المشكلات",
      instructor: "أ. نورا حسن",
      duration: "9 ساعات",
      lessons: 27,
      progress: 0,
      category: "ابتكار",
      level: "مبتدئ",
      rating: 4.8,
      students: 950,
      image: "/placeholder.svg?height=200&width=400",
      isCompleted: false,
      isEnrolled: false,
    },
  ]

  // Filter courses based on search and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter
    const matchesLevel = levelFilter === "all" || course.level === levelFilter

    return matchesSearch && matchesCategory && matchesLevel
  })

  const categories = ["all", "ريادة الأعمال", "تسويق", "مالية", "تقنية", "إدارة", "ابتكار"]
  const levels = ["all", "مبتدئ", "متوسط", "متقدم"]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">الدورات التدريبية</h1>
          <p className="text-muted-foreground">
            اكتشف مجموعة واسعة من الدورات التدريبية المصممة لتطوير مهاراتك في ريادة الأعمال
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث في الدورات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 ml-2" />
                  <SelectValue placeholder="التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التصنيفات</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="المستوى" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المستويات</SelectItem>
                  {levels.slice(1).map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            عرض {filteredCourses.length} من {courses.length} دورة
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant={course.isCompleted ? "default" : course.isEnrolled ? "secondary" : "outline"}>
                    {course.isCompleted ? "مكتملة" : course.isEnrolled ? "مسجل" : "غير مسجل"}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-white/90">
                    {course.level}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Instructor and Duration */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Progress Bar (if enrolled) */}
                {course.isEnrolled && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>التقدم</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{course.lessons} درس</span>
                  <div className="flex items-center gap-2">
                    <span>⭐ {course.rating}</span>
                    <span>({course.students} طالب)</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  className="w-full"
                  variant={course.isEnrolled ? "default" : "outline"}
                  style={{ backgroundColor: course.isEnrolled ? "#18A39E" : "transparent" }}
                >
                  <Play className="h-4 w-4 ml-2" />
                  {course.isCompleted ? "مراجعة الدورة" : course.isEnrolled ? "متابعة التعلم" : "التسجيل في الدورة"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على دورات تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو المرشحات</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setLevelFilter("all")
              }}
            >
              مسح المرشحات
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
