"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Star, MapPin, Search, Filter, Clock, Users } from "lucide-react"

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [specialtyFilter, setSpecialtyFilter] = useState("all")
  const [experienceFilter, setExperienceFilter] = useState("all")

  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: "د. أحمد محمد الزهراني",
      title: "خبير ريادة الأعمال",
      specialty: "ريادة الأعمال",
      experience: "15+ سنة",
      location: "الرياض، السعودية",
      rating: 4.9,
      sessions: 250,
      price: "200 ريال/ساعة",
      bio: "خبير في تأسيس الشركات الناشئة مع خبرة تزيد عن 15 عاماً في مجال ريادة الأعمال والاستثمار",
      skills: ["تطوير الأعمال", "جذب الاستثمار", "استراتيجية النمو"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: true,
      nextAvailable: "غداً 2:00 م",
    },
    {
      id: 2,
      name: "أ. فاطمة العلي",
      title: "استشارية التسويق الرقمي",
      specialty: "تسويق رقمي",
      experience: "10+ سنوات",
      location: "دبي، الإمارات",
      rating: 4.8,
      sessions: 180,
      price: "150 ريال/ساعة",
      bio: "متخصصة في التسويق الرقمي ووسائل التواصل الاجتماعي للشركات الناشئة والمتوسطة",
      skills: ["التسويق الرقمي", "وسائل التواصل", "تحليل البيانات"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: true,
      nextAvailable: "اليوم 4:00 م",
    },
    {
      id: 3,
      name: "م. خالد السعيد",
      title: "مطور منتجات تقنية",
      specialty: "تطوير المنتجات",
      experience: "12+ سنة",
      location: "القاهرة، مصر",
      rating: 4.7,
      sessions: 320,
      price: "180 ريال/ساعة",
      bio: "مهندس برمجيات ومطور منتجات مع خبرة واسعة في بناء المنتجات التقنية من الصفر",
      skills: ["تطوير البرمجيات", "إدارة المنتج", "التقنيات الحديثة"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: false,
      nextAvailable: "الأحد 10:00 ص",
    },
    {
      id: 4,
      name: "د. سارة أحمد",
      title: "خبيرة الاستثمار والتمويل",
      specialty: "استثمار وتمويل",
      experience: "18+ سنة",
      location: "الكويت، الكويت",
      rating: 4.9,
      sessions: 150,
      price: "250 ريال/ساعة",
      bio: "خبيرة في الاستثمار والتمويل مع تركيز خاص على الشركات الناشئة والتقنية المالية",
      skills: ["جذب الاستثمار", "التقييم المالي", "التخطيط المالي"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: true,
      nextAvailable: "غداً 11:00 ص",
    },
    {
      id: 5,
      name: "أ. محمد حسن",
      title: "مستشار القيادة والإدارة",
      specialty: "قيادة وإدارة",
      experience: "14+ سنة",
      location: "عمان، الأردن",
      rating: 4.6,
      sessions: 200,
      price: "170 ريال/ساعة",
      bio: "مستشار في القيادة وإدارة الفرق مع خبرة في تطوير المهارات القيادية للمؤسسين",
      skills: ["القيادة", "إدارة الفرق", "التطوير المؤسسي"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: true,
      nextAvailable: "اليوم 6:00 م",
    },
    {
      id: 6,
      name: "د. نورا حسن",
      title: "خبيرة الابتكار والتصميم",
      specialty: "ابتكار وتصميم",
      experience: "11+ سنة",
      location: "بيروت، لبنان",
      rating: 4.8,
      sessions: 140,
      price: "160 ريال/ساعة",
      bio: "متخصصة في الابتكار وتصميم تجربة المستخدم مع تركيز على المنتجات الرقمية",
      skills: ["تصميم UX/UI", "الابتكار", "التفكير التصميمي"],
      avatar: "/placeholder.svg?height=100&width=100",
      isAvailable: false,
      nextAvailable: "الاثنين 9:00 ص",
    },
  ]

  // Filter mentors based on search and filters
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = specialtyFilter === "all" || mentor.specialty === specialtyFilter
    const matchesExperience =
      experienceFilter === "all" ||
      (experienceFilter === "junior" && Number.parseInt(mentor.experience) < 10) ||
      (experienceFilter === "senior" && Number.parseInt(mentor.experience) >= 10)

    return matchesSearch && matchesSpecialty && matchesExperience
  })

  const specialties = [
    "all",
    "ريادة الأعمال",
    "تسويق رقمي",
    "تطوير المنتجات",
    "استثمار وتمويل",
    "قيادة وإدارة",
    "ابتكار وتصميم",
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">المرشدون</h1>
          <p className="text-muted-foreground">
            تواصل مع خبراء ومرشدين متخصصين لتطوير مشروعك ومهاراتك في ريادة الأعمال
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن مرشد..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger className="w-[200px]">
                  <Filter className="h-4 w-4 ml-2" />
                  <SelectValue placeholder="التخصص" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التخصصات</SelectItem>
                  {specialties.slice(1).map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="الخبرة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المستويات</SelectItem>
                  <SelectItem value="junior">أقل من 10 سنوات</SelectItem>
                  <SelectItem value="senior">10+ سنوات</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            عرض {filteredMentors.length} من {mentors.length} مرشد
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name.split(" ")[0][0]}
                      {mentor.name.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight">{mentor.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-[#18A39E]">{mentor.title}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {mentor.specialty}
                      </Badge>
                      <div className={`h-2 w-2 rounded-full ${mentor.isAvailable ? "bg-green-500" : "bg-gray-400"}`} />
                      <span className="text-xs text-muted-foreground">{mentor.isAvailable ? "متاح" : "مشغول"}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Bio */}
                <p className="text-sm text-muted-foreground line-clamp-3">{mentor.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {mentor.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{mentor.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{mentor.sessions} جلسة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs">{mentor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs">{mentor.experience}</span>
                  </div>
                </div>

                {/* Price and Availability */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-[#18A39E]">{mentor.price}</span>
                    <span className="text-xs text-muted-foreground">متاح: {mentor.nextAvailable}</span>
                  </div>

                  <Button className="w-full" disabled={!mentor.isAvailable} style={{ backgroundColor: "#18A39E" }}>
                    <Calendar className="h-4 w-4 ml-2" />
                    {mentor.isAvailable ? "حجز جلسة" : "غير متاح حالياً"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على مرشدين يطابقون البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو المرشحات</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSpecialtyFilter("all")
                setExperienceFilter("all")
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
