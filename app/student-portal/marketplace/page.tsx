"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Eye, Heart } from "lucide-react"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Mock marketplace data
  const projects = [
    {
      id: 1,
      name: "تطبيق توصيل الطعام الذكي",
      description: "تطبيق يستخدم الذكاء الاصطناعي لتوصيل الطعام بأسرع وقت ممكن",
      category: "تكنولوجيا",
      price: "مجاني",
      rating: 4.8,
      views: 1250,
      likes: 89,
      author: "أحمد محمد",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["ذكاء اصطناعي", "توصيل", "تطبيق جوال"],
      status: "متاح",
      featured: true,
    },
    {
      id: 2,
      name: "منصة التعليم الإلكتروني",
      description: "منصة شاملة للتعليم عن بُعد مع أدوات تفاعلية متقدمة",
      category: "تعليم",
      price: "500 دج/شهر",
      rating: 4.6,
      views: 980,
      likes: 67,
      author: "فاطمة علي",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["تعليم", "منصة", "تفاعلي"],
      status: "متاح",
      featured: false,
    },
    {
      id: 3,
      name: "نظام إدارة المخزون",
      description: "حل متكامل لإدارة المخزون والمبيعات للشركات الصغيرة",
      category: "أعمال",
      price: "1200 دج",
      rating: 4.9,
      views: 756,
      likes: 92,
      author: "محمد حسن",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["إدارة", "مخزون", "مبيعات"],
      status: "متاح",
      featured: true,
    },
    {
      id: 4,
      name: "تطبيق الصحة واللياقة",
      description: "تطبيق شامل لمتابعة الصحة واللياقة البدنية مع مدرب شخصي",
      category: "صحة",
      price: "300 دج/شهر",
      rating: 4.4,
      views: 1100,
      likes: 78,
      author: "سارة أحمد",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["صحة", "لياقة", "تدريب"],
      status: "قريباً",
      featured: false,
    },
    {
      id: 5,
      name: "منصة التجارة الإلكترونية",
      description: "منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن",
      category: "تجارة",
      price: "2000 دج",
      rating: 4.7,
      views: 1450,
      likes: 134,
      author: "عمر خالد",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["تجارة إلكترونية", "دفع", "أمان"],
      status: "متاح",
      featured: true,
    },
    {
      id: 6,
      name: "تطبيق إدارة المهام",
      description: "تطبيق بسيط وفعال لإدارة المهام اليومية والمشاريع",
      category: "إنتاجية",
      price: "مجاني",
      rating: 4.3,
      views: 890,
      likes: 56,
      author: "ليلى محمود",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["مهام", "إنتاجية", "تنظيم"],
      status: "متاح",
      featured: false,
    },
  ]

  const categories = ["all", "تكنولوجيا", "تعليم", "أعمال", "صحة", "تجارة", "إنتاجية"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "views":
        return b.views - a.views
      case "likes":
        return b.likes - a.likes
      default:
        return b.id - a.id
    }
  })

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">سوق المشاريع الطلابية</h1>
              <p className="text-muted-foreground mt-2">اكتشف واستكشف المشاريع المبتكرة من زملائك الطلاب</p>
            </div>
            <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">أضف مشروعك</Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="ابحث في المشاريع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">الأحدث</SelectItem>
                <SelectItem value="rating">التقييم</SelectItem>
                <SelectItem value="views">المشاهدات</SelectItem>
                <SelectItem value="likes">الإعجابات</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">المشاريع المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects
              .filter((project) => project.featured)
              .map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-[#18A39E] text-white">مميز</Badge>
                    <Badge
                      variant={project.status === "متاح" ? "default" : "secondary"}
                      className="absolute top-2 left-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>بواسطة: {project.author}</span>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{project.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                        <span>{project.likes}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#18A39E]">{project.price}</span>
                      <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A] text-white">
                        عرض المزيد
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">جميع المشاريع</h2>
            <span className="text-sm text-muted-foreground">{sortedProjects.length} مشروع</span>
          </div>

          {sortedProjects.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">لا توجد مشاريع تطابق البحث</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    {project.featured && <Badge className="absolute top-2 right-2 bg-[#18A39E] text-white">مميز</Badge>}
                    <Badge
                      variant={project.status === "متاح" ? "default" : "secondary"}
                      className="absolute top-2 left-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>بواسطة: {project.author}</span>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{project.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                        <span>{project.likes}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#18A39E]">{project.price}</span>
                      <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A] text-white">
                        عرض المزيد
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
