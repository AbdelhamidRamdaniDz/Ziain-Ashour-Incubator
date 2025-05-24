import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "إطلاق برنامج جديد لدعم المشاريع التقنية",
      excerpt: "تعلن حاضنة جامعة زيان عاشور عن إطلاق برنامج متخصص لدعم المشاريع التقنية والابتكارية للطلاب",
      date: "15 مايو 2025",
      author: "فريق الحاضنة",
      image: "/placeholder.svg?height=200&width=400",
      category: "إعلانات",
    },
    {
      id: 2,
      title: "نجاح مشروع طلابي في الحصول على تمويل بقيمة مليون دينار",
      excerpt: "حقق مشروع 'تطبيق الصحة الذكي' الذي طوره طلاب من كلية الطب نجاحاً باهراً في الحصول على تمويل",
      date: "12 مايو 2025",
      author: "أحمد بن علي",
      image: "/placeholder.svg?height=200&width=400",
      category: "قصص نجاح",
    },
    {
      id: 3,
      title: "ورشة عمل حول ريادة الأعمال والابتكار",
      excerpt: "تنظم الحاضنة ورشة عمل شاملة حول أساسيات ريادة الأعمال والابتكار للطلاب المهتمين",
      date: "10 مايو 2025",
      author: "د. فاطمة الزهراء",
      image: "/placeholder.svg?height=200&width=400",
      category: "فعاليات",
    },
    {
      id: 4,
      title: "شراكة جديدة مع شركة تقنية عالمية",
      excerpt: "توقع الحاضنة اتفاقية شراكة استراتيجية مع شركة تقنية عالمية لدعم المشاريع الطلابية",
      date: "8 مايو 2025",
      author: "إدارة الحاضنة",
      image: "/placeholder.svg?height=200&width=400",
      category: "شراكات",
    },
    {
      id: 5,
      title: "مسابقة أفضل مشروع ريادي للعام 2025",
      excerpt: "تعلن الحاضنة عن إطلاق مسابقة سنوية لأفضل مشروع ريادي بجوائز قيمة للفائزين",
      date: "5 مايو 2025",
      author: "لجنة التحكيم",
      image: "/placeholder.svg?height=200&width=400",
      category: "مسابقات",
    },
    {
      id: 6,
      title: "تخرج الدفعة الثالثة من برنامج الحاضنة",
      excerpt: "احتفلت الحاضنة بتخرج 25 مشروعاً ناجحاً من الدفعة الثالثة لبرنامج الاحتضان",
      date: "2 مايو 2025",
      author: "فريق البرامج",
      image: "/placeholder.svg?height=200&width=400",
      category: "تخرج",
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">الأخبار</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تابع آخر الأخبار والتطورات في حاضنة جامعة زيان عاشور
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <div className="inline-block">
                  <span className="bg-[#18A39E]/10 text-[#18A39E] px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-3 mb-4">{article.excerpt}</CardDescription>
                <Link href={`/news/${article.id}`}>
                  <Button
                    variant="outline"
                    className="w-full group hover:bg-[#18A39E] hover:text-white hover:border-[#18A39E]"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-[#18A39E] hover:text-white hover:border-[#18A39E]">
            تحميل المزيد من الأخبار
          </Button>
        </div>
      </div>
    </div>
  )
}
