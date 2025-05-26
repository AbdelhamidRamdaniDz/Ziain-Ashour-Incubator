"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, GraduationCap, Users, PiggyBank, ArrowLeft } from "lucide-react"

const services = [
  {
    title: "احتضان المشاريع",
    description: "نقدم بيئة محفزة ودعم متكامل للمشاريع الناشئة من خلال برامج احتضان مخصصة",
    icon: Building2,
    href: "/services/incubation",
    features: [
      "مساحات عمل مجهزة",
      "إرشاد وتوجيه متخصص",
      "فرص تمويلية",
      "شبكة علاقات واسعة",
    ],
  },
  {
    title: "التدريب والتطوير",
    description: "برامج تدريبية متخصصة لتطوير مهارات رواد الأعمال في مختلف المجالات",
    icon: GraduationCap,
    href: "/services/training",
    features: [
      "ورش عمل متخصصة",
      "دورات تدريبية",
      "برامج تأهيلية",
      "شهادات معتمدة",
    ],
  },
  {
    title: "الاستشارات",
    description: "استشارات متخصصة في مجالات الأعمال والتقنية والتسويق والتمويل",
    icon: Users,
    href: "/services/consulting",
    features: [
      "استشارات أعمال",
      "تطوير المنتجات",
      "تسويق رقمي",
      "تحليل السوق",
    ],
  },
  {
    title: "التمويل",
    description: "حلول تمويلية متنوعة لدعم المشاريع الناشئة في مراحلها المختلفة",
    icon: PiggyBank,
    href: "/services/funding",
    features: [
      "منح وتمويل أولي",
      "قروض ميسرة",
      "استثمارات",
      "شراكات استراتيجية",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات لدعم رواد الأعمال في رحلتهم نحو النجاح
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#18A39E]" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#18A39E]" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button className="w-full">
                      تعرف على المزيد
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">هل لديك مشروع ريادي؟</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            انضم إلينا اليوم وابدأ رحلتك نحو النجاح. نحن هنا لدعمك في كل خطوة على الطريق
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A]">
              قدّم مشروعك الآن
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 