"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Search, Filter, FileType, Calendar } from "lucide-react"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock documents data
  const documents = [
    {
      id: 1,
      title: "دليل تقديم المشاريع",
      description: "دليل شامل لكيفية تقديم مشروعك للحاضنة والخطوات المطلوبة",
      category: "أدلة",
      type: "PDF",
      size: "2.5 MB",
      uploadDate: "2024-01-15",
      downloads: 245,
      url: "#",
    },
    {
      id: 2,
      title: "نموذج خطة العمل",
      description: "نموذج قالب لكتابة خطة عمل احترافية لمشروعك",
      category: "قوالب",
      type: "DOCX",
      size: "1.8 MB",
      uploadDate: "2024-02-01",
      downloads: 189,
      url: "#",
    },
    {
      id: 3,
      title: "سياسة الحاضنة",
      description: "السياسات والقواعد العامة للحاضنة وشروط الاستخدام",
      category: "سياسات",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2024-01-20",
      downloads: 156,
      url: "#",
    },
    {
      id: 4,
      title: "نموذج طلب التمويل",
      description: "نموذج طلب التمويل للمشاريع المحتضنة",
      category: "قوالب",
      type: "PDF",
      size: "0.8 MB",
      uploadDate: "2024-02-10",
      downloads: 98,
      url: "#",
    },
    {
      id: 5,
      title: "دليل التسويق الرقمي",
      description: "دليل شامل للتسويق الرقمي للمشاريع الناشئة",
      category: "أدلة",
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "2024-02-15",
      downloads: 167,
      url: "#",
    },
  ]

  const categories = ["all", "أدلة", "قوالب", "سياسات", "تقارير"]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || doc.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">الوثائق والمستندات</h1>
          <p className="text-muted-foreground">
            قائمة بالوثائق والمستندات المهمة للحاضنة والمحتضنين
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث عن وثيقة..."
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
            عرض {filteredDocuments.length} من {documents.length} وثيقة
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight mb-2">{doc.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{doc.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {doc.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <FileType className="h-4 w-4" />
                    <span>{doc.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(doc.uploadDate).toLocaleDateString("ar-SA")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{doc.downloads} تحميل</span>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    تحميل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على وثائق تطابق البحث</p>
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