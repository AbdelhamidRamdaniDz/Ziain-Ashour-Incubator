"use client"

import { useState } from "react"
import { Lightbulb, MessageSquare, Plus, Search, ThumbsUp, Users, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function InnovationHubPage() {
  const [isIdeaDialogOpen, setIsIdeaDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for innovation ideas
  const innovationIdeas = [
    {
      id: 1,
      title: "نظام التنقل الذكي في الحرم الجامعي",
      description:
        "نظام تنقل قائم على الواقع المعزز لمساعدة الطلاب والزوار على التنقل في الحرم الجامعي بكفاءة أكبر.",
      author: "أحمد خالد",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "تكنولوجيا",
      stage: "فكرة",
      likes: 24,
      comments: 8,
      collaborators: 3,
      postedDate: "منذ يومين",
      tags: ["واقع معزز", "تطبيق جوال", "تنقل"],
    },
    {
      id: 2,
      title: "حل تغليف الطعام المستدام",
      description: "تغليف قابل للتحلل مصنوع من النفايات الزراعية للحد من التلوث البلاستيكي في صناعة الأغذية.",
      author: "فاطمة بن علي",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "الاستدامة",
      stage: "بحث",
      likes: 31,
      comments: 12,
      collaborators: 5,
      postedDate: "منذ أسبوع",
      tags: ["استدامة", "تغليف", "بيئة"],
    },
    {
      id: 3,
      title: "مساعد دراسة بالذكاء الاصطناعي",
      description:
        "منصة تعلم مخصصة تتكيف مع أنماط وتفضيلات التعلم الفردية للطلاب.",
      author: "عمر منصوري",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "تعليم",
      stage: "نموذج أولي",
      likes: 45,
      comments: 18,
      collaborators: 7,
      postedDate: "منذ 3 أيام",
      tags: ["ذكاء اصطناعي", "تعليم", "تعلم آلي"],
    },
    {
      id: 4,
      title: "منصة الطب عن بعد للمناطق الريفية",
      description:
        "منصة صحة متنقلة تربط المرضى في المناطق الريفية مع المتخصصين في الرعاية الصحية من خلال استشارات الفيديو.",
      author: "ليلى عمراني",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "رعاية صحية",
      stage: "تطوير",
      likes: 38,
      comments: 15,
      collaborators: 4,
      postedDate: "منذ 5 أيام",
      tags: ["رعاية صحية", "طب عن بعد", "جوال"],
    },
    {
      id: 5,
      title: "نظام تصويت قائم على البلوكتشين",
      description: "نظام تصويت آمن وشفاف باستخدام تقنية البلوكتشين لانتخابات مجلس الطلاب.",
      author: "كريم بوعزيزي",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "تكنولوجيا",
      stage: "فكرة",
      likes: 22,
      comments: 9,
      collaborators: 2,
      postedDate: "منذ أسبوع",
      tags: ["بلوكتشين", "أمان", "تصويت"],
    },
    {
      id: 6,
      title: "نظام إدارة المياه الذكي",
      description:
        "نظام قائم على إنترنت الأشياء لمراقبة وتحسين استخدام المياه في المباني الجامعية والمساكن الطلابية.",
      author: "ياسمين التازي",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      category: "الاستدامة",
      stage: "بحث",
      likes: 29,
      comments: 11,
      collaborators: 6,
      postedDate: "منذ 4 أيام",
      tags: ["إنترنت الأشياء", "إدارة المياه", "مدينة ذكية"],
    },
  ]

  const filteredIdeas = innovationIdeas.filter((idea) => {
    const matchesSearch =
      searchQuery === "" ||
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || idea.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "فكرة":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "بحث":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "نموذج أولي":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "تطوير":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">مركز الابتكار</h1>
        <p className="text-muted-foreground">شارك الأفكار، تعاون مع زملائك، وحول المفاهيم إلى واقع</p>
      </div>

      <Tabs defaultValue="explore" className="space-y-6">
        <TabsList>
          <TabsTrigger value="explore">استكشاف الأفكار</TabsTrigger>
          <TabsTrigger value="my-ideas">أفكاري</TabsTrigger>
          <TabsTrigger value="collaborations">التعاون</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن الأفكار..."
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التصنيفات</SelectItem>
                  <SelectItem value="تكنولوجيا">تكنولوجيا</SelectItem>
                  <SelectItem value="رعاية صحية">رعاية صحية</SelectItem>
                  <SelectItem value="تعليم">تعليم</SelectItem>
                  <SelectItem value="الاستدامة">الاستدامة</SelectItem>
                  <SelectItem value="مالية">مالية</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isIdeaDialogOpen} onOpenChange={setIsIdeaDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    شارك فكرة
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>شارك فكرة الابتكار الخاصة بك</DialogTitle>
                    <DialogDescription>شارك فكرتك مع المجتمع وابحث عن متعاونين</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">عنوان الفكرة</Label>
                      <Input id="title" placeholder="أدخل عنواناً جذاباً لفكرتك" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">التصنيف</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر التصنيف" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">تكنولوجيا</SelectItem>
                          <SelectItem value="healthcare">رعاية صحية</SelectItem>
                          <SelectItem value="education">تعليم</SelectItem>
                          <SelectItem value="sustainability">الاستدامة</SelectItem>
                          <SelectItem value="finance">مالية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">مرحلة التطوير</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المرحلة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concept">فكرة</SelectItem>
                          <SelectItem value="research">بحث</SelectItem>
                          <SelectItem value="prototype">نموذج أولي</SelectItem>
                          <SelectItem value="development">تطوير</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">الوصف</Label>
                      <Textarea
                        id="description"
                        placeholder="صف فكرتك، هدفها، وتأثيرها المحتمل"
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tags">الوسوم</Label>
                      <Input id="tags" placeholder="أضف وسوماً مفصولة بفواصل (مثال: ذكاء اصطناعي، جوال، رعاية صحية)" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsIdeaDialogOpen(false)}>
                      شارك الفكرة
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredIdeas.map((idea) => (
              <Card key={idea.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="outline" className={getStageColor(idea.stage)}>
                      {idea.stage}
                    </Badge>
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{idea.author}</p>
                        <p className="text-xs text-muted-foreground">{idea.postedDate}</p>
                      </div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={idea.authorAvatar || "/placeholder.svg"} alt={idea.author} />
                        <AvatarFallback>
                          {idea.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{idea.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{idea.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {idea.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="outline">{idea.category}</Badge>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span>{idea.likes}</span>
                        <ThumbsUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{idea.comments}</span>
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{idea.collaborators}</span>
                        <Users className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" className="flex-1 gap-1">
                    <Users className="h-4 w-4" />
                    تعاون
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Eye className="h-4 w-4" />
                    عرض التفاصيل
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-ideas" className="space-y-6">
          <div className="flex items-center justify-between">
            <Button className="gap-2" onClick={() => setIsIdeaDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              شارك فكرة جديدة
            </Button>
            <h2 className="text-xl font-semibold">أفكار الابتكار الخاصة بي</h2>
          </div>

          <div className="text-center py-12">
            <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">لم تتم مشاركة أي أفكار بعد</h3>
            <p className="text-muted-foreground mb-4">شارك أول فكرة ابتكار مع المجتمع</p>
            <Button onClick={() => setIsIdeaDialogOpen(true)}>شارك فكرتك الأولى</Button>
          </div>
        </TabsContent>

        <TabsContent value="collaborations" className="space-y-6">
          <div className="text-center py-12">
            <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">لا يوجد تعاون نشط</h3>
            <p className="text-muted-foreground mb-4">
              انضم إلى مشاريع الطلاب الآخرين أو ادعُ الآخرين للتعاون في أفكارك
            </p>
            <Button variant="outline">استكشف الأفكار</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
