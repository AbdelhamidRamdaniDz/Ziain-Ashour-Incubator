"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, Tag, User } from "lucide-react"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "كيف تبدأ مشروعك الناشئ في 5 خطوات بسيطة",
    excerpt: "دليلك الشامل لبدء مشروعك الناشئ من الصفر، مع نصائح عملية وخطوات واضحة للنجاح",
    content: "...",
    author: "أحمد محمد",
    date: "2024-03-15",
    readTime: "5 دقائق",
    category: "ريادة الأعمال",
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
  },
  {
    id: 2,
    title: "أهمية التحليل المالي في المشاريع الناشئة",
    excerpt: "تعرف على أساسيات التحليل المالي وأهميته في اتخاذ القرارات الاستراتيجية لمشروعك",
    content: "...",
    author: "سارة أحمد",
    date: "2024-03-10",
    readTime: "7 دقائق",
    category: "تمويل",
    image: "/placeholder.svg?height=400&width=800",
    featured: true,
  },
  {
    id: 3,
    title: "استراتيجيات التسويق الرقمي للمشاريع الناشئة",
    excerpt: "أحدث استراتيجيات التسويق الرقمي التي يمكنك تطبيقها لتعزيز نمو مشروعك",
    content: "...",
    author: "محمد علي",
    date: "2024-03-05",
    readTime: "6 دقائق",
    category: "تسويق",
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
  },
  {
    id: 4,
    title: "كيف تجذب المستثمرين لمشروعك الناشئ",
    excerpt: "نصائح وإرشادات عملية لجذب المستثمرين وتأمين التمويل لمشروعك",
    content: "...",
    author: "فاطمة الزهراء",
    date: "2024-03-01",
    readTime: "8 دقائق",
    category: "استثمار",
    image: "/placeholder.svg?height=400&width=800",
    featured: false,
  },
]

const categories = [
  "جميع المقالات",
  "ريادة الأعمال",
  "تمويل",
  "تسويق",
  "استثمار",
  "تطوير الأعمال",
  "الابتكار",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "جميع المقالات" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">المدونة</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف أحدث المقالات والنصائح في مجال ريادة الأعمال والابتكار
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحث عن مقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">مقالات مميزة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("ar-SA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">لم يتم العثور على مقالات</p>
              <p className="text-sm">جرب تغيير كلمات البحث أو الفئة</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("جميع المقالات")
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