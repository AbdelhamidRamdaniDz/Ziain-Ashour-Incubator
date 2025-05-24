"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, CheckCircle, Plus, Search, Filter, User } from "lucide-react"

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const tasks = [
    {
      id: 1,
      title: "إكمال دراسة الجدوى الاقتصادية",
      description: "إعداد دراسة شاملة للجدوى الاقتصادية للمشروع",
      priority: "High",
      status: "In Progress",
      dueDate: "2025-06-01",
      assignedTo: "أحمد محمد",
      project: "منصة التعليم الذكي",
      progress: 60,
      category: "Research",
    },
    {
      id: 2,
      title: "تطوير النموذج الأولي",
      description: "بناء النموذج الأولي للتطبيق المحمول",
      priority: "High",
      status: "To Do",
      dueDate: "2025-06-15",
      assignedTo: "فاطمة الزهراء",
      project: "تطبيق الصحة الذكي",
      progress: 0,
      category: "Development",
    },
    {
      id: 3,
      title: "إجراء بحث السوق",
      description: "تحليل المنافسين ودراسة احتياجات السوق",
      priority: "Medium",
      status: "Completed",
      dueDate: "2025-05-20",
      assignedTo: "محمد علي",
      project: "منصة التجارة الإلكترونية",
      progress: 100,
      category: "Research",
    },
    {
      id: 4,
      title: "تحضير العرض التقديمي",
      description: "إعداد عرض تقديمي للمستثمرين",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2025-06-10",
      assignedTo: "سارة أحمد",
      project: "منصة التعليم الذكي",
      progress: 30,
      category: "Presentation",
    },
  ]

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.includes(searchQuery) ||
      task.project.includes(searchQuery),
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "To Do":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المهام</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة وتتبع مهام المشاريع والأنشطة</p>
        </div>
        <Button className="bg-[#18A39E] hover:bg-[#16918A] text-white">
          <Plus className="w-4 h-4 mr-2" />
          مهمة جديدة
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="all-tasks" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all-tasks">جميع المهام</TabsTrigger>
              <TabsTrigger value="my-tasks">مهامي</TabsTrigger>
              <TabsTrigger value="overdue">متأخرة</TabsTrigger>
              <TabsTrigger value="completed">مكتملة</TabsTrigger>
            </TabsList>

            <TabsContent value="all-tasks" className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="البحث في المهام..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  تصفية
                </Button>
              </div>

              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <Card key={task.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Checkbox className="mt-1" />
                          <div className="space-y-2">
                            <CardTitle className="text-xl">{task.title}</CardTitle>
                            <CardDescription>{task.description}</CardDescription>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {task.assignedTo}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {task.dueDate}
                              </span>
                              <span>{task.project}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                          <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>التقدم</span>
                            <span>{task.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div
                              className="bg-[#18A39E] h-2 rounded-full transition-all duration-300"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">{task.category}</Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              تحرير
                            </Button>
                            <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
                              عرض التفاصيل
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-tasks">
              <Card>
                <CardHeader>
                  <CardTitle>مهامي الشخصية</CardTitle>
                  <CardDescription>المهام المخصصة لي</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">لا توجد مهام مخصصة لك حالياً</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="overdue">
              <Card>
                <CardHeader>
                  <CardTitle>المهام المتأخرة</CardTitle>
                  <CardDescription>المهام التي تجاوزت موعدها المحدد</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">لا توجد مهام متأخرة</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>المهام المكتملة</CardTitle>
                  <CardDescription>المهام التي تم إنجازها</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks
                      .filter((task) => task.status === "Completed")
                      .map((task) => (
                        <div key={task.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div className="flex-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{task.project}</p>
                          </div>
                          <span className="text-sm text-gray-500">{task.dueDate}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">إحصائيات المهام</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#18A39E]">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">إجمالي المهام</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">قيد التنفيذ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مكتملة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">متأخرة</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">المهام العاجلة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tasks
                .filter((task) => task.priority === "High" && task.status !== "Completed")
                .map((task) => (
                  <div key={task.id} className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{task.dueDate}</p>
                    <Badge size="sm" className="mt-1 bg-red-100 text-red-800">
                      عاجل
                    </Badge>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
