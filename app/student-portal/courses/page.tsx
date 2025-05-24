import { Clock, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CoursesPage() {
  return (
    <div className="container py-6" dir="rtl">
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">مكتبة الدورات المرئية</h1>
            <p className="text-muted-foreground text-sm">الوصول إلى دورات متخصصة لتطوير مهاراتك في ريادة الأعمال</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Star className="w-4 h-4 ml-2" />
              الدورات المميزة
            </Button>
            <Button variant="default" size="sm" className="bg-[#18A39E] hover:bg-[#16918A]">
              <Play className="w-4 h-4 ml-2" />
              ابدأ التعلم
            </Button>
          </div>
        </div>
        <Progress value={33} className="h-2 w-full" />
        <p className="text-xs text-muted-foreground">أكملت 4 من 12 دورة هذا الشهر</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
              <option>ترتيب حسب: الأحدث</option>
              <option>ترتيب حسب: الأقدم</option>
              <option>ترتيب حسب: الأكثر شعبية</option>
            </select>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
              <option>جميع الفئات</option>
              <option>الأعمال</option>
              <option>التسويق</option>
              <option>المالية</option>
              <option>التكنولوجيا</option>
            </select>
          </div>
          <TabsList>
            <TabsTrigger value="recommended">موصى بها</TabsTrigger>
            <TabsTrigger value="completed">مكتملة</TabsTrigger>
            <TabsTrigger value="in-progress">قيد التقدم</TabsTrigger>
            <TabsTrigger value="all">جميع الدورات</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Course 1 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    الأعمال
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">دورة متقدمة في نموذج العمل التجاري</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية إنشاء وتحليل نموذج العمل التجاري لشركتك الناشئة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3 ساعات و 45 دقيقة</span>
                  </div>
                  <span>12 درس</span>
                </div>
                <Progress value={75} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">متابعة التعلم</Button>
              </CardFooter>
            </Card>

            {/* Course 2 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    التسويق
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.6</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">التسويق الرقمي للشركات الناشئة</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  اكتشف استراتيجيات التسويق الرقمي الفعالة للشركات الناشئة ذات الميزانيات المحدودة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>4 ساعات و 20 دقيقة</span>
                  </div>
                  <span>15 درس</span>
                </div>
                <Progress value={30} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">متابعة التعلم</Button>
              </CardFooter>
            </Card>

            {/* Course 3 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    المالية
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">التخطيط المالي للشركات الناشئة</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية إنشاء التوقعات المالية، وإدارة التدفق النقدي، والتحضير لاجتماعات المستثمرين.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>5 ساعات و 15 دقيقة</span>
                  </div>
                  <span>18 درس</span>
                </div>
                <Progress value={0} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">ابدأ الدورة</Button>
              </CardFooter>
            </Card>

            {/* Course 4 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    قانوني
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.7</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">الملكية الفكرية للشركات الناشئة</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  فهم براءات الاختراع والعلامات التجارية وحقوق النشر لحماية ابتكارات شركتك الناشئة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3 ساعات و 30 دقيقة</span>
                  </div>
                  <span>10 دروس</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  عرض الشهادة
                </Button>
              </CardFooter>
            </Card>

            {/* Course 5 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    العرض التقديمي
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">العرض المثالي: التقديم للمستثمرين</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية إنشاء وتقديم عروض مقنعة للمستثمرين تحقق النتائج.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>4 ساعات و 10 دقائق</span>
                  </div>
                  <span>14 درس</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  عرض الشهادة
                </Button>
              </CardFooter>
            </Card>

            {/* Course 6 */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    التكنولوجيا
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">استراتيجيات تطوير المنتج الأولي</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية بناء منتج أولي يثبت فكرة عملك بكفاءة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>6 ساعات و 20 دقيقة</span>
                  </div>
                  <span>20 درس</span>
                </div>
                <Progress value={50} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">متابعة التعلم</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* In Progress Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    الأعمال
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">دورة متقدمة في نموذج العمل التجاري</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية إنشاء وتحليل نموذج العمل التجاري لشركتك الناشئة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3 ساعات و 45 دقيقة</span>
                  </div>
                  <span>12 درس</span>
                </div>
                <Progress value={75} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">متابعة التعلم</Button>
              </CardFooter>
            </Card>
            {/* Add more in-progress courses */}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Completed Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    قانوني
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.7</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">الملكية الفكرية للشركات الناشئة</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  فهم براءات الاختراع والعلامات التجارية وحقوق النشر لحماية ابتكارات شركتك الناشئة.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>3 ساعات و 30 دقيقة</span>
                  </div>
                  <span>10 دروس</span>
                </div>
                <Progress value={100} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full" variant="outline">
                  عرض الشهادة
                </Button>
              </CardFooter>
            </Card>
            {/* Add more completed courses */}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Recommended Courses */}
            <Card>
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    المالية
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-xs font-medium">4.9</span>
                  </div>
                </div>
                <CardTitle className="mb-2 line-clamp-1">التخطيط المالي للشركات الناشئة</CardTitle>
                <CardDescription className="line-clamp-2 mb-3">
                  تعلم كيفية إنشاء التوقعات المالية، وإدارة التدفق النقدي، والتحضير لاجتماعات المستثمرين.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>5 ساعات و 15 دقيقة</span>
                  </div>
                  <span>18 درس</span>
                </div>
                <Progress value={0} className="mt-3 h-1.5" />
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button className="w-full">ابدأ الدورة</Button>
              </CardFooter>
            </Card>
            {/* Add more recommended courses */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
