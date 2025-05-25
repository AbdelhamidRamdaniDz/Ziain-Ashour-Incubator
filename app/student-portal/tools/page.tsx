import Link from "next/link"
import { BarChart3, Calendar, FileText, Lightbulb, PenTool, PieChart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  {
    title: "نموذج العمل التجاري",
    description: "إنشاء وتطوير نموذج عملك باستخدام إطار العمل الشائع",
    icon: PieChart,
    content: "حدد عرض القيمة الخاص بك، وشرائح العملاء، ومصادر الإيرادات والمزيد في لوحة تفاعلية.",
    href: "/student-portal/tools/business-model-canvas"
  },
  {
    title: "تحليل SWOT",
    description: "تحديد نقاط القوة والضعف والفرص والتهديدات",
    icon: Target,
    content: "قيّم فكرة عملك أو شركتك الناشئة باستخدام إطار تحليل SWOT الشامل.",
    href: "/student-portal/tools/swot-analysis"
  },
  {
    title: "منشئ الشخصيات",
    description: "إنشاء شخصيات تفصيلية للعملاء لتوجيه تطوير منتجك",
    icon: Users,
    content: "حدد عملاءك المستهدفين من خلال شخصيات تفصيلية تشمل الديموغرافيا والأهداف ونقاط الألم والسلوكيات.",
    href: "/student-portal/tools/persona-generator"
  },
  {
    title: "التوقعات المالية",
    description: "إنشاء توقعات مالية لشركتك الناشئة",
    icon: BarChart3,
    content: "إنشاء توقعات الإيرادات، وتوقعات المصروفات، وبيانات التدفق النقدي، وتحليل نقطة التعادل.",
    href: "/student-portal/tools/financial-projections"
  },
  {
    title: "منشئ العروض التقديمية",
    description: "إنشاء عروض تقديمية مقنعة للمستثمرين",
    icon: PenTool,
    content: "قم ببناء عروض تقديمية احترافية باستخدام قوالب مصممة لجمع التمويل واجتماعات المستثمرين.",
    href: "/student-portal/tools/pitch-deck-builder"
  },
  {
    title: "أبحاث السوق",
    description: "الوصول إلى بيانات السوق وأدوات تحليل المنافسين",
    icon: Lightbulb,
    content: "ابحث في حجم السوق والاتجاهات والمنافسين وتفضيلات العملاء للتحقق من صحة فكرة عملك.",
    href: "/student-portal/tools/market-research"
  },
  {
    title: "الجدول الزمني للمشروع",
    description: "إنشاء وإدارة الجداول الزمنية والمراحل الرئيسية للمشروع",
    icon: Calendar,
    content: "خطط خارطة طريق شركتك الناشئة باستخدام مخططات جانت التفاعلية وتتبع المراحل الرئيسية.",
    href: "/student-portal/tools/project-timeline"
  },
  {
    title: "البحث عن براءات الاختراع",
    description: "البحث في براءات الاختراع الموجودة للتحقق من ابتكارك",
    icon: FileText,
    content: "الوصول إلى قواعد بيانات براءات الاختراع للبحث في براءات الاختراع الموجودة والتأكد من تفرد ابتكارك.",
    href: "/student-portal/tools/patent-search"
  },
  {
    title: "مدقق الأفكار",
    description: "اختبار والتحقق من صحة أفكار عملك",
    icon: Lightbulb,
    content: "قيّم فكرة عملك وفقاً لمعايير رئيسية واحصل على ملاحظات حول التحديات والفرص المحتملة.",
    href: "/student-portal/tools/idea-validator"
  }
]

export default function ToolsPage() {
  return (
    <div className="container py-6">
      <div className="mb-8 text-right">
        <h1 className="text-3xl font-bold tracking-tight">أدوات الأعمال</h1>
        <p className="text-muted-foreground">الوصول إلى أدوات متخصصة لتطوير وتحسين نموذج عملك</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" dir="rtl">
        {tools.map((tool, index) => {
          const Icon = tool.icon
          return (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {tool.content}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={tool.href} className="w-full">
                  <Button className="w-full">فتح الأداة</Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
