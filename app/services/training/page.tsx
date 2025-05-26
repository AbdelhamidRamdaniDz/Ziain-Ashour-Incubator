"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Target, Award, Clock, Calendar } from "lucide-react"

const trainingPrograms = [
  {
    title: "ريادة الأعمال",
    description: "برنامج متكامل لتعلم أساسيات ريادة الأعمال وإدارة المشاريع الناشئة",
    duration: "3 أشهر",
    level: "مبتدئ",
    icon: GraduationCap,
    topics: [
      "تطوير الأفكار",
      "نموذج العمل",
      "التخطيط الاستراتيجي",
      "إدارة الموارد",
    ],
  },
  {
    title: "التسويق الرقمي",
    description: "تعلم استراتيجيات التسويق الرقمي وتطبيقها على مشروعك",
    duration: "2 أشهر",
    level: "متوسط",
    icon: Target,
    topics: [
      "التسويق عبر وسائل التواصل",
      "تحسين محركات البحث",
      "إدارة المحتوى",
      "تحليل البيانات",
    ],
  },
  {
    title: "التطوير التقني",
    description: "برامج تدريبية في مجالات التطوير البرمجي والتقني",
    duration: "4 أشهر",
    level: "متقدم",
    icon: Award,
    topics: [
      "تطوير الويب",
      "تطوير تطبيقات الموبايل",
      "الذكاء الاصطناعي",
      "أمن المعلومات",
    ],
  },
]

const features = [
  {
    title: "مدربون متخصصون",
    description: "خبراء في مجالاتهم مع خبرة عملية واسعة",
    icon: Users,
  },
  {
    title: "تدريب عملي",
    description: "تمارين وحالات عملية لتطبيق المعرفة",
    icon: Target,
  },
  {
    title: "شهادات معتمدة",
    description: "شهادات معتمدة من جهات محلية ودولية",
    icon: Award,
  },
  {
    title: "مرونة في المواعيد",
    description: "برامج صباحية ومسائية تناسب جميع المشاركين",
    icon: Clock,
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/training-hero.jpg"
          alt="برامج التدريب"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">برامج التدريب</h1>
            <p className="text-xl max-w-2xl mx-auto">
              برامج تدريبية متخصصة لتطوير مهاراتك وبناء مستقبلك المهني
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">مميزات برامجنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">برامجنا التدريبية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{program.level}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {program.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#18A39E]" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ رحلة التعلم معنا</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            اختر البرنامج المناسب لك وابدأ رحلة التطوير المهني
          </p>
          <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A]">
            سجل الآن
          </Button>
        </div>
      </div>
    </div>
  )
} 