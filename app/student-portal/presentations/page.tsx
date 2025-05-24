"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, FileText, Download, Edit, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function PresentationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const templates = [
    {
      id: 1,
      title: "قالب عرض مشروع ريادي",
      type: "pitch",
      category: "business",
      thumbnail: "/templates/pitch-deck.png",
      description: "قالب احترافي لعرض فكرة مشروعك أمام المستثمرين",
      format: "pptx"
    },
    {
      id: 2, 
      title: "نموذج خطة بحث علمي",
      type: "research",
      category: "academic",
      thumbnail: "/templates/research-proposal.png", 
      description: "قالب منظم لكتابة مقترح بحثك العلمي",
      format: "docx"
    },
    {
      id: 3,
      title: "عرض تقني للمنتج",
      type: "technical",
      category: "product",
      thumbnail: "/templates/technical-demo.png",
      description: "قالب لعرض المواصفات التقنية لمنتجك",
      format: "pdf"
    }
  ]

  const categories = [
    { id: "all", label: "جميع القوالب" },
    { id: "business", label: "أعمال" },
    { id: "academic", label: "أكاديمي" },
    { id: "product", label: "منتجات" }
  ]

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">قوالب العروض التقديمية</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            قم بإنشاء وتحرير عروضك التقديمية مباشرة من المتصفح. يمكنك تعديل ملفات PowerPoint وWord وPDF دون الحاجة لبرامج إضافية.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="ابحث عن قالب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-[#18A39E] hover:bg-[#16918A]" : ""}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-gray-100">
                  <img
                    src={template.thumbnail}
                    alt={template.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge 
                    className="absolute top-2 right-2 bg-[#18A39E]"
                  >
                    {template.format.toUpperCase()}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" size="sm">
                      تحميل
                      <Download className="w-4 h-4 mr-2" />
                    </Button>
                    <Button 
                      className="bg-[#18A39E] hover:bg-[#16918A]"
                      size="sm"
                    >
                      تعديل
                      <Edit className="w-4 h-4 mr-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      معاينة
                      <Eye className="w-4 h-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
