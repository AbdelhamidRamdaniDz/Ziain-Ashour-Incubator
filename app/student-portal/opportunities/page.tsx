"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, Trophy, Building, Search, Filter } from "lucide-react"

export default function OpportunitiesCalendarPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // بيانات الفرص
  const opportunities = [
    {
      id: 1,
      title: "مسابقة عرض الشركات الناشئة 2025",
      type: "مسابقة",
      category: "ريادة الأعمال",
      description: "مسابقة سنوية لعرض الشركات الناشئة مع جوائز تصل إلى 50,000 دولار لأفضل الأفكار التجارية.",
      organizer: "جامعة زيان عاشور",
      date: "15 يونيو 2025",
      time: "9:00 صباحاً - 5:00 مساءً",
      location: "قاعة الجامعة",
      deadline: "30 مايو 2025",
      prize: "50,000 دولار",
      participants: "+150 مشارك متوقع",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "ورشة عمل الابتكار التقني",
      type: "ورشة عمل",
      category: "تكنولوجيا",
      description: "ورشة عمل عملية تغطي التقنيات الناشئة وتطبيقاتها في الشركات الناشئة.",
      organizer: "تك الجزائر",
      date: "28 مايو 2025",
      time: "2:00 مساءً - 6:00 مساءً",
      location: "مختبر الابتكار",
      deadline: "25 مايو 2025",
      prize: "شهادة",
      participants: "30 مقعد",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "برنامج التدريب الصيفي",
      type: "تدريب",
      category: "مهني",
      description: "برنامج تدريب مدفوع لمدة 3 أشهر مع شركات تقنية رائدة في الجزائر.",
      organizer: "الصندوق الوطني للابتكار",
      date: "1 يوليو - 30 سبتمبر 2025",
      time: "دوام كامل",
      location: "شركات متنوعة",
      deadline: "1 يونيو 2025",
      prize: "وظيفة مدفوعة",
      participants: "50 منصب",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "تحدي الابتكار الأخضر",
      type: "مسابقة",
      category: "الاستدامة",
      description: "مسابقة تركز على الحلول المستدامة والابتكارات البيئية.",
      organizer: "تحالف الطاقة المتجددة",
      date: "20 يونيو 2025",
      time: "10:00 صباحاً - 4:00 مساءً",
      location: "مركز التكنولوجيا الخضراء",
      deadline: "5 يونيو 2025",
      prize: "25,000 دولار",
      participants: "+100 مشارك متوقع",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "معسكر الذكاء الاصطناعي وتعلم الآلة",
      type: "ورشة عمل",
      category: "تكنولوجيا",
      description: "معسكر مكثف لمدة 5 أيام يغطي أساسيات الذكاء الاصطناعي وتطبيقاته العملية.",
      organizer: "AI الجزائر",
      date: "10-14 يوليو 2025",
      time: "9:00 صباحاً - 5:00 مساءً",
      location: "مركز التقنية الجزائر",
      deadline: "25 يونيو 2025",
      prize: "شهادة",
      participants: "40 مقعد",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "برنامج توجيه المرأة في التكنولوجيا",
      type: "توجيه",
      category: "مهني",
      description: "برنامج توجيه لمدة 6 أشهر يربط الطالبات مع قادة الصناعة.",
      organizer: "نساء التقنية الجزائر",
      date: "1 أغسطس 2025",
      time: "مرن",
      location: "عبر الإنترنت وحضورياً",
      deadline: "15 يوليو 2025",
      prize: "توجيه",
      participants: "25 متدربة",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 7,
      title: "قمة ابتكار البلوكتشين",
      type: "مؤتمر",
      category: "تكنولوجيا",
      description: "قمة لمدة يومين تستكشف تطبيقات البلوكتشين في مختلف الصناعات.",
      organizer: "بلوكتشين الجزائر",
      date: "5-6 سبتمبر 2025",
      time: "8:00 صباحاً - 6:00 مساءً",
      location: "مركز المؤتمرات الجزائر",
      deadline: "20 أغسطس 2025",
      prize: "تواصل مهني",
      participants: "+500 مشارك",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 8,
      title: "منحة الشركات الناشئة ذات الأثر الاجتماعي",
      type: "منحة",
      category: "أثر اجتماعي",
      description: "فرصة تمويل للشركات الناشئة التي تعالج التحديات الاجتماعية والبيئية.",
      organizer: "صندوق الابتكار الاجتماعي",
      date: "تقديم مستمر",
      time: "غير محدد",
      location: "متنوع",
      deadline: "31 ديسمبر 2025",
      prize: "100,000 دولار",
      participants: "غير محدود",
      status: "مفتوح",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // تصفية الفرص بناءً على البحث والفلاتر
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opportunity.organizer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === "all" || opportunity.type === typeFilter
    const matchesCategory = categoryFilter === "all" || opportunity.category === categoryFilter

    return matchesSearch && matchesType && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مفتوح":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "مغلق":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "قريباً":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "مسابقة":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "ورشة عمل":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "تدريب":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "مؤتمر":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
      case "منحة":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "توجيه":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-8" dir="rtl">
      {/* الترويسة */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">تقويم الفرص</h1>
        <p className="text-muted-foreground">
          اكتشف المسابقات وورش العمل والتدريب والفرص الأخرى لتطوير مسيرتك في ريادة الأعمال.
        </p>
      </div>

      {/* البحث والفلاتر */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            البحث وتصفية الفرص
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن الفرص..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="تصفية حسب النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الأنواع</SelectItem>
                <SelectItem value="مسابقة">مسابقة</SelectItem>
                <SelectItem value="ورشة عمل">ورشة عمل</SelectItem>
                <SelectItem value="تدريب">تدريب</SelectItem>
                <SelectItem value="مؤتمر">مؤتمر</SelectItem>
                <SelectItem value="منحة">منحة</SelectItem>
                <SelectItem value="توجيه">توجيه</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="تصفية حسب الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الفئات</SelectItem>
                <SelectItem value="ريادة الأعمال">ريادة الأعمال</SelectItem>
                <SelectItem value="تكنولوجيا">تكنولوجيا</SelectItem>
                <SelectItem value="مهني">مهني</SelectItem>
                <SelectItem value="الاستدامة">الاستدامة</SelectItem>
                <SelectItem value="أثر اجتماعي">أثر اجتماعي</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm text-muted-foreground">
            عرض {filteredOpportunities.length} من {opportunities.length} فرصة
          </div>
        </CardContent>
      </Card>

      {/* شبكة الفرص */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredOpportunities.map((opportunity) => (
          <Card key={opportunity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={opportunity.image || "/placeholder.svg"}
                alt={opportunity.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge className={getStatusColor(opportunity.status)}>{opportunity.status}</Badge>
                <Badge className={getTypeColor(opportunity.type)}>{opportunity.type}</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{opportunity.title}</CardTitle>
              <CardDescription className="line-clamp-3">{opportunity.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>{opportunity.organizer}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{opportunity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{opportunity.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{opportunity.participants}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span>{opportunity.prize}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">الموعد النهائي:</span>
                  <span className="font-medium">{opportunity.deadline}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-[#18A39E] hover:bg-[#16918A]">تقديم الطلب</Button>
                <Button variant="outline" size="sm">
                  التفاصيل
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* لا توجد نتائج */}
      {filteredOpportunities.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">لم يتم العثور على فرص</h3>
            <p className="text-muted-foreground text-center">
              حاول تعديل مصطلحات البحث أو الفلاتر للعثور على المزيد من الفرص.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("")
                setTypeFilter("all")
                setCategoryFilter("all")
              }}
            >
              مسح الفلاتر
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
