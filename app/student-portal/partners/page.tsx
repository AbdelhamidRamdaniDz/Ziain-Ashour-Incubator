"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Mail, Phone, MapPin } from "lucide-react"

export default function PartnersPage() {
  // Mock partners data
  const partners = [
    {
      id: 1,
      name: "شركة التكنولوجيا المتقدمة",
      type: "شريك تقني",
      description: "شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://techadvanced.dz",
      email: "info@techadvanced.dz",
      phone: "+213 21 123 456",
      location: "الجزائر العاصمة",
      services: ["تطوير البرمجيات", "استشارات تقنية", "التدريب"],
      partnership: "شراكة استراتيجية",
      since: "2020",
      featured: true,
    },
    {
      id: 2,
      name: "بنك التنمية الجزائري",
      type: "شريك مالي",
      description: "بنك متخصص في تمويل المشاريع الناشئة والشركات الصغيرة والمتوسطة",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://bda.dz",
      email: "startup@bda.dz",
      phone: "+213 21 789 012",
      location: "الجزائر العاصمة",
      services: ["تمويل المشاريع", "قروض ميسرة", "استشارات مالية"],
      partnership: "شراكة تمويل",
      since: "2019",
      featured: true,
    },
    {
      id: 3,
      name: "مجمع الصناعات التقنية",
      type: "شريك صناعي",
      description: "مجمع يضم أكبر الشركات الصناعية والتقنية في الجزائر",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://techpark.dz",
      email: "partnerships@techpark.dz",
      phone: "+213 21 345 678",
      location: "وهران",
      services: ["التصنيع", "البحث والتطوير", "التسويق"],
      partnership: "شراكة تطوير",
      since: "2021",
      featured: false,
    },
    {
      id: 4,
      name: "مؤسسة الابتكار الجزائرية",
      type: "شريك أكاديمي",
      description: "مؤسسة حكومية تدعم الابتكار والبحث العلمي في الجزائر",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://innovation.gov.dz",
      email: "contact@innovation.gov.dz",
      phone: "+213 21 567 890",
      location: "الجزائر العاصمة",
      services: ["دعم الابتكار", "منح بحثية", "برامج تدريبية"],
      partnership: "شراكة حكومية",
      since: "2018",
      featured: true,
    },
    {
      id: 5,
      name: "شركة الاتصالات الذكية",
      type: "شريك تقني",
      description: "شركة متخصصة في حلول الاتصالات والشبكات الذكية",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://smartcom.dz",
      email: "info@smartcom.dz",
      phone: "+213 21 234 567",
      location: "قسنطينة",
      services: ["شبكات ذكية", "إنترنت الأشياء", "أمن المعلومات"],
      partnership: "شراكة تقنية",
      since: "2022",
      featured: false,
    },
    {
      id: 6,
      name: "مركز ريادة الأعمال",
      type: "شريك تدريبي",
      description: "مركز متخصص في تدريب رواد الأعمال وتطوير المهارات القيادية",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://entrepreneurship.dz",
      email: "training@entrepreneurship.dz",
      phone: "+213 21 890 123",
      location: "عنابة",
      services: ["تدريب ريادي", "ورش عمل", "استشارات إدارية"],
      partnership: "شراكة تدريب",
      since: "2020",
      featured: false,
    },
  ]

  const partnerTypes = ["جميع الشركاء", "شريك تقني", "شريك مالي", "شريك صناعي", "شريك أكاديمي", "شريك تدريبي"]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">شركاؤنا</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفخر بشراكتنا مع أفضل المؤسسات والشركات التي تدعم رحلة الطلاب نحو ريادة الأعمال والابتكار
          </p>
        </div>

        {/* Partner Types */}
        <div className="flex flex-wrap justify-center gap-2">
          {partnerTypes.map((type, index) => (
            <Badge
              key={index}
              variant="outline"
              className="cursor-pointer hover:bg-[#18A39E] hover:text-white transition-colors"
            >
              {type}
            </Badge>
          ))}
        </div>

        {/* Featured Partners */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">الشركاء المميزون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners
              .filter((partner) => partner.featured)
              .map((partner) => (
                <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{partner.name}</CardTitle>
                          <Badge className="bg-[#18A39E] text-white">مميز</Badge>
                        </div>
                        <Badge variant="outline">{partner.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{partner.description}</CardDescription>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#18A39E]" />
                          <span>{partner.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#18A39E]" />
                          <span>{partner.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#18A39E]" />
                          <span className="text-xs">{partner.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-[#18A39E]" />
                          <span className="text-xs">شراكة منذ {partner.since}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">الخدمات المقدمة:</h4>
                      <div className="flex flex-wrap gap-1">
                        {partner.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[#18A39E]">
                        {partner.partnership}
                      </Badge>
                      <Button size="sm" variant="outline" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        زيارة الموقع
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Partners */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">جميع الشركاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-12 h-12 object-contain bg-gray-50 rounded-lg p-1"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-base">{partner.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {partner.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm">{partner.description}</CardDescription>

                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{partner.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-3 h-3" />
                      <span>شراكة منذ {partner.since}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {partner.services.slice(0, 2).map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {partner.services.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{partner.services.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Button size="sm" variant="outline" className="w-full gap-2">
                    <ExternalLink className="w-4 h-4" />
                    تفاصيل أكثر
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>فوائد الشراكة</CardTitle>
            <CardDescription>ما يحصل عليه الطلاب من خلال شراكاتنا المتميزة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#18A39E]/10 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-[#18A39E]" />
                </div>
                <h3 className="font-semibold">فرص تدريب</h3>
                <p className="text-sm text-muted-foreground">تدريبات عملية في أفضل الشركات</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#18A39E]/10 rounded-lg flex items-center justify-center mx-auto">
                  <ExternalLink className="w-6 h-6 text-[#18A39E]" />
                </div>
                <h3 className="font-semibold">دعم تقني</h3>
                <p className="text-sm text-muted-foreground">استشارات ودعم تقني متخصص</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#18A39E]/10 rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-[#18A39E]" />
                </div>
                <h3 className="font-semibold">تمويل المشاريع</h3>
                <p className="text-sm text-muted-foreground">فرص تمويل للمشاريع الواعدة</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#18A39E]/10 rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-[#18A39E]" />
                </div>
                <h3 className="font-semibold">شبكة علاقات</h3>
                <p className="text-sm text-muted-foreground">بناء شبكة علاقات مهنية قوية</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
