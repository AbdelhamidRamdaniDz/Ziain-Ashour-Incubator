import Link from "next/link"
import { ExternalLink, Building, Globe, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "وزارة التعليم العالي والبحث العلمي",
      type: "حكومي",
      description: "دعم الأبحاث والابتكار من خلال المنح والمبادرات السياسية لتعزيز ريادة الأعمال في الجامعات.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2020",
      projects: 25,
      category: "government",
    },
    {
      id: 2,
      name: "صندوق الابتكار الوطني",
      type: "حكومي",
      description: "توفير التمويل الأولي والمنح للمشاريع الناشئة والمشاريع المبتكرة التي يطورها طلاب الجامعات.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2019",
      projects: 40,
      category: "government",
    },
    {
      id: 3,
      name: "تك الجزائر",
      type: "صناعي",
      description: "شركة تكنولوجيا رائدة تقدم الإرشاد والتدريب والموارد التقنية لرواد الأعمال الطلاب.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2018",
      projects: 30,
      category: "industry",
    },
    {
      id: 4,
      name: "جمعية الشركات الناشئة الجزائرية",
      type: "غير ربحي",
      description: "شبكة من رواد الأعمال الناجحين تقدم الإرشاد وفرص التواصل والموارد للشركات الناشئة الطلابية.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2017",
      projects: 60,
      category: "nonprofit",
    },
    {
      id: 5,
      name: "شبكة ريادة الأعمال العالمية",
      type: "دولي",
      description: "منظمة دولية تربط رواد الأعمال بالموارد العالمية والمرشدين والمستثمرين المحتملين.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2015",
      projects: 80,
      category: "international",
    },
    {
      id: 6,
      name: "مجلس الأعمال بولاية الجلفة",
      type: "محلي",
      description: "جمعية الأعمال المحلية التي توفر فرص التواصل ورؤى السوق المحلي لرواد الأعمال الطلاب.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2021",
      projects: 15,
      category: "local",
    },
    {
      id: 7,
      name: "مركز ابتكار التكنولوجيا الطبية",
      type: "صناعي",
      description: "مركز متخصص في ابتكارات التكنولوجيا الطبية، يوفر مساحة المختبر والمعدات والاتصالات الصناعية.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2020",
      projects: 20,
      category: "industry",
    },
    {
      id: 8,
      name: "تحالف الطاقة المتجددة",
      type: "صناعي",
      description: "اتحاد شركات الطاقة المتجددة يدعم ابتكارات التكنولوجيا الخضراء والشركات الناشئة المستدامة.",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
      established: "2019",
      projects: 35,
      category: "industry",
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "government":
        return <Building className="h-5 w-5" />
      case "industry":
        return <Globe className="h-5 w-5" />
      case "nonprofit":
        return <Users className="h-5 w-5" />
      case "international":
        return <Award className="h-5 w-5" />
      case "local":
        return <Building className="h-5 w-5" />
      default:
        return <Building className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "government":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "industry":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "nonprofit":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "international":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "local":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">شركاؤنا</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            نتعاون مع منظمات رائدة من القطاعات الحكومية والصناعية والأكاديمية لتوفير أفضل الموارد والفرص لرواد الأعمال
            الطلاب.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[#18A39E] mb-2">8</div>
              <div className="text-sm text-muted-foreground">شركاء استراتيجيون</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[#18A39E] mb-2">305</div>
              <div className="text-sm text-muted-foreground">مشروع مدعوم</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[#18A39E] mb-2">5</div>
              <div className="text-sm text-muted-foreground">قطاعات متنوعة</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[#18A39E] mb-2">2015</div>
              <div className="text-sm text-muted-foreground">بداية الشراكات</div>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner) => (
            <Card key={partner.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(partner.category)}
                    <Badge className={getCategoryColor(partner.category)}>{partner.type}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">منذ {partner.established}</div>
                </div>

                <div className="mb-4 flex h-20 items-center justify-center rounded-md bg-muted/50 p-2">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <CardTitle className="line-clamp-2 text-lg">{partner.name}</CardTitle>
                <CardDescription className="text-sm">{partner.type} شريك</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{partner.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="font-medium text-[#18A39E]">{partner.projects}</span>
                    <span className="text-muted-foreground"> مشروع مدعوم</span>
                  </div>
                </div>

                <Link href={partner.website}>
                  <Button
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-[#18A39E] group-hover:text-white transition-colors"
                  >
                    زيارة الموقع
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">كن شريكاً معنا</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            انضم إلى شبكة شركائنا وساعد في تشكيل مستقبل الابتكار وريادة الأعمال في جامعة زيان عاشور. نقدم فرص شراكة
            متنوعة مصممة خصيصاً لتحقيق أهداف منظمتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A] gap-2">
                تواصل معنا
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                تعرف على المزيد
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
