"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "ورشة عمل: أساسيات ريادة الأعمال",
    description: "ورشة تدريبية شاملة تغطي أساسيات ريادة الأعمال وتطوير المشاريع الناشئة",
    date: "25 مارس 2024",
    time: "10:00 صباحاً - 2:00 مساءً",
    location: "قاعة المؤتمرات - مبنى الحاضنة",
    image: "/placeholder.svg?height=400&width=800",
    category: "ورشة عمل",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "معرض المشاريع الناشئة",
    description: "معرض لعرض مشاريع الطلاب الناشئة وربطهم بالمستثمرين والشركاء",
    date: "15 أبريل 2024",
    time: "9:00 صباحاً - 5:00 مساءً",
    location: "المكتبة المركزية - جامعة زيان عاشور",
    image: "/placeholder.svg?height=400&width=800",
    category: "معرض",
    isUpcoming: true,
  },
  {
    id: 3,
    title: "ندوة: مستقبل التكنولوجيا في الجزائر",
    description: "ندوة نقاشية حول مستقبل التكنولوجيا والابتكار في الجزائر",
    date: "5 مايو 2024",
    time: "3:00 مساءً - 6:00 مساءً",
    location: "قاعة المحاضرات - كلية الهندسة",
    image: "/placeholder.svg?height=400&width=800",
    category: "ندوة",
    isUpcoming: true,
  },
  {
    id: 4,
    title: "مسابقة الأفكار الابتكارية",
    description: "مسابقة سنوية للأفكار الابتكارية في مجال التكنولوجيا والابتكار",
    date: "20 مايو 2024",
    time: "9:00 صباحاً - 4:00 مساءً",
    location: "مركز الابتكار - الحاضنة",
    image: "/placeholder.svg?height=400&width=800",
    category: "مسابقة",
    isUpcoming: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">الفعاليات القادمة</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تعرف على الفعاليات والأنشطة القادمة في حاضنة جامعة زيان عاشور
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#18A39E] hover:bg-[#16918A]">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#18A39E] hover:bg-[#16918A]">
                    <span>التسجيل الآن</span>
                    <ArrowRight className="h-4 w-4 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">هل لديك فكرة لفعالية؟</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            يمكنك اقتراح فعاليات جديدة أو طلب تنظيم فعالية خاصة بمشروعك
          </p>
          <Button size="lg" variant="outline" className="bg-[#18A39E] hover:bg-[#16918A] text-white">
            اقتراح فعالية
            <ArrowRight className="h-4 w-4 mr-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 