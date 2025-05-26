"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb, BarChart, Settings } from "lucide-react"

const consultingServices = [
  {
    title: "استشارات الأعمال",
    description: "تطوير استراتيجيات الأعمال وتحسين العمليات التشغيلية",
    icon: Settings,
    features: [
      "تطوير استراتيجيات الأعمال",
      "تحسين العمليات التشغيلية",
      "إدارة التغيير",
      "تحليل الأداء",
    ],
  },
  {
    title: "التسويق والعلامة التجارية",
    description: "بناء وتطوير العلامة التجارية واستراتيجيات التسويق",
    icon: Target,
    features: [
      "تطوير العلامة التجارية",
      "استراتيجيات التسويق",
      "تحليل السوق",
      "إدارة العلاقات العامة",
    ],
  },
  {
    title: "التطوير التقني",
    description: "استشارات في مجالات التطوير التقني والرقمنة",
    icon: BarChart,
    features: [
      "تطوير المنتجات التقنية",
      "التحول الرقمي",
      "أمن المعلومات",
      "تحليل البيانات",
    ],
  },
  {
    title: "التمويل والاستثمار",
    description: "استشارات في مجالات التمويل والاستثمار وإدارة المخاطر",
    icon: Award,
    features: [
      "تخطيط مالي",
      "إدارة المخاطر",
      "تقييم الاستثمارات",
      "تطوير مصادر التمويل",
    ],
  },
]

const process = [
  {
    title: "التقييم الأولي",
    description: "تحليل الوضع الحالي وتحديد الاحتياجات",
    icon: Lightbulb,
  },
  {
    title: "تطوير الحلول",
    description: "تصميم حلول مخصصة تناسب احتياجاتك",
    icon: Target,
  },
  {
    title: "التنفيذ",
    description: "تنفيذ الحلول مع متابعة مستمرة",
    icon: Settings,
  },
  {
    title: "التقييم والمتابعة",
    description: "تقييم النتائج وتقديم توصيات للتحسين",
    icon: BarChart,
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/consulting-hero.jpg"
          alt="خدمات الاستشارات"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">خدمات الاستشارات</h1>
            <p className="text-xl max-w-2xl mx-auto">
              استشارات متخصصة لمساعدتك في تطوير أعمالك وتحقيق أهدافك
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Consulting Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا الاستشارية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#18A39E]" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">عملية الاستشارة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E] text-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى استشارة متخصصة؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مخصصة تناسب احتياجاتك
          </p>
          <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A]">
            احجز استشارة
          </Button>
        </div>
      </div>
    </div>
  )
} 