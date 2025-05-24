"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  ExternalLink,
  BarChart3,
  Target,
  Users,
  DollarSign,
  Presentation,
  TrendingUp,
  Calendar,
  FileSearch,
  Lightbulb,
} from "lucide-react"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  // Mock tools data
  const tools = [
    {
      id: 1,
      name: "نموذج العمل التجاري",
      description: "أداة تفاعلية لبناء وتطوير نموذج العمل التجاري الخاص بمشروعك باستخدام منهجية Business Model Canvas",
      category: "تخطيط الأعمال",
      difficulty: "مبتدئ",
      duration: "30-45 دقيقة",
      icon: BarChart3,
      features: ["قوالب جاهزة", "حفظ تلقائي", "تصدير PDF", "مشاركة الفريق"],
      isPopular: true,
      usageCount: 1250,
    },
    {
      id: 2,
      name: "تحليل SWOT",
      description: "أداة شاملة لتحليل نقاط القوة والضعف والفرص والتهديدات لمشروعك أو فكرتك التجارية",
      category: "تحليل استراتيجي",
      difficulty: "مبتدئ",
      duration: "20-30 دقيقة",
      icon: Target,
      features: ["تحليل تفاعلي", "أمثلة توضيحية", "تقارير مفصلة", "مقارنات"],
      isPopular: false,
      usageCount: 890,
    },
    {
      id: 3,
      name: "مولد الشخصيات المستهدفة",
      description: "أنشئ شخصيات مفصلة لعملائك المستهدفين بناءً على البيانات والأبحاث السوقية",
      category: "تسويق",
      difficulty: "متوسط",
      duration: "45-60 دقيقة",
      icon: Users,
      features: ["قوالب متنوعة", "تحليل ديموغرافي", "خرائط رحلة العميل", "تصدير البيانات"],
      isPopular: true,
      usageCount: 650,
    },
    {
      id: 4,
      name: "التوقعات المالية",
      description: "احسب التوقعات المالية لمشروعك بما في ذلك الإيرادات والمصروفات والربحية لمدة 5 سنوات",
      category: "مالية",
      difficulty: "متقدم",
      duration: "60-90 دقيقة",
      icon: DollarSign,
      features: ["نماذج مالية", "رسوم بيانية", "سيناريوهات متعددة", "تحليل الحساسية"],
      isPopular: false,
      usageCount: 420,
    },
    {
      id: 5,
      name: "منشئ العروض التقديمية",
      description: "أنشئ عروض تقديمية احترافية لمشروعك مع قوالب مصممة خصيصاً للشركات الناشئة",
      category: "عروض تقديمية",
      difficulty: "مبتدئ",
      duration: "30-45 دقيقة",
      icon: Presentation,
      features: ["قوالب احترافية", "محرر سحب وإفلات", "رسوم بيانية", "تصدير متعدد"],
      isPopular: true,
      usageCount: 780,
    },
    {
      id: 6,
      name: "أبحاث السوق",
      description: "أداة شاملة لإجراء أبحاث السوق وتحليل المنافسين والاتجاهات الصناعية",
      category: "أبحاث",
      difficulty: "متوسط",
      duration: "90-120 دقيقة",
      icon: TrendingUp,
      features: ["قواعد بيانات", "تحليل المنافسين", "اتجاهات السوق", "تقارير مخصصة"],
      isPopular: false,
      usageCount: 320,
    },
    {
      id: 7,
      name: "الجدول الزمني للمشروع",
      description: "خطط وتتبع مراحل تطوير مشروعك مع أدوات إدارة المشاريع والمهام",
      category: "إدارة المشاريع",
      difficulty: "متوسط",
      duration: "45-60 دقيقة",
      icon: Calendar,
      features: ["مخططات جانت", "تتبع المهام", "تعاون الفريق", "تنبيهات"],
      isPopular: false,
      usageCount: 560,
    },
    {
      id: 8,
      name: "البحث في براءات الاختراع",
      description: "ابحث في قواعد بيانات براءات الاختراع العالمية للتأكد من أصالة فكرتك",
      category: "ملكية فكرية",
      difficulty: "متقدم",
      duration: "60-90 دقيقة",
      icon: FileSearch,
      features: ["بحث متقدم", "قواعد بيانات عالمية", "تحليل براءات", "تقارير مفصلة"],
      isPopular: false,
      usageCount: 180,
    },
    {
      id: 9,
      name: "مُقيم الأفكار",
      description: "قيّم جدوى فكرتك التجارية من خلال مجموعة من المعايير والمقاييس المدروسة",
      category: "تقييم الأفكار",
      difficulty: "مبتدئ",
      duration: "15-30 دقيقة",
      icon: Lightbulb,
      features: ["تقييم شامل", "نقاط القوة والضعف", "توصيات", "مقارنة الأفكار"],
      isPopular: true,
      usageCount: 950,
    },
  ]

  // Filter tools based on search and filters
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter
    const matchesDifficulty = difficultyFilter === "all" || tool.difficulty === difficultyFilter

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const categories = [
    "all",
    "تخطيط الأعمال",
    "تحليل استراتيجي",
    "تسويق",
    "مالية",
    "عروض تقديمية",
    "أبحاث",
    "إدارة المشاريع",
    "ملكية فكرية",
    "تقييم الأفكار",
  ]
  const difficulties = ["all", "مبتدئ", "متوسط", "متقدم"]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">أدوات الأعمال</h1>
          <p className="text-muted-foreground">
            مجموعة شاملة من الأدوات التفاعلية لمساعدتك في تطوير وتحليل مشروعك التجاري
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث في الأدوات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2">
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
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="المستوى" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المستويات</SelectItem>
                  {difficulties.slice(1).map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty}
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
            عرض {filteredTools.length} من {tools.length} أداة
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#18A39E]/10">
                      <IconComponent className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        {tool.isPopular && (
                          <Badge variant="secondary" className="text-xs bg-[#18A39E]/10 text-[#18A39E]">
                            شائع
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tool.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">المميزات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>المدة المتوقعة: {tool.duration}</span>
                    <span>{tool.usageCount} مستخدم</span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full" style={{ backgroundColor: "#18A39E" }}>
                    <ExternalLink className="h-4 w-4 ml-2" />
                    تشغيل الأداة
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على أدوات تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو المرشحات</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
                setDifficultyFilter("all")
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
