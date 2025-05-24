"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Target, Award, Users, Calendar, DollarSign, BarChart3 } from "lucide-react"

export default function KPIPage() {
  const kpiData = [
    {
      title: "تقدم المشروع",
      value: "75%",
      change: "+12%",
      trend: "up",
      icon: Target,
      description: "النسبة المئوية لإكمال المشروع الحالي",
    },
    {
      title: "عدد المهام المكتملة",
      value: "24",
      change: "+8",
      trend: "up",
      icon: Award,
      description: "المهام المنجزة هذا الشهر",
    },
    {
      title: "التفاعل مع المنتورين",
      value: "18",
      change: "+3",
      trend: "up",
      icon: Users,
      description: "عدد الجلسات مع المرشدين",
    },
    {
      title: "الحضور في الفعاليات",
      value: "12",
      change: "-2",
      trend: "down",
      icon: Calendar,
      description: "الفعاليات المحضورة هذا الشهر",
    },
  ]

  const projectMetrics = [
    {
      name: "منصة التعليم الذكي",
      progress: 85,
      status: "On Track",
      budget: "75%",
      team: 4,
      deadline: "2025-07-15",
    },
    {
      name: "تطبيق الصحة الذكي",
      progress: 60,
      status: "At Risk",
      budget: "80%",
      team: 3,
      deadline: "2025-08-20",
    },
    {
      name: "منصة التجارة الإلكترونية",
      progress: 40,
      status: "Behind",
      budget: "45%",
      team: 5,
      deadline: "2025-09-10",
    },
  ]

  const monthlyGoals = [
    { goal: "إكمال النموذج الأولي", progress: 90, target: 100 },
    { goal: "جمع التمويل الأولي", progress: 60, target: 100 },
    { goal: "بناء الفريق", progress: 75, target: 100 },
    { goal: "دراسة السوق", progress: 100, target: 100 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">مؤشرات الأداء</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">تتبع وتحليل مؤشرات الأداء الرئيسية للمشاريع</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                  <span className={kpi.trend === "up" ? "text-green-600" : "text-red-600"}>{kpi.change}</span>
                  <span>من الشهر الماضي</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{kpi.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="projects">المشاريع</TabsTrigger>
          <TabsTrigger value="goals">الأهداف</TabsTrigger>
          <TabsTrigger value="performance">الأداء</TabsTrigger>
          <TabsTrigger value="analytics">التحليلات</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>أداء المشاريع</CardTitle>
              <CardDescription>تتبع تقدم المشاريع الحالية</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projectMetrics.map((project, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{project.name}</h4>
                      <Badge
                        variant={
                          project.status === "On Track"
                            ? "default"
                            : project.status === "At Risk"
                              ? "secondary"
                              : "destructive"
                        }
                        className={project.status === "On Track" ? "bg-[#18A39E] hover:bg-[#16918A]" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>التقدم</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div>
                        <span className="font-medium">الميزانية:</span> {project.budget}
                      </div>
                      <div>
                        <span className="font-medium">الفريق:</span> {project.team} أعضاء
                      </div>
                      <div>
                        <span className="font-medium">الموعد النهائي:</span> {project.deadline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>الأهداف الشهرية</CardTitle>
              <CardDescription>تتبع تحقيق الأهداف المحددة لهذا الشهر</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {monthlyGoals.map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{goal.goal}</h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {goal.progress}/{goal.target}%
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>الأداء الأسبوعي</CardTitle>
                <CardDescription>تقييم الأداء خلال الأسبوع الماضي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>المهام المكتملة</span>
                    <span className="font-bold text-[#18A39E]">8/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>الاجتماعات المحضورة</span>
                    <span className="font-bold text-[#18A39E]">5/6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ساعات العمل</span>
                    <span className="font-bold text-[#18A39E]">42/40</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>التقييم العام</span>
                    <Badge className="bg-[#18A39E] hover:bg-[#16918A]">ممتاز</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>المهارات المكتسبة</CardTitle>
                <CardDescription>المهارات التي تم تطويرها مؤخراً</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>إدارة المشاريع</span>
                    <Progress value={85} className="w-20 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>التسويق الرقمي</span>
                    <Progress value={70} className="w-20 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>التحليل المالي</span>
                    <Progress value={60} className="w-20 h-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>القيادة</span>
                    <Progress value={75} className="w-20 h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  الإنتاجية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#18A39E]">92%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">معدل الإنتاجية الشهري</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  ROI المتوقع
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#18A39E]">245%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">العائد على الاستثمار</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  معدل النجاح
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#18A39E]">87%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">نسبة تحقيق الأهداف</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
