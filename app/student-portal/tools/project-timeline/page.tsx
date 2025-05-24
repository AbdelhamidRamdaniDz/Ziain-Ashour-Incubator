"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Plus, Edit, Trash2, CheckCircle, Users } from "lucide-react"

export default function ProjectTimelinePage() {
  const [selectedPhase, setSelectedPhase] = useState(1)

  const projectPhases = [
    {
      id: 1,
      name: "البحث والتخطيط",
      duration: "4 أسابيع",
      progress: 100,
      status: "مكتمل",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "التطوير الأولي",
      duration: "8 أسابيع",
      progress: 75,
      status: "قيد التنفيذ",
      startDate: "2025-01-29",
      endDate: "2025-03-25",
      color: "bg-[#18A39E]",
    },
    {
      id: 3,
      name: "الاختبار والتحسين",
      duration: "6 أسابيع",
      progress: 0,
      status: "لم يبدأ",
      startDate: "2025-03-26",
      endDate: "2025-05-06",
      color: "bg-gray-400",
    },
    {
      id: 4,
      name: "الإطلاق والتسويق",
      duration: "4 أسابيع",
      progress: 0,
      status: "لم يبدأ",
      startDate: "2025-05-07",
      endDate: "2025-06-03",
      color: "bg-gray-400",
    },
  ]

  const tasks = [
    {
      id: 1,
      phaseId: 1,
      title: "بحث السوق",
      description: "دراسة السوق المستهدف والمنافسين",
      assignee: "أحمد محمد",
      priority: "عالية",
      status: "مكتمل",
      startDate: "2025-01-01",
      endDate: "2025-01-14",
      progress: 100,
    },
    {
      id: 2,
      phaseId: 1,
      title: "تحديد المتطلبات",
      description: "تحديد المتطلبات الوظيفية وغير الوظيفية",
      assignee: "فاطمة أحمد",
      priority: "عالية",
      status: "مكتمل",
      startDate: "2025-01-15",
      endDate: "2025-01-28",
      progress: 100,
    },
    {
      id: 3,
      phaseId: 2,
      title: "تصميم واجهة المستخدم",
      description: "تصميم الواجهات والتفاعلات",
      assignee: "سارة علي",
      priority: "عالية",
      status: "قيد التنفيذ",
      startDate: "2025-01-29",
      endDate: "2025-02-18",
      progress: 90,
    },
    {
      id: 4,
      phaseId: 2,
      title: "تطوير الخلفية",
      description: "برمجة الخوادم وقواعد البيانات",
      assignee: "محمد حسن",
      priority: "عالية",
      status: "قيد التنفيذ",
      startDate: "2025-02-01",
      endDate: "2025-03-15",
      progress: 60,
    },
    {
      id: 5,
      phaseId: 2,
      title: "تطوير التطبيق المحمول",
      description: "تطوير تطبيق الهاتف المحمول",
      assignee: "ليلى محمود",
      priority: "متوسطة",
      status: "قيد التنفيذ",
      startDate: "2025-02-15",
      endDate: "2025-03-25",
      progress: 40,
    },
  ]

  const milestones = [
    { id: 1, title: "إنهاء البحث", date: "2025-01-28", completed: true },
    { id: 2, title: "إنهاء التصميم", date: "2025-02-18", completed: false },
    { id: 3, title: "النموذج الأولي", date: "2025-03-15", completed: false },
    { id: 4, title: "الإطلاق التجريبي", date: "2025-05-01", completed: false },
    { id: 5, title: "الإطلاق الرسمي", date: "2025-06-03", completed: false },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "مكتمل":
        return "bg-green-500"
      case "قيد التنفيذ":
        return "bg-[#18A39E]"
      case "متأخر":
        return "bg-red-500"
      case "لم يبدأ":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "عالية":
        return "destructive"
      case "متوسطة":
        return "default"
      case "منخفضة":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الجدول الزمني للمشروع</h1>
            <p className="text-muted-foreground mt-2">تتبع تقدم مشروعك ومراحله المختلفة</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 ml-2" />
              عرض التقويم
            </Button>
            <Button size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
              <Plus className="h-4 w-4 ml-2" />
              إضافة مهمة
            </Button>
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المراحل</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">مراحل المشروع</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المهام المكتملة</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">من أصل 5 مهام</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقدم الإجمالي</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">44%</div>
              <Progress value={44} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">أعضاء الفريق</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">عضو نشط</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline Visualization */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>مراحل المشروع</CardTitle>
                <CardDescription>تتبع تقدم كل مرحلة من مراحل المشروع</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projectPhases.map((phase, index) => (
                    <div key={phase.id} className="relative">
                      {/* Timeline Line */}
                      {index < projectPhases.length - 1 && (
                        <div className="absolute right-4 top-8 w-0.5 h-16 bg-border"></div>
                      )}

                      <div
                        className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedPhase === phase.id
                            ? "border-[#18A39E] bg-[#18A39E]/10"
                            : "border-border hover:border-[#18A39E]/50"
                        }`}
                        onClick={() => setSelectedPhase(phase.id)}
                      >
                        {/* Phase Indicator */}
                        <div
                          className={`w-8 h-8 rounded-full ${phase.color} flex items-center justify-center text-white text-sm font-bold`}
                        >
                          {phase.id}
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{phase.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {phase.startDate} - {phase.endDate} ({phase.duration})
                              </p>
                            </div>
                            <Badge
                              variant={
                                phase.status === "مكتمل"
                                  ? "default"
                                  : phase.status === "قيد التنفيذ"
                                    ? "default"
                                    : "secondary"
                              }
                              className={
                                phase.status === "مكتمل"
                                  ? "bg-green-500"
                                  : phase.status === "قيد التنفيذ"
                                    ? "bg-[#18A39E]"
                                    : ""
                              }
                            >
                              {phase.status}
                            </Badge>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>التقدم</span>
                              <span>{phase.progress}%</span>
                            </div>
                            <Progress value={phase.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>المعالم الرئيسية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {milestones.map((milestone) => (
                    <div key={milestone.id} className="flex items-center gap-3 p-3 rounded-lg border">
                      <div
                        className={`w-4 h-4 rounded-full ${milestone.completed ? "bg-green-500" : "bg-gray-300"}`}
                      ></div>
                      <div className="flex-1">
                        <h4
                          className={`font-medium ${milestone.completed ? "line-through text-muted-foreground" : ""}`}
                        >
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{milestone.date}</p>
                      </div>
                      {milestone.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tasks Panel */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>مهام المرحلة الحالية</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.phaseId === selectedPhase)
                    .map((task) => (
                      <div key={task.id} className="p-3 border rounded-lg space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">{task.title}</h4>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground">{task.description}</p>

                        <div className="flex justify-between items-center">
                          <Badge variant={getPriorityColor(task.priority)}>{task.priority}</Badge>
                          <span className="text-xs text-muted-foreground">{task.assignee}</span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>التقدم</span>
                            <span>{task.progress}%</span>
                          </div>
                          <Progress value={task.progress} className="h-1" />
                        </div>

                        <div className="text-xs text-muted-foreground">
                          {task.startDate} - {task.endDate}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Add New Task Form */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">إضافة مهمة جديدة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="task-title">عنوان المهمة</Label>
                  <Input id="task-title" placeholder="أدخل عنوان المهمة" />
                </div>

                <div>
                  <Label htmlFor="task-description">الوصف</Label>
                  <Textarea id="task-description" placeholder="وصف المهمة..." className="min-h-[80px]" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="task-assignee">المسؤول</Label>
                    <select className="w-full p-2 border border-border rounded-md text-sm">
                      <option>أحمد محمد</option>
                      <option>فاطمة أحمد</option>
                      <option>سارة علي</option>
                      <option>محمد حسن</option>
                      <option>ليلى محمود</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="task-priority">الأولوية</Label>
                    <select className="w-full p-2 border border-border rounded-md text-sm">
                      <option>عالية</option>
                      <option>متوسطة</option>
                      <option>منخفضة</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="start-date">تاريخ البداية</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="end-date">تاريخ النهاية</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>

                <Button className="w-full bg-[#18A39E] hover:bg-[#16918A]">إضافة المهمة</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
