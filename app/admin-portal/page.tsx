import { BookOpen, Calendar, FileText, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPortalPage() {
  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">لوحة التحكم</h1>
        <p className="text-muted-foreground">نظرة عامة على أنشطة الحاضنة والمقاييس الرئيسية</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">214</div>
            <p className="text-xs text-muted-foreground">+12 هذا الشهر</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">المشاريع النشطة</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+5 هذا الشهر</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الطلبات المعلقة</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">8 جديد هذا الأسبوع</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الرسائل غير المقروءة</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">3 عاجل</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics */}
      <div className="mt-8">
        <Tabs defaultValue="overview">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
              <TabsTrigger value="students">الطلاب</TabsTrigger>
              <TabsTrigger value="projects">المشاريع</TabsTrigger>
              <TabsTrigger value="resources">الموارد</TabsTrigger>
            </TabsList>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
              <option>آخر 30 يوم</option>
              <option>الربع الأخير</option>
              <option>السنة الماضية</option>
              <option>كل الوقت</option>
            </select>
          </div>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>تفاعل الطلاب</CardTitle>
                  <CardDescription>الطلاب النشطين يومياً عبر الزمن</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted/20"></div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>تقدم المشاريع</CardTitle>
                  <CardDescription>توزيع مراحل المشاريع</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted/20"></div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>استخدام الموارد</CardTitle>
                  <CardDescription>الموارد والأدوات الأكثر استخداماً</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] w-full bg-muted/20"></div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>نشاط الطلاب</CardTitle>
                <CardDescription>مقاييس تفاعل الطلاب التفصيلية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20"></div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>تحليلات المشاريع</CardTitle>
                <CardDescription>مقاييس أداء المشاريع التفصيلية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20"></div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>تحليلات الموارد</CardTitle>
                <CardDescription>مقاييس استخدام الموارد التفصيلية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20"></div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Recent Activity and Pending Tasks */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>النشاط الأخير</CardTitle>
            <CardDescription>أحدث الإجراءات والتحديثات</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">تم استلام طلب طالب جديد</p>
                  <p className="text-xs text-muted-foreground">اليوم الساعة 10:30 صباحاً</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">تم تقديم طلب براءة اختراع للمراجعة</p>
                  <p className="text-xs text-muted-foreground">الأمس الساعة 4:15 مساءً</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">تمت إضافة دورة جديدة للمكتبة</p>
                  <p className="text-xs text-muted-foreground">منذ يومين الساعة 11:20 صباحاً</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">رسالة جديدة من الطالب أحمد</p>
                  <p className="text-sm font-medium">New message from student Ahmed</p>
                  <p className="text-xs text-muted-foreground">2 days ago at 9:45 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View All Activity
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
            <CardDescription>Tasks requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-yellow-100 p-2 dark:bg-yellow-900">
                  <FileText className="h-4 w-4 text-yellow-600 dark:text-yellow-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Review 8 new student applications</p>
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      Urgent
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 2 days</p>
                  <Progress value={0} className="mt-2 h-1.5" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Review patent application PAT-2025-0142</p>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Normal
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                  <Progress value={25} className="mt-2 h-1.5" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Schedule quarterly review meetings</p>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Normal
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 1 week</p>
                  <Progress value={50} className="mt-2 h-1.5" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-green-100 p-2 dark:bg-green-900">
                  <BookOpen className="h-4 w-4 text-green-600 dark:text-green-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Approve new course content</p>
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      Low
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Due in 2 weeks</p>
                  <Progress value={75} className="mt-2 h-1.5" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              View All Tasks
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
