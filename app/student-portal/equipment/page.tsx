"use client"

import { useState } from "react"
import { Calendar, Clock, Package, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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

export default function EquipmentRequestPage() {
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data for available equipment
  const availableEquipment = [
    {
      id: 1,
      name: "طابعة ثلاثية الأبعاد - Ultimaker S3",
      category: "التصنيع",
      description: "طابعة ثلاثية الأبعاد احترافية للنماذج الأولية والإنتاج على نطاق صغير",
      availability: "متاح",
      location: "مختبر الابتكار أ",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "مجموعة أردوينو للمبتدئين",
      category: "الإلكترونيات",
      description: "مجموعة كاملة مع متحكم دقيق وأجهزة استشعار ومكونات",
      availability: "متاح",
      location: "مختبر الإلكترونيات",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "راسم الذبذبات - Tektronix",
      category: "الإلكترونيات",
      description: "راسم ذبذبات رقمي لتحليل الدوائر الإلكترونية",
      availability: "قيد الاستخدام",
      location: "مختبر الإلكترونيات",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "قاطع ليزر",
      category: "التصنيع",
      description: "آلة قطع بالليزر عالية الدقة لمختلف المواد",
      availability: "متاح",
      location: "مختبر التصنيع",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "مجهر رقمي",
      category: "البحث",
      description: "مجهر رقمي عالي الدقة مع إمكانيات التصوير",
      availability: "متاح",
      location: "مختبر البحث ب",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "محطة لحام",
      category: "الإلكترونيات",
      description: "محطة لحام احترافية مع تحكم في درجة الحرارة",
      availability: "متاح",
      location: "مختبر الإلكترونيات",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Mock data for user's requests
  const userRequests = [
    {
      id: "REQ-2025-0023",
      equipment: "طابعة ثلاثية الأبعاد - Ultimaker S3",
      requestDate: "22 مايو 2025",
      startDate: "25 مايو 2025",
      endDate: "30 مايو 2025",
      status: "approved",
      purpose: "تطوير نموذج أولي لغلاف جهاز إنترنت الأشياء",
    },
    {
      id: "REQ-2025-0024",
      equipment: "راسم الذبذبات - Tektronix",
      requestDate: "23 مايو 2025",
      startDate: "26 مايو 2025",
      endDate: "28 مايو 2025",
      status: "pending",
      purpose: "اختبار الدوائر لوحدة الاستشعار",
    },
    {
      id: "REQ-2025-0025",
      equipment: "قاطع ليزر",
      requestDate: "20 مايو 2025",
      startDate: "22 مايو 2025",
      endDate: "24 مايو 2025",
      status: "completed",
      purpose: "قطع ألواح الأكريليك للنموذج الأولي",
    },
  ]

  const filteredEquipment = availableEquipment.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            قيد الانتظار
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            تمت الموافقة
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            مكتمل
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            مرفوض
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "متاح":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            متاح
          </Badge>
        )
      case "قيد الاستخدام":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            قيد الاستخدام
          </Badge>
        )
      case "صيانة":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            صيانة
          </Badge>
        )
      default:
        return <Badge variant="outline">{availability}</Badge>
    }
  }

  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">طلب المعدات</h1>
        <p className="text-muted-foreground">اطلب الوصول إلى معدات المختبر والأدوات لمشاريعك</p>
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList>
          <TabsTrigger value="browse">تصفح المعدات</TabsTrigger>
          <TabsTrigger value="requests">طلباتي</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="البحث عن المعدات..."
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="الفئة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الفئات</SelectItem>
                  <SelectItem value="الإلكترونيات">الإلكترونيات</SelectItem>
                  <SelectItem value="التصنيع">التصنيع</SelectItem>
                  <SelectItem value="البحث">البحث</SelectItem>
                  <SelectItem value="الحوسبة">الحوسبة</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    طلب معدات
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>طلب معدات</DialogTitle>
                    <DialogDescription>املأ النموذج لطلب الوصول إلى المعدات</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipment">المعدات</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المعدات" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableEquipment.map((item) => (
                            <SelectItem key={item.id} value={item.name}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date">تاريخ البدء</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="end-date">تاريخ الانتهاء</Label>
                        <Input id="end-date" type="date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">الغرض</Label>
                      <Textarea id="purpose" placeholder="صف كيف تخطط لاستخدام هذه المعدات" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">المشروع</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر المشروع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iot-project">مراقب البيئة IoT</SelectItem>
                          <SelectItem value="app-project">تطبيق الصحة المتنقل</SelectItem>
                          <SelectItem value="hardware-project">جهاز المنزل الذكي</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsRequestDialogOpen(false)}>
                      تقديم الطلب
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEquipment.map((item) => (
              <Card key={item.id}>
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    {getAvailabilityBadge(item.availability)}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Package className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full"
                    disabled={item.availability !== "متاح"}
                    onClick={() => setIsRequestDialogOpen(true)}
                  >
                    {item.availability === "متاح" ? "طلب" : "غير متاح"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">طلبات المعدات الخاصة بي</h2>
            <Button className="gap-2" onClick={() => setIsRequestDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              طلب جديد
            </Button>
          </div>

          <div className="space-y-4">
            {userRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{request.equipment}</h3>
                        {getStatusBadge(request.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">رقم الطلب: {request.id}</p>
                      <p className="text-sm">{request.purpose}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>تاريخ الطلب: {request.requestDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            الفترة: {request.startDate} - {request.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {request.status === "pending" && (
                        <Button variant="outline" size="sm">
                          إلغاء
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
