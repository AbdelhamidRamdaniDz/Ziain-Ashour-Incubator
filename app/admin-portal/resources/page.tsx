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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Search, Plus, Edit, Trash2, FileText, Video, Link, Download, Upload } from "lucide-react"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "دليل كتابة خطة العمل",
      type: "PDF",
      description: "دليل شامل لكتابة خطة عمل ناجحة للمشاريع الناشئة",
      dateAdded: "2025-01-15",
      downloads: 245,
      size: "2.5 MB",
      category: "ريادة الأعمال",
    },
    {
      id: 2,
      title: "ورشة التسويق الرقمي",
      type: "فيديو",
      description: "سلسلة فيديوهات تعليمية حول استراتيجيات التسويق الرقمي",
      dateAdded: "2025-01-12",
      downloads: 189,
      size: "450 MB",
      category: "تسويق",
    },
    {
      id: 3,
      title: "منصة التمويل الجماعي",
      type: "رابط خارجي",
      description: "رابط لمنصة التمويل الجماعي للمشاريع الناشئة",
      dateAdded: "2025-01-10",
      downloads: 156,
      size: "-",
      category: "تمويل",
    },
    {
      id: 4,
      title: "قوالب العروض التقديمية",
      type: "PDF",
      description: "مجموعة من القوالب الجاهزة للعروض التقديمية",
      dateAdded: "2025-01-08",
      downloads: 312,
      size: "15 MB",
      category: "قوالب",
    },
    {
      id: 5,
      title: "كورس البرمجة للمبتدئين",
      type: "فيديو",
      description: "دورة تدريبية شاملة في أساسيات البرمجة",
      dateAdded: "2025-01-05",
      downloads: 278,
      size: "1.2 GB",
      category: "تكنولوجيا",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4" />
      case "فيديو":
        return <Video className="h-4 w-4" />
      case "رابط خارجي":
        return <Link className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "فيديو":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "رابط خارجي":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || resource.type === typeFilter
    return matchesSearch && matchesType
  })

  const handleDelete = (id: number) => {
    console.log("Deleting resource:", id)
  }

  const handleEdit = (id: number) => {
    console.log("Editing resource:", id)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة الموارد التعليمية</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة وتنظيم الموارد التعليمية المتاحة للطلاب</p>
            </div>
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#18A39E] hover:bg-[#16918A]">
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة مورد جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md" dir="rtl">
                <DialogHeader>
                  <DialogTitle>إضافة مورد جديد</DialogTitle>
                  <DialogDescription>أضف مورد تعليمي جديد للمنصة</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">عنوان المورد</Label>
                    <Input id="title" placeholder="أدخل عنوان المورد" />
                  </div>
                  <div>
                    <Label htmlFor="type">نوع المورد</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع المورد" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="video">فيديو</SelectItem>
                        <SelectItem value="link">رابط خارجي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">الوصف</Label>
                    <Textarea id="description" placeholder="وصف المورد" />
                  </div>
                  <div>
                    <Label htmlFor="category">الفئة</Label>
                    <Input id="category" placeholder="فئة المورد" />
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">اسحب الملف هنا أو انقر للتحميل</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#18A39E] hover:bg-[#16918A]">حفظ المورد</Button>
                    <Button variant="outline" className="flex-1" onClick={() => setIsAddModalOpen(false)}>
                      إلغاء
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الموارد</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">47</p>
                  </div>
                  <div className="h-8 w-8 bg-[#18A39E] rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">ملفات PDF</p>
                    <p className="text-2xl font-bold text-red-600">23</p>
                  </div>
                  <div className="h-8 w-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">فيديوهات</p>
                    <p className="text-2xl font-bold text-blue-600">18</p>
                  </div>
                  <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">روابط خارجية</p>
                    <p className="text-2xl font-bold text-green-600">6</p>
                  </div>
                  <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Link className="h-4 w-4 text-white" />
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
                    placeholder="البحث في عنوان المورد أو الوصف..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="تصفية حسب النوع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الأنواع</SelectItem>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="فيديو">فيديو</SelectItem>
                  <SelectItem value="رابط خارجي">رابط خارجي</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Resources Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة الموارد</CardTitle>
            <CardDescription>عرض {filteredResources.length} مورد</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم المورد</TableHead>
                    <TableHead className="text-right">النوع</TableHead>
                    <TableHead className="text-right">الفئة</TableHead>
                    <TableHead className="text-right">تاريخ الإضافة</TableHead>
                    <TableHead className="text-right">التحميلات</TableHead>
                    <TableHead className="text-right">الحجم</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredResources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{resource.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                            {resource.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(resource.type)}>
                          <span className="flex items-center gap-1">
                            {getTypeIcon(resource.type)}
                            {resource.type}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell>{resource.category}</TableCell>
                      <TableCell>{new Date(resource.dateAdded).toLocaleDateString("ar-SA")}</TableCell>
                      <TableCell>{resource.downloads}</TableCell>
                      <TableCell>{resource.size}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleEdit(resource.id)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(resource.id)}>
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
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
    </div>
  )
}
