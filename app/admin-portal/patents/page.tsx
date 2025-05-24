"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Eye, Check, X, Filter, ChevronLeft, ChevronRight } from "lucide-react"

export default function PatentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Mock patent data
  const patents = [
    {
      id: 1,
      studentName: "أحمد محمد علي",
      patentTitle: "نظام ذكي لإدارة المياه في الزراعة",
      submissionDate: "2025-01-15",
      status: "قيد المراجعة",
      description: "نظام يستخدم الذكاء الاصطناعي لتحسين استخدام المياه في الزراعة وزيادة الإنتاجية",
      category: "تكنولوجيا زراعية",
      documents: ["وثيقة البراءة.pdf", "الرسوم التوضيحية.pdf"],
    },
    {
      id: 2,
      studentName: "فاطمة الزهراء بن علي",
      patentTitle: "تطبيق للتعلم التفاعلي للأطفال",
      submissionDate: "2025-01-10",
      status: "مقبولة",
      description: "تطبيق تعليمي يستخدم الواقع المعزز لتعليم الأطفال المفاهيم الأساسية",
      category: "تكنولوجيا تعليمية",
      documents: ["وثيقة البراءة.pdf", "لقطات الشاشة.pdf"],
    },
    {
      id: 3,
      studentName: "محمد الأمين خليل",
      patentTitle: "جهاز مراقبة الصحة الذكي",
      submissionDate: "2025-01-08",
      status: "مرفوضة",
      description: "جهاز يمكن ارتداؤه لمراقبة العلامات الحيوية وإرسال تنبيهات طبية",
      category: "تكنولوجيا طبية",
      documents: ["وثيقة البراءة.pdf"],
    },
    {
      id: 4,
      studentName: "سارة عبد الرحمن",
      patentTitle: "منصة التجارة الإلكترونية المحلية",
      submissionDate: "2025-01-05",
      status: "قيد المراجعة",
      description: "منصة تربط المنتجين المحليين بالمستهلكين مباشرة",
      category: "تكنولوجيا تجارية",
      documents: ["وثيقة البراءة.pdf", "دراسة السوق.pdf"],
    },
    {
      id: 5,
      studentName: "يوسف إبراهيم",
      patentTitle: "نظام الطاقة الشمسية المحمول",
      submissionDate: "2025-01-03",
      status: "مقبولة",
      description: "نظام طاقة شمسية قابل للطي والنقل للاستخدام في المناطق النائية",
      category: "طاقة متجددة",
      documents: ["وثيقة البراءة.pdf", "المخططات الفنية.pdf"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مقبولة":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "مرفوضة":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "قيد المراجعة":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const filteredPatents = patents.filter((patent) => {
    const matchesSearch =
      patent.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.patentTitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || patent.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredPatents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPatents = filteredPatents.slice(startIndex, startIndex + itemsPerPage)

  const handleApprove = (id: number) => {
    console.log("Approving patent:", id)
  }

  const handleReject = (id: number) => {
    console.log("Rejecting patent:", id)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة براءات الاختراع</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              مراجعة وإدارة طلبات براءات الاختراع المقدمة من الطلاب
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الطلبات</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                  </div>
                  <div className="h-8 w-8 bg-[#18A39E] rounded-lg flex items-center justify-center">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">قيد المراجعة</p>
                    <p className="text-2xl font-bold text-yellow-600">8</p>
                  </div>
                  <div className="h-8 w-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Filter className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">مقبولة</p>
                    <p className="text-2xl font-bold text-green-600">12</p>
                  </div>
                  <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">مرفوضة</p>
                    <p className="text-2xl font-bold text-red-600">4</p>
                  </div>
                  <div className="h-8 w-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <X className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>البحث والتصفية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في اسم الطالب أو عنوان البراءة..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="تصفية حسب الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="قيد المراجعة">قيد المراجعة</SelectItem>
                  <SelectItem value="مقبولة">مقبولة</SelectItem>
                  <SelectItem value="مرفوضة">مرفوضة</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Patents Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة براءات الاختراع</CardTitle>
            <CardDescription>
              عرض {paginatedPatents.length} من أصل {filteredPatents.length} براءة اختراع
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم الطالب</TableHead>
                    <TableHead className="text-right">عنوان البراءة</TableHead>
                    <TableHead className="text-right">تاريخ الإرسال</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPatents.map((patent) => (
                    <TableRow key={patent.id}>
                      <TableCell className="font-medium">{patent.studentName}</TableCell>
                      <TableCell className="max-w-xs truncate">{patent.patentTitle}</TableCell>
                      <TableCell>{new Date(patent.submissionDate).toLocaleDateString("ar-SA")}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(patent.status)}>{patent.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 ml-1" />
                                عرض
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl" dir="rtl">
                              <DialogHeader>
                                <DialogTitle>{patent.patentTitle}</DialogTitle>
                                <DialogDescription>
                                  تفاصيل براءة الاختراع المقدمة من {patent.studentName}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold mb-2">الوصف:</h4>
                                  <p className="text-gray-600 dark:text-gray-400">{patent.description}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">الفئة:</h4>
                                  <p className="text-gray-600 dark:text-gray-400">{patent.category}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">المستندات المرفقة:</h4>
                                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    {patent.documents.map((doc, index) => (
                                      <li key={index}>{doc}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex gap-2 pt-4">
                                  <Button
                                    onClick={() => handleApprove(patent.id)}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <Check className="h-4 w-4 ml-1" />
                                    قبول
                                  </Button>
                                  <Button variant="destructive" onClick={() => handleReject(patent.id)}>
                                    <X className="h-4 w-4 ml-1" />
                                    رفض
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          {patent.status === "قيد المراجعة" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleApprove(patent.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => handleReject(patent.id)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  عرض {startIndex + 1} إلى {Math.min(startIndex + itemsPerPage, filteredPatents.length)} من أصل{" "}
                  {filteredPatents.length} نتيجة
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                    السابق
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    التالي
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
