"use client"

import { useState } from "react"
import { Book, BookOpen, Download, Eye, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DigitalLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Mock data for library resources
  const libraryResources = [
    {
      id: 1,
      title: "بدء التشغيل الرشيق",
      author: "إريك ريس",
      type: "كتاب",
      category: "أعمال",
      description:
        "منهجية لتطوير الأعمال والمنتجات تهدف إلى تقصير دورات تطوير المنتجات.",
      rating: 4.8,
      downloads: 1250,
      pages: 336,
      format: "PDF",
      size: "2.4 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "من الصفر إلى واحد",
      author: "بيتر ثيل",
      type: "كتاب",
      category: "أعمال",
      description:
        "ملاحظات حول الشركات الناشئة، أو كيفية بناء المستقبل. دليل لإنشاء الاحتكارات وبناء الشركات الناجحة.",
      rating: 4.6,
      downloads: 980,
      pages: 224,
      format: "PDF",
      size: "1.8 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "عملية التفكير التصميمي",
      author: "IDEO",
      type: "ورقة بحثية",
      category: "تصميم",
      description: "دليل شامل لمنهجية التفكير التصميمي وتطبيقها في الابتكار.",
      rating: 4.7,
      downloads: 756,
      pages: 45,
      format: "PDF",
      size: "3.2 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "الذكاء الاصطناعي: نهج حديث",
      author: "ستيوارت راسل، بيتر نورفيج",
      type: "كتاب دراسي",
      category: "تكنولوجيا",
      description: "الكتاب الرائد في الذكاء الاصطناعي، يستخدم في أكثر من 1400 جامعة حول العالم.",
      rating: 4.9,
      downloads: 2100,
      pages: 1152,
      format: "PDF",
      size: "15.6 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "أساسيات تقنية البلوكتشين",
      author: "مؤلفون متعددون",
      type: "ورقة بحثية",
      category: "تكنولوجيا",
      description: "مجموعة من الأوراق البحثية حول تقنية البلوكتشين وتطبيقاتها في مختلف الصناعات.",
      rating: 4.5,
      downloads: 634,
      pages: 78,
      format: "PDF",
      size: "4.1 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 6,
      title: "النمذجة المالية للشركات الناشئة",
      author: "المعهد المالي",
      type: "دليل",
      category: "مالية",
      description: "دليل خطوة بخطوة لإنشاء النماذج المالية والتوقعات للشركات الناشئة.",
      rating: 4.4,
      downloads: 892,
      pages: 156,
      format: "PDF",
      size: "5.8 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 7,
      title: "التسويق في العصر الرقمي",
      author: "خبراء التسويق",
      type: "كتاب",
      category: "تسويق",
      description: "دليل شامل لاستراتيجيات التسويق الرقمي للشركات الحديثة والناشئة.",
      rating: 4.3,
      downloads: 567,
      pages: 289,
      format: "PDF",
      size: "3.7 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 8,
      title: "قانون الملكية الفكرية للمبتكرين",
      author: "خبراء قانونيون",
      type: "دليل",
      category: "قانوني",
      description:
        "دليل أساسي لفهم وحماية الملكية الفكرية للمخترعين ورواد الأعمال.",
      rating: 4.6,
      downloads: 423,
      pages: 198,
      format: "PDF",
      size: "2.9 MB",
      cover: "/placeholder.svg?height=300&width=200",
    },
  ]

  const filteredResources = libraryResources.filter((resource) => {
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter
    const matchesType = typeFilter === "all" || resource.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "كتاب":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "ورقة بحثية":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "كتاب دراسي":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "دليل":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">المكتبة الرقمية</h1>
        <p className="text-muted-foreground">
          الوصول إلى مجموعتنا الشاملة من الكتب والأوراق البحثية والموارد
        </p>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="browse">تصفح المكتبة</TabsTrigger>
          <TabsTrigger value="favorites">المفضلة</TabsTrigger>
          <TabsTrigger value="recent">تمت مشاهدته مؤخراً</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center justify-end">
            <div className="flex gap-2 justify-end">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px] text-right">
                  <SelectValue placeholder="التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-right">جميع التصنيفات</SelectItem>
                  <SelectItem value="أعمال" className="text-right">أعمال</SelectItem>
                  <SelectItem value="تكنولوجيا" className="text-right">تكنولوجيا</SelectItem>
                  <SelectItem value="تصميم" className="text-right">تصميم</SelectItem>
                  <SelectItem value="مالية" className="text-right">مالية</SelectItem>
                  <SelectItem value="تسويق" className="text-right">تسويق</SelectItem>
                  <SelectItem value="قانوني" className="text-right">قانوني</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[120px] text-right">
                  <SelectValue placeholder="النوع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-right">جميع الأنواع</SelectItem>
                  <SelectItem value="كتاب" className="text-right">كتب</SelectItem>
                  <SelectItem value="ورقة بحثية" className="text-right">أوراق بحثية</SelectItem>
                  <SelectItem value="كتاب دراسي" className="text-right">كتب دراسية</SelectItem>
                  <SelectItem value="دليل" className="text-right">أدلة</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="البحث في المكتبة..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={resource.cover || "/placeholder.svg"}
                      alt={resource.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">{resource.rating}</span>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </div>
                    <Badge variant="outline" className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold line-clamp-2 mb-1 text-right">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 text-right">{resource.author}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3 text-right">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{resource.size}</span>
                    <span>{resource.pages} صفحة</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button size="sm" className="flex-1 gap-1">
                    <Download className="h-3 w-3" />
                    تحميل
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Eye className="h-3 w-3" />
                    معاينة
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">لا توجد مفضلات حتى الآن</h3>
            <p className="text-muted-foreground mb-4">ابدأ بإضافة موارد إلى مفضلاتك لتراها هنا</p>
            <Button variant="outline">تصفح المكتبة</Button>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <div className="text-center py-12">
            <Book className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">لا يوجد نشاط حديث</h3>
            <p className="text-muted-foreground mb-4">الموارد التي تشاهدها ستظهر هنا للوصول السريع</p>
            <Button variant="outline">تصفح المكتبة</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
