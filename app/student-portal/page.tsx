import Link from "next/link"
import { BarChart3, BookOpen, Calendar, FileText, Lightbulb, MessageSquare, Rocket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function StudentPortalPage() {
  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">مرحبًا بعودتك، أحمد!</h1>
        <p className="text-muted-foreground">"أفضل طريقة للتنبؤ بالمستقبل هي أن تصنعه." — بيتر دراكر</p>
      </div>

      {/* الإحصائيات السريعة */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الدورات المكتملة</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/12</div>
            <Progress value={33} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">المهام المنجزة</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/15</div>
            <Progress value={53} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">الرسائل غير المقروءة</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="mt-2 text-xs text-muted-foreground">2 من المرشدين</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">حالة المشروع</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">نموذج أولي</div>
            <div className="mt-2 text-xs text-muted-foreground">التالي: تطوير المنتج الأولي (MVP)</div>
          </CardContent>
        </Card>
      </div>

      {/* الروابط السريعة */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">روابط سريعة</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Link href="/student-portal/courses">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span>الدورات</span>
          </Button>
        </Link>
        <Link href="/student-portal/tasks">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <Calendar className="h-6 w-6" />
            <span>المهام</span>
          </Button>
        </Link>
        <Link href="/student-portal/patent-submission">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <FileText className="h-6 w-6" />
            <span>تقديم براءة اختراع</span>
          </Button>
        </Link>
        <Link href="/student-portal/tools">
          <Button variant="outline" className="h-24 w-full flex-col justify-center gap-2">
            <Lightbulb className="h-6 w-6" />
            <span>أدوات الأعمال</span>
          </Button>
        </Link>
      </div>

      {/* النشاطات الأخيرة والأحداث القادمة */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>النشاطات الأخيرة</CardTitle>
            <CardDescription>آخر الإجراءات والتحديثات الخاصة بك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">أكملت دورة "نموذج العمل التجاري"</p>
                  <p className="text-xs text-muted-foreground">أمس الساعة 2:30 مساءً</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">تم تحديث وصف المشروع</p>
                  <p className="text-xs text-muted-foreground">منذ يومين الساعة 10:15 صباحًا</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">تلقيت ملاحظات من البروفيسور كريم</p>
                  <p className="text-xs text-muted-foreground">منذ 3 أيام الساعة 4:45 مساءً</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              عرض جميع الأنشطة
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>الأحداث القادمة</CardTitle>
            <CardDescription>ورش العمل، المواعيد النهائية، والاجتماعات</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">ورشة تدريب على العرض التقديمي</p>
                  <p className="text-xs text-muted-foreground">غدًا الساعة 2:00 مساءً • القاعة B12</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">اجتماع مع المرشد: د. أمينة</p>
                  <p className="text-xs text-muted-foreground">25 مايو 2025 الساعة 11:30 صباحًا • عبر الإنترنت</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">مراجعة التقدم الفصلية</p>
                  <p className="text-xs text-muted-foreground">30 مايو 2025 الساعة 10:00 صباحًا • غرفة الاجتماعات</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              عرض التقويم
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* اقتباس ملهم */}
      <Card className="mt-8 bg-primary/5">
        <CardContent className="pt-6">
          <blockquote className="border-r-4 border-primary pr-4 italic">
            "أكبر مخاطرة هي ألا تخاطر. في عالم يتغير بسرعة، الاستراتيجية الوحيدة المضمونة للفشل هي عدم المخاطرة."
          </blockquote>
          <p className="mt-2 text-left text-sm font-medium">— مارك زوكربيرغ</p>
        </CardContent>
      </Card>
    </div>
  )
}
