import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Award, Lightbulb, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">من نحن</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            حاضنة جامعة زيان عاشور - رائدة في دعم الابتكار وريادة الأعمال للطلاب والأساتذة
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-2xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">نحو مستقبل مشرق للابتكار</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  تأسست حاضنة جامعة زيان عاشور عام 2018 بهدف دعم الطلاب والأساتذة في تحويل أفكارهم الإبداعية إلى مشاريع
                  ناجحة. نحن نؤمن بقدرة الشباب الجزائري على الابتكار والإبداع، ونسعى لتوفير البيئة المناسبة لنمو هذه
                  المواهب.
                </p>
              </div>
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb className="h-16 w-16 text-[#18A39E] mx-auto mb-4" />
                  <p className="text-muted-foreground">صورة توضيحية للحاضنة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-[#18A39E]/20">
            <CardHeader>
              <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-[#18A39E]" />
              </div>
              <CardTitle className="text-2xl">رؤيتنا</CardTitle>
              <CardDescription>المستقبل الذي نسعى إليه</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الحاضنة الرائدة في شمال أفريقيا في مجال دعم الابتكار وريادة الأعمال، ونساهم في بناء اقتصاد معرفي
                قوي يعتمد على الإبداع والتكنولوجيا، ونكون جسراً يربط بين الأفكار الأكاديمية والتطبيق العملي في السوق.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#18A39E]/20">
            <CardHeader>
              <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-[#18A39E]" />
              </div>
              <CardTitle className="text-2xl">مهمتنا</CardTitle>
              <CardDescription>ما نقوم به يومياً</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                توفير بيئة محفزة ومتكاملة للطلاب والأساتذة لتطوير مشاريعهم الريادية، من خلال تقديم الإرشاد والتدريب
                والدعم التقني والمالي، وربطهم بشبكة من الخبراء والمستثمرين لضمان نجاح مشاريعهم وتحقيق أهدافهم.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا الأساسية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-[#18A39E]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">الابتكار</h3>
                <p className="text-muted-foreground">نشجع التفكير الإبداعي والحلول المبتكرة للتحديات المعاصرة</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#18A39E]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">التعاون</h3>
                <p className="text-muted-foreground">نؤمن بقوة العمل الجماعي وأهمية التشارك في المعرفة والخبرات</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#18A39E]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">التميز</h3>
                <p className="text-muted-foreground">نسعى للوصول إلى أعلى معايير الجودة في جميع خدماتنا وبرامجنا</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-[#18A39E]/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">إنجازاتنا بالأرقام</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-[#18A39E]" />
              </div>
              <div className="text-3xl font-bold text-[#18A39E] mb-2">85+</div>
              <p className="text-muted-foreground">مشروع محتضن</p>
            </div>

            <div className="text-center">
              <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#18A39E]" />
              </div>
              <div className="text-3xl font-bold text-[#18A39E] mb-2">45+</div>
              <p className="text-muted-foreground">مرشد ومدرب</p>
            </div>

            <div className="text-center">
              <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#18A39E]" />
              </div>
              <div className="text-3xl font-bold text-[#18A39E] mb-2">120+</div>
              <p className="text-muted-foreground">فعالية وورشة</p>
            </div>

            <div className="text-center">
              <div className="bg-[#18A39E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#18A39E]" />
              </div>
              <div className="text-3xl font-bold text-[#18A39E] mb-2">25+</div>
              <p className="text-muted-foreground">براءة اختراع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
