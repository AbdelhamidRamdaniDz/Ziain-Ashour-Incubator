"use client"

import { useState } from "react"
import { Calendar, Check, ChevronDown, Download, Eye, Filter, Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [dateFilter, setDateFilter] = useState<string | null>(null)

  // Mock data for applications
  const applications = [
    {
      id: "APP-2025-0156",
      name: "أحمد خالد",
      email: "ahmed.k@example.com",
      department: "علوم الحاسوب",
      projectTitle: "نظام فرز النفايات بالذكاء الاصطناعي",
      submissionDate: "23 مايو 2025",
      status: "pending",
    },
    {
      id: "APP-2025-0155",
      name: "فاطمة بن علي",
      email: "fatima.b@example.com",
      department: "التكنولوجيا الحيوية",
      projectTitle: "البلاستيك الحيوي المستدام من النفايات الزراعية",
      submissionDate: "22 مايو 2025",
      status: "pending",
    },
    {
      id: "APP-2025-0154",
      name: "عمر المنصوري",
      email: "omar.m@example.com",
      department: "الهندسة الميكانيكية",
      projectTitle: "جهاز تنقية المياه بالطاقة الشمسية",
      submissionDate: "21 مايو 2025",
      status: "reviewing",
    },
    {
      id: "APP-2025-0153",
      name: "ليلى العمراني",
      email: "leila.a@example.com",
      department: "إدارة الأعمال",
      projectTitle: "سوق للحرفيين المحليين",
      submissionDate: "20 مايو 2025",
      status: "approved",
    },
    {
      id: "APP-2025-0152",
      name: "كريم بوعزيزي",
      email: "karim.b@example.com",
      department: "الهندسة الكهربائية",
      projectTitle: "نظام إدارة الطاقة المنزلية الذكي",
      submissionDate: "19 مايو 2025",
      status: "rejected",
    },
    {
      id: "APP-2025-0151",
      name: "ياسمين تازي",
      email: "yasmine.t@example.com",
      department: "علوم الحاسوب",
      projectTitle: "التحقق من الشهادات الأكاديمية باستخدام البلوكتشين",
      submissionDate: "18 مايو 2025",
      status: "approved",
    },
    {
      id: "APP-2025-0150",
      name: "مهدي العلوي",
      email: "mehdi.a@example.com",
      department: "الهندسة الميكانيكية",
      projectTitle: "يد اصطناعية منخفضة التكلفة",
      submissionDate: "17 مايو 2025",
      status: "reviewing",
    },
  ]

  // Filter applications based on search query and filters
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      searchQuery === "" ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.department.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === null || app.status === statusFilter
    const matchesDate = dateFilter === null || true

    return matchesSearch && matchesStatus && matchesDate
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            قيد الانتظار
          </Badge>
        )
      case "reviewing":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            قيد المراجعة
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            تمت الموافقة
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

  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">مدير الطلبات</h1>
        <p className="text-muted-foreground">مراجعة وإدارة طلبات الطلاب للحاضنة</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <CardTitle>الطلبات</CardTitle>
              <CardDescription>تم العثور على {filteredApplications.length} طلب</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-3.5 w-3.5" />
                <span>تصدير</span>
              </Button>
              <Button size="sm" className="h-8">
                عرض الكل
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="البحث في الطلبات..."
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span>الحالة</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>تصفية حسب الحالة</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                      <Check className={`ml-2 h-4 w-4 ${statusFilter === null ? "opacity-100" : "opacity-0"}`} />
                      جميع الحالات
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                      <Check className={`ml-2 h-4 w-4 ${statusFilter === "pending" ? "opacity-100" : "opacity-0"}`} />
                      قيد الانتظار
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("reviewing")}>
                      <Check className={`ml-2 h-4 w-4 ${statusFilter === "reviewing" ? "opacity-100" : "opacity-0"}`} />
                      قيد المراجعة
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("approved")}>
                      <Check className={`ml-2 h-4 w-4 ${statusFilter === "approved" ? "opacity-100" : "opacity-0"}`} />
                      تمت الموافقة
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("rejected")}>
                      <Check className={`ml-2 h-4 w-4 ${statusFilter === "rejected" ? "opacity-100" : "opacity-0"}`} />
                      مرفوض
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>التاريخ</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>تصفية حسب التاريخ</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setDateFilter(null)}>
                      <Check className={`ml-2 h-4 w-4 ${dateFilter === null ? "opacity-100" : "opacity-0"}`} />
                      جميع التواريخ
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("today")}>
                      <Check className={`ml-2 h-4 w-4 ${dateFilter === "today" ? "opacity-100" : "opacity-0"}`} />
                      اليوم
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("week")}>
                      <Check className={`ml-2 h-4 w-4 ${dateFilter === "week" ? "opacity-100" : "opacity-0"}`} />
                      هذا الأسبوع
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDateFilter("month")}>
                      <Check className={`ml-2 h-4 w-4 ${dateFilter === "month" ? "opacity-100" : "opacity-0"}`} />
                      هذا الشهر
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="sm" className="h-9 gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>المزيد من الفلاتر</span>
              </Button>

              {(statusFilter !== null || dateFilter !== null) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 gap-1"
                  onClick={() => {
                    setStatusFilter(null)
                    setDateFilter(null)
                  }}
                >
                  <X className="h-3.5 w-3.5" />
                  <span>مسح الفلاتر</span>
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>رقم الطلب</TableHead>
                  <TableHead>الاسم</TableHead>
                  <TableHead className="hidden md:table-cell">القسم</TableHead>
                  <TableHead className="hidden lg:table-cell">عنوان المشروع</TableHead>
                  <TableHead className="hidden sm:table-cell">تاريخ التقديم</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{application.name}</p>
                        <p className="text-xs text-muted-foreground">{application.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{application.department}</TableCell>
                    <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                      {application.projectTitle}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{application.submissionDate}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">عرض</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <ChevronDown className="h-4 w-4" />
                              <span className="sr-only">المزيد</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                            <DropdownMenuItem>موافقة</DropdownMenuItem>
                            <DropdownMenuItem>رفض</DropdownMenuItem>
                            <DropdownMenuItem>طلب معلومات إضافية</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>تحميل PDF</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
