"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle } from "lucide-react"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock events data
  const events = [
    {
      id: 1,
      title: "ورشة عمل: أساسيات ريادة الأعمال",
      description: "ورشة تدريبية شاملة تغطي المبادئ الأساسية لبناء مشروع ناجح من الصفر",
      category: "ورشة عمل",
      date: "2024-03-15",
      time: "09:00 - 17:00",
      duration: "8 ساعات",
      location: "قاعة المؤتمرات الرئيسية",
      speaker: "د. أحمد محمد الزهراني",
      speakerTitle: "خبير ريادة الأعمال",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 50,
      registered: 35,
      price: "مجاني",
      status: "قادم",
      isRegistered: false,
      tags: ["ريادة الأعمال", "تدريب", "مبتدئ"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "مؤتمر الابتكار التقني 2024",
      description: "مؤتمر سنوي يجمع رواد الأعمال والمبتكرين في مجال التقنية",
      category: "مؤتمر",
      date: "2024-03-22",
      time: "08:30 - 18:00",
      duration: "يوم كامل",
      location: "مركز المؤتمرات الدولي",
      speaker: "متحدثون متعددون",
      speakerTitle: "خبراء التقنية والابتكار",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 200,
      registered: 180,
      price: "500 ريال",
      status: "قادم",
      isRegistered: true,
      tags: ["تقنية", "ابتكار", "مؤتمر"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "جلسة إرشادية: التسويق الرقمي",
      description: "جلسة تفاعلية حول استراتيجيات التسويق الرقمي للمشاريع الناشئة",
      category: "جلسة إرشادية",
      date: "2024-03-08",
      time: "14:00 - 16:00",
      duration: "ساعتان",
      location: "قاعة التدريب الذكية",
      speaker: "أ. فاطمة العلي",
      speakerTitle: "استشارية التسويق الرقمي",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 30,
      registered: 30,
      price: "مجاني",
      status: "مكتمل",
      isRegistered: true,
      tags: ["تسويق", "رقمي", "استراتيجية"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "ندوة: جذب الاستثمار للمشاريع",
      description: "ندوة تعليمية حول كيفية جذب المستثمرين وتأمين التمويل",
      category: "ندوة",
      date: "2024-03-29",
      time: "19:00 - 21:00",
      duration: "ساعتان",
      location: "قاعة الندوات",
      speaker: "د. خالد السعيد",
      speakerTitle: "خبير الاستثمار والتمويل",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 80,
      registered: 45,
      price: "مجاني",
      status: "قادم",
      isRegistered: false,
      tags: ["استثمار", "تمويل", "مستثمرون"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "هاكاثون الابتكار الطلابي",
      description: "مسابقة برمجية لمدة 48 ساعة لتطوير حلول مبتكرة للتحديات المحلية",
      category: "هاكاثون",
      date: "2024-04-05",
      time: "09:00 (الجمعة) - 17:00 (الأحد)",
      duration: "48 ساعة",
      location: "مختبر الابتكار",
      speaker: "فريق التحكيم",
      speakerTitle: "خبراء التقنية والابتكار",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 100,
      registered: 75,
      price: "مجاني",
      status: "قادم",
      isRegistered: false,
      tags: ["هاكاثون", "برمجة", "ابتكار"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "ورشة: بناء النماذج الأولية",
      description: "تعلم كيفية بناء النماذج الأولية لمنتجك باستخدام أدوات التصميم الحديثة",
      category: "ورشة عمل",
      date: "2024-02-28",
      time: "10:00 - 15:00",
      duration: "5 ساعات",
      location: "استوديو التصميم",
      speaker: "م. سارة أحمد",
      speakerTitle: "مصممة تجربة المستخدم",
      speakerAvatar: "/placeholder.svg?height=100&width=100",
      capacity: 25,
      registered: 25,
      price: "200 ريال",
      status: "منتهي",
      isRegistered: false,
      tags: ["تصميم", "نماذج أولية", "UX"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  // Filter events based on search and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter
    const matchesStatus = statusFilter === "all" || event.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const categories = ["all", "ورشة عمل", "مؤتمر", "جلسة إرشادية", "ندوة", "هاكاثون"]
  const statuses = ["all", "قادم", "مكتمل", "منتهي"]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-SA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قادم":
        return "bg-green-100 text-green-800"
      case "مكتمل":
        return "bg-yellow-100 text-yellow-800"
      case "منتهي":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">الفعاليات والتدريبات</h1>
          <p className="text-muted-foreground">اكتشف الفعاليات القادمة والتدريبات المتاحة لتطوير مهاراتك ومشروعك</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث في الفعاليات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 ml-2" />
                  <SelectValue placeholder="نوع الفعالية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  {statuses.slice(1).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
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
            عرض {filteredEvents.length} من {events.length} فعالية
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-white/90">
                    {event.category}
                  </Badge>
                </div>
                {event.isRegistered && (
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-[#18A39E] text-white">
                      <CheckCircle className="h-3 w-3 ml-1" />
                      مسجل
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                <CardDescription className="text-sm">{event.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Date and Time */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-[#18A39E]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>
                      {event.time} ({event.duration})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Speaker */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={event.speakerAvatar || "/placeholder.svg"} alt={event.speaker} />
                    <AvatarFallback>{event.speaker.split(" ")[0][0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{event.speaker}</p>
                    <p className="text-xs text-muted-foreground">{event.speakerTitle}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Capacity and Price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {event.registered}/{event.capacity} مشارك
                    </span>
                  </div>
                  <span className="font-semibold text-[#18A39E]">{event.price}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#18A39E] h-2 rounded-full"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  ></div>
                </div>

                {/* Action Button */}
                <Button
                  className="w-full"
                  disabled={event.status === "منتهي" || event.registered >= event.capacity}
                  variant={event.isRegistered ? "outline" : "default"}
                  style={{
                    backgroundColor: !event.isRegistered && event.status !== "منتهي" ? "#18A39E" : "transparent",
                  }}
                >
                  {event.status === "منتهي"
                    ? "انتهت الفعالية"
                    : event.registered >= event.capacity
                      ? "مكتملة"
                      : event.isRegistered
                        ? "مسجل بالفعل"
                        : "التسجيل"}
                  {!event.isRegistered && event.status !== "منتهي" && event.registered < event.capacity && (
                    <ExternalLink className="h-4 w-4 ml-2" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على فعاليات تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو المرشحات</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setStatusFilter("all")
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
