"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PiggyBank, Target, Award, Users, BarChart, ArrowUpRight } from "lucide-react"

const fundingOptions = [
  {
    title: "منح وتمويل أولي",
    description: "تمويل أولي للمشاريع الناشئة في مراحلها الأولى",
    icon: PiggyBank,
    features: [
      "تمويل يصل إلى 50,000 ريال",
      "دعم فني وإرشادي",
      "شبكة علاقات واسعة",
      "فرص تدريبية",
    ],
  },
  {
    title: "قروض ميسرة",
    description: "قروض بفائدة منخفضة للمشاريع المؤهلة",
    icon: Target,
    features: [
      "قروض تصل إلى 200,000 ريال",
      "فترة سداد مرنة",
      "فائدة تنافسية",
      "ضمانات مرنة",
    ],
  },
  {
    title: "استثمارات",
    description: "استثمارات مباشرة في المشاريع الواعدة",
    icon: Award,
    features: [
      "استثمارات تصل إلى 500,000 ريال",
      "شراكة استراتيجية",
      "دعم متكامل",
      "خبرة في التطوير",
    ],
  },
  {
    title: "شراكات استراتيجية",
    description: "شراكات مع مؤسسات وشركات رائدة",
    icon: Users,
    features: [
      "وصول إلى أسواق جديدة",
      "دعم تقني",
      "فرص توسع",
      "شبكة علاقات",
    ],
  },
]

const requirements = [
  {
    title: "فريق عمل متكامل",
    description: "فريق عمل ذو خبرة ومهارات متنوعة",
    icon: Users,
  },
  {
    title: "نموذج عمل واضح",
    description: "نموذج عمل قابل للتطوير والتنفيذ",
    icon: Target,
  },
  {
    title: "خطة مالية",
    description: "خطة مالية واقعية وقابلة للتنفيذ",
    icon: BarChart,
  },
  {
    title: "إمكانية نمو",
    description: "إمكانية نمو وتوسع المشروع",
    icon: ArrowUpRight,
  },
]

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/funding-hero.jpg"
          alt="خدمات التمويل"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">خدمات التمويل</h1>
            <p className="text-xl max-w-2xl mx-auto">
              حلول تمويلية متنوعة لدعم مشروعك في مراحله المختلفة
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Funding Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">خيارات التمويل</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fundingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <option.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <div className="space-y-2">
                      {option.features.map((feature) => (
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

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">متطلبات التقديم</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <requirement.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{requirement.title}</h3>
                    <p className="text-muted-foreground">{requirement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">خطوات التقديم</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "تقديم الطلب",
                  description: "إكمال نموذج التقديم وتقديم المستندات المطلوبة",
                },
                {
                  step: "2",
                  title: "التقييم الأولي",
                  description: "مراجعة الطلب وتقييم المشروع",
                },
                {
                  step: "3",
                  title: "مقابلة شخصية",
                  description: "مقابلة مع فريق المشروع لمناقشة التفاصيل",
                },
                {
                  step: "4",
                  title: "الموافقة والتمويل",
                  description: "الموافقة على الطلب وتقديم التمويل",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#18A39E] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتمويل مشروعك؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            قدم طلبك الآن وابدأ رحلة النمو معنا
          </p>
          <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A]">
            قدم طلب التمويل
          </Button>
        </div>
      </div>
    </div>
  )
} 