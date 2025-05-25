"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, MoreVertical, Eye, UserX, Trash2, Filter, Plus } from "lucide-react"

export default function AdminStudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedStudent, setSelectedStudent] = useState(null)

  // بيانات الطلاب
  const students = [
    {
      id: 1,
      name: "أحمد محمد علي",
      email: "ahmed.ali@university.edu.dz",
      avatar: "/placeholder.svg?height=40&width=40",
      projectsCount: 3,
      status: "نشط",
      joinDate: "2024-01-15",
      lastLogin: "منذ ساعتين",
      major: "هندسة الحاسوب",
      phone: "+213 555 123 456",
      projects: ["تطبيق التجارة الإلكترونية", "منصة التعلم الذكي", "نظام إدارة المخزون"],
    },
    {
      id: 2,
      name: "فاطمة الزهراء",
      email: "fatima.zahra@university.edu.dz",
      avatar: "/placeholder.svg?height=40&width=40",
      projectsCount: 2,
      status: "نشط",
      joinDate: "2024-02-01",
      lastLogin: "منذ يوم",
      major: "إدارة الأعمال",
      phone: "+213 555 234 567",
      projects: ["منصة التسويق الرقمي", "تطبيق إدارة الوقت"],
    },
    {
      id: 3,
      name: "محمد الأمين",
      email: "mohamed.amine@university.edu.dz",
      avatar: "/placeholder.svg?height=40&width=40",
      projectsCount: 1,
      status: "موقوف",
      joinDate: "2023-12-10",
      lastLogin: "منذ أسبوع",
      major: "الذكاء الاصطناعي",
      phone: "+213 555 345 678",
      projects: ["نظام التعرف على الصوت"],
    },
    {
      id: 4,
      name: "سارة أحمد",
      email: "sara.ahmed@university.edu.dz",
      avatar: "/placeholder.svg?height=40&width=40",
      projectsCount: 4,
      status: "نشط",
      joinDate: "2024-01-20",
      lastLogin: "منذ 30 دقيقة",
      major: "التسويق الرقمي",
      phone: "+213 555 456 789",
      projects: ["منصة التواصل الاجتماعي", "تطبيق التوصيل", "نظام CRM", "متجر إلكتروني"],
    },
    {
      id: 5,
      name: "يوسف الحسن",
      email: "youssef.hassan@university.edu.dz",
      avatar: "/placeholder.svg?height=40&width=40",
      projectsCount: 2,
      status: "نشط",
      joinDate: "2024-03-05",
      lastLogin: "منذ 3 ساعات",
      major: "هندسة البرمجيات",
      phone: "+213 555 567 890",
      projects: ["تطبيق الصحة الذكي", "منصة التعليم عن بعد"],
    },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status) => {
    return status === "نشط" ? (
      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">نشط ✅</Badge>
    ) : (
      <Badge variant="destructive">موقوف ❌</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة الطلاب</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة حسابات الطلاب ومتابعة نشاطهم في الحاضنة</p>
            </div>
            <Button className="bg-[#18A39E] hover:bg-[#16918A]">
              <Plus className="h-4 w-4 ml-2" />
              إضافة طالب جديد
            </Button>
          </div>
        </div>

        {/* التصفية والبحث */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث عن طالب (الاسم أو البريد الإلكتروني)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 ml-2" />
                    تصفية حسب الحالة
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>جميع الطلاب</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("نشط")}>الطلاب النشطون</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("موقوف")}>الطلاب المعلقون</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* جدول الطلاب */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الطلاب ({filteredStudents.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الطالب</TableHead>
                    <TableHead className="text-right">البريد الإلكتروني</TableHead>
                    <TableHead className="text-right">عدد المشاريع</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">آخر تسجيل دخول</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                            <AvatarFallback>{student.name.split(" ")[0][0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.major}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{student.projectsCount}</Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell className="text-sm text-gray-500">{student.lastLogin}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                  <Eye className="h-4 w-4 ml-2" />
                                  عرض التفاصيل
                                </DropdownMenuItem>
                              </DialogTrigger>
                              <DialogContent className="max-w-md" dir="rtl">
                                <DialogHeader>
                                  <DialogTitle>تفاصيل الطالب</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                                      <AvatarFallback>{student.name.split(" ")[0][0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h3 className="font-semibold text-lg">{student.name}</h3>
                                      <p className="text-gray-600">{student.major}</p>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="font-medium">البريد الإلكتروني:</span>
                                      <p className="text-gray-600">{student.email}</p>
                                    </div>
                                    <div>
                                      <span className="font-medium">رقم الهاتف:</span>
                                      <p className="text-gray-600">{student.phone}</p>
                                    </div>
                                    <div>
                                      <span className="font-medium">تاريخ الانضمام:</span>
                                      <p className="text-gray-600">{student.joinDate}</p>
                                    </div>
                                    <div>
                                      <span className="font-medium">عدد المشاريع:</span>
                                      <p className="text-gray-600">{student.projectsCount}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <span className="font-medium">المشاريع:</span>
                                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                                      {student.projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <DropdownMenuItem>
                              <UserX className="h-4 w-4 ml-2" />
                              {student.status === "نشط" ? "تعليق الحساب" : "تفعيل الحساب"}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 ml-2" />
                              حذف الحساب
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
