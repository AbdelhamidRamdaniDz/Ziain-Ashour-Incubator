"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, Clock, Users, ArrowRight } from "lucide-react"

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock guides data
  const guides = [
    {
      id: 1,
      title: "دليل ريادة الأعمال للمبتدئين",
      description: "دليل شامل للمبتدئين في مجال ريادة الأعمال وكيفية بدء مشروعك الأول",
      category: "ريادة الأعمال",
      duration: "4 ساعات",
      level: "مبتدئ",
      participants: 1250,
      url: "#",
    },
    {
      id: 2,
      title: "كيفية كتابة خطة عمل ناجحة",
      description: "دليل تفصيلي لكتابة خطة عمل احترافية لمشروعك",
      category: "تخطيط الأعمال",
      duration: "3 ساعات",
      level: "متوسط",
      participants: 890,
      url: "#",
    },
    {
      id: 3,
      title: "أساسيات التسويق الرقمي",
      description: "تعلم أساسيات التسويق الرقمي وكيفية تسويق مشروعك عبر الإنترنت",
      category: "تسويق",
      duration: "5 ساعات",
      level: "مبتدئ",
      participants: 2100,
      url: "#",
    },
    {
      id: 4,
      title: "إدارة الموارد المالية للمشاريع الناشئة",
      description: "دليل شامل لإدارة الموارد المالية وتخطيط الميزانية لمشروعك",
      category: "مالية",
      duration: "4 ساعات",
      level: "متقدم",
      participants: 750,
      url: "#",
    },
    {
      id: 5,
      title: "كيفية جذب المستثمرين",
      description: "تعلم كيفية جذب المستثمرين وتقديم مشروعك بشكل احترافي",
      category: "تمويل",
      duration: "3 ساعات",
      level: "متوسط",
      participants: 680,
      url: "#",
    },
  ]

  const categories = ["all", "ريادة الأعمال", "تخطيط الأعمال", "تسويق", "مالية", "تمويل"]

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || guide.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">الأدلة والبرامج التعليمية</h1>
          <p className="text-muted-foreground">
            مجموعة شاملة من الأدلة والبرامج التعليمية لمساعدتك في تطوير مشروعك
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن دليل..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            عرض {filteredGuides.length} من {guides.length} دليل
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight mb-2">{guide.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {guide.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{guide.participants} مشارك</span>
                  </div>
                </div>
                <Button className="w-full gap-2">
                  ابدأ التعلم
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على أدلة تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو التصنيف</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
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