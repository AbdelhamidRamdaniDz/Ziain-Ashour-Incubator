"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, FileText, Video, File, Eye, Calendar, User } from "lucide-react"

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Mock library resources data
  const resources = [
    {
      id: 1,
      title: "دليل ريادة الأعمال الشامل",
      description: "دليل متكامل يغطي جميع جوانب ريادة الأعمال من الفكرة إلى التنفيذ",
      type: "PDF",
      category: "ريادة الأعمال",
      size: "2.5 MB",
      pages: 120,
      downloads: 1250,
      uploadDate: "2024-01-15",
      author: "د. أحمد محمد",
      language: "العربية",
      isPopular: true,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      title: "قوالب نموذج العمل التجاري",
      description: "مجموعة من القوالب الجاهزة لبناء نموذج العمل التجاري",
      type: "PDF",
      category: "قوالب",
      size: "1.8 MB",
      pages: 25,
      downloads: 890,
      uploadDate: "2024-02-01",
      author: "فريق الحاضنة",
      language: "العربية",
      isPopular: false,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      title: "استراتيجيات التسويق الرقمي",
      description: "فيديو تعليمي شامل حول أحدث استراتيجيات التسويق الرقمي",
      type: "فيديو",
      category: "تسويق",
      size: "450 MB",
      duration: "2:30:00",
      downloads: 650,
      uploadDate: "2024-01-28",
      author: "أ. فاطمة العلي",
      language: "العربية",
      isPopular: true,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 4,
      title: "نماذج التوقعات المالية",
      description: "ملفات Excel جاهزة لحساب التوقعات المالية للمشاريع",
      type: "Excel",
      category: "مالية",
      size: "3.2 MB",
      sheets: 8,
      downloads: 420,
      uploadDate: "2024-02-10",
      author: "د. خالد السعيد",
      language: "العربية",
      isPopular: false,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 5,
      title: "دراسة حالة: شركة تقنية ناجحة",
      description: "تحليل مفصل لرحلة شركة تقنية من الفكرة إلى النجاح",
      type: "PDF",
      category: "دراسات حالة",
      size: "4.1 MB",
      pages: 45,
      downloads: 780,
      uploadDate: "2024-01-20",
      author: "م. سارة أحمد",
      language: "العربية",
      isPopular: true,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 6,
      title: "ورشة عمل: بناء الفريق",
      description: "تسجيل ورشة عمل حول بناء وإدارة الفرق الفعالة",
      type: "فيديو",
      category: "إدارة",
      size: "680 MB",
      duration: "3:15:00",
      downloads: 320,
      uploadDate: "2024-02-05",
      author: "د. محمد الزهراني",
      language: "العربية",
      isPopular: false,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 7,
      title: "قائمة مراجعة إطلاق المنتج",
      description: "قائمة شاملة للتحقق من جاهزية المنتج قبل الإطلاق",
      type: "PDF",
      category: "قوالب",
      size: "800 KB",
      pages: 12,
      downloads: 560,
      uploadDate: "2024-02-12",
      author: "فريق الحاضنة",
      language: "العربية",
      isPopular: false,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 8,
      title: "تقرير اتجاهات السوق 2024",
      description: "تحليل شامل لاتجاهات السوق والفرص الاستثمارية",
      type: "PDF",
      category: "أبحاث",
      size: "5.8 MB",
      pages: 85,
      downloads: 950,
      uploadDate: "2024-01-10",
      author: "مركز الأبحاث",
      language: "العربية",
      isPopular: true,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
  ]

  // Filter resources based on search and filters
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter
    const matchesType = typeFilter === "all" || resource.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  const categories = ["all", "ريادة الأعمال", "قوالب", "تسويق", "مالية", "دراسات حالة", "إدارة", "أبحاث"]
  const types = ["all", "PDF", "فيديو", "Excel"]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return FileText
      case "فيديو":
        return Video
      case "Excel":
        return File
      default:
        return File
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">المكتبة الرقمية</h1>
          <p className="text-muted-foreground">
            مجموعة شاملة من الموارد التعليمية والقوالب والأدلة لدعم رحلتك في ريادة الأعمال
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث في المكتبة..."
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
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="نوع الملف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  {types.slice(1).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
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
            عرض {filteredResources.length} من {resources.length} مورد
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const FileIcon = getFileIcon(resource.type)
            return (
              <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={resource.thumbnail || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant={resource.isPopular ? "default" : "secondary"} className="text-xs">
                      {resource.isPopular ? "شائع" : resource.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="p-2 rounded-full bg-white/90">
                      <FileIcon className="h-4 w-4 text-[#18A39E]" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(resource.uploadDate)}</span>
                    </div>
                  </div>

                  {/* File Details */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>الحجم: {resource.size}</span>
                    <span>
                      {resource.type === "فيديو"
                        ? `المدة: ${resource.duration}`
                        : resource.pages
                          ? `${resource.pages} صفحة`
                          : resource.sheets
                            ? `${resource.sheets} ورقة`
                            : ""}
                    </span>
                  </div>

                  {/* Downloads */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{resource.downloads} تحميل</span>
                    <span className="text-[#18A39E] font-medium">{resource.language}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1" style={{ backgroundColor: "#18A39E" }}>
                      <Download className="h-4 w-4 ml-2" />
                      تحميل
                    </Button>
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على موارد تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو المرشحات</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setTypeFilter("all")
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
