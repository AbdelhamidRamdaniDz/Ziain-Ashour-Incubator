"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, Tag, Filter } from "lucide-react"

// Mock data for news articles
const newsArticles = [
  {
    id: "1",
    title: "إطلاق برنامج جديد لدعم المشاريع الناشئة في الجامعة",
    description: "أعلنت حاضنة جامعة زيان عاشور عن إطلاق برنامج جديد ومبتكر لدعم المشاريع الناشئة والأفكار الريادية للطلاب والأساتذة.",
    category: "أخبار البرامج",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["برامج", "دعم", "مشاريع ناشئة"],
  },
  {
    id: "2",
    title: "ورشة عمل حول تطوير نماذج الأعمال للمشاريع الناشئة",
    description: "نظمت حاضنة جامعة زيان عاشور ورشة عمل متخصصة حول تطوير نماذج الأعمال للمشاريع الناشئة، بمشاركة أكثر من 50 طالباً وطالبة.",
    category: "ورش العمل",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["ورشة عمل", "نماذج أعمال", "تدريب"],
  },
  {
    id: "3",
    title: "توقيع اتفاقية شراكة مع شركة تقنية رائدة",
    description: "وقعت حاضنة جامعة زيان عاشور اتفاقية شراكة استراتيجية مع شركة تقنية رائدة لدعم المشاريع الناشئة في مجال التكنولوجيا.",
    category: "شراكات",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["شراكات", "تقنية", "دعم"],
  },
  {
    id: "4",
    title: "نجاح أول معرض للمشاريع الناشئة في الجامعة",
    description: "شهد معرض المشاريع الناشئة الأول في جامعة زيان عاشور نجاحاً كبيراً بمشاركة أكثر من 30 مشروعاً ريادياً.",
    category: "فعاليات",
    date: "2023-12-20",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["معرض", "مشاريع", "فعاليات"],
  },
]

const categories = [
  "الكل",
  "أخبار البرامج",
  "ورش العمل",
  "شراكات",
  "فعاليات",
  "إنجازات",
]

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "الكل" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">الأخبار والفعاليات</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            آخر الأخبار والفعاليات والأنشطة في حاضنة جامعة زيان عاشور
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحث في الأخبار..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 ml-2" />
                <SelectValue placeholder="التصنيف" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/news/${article.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="gap-1">
                        <Tag className="h-3 w-3" />
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على أخبار تطابق البحث</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو التصنيف</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("الكل")
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
