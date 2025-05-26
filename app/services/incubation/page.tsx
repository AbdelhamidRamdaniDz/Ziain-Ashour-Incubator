"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Building2, Users, Target, Award } from "lucide-react"

const benefits = [
  {
    title: "مساحات عمل مجهزة",
    description: "مساحات عمل حديثة ومجهزة بكل ما تحتاجه للعمل بكفاءة",
    icon: Building2,
  },
  {
    title: "إرشاد وتوجيه",
    description: "إرشاد متخصص من خبراء في مجالات الأعمال والتقنية",
    icon: Users,
  },
  {
    title: "فرص تمويلية",
    description: "وصول إلى شبكة واسعة من المستثمرين وفرص التمويل",
    icon: Target,
  },
  {
    title: "شهادات معتمدة",
    description: "شهادات معتمدة من جهات محلية ودولية",
    icon: Award,
  },
]

const programStages = [
  {
    title: "التقديم والاختيار",
    description: "تقديم الطلبات وتقييم المشاريع واختيار الأفضل",
    duration: "شهر واحد",
  },
  {
    title: "التدريب والتأهيل",
    description: "برامج تدريبية مكثفة لتطوير المهارات والمعرفة",
    duration: "3 أشهر",
  },
  {
    title: "الاحتضان",
    description: "دعم متكامل وتوجيه مستمر للمشاريع",
    duration: "6 أشهر",
  },
  {
    title: "التسريع",
    description: "تسريع نمو المشروع ووصوله للسوق",
    duration: "3 أشهر",
  },
]

export default function IncubationPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/incubation-hero.jpg"
          alt="برنامج الاحتضان"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">برنامج الاحتضان</h1>
            <p className="text-xl max-w-2xl mx-auto">
              نقدم بيئة محفزة ودعم متكامل للمشاريع الناشئة لمساعدتها على النمو والنجاح
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">مميزات البرنامج</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Stages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">مراحل البرنامج</h2>
          <div className="space-y-8">
            {programStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-[#18A39E] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{stage.title}</h3>
                    <span className="text-sm text-muted-foreground">{stage.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">متطلبات التقديم</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                "فريق عمل متكامل",
                "فكرة مبتكرة وقابلة للتطوير",
                "نموذج عمل واضح",
                "التزام كامل من الفريق",
                "استعداد للتعلم والتطوير",
              ].map((requirement, index) => (
                <motion.li
                  key={requirement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#18A39E]" />
                  <span>{requirement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لبدء رحلتك؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى برنامج الاحتضان وابدأ رحلتك نحو النجاح
          </p>
          <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A]">
            قدم طلبك الآن
          </Button>
        </div>
      </div>
    </div>
  )
} 