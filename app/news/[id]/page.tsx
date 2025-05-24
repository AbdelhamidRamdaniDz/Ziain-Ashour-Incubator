import Link from "next/link"
import { ArrowRight, Calendar, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const getNewsArticle = (id: string) => {
  const articles = {
    "1": {
      id: "1",
      title: "إطلاق برنامج جديد لدعم المشاريع الناشئة في الجامعة",
      content: `
        <p>أعلنت حاضنة جامعة زيان عاشور عن إطلاق برنامج جديد ومبتكر لدعم المشاريع الناشئة والأفكار الريادية للطلاب والأساتذة. يهدف هذا البرنامج إلى توفير بيئة محفزة للإبداع والابتكار.</p>
        
        <h3>أهداف البرنامج</h3>
        <p>يسعى البرنامج الجديد إلى تحقيق عدة أهداف استراتيجية:</p>
        <ul>
          <li>دعم الأفكار الريادية المبتكرة</li>
          <li>توفير التمويل اللازم للمشاريع الواعدة</li>
          <li>ربط الطلاب بالخبراء والمرشدين في مختلف المجالات</li>
          <li>تطوير المهارات الريادية والإدارية</li>
        </ul>
        
        <h3>مراحل البرنامج</h3>
        <p>ينقسم البرنامج إلى عدة مراحل متتالية:</p>
        <ol>
          <li><strong>مرحلة التقديم:</strong> يقوم الطلاب بتقديم أفكارهم ومشاريعهم</li>
          <li><strong>مرحلة التقييم:</strong> يتم تقييم المشاريع من قبل لجنة من الخبراء</li>
          <li><strong>مرحلة التطوير:</strong> المشاريع المقبولة تدخل مرحلة التطوير والإرشاد</li>
          <li><strong>مرحلة التمويل:</strong> توفير التمويل اللازم للمشاريع الناجحة</li>
        </ol>
        
        <h3>الدعم المقدم</h3>
        <p>يوفر البرنامج أنواعاً متعددة من الدعم:</p>
        <ul>
          <li>الدعم المالي: منح وقروض ميسرة</li>
          <li>الدعم الفني: ورش عمل وتدريبات متخصصة</li>
          <li>الإرشاد: مرشدون من ذوي الخبرة في مختلف المجالات</li>
          <li>الشبكات: ربط المشاريع بالشركات والمستثمرين</li>
        </ul>
        
        <p>ندعو جميع الطلاب والأساتذة المهتمين بالريادة والابتكار للتقدم بمشاريعهم والاستفادة من هذه الفرصة الذهبية لتحويل أفكارهم إلى واقع ملموس.</p>
      `,
      publishDate: "2024-01-15",
      author: "إدارة الحاضنة",
      category: "أخبار البرامج",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["برامج", "دعم", "مشاريع ناشئة", "ريادة"],
    },
    "2": {
      id: "2",
      title: "ورشة عمل حول تطوير نماذج الأعمال للمشاريع الناشئة",
      content: `
        <p>نظمت حاضنة جامعة زيان عاشور ورشة عمل متخصصة حول تطوير نماذج الأعمال للمشاريع الناشئة، بمشاركة أكثر من 50 طالباً وطالبة من مختلف الكليات.</p>
        
        <h3>محاور الورشة</h3>
        <p>تناولت الورشة عدة محاور مهمة:</p>
        <ul>
          <li>أساسيات نماذج الأعمال</li>
          <li>كيفية تحديد القيمة المضافة للمشروع</li>
          <li>تحليل السوق والعملاء المستهدفين</li>
          <li>استراتيجيات التسويق والمبيعات</li>
          <li>التخطيط المالي والتمويل</li>
        </ul>
        
        <h3>المتحدثون</h3>
        <p>شارك في الورشة نخبة من الخبراء والمختصين في مجال ريادة الأعمال، منهم:</p>
        <ul>
          <li>د. أحمد بن محمد - خبير في ريادة الأعمال</li>
          <li>أ. فاطمة العلوي - مستشارة أعمال</li>
          <li>م. يوسف الحسني - مؤسس عدة شركات ناشئة</li>
        </ul>
        
        <p>وقد أشاد المشاركون بجودة المحتوى المقدم وفائدته العملية في تطوير مشاريعهم الريادية.</p>
      `,
      publishDate: "2024-01-10",
      author: "فريق التدريب",
      category: "ورش العمل",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["ورشة عمل", "نماذج أعمال", "تدريب"],
    },
  }

  return articles[id as keyof typeof articles] || null
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = getNewsArticle(params.id)

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
          <Link href="/news">
            <Button variant="outline">العودة للأخبار</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/news">
            <Button variant="outline" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              العودة للأخبار
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="gap-1">
              <Tag className="h-3 w-3" />
              {article.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishDate).toLocaleDateString("ar-SA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              {article.author}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">{article.title}</h1>

          {/* Article Image */}
          {article.image && (
            <div className="mb-8">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="pt-8">
            <div
              className="prose prose-lg max-w-none text-right"
              style={{ direction: "rtl" }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Article Tags */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">الكلمات المفتاحية</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">شارك المقال</h3>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              مشاركة
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">مقالات ذات صلة</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">نصائح لنجاح المشاريع الناشئة</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  تعرف على أهم النصائح والاستراتيجيات لضمان نجاح مشروعك الناشئ...
                </p>
                <Link href="/news/3">
                  <Button variant="outline" size="sm">
                    اقرأ المزيد
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">قصص نجاح من الحاضنة</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  اكتشف قصص نجاح ملهمة لطلاب تمكنوا من تحويل أفكارهم إلى مشاريع ناجحة...
                </p>
                <Link href="/news/4">
                  <Button variant="outline" size="sm">
                    اقرأ المزيد
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
