"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "انطلاق برنامج تدريب رواد الأعمال",
    description:
      "تطلق حاضنة جامعة زيان عاشور برنامجاً تدريبياً جديداً لرواد الأعمال في مجال التكنولوجيا والابتكار.",
    date: "15 مارس 2024",
    image: "/placeholder.svg?height=400&width=800",
    category: "أخبار",
  },
  {
    id: 2,
    title: "شراكة جديدة مع شركة تكنولوجيا رائدة",
    description:
      "وقعت الحاضنة اتفاقية شراكة استراتيجية مع شركة تكنولوجيا رائدة لدعم المشاريع الناشئة.",
    date: "10 مارس 2024",
    image: "/placeholder.svg?height=400&width=800",
    category: "شراكات",
  },
]

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

export function NewsAndEvents() {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            الأخبار والفعاليات
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تعرف على آخر أخبار الحاضنة والفعاليات القادمة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* News Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">آخر الأخبار</h3>
              <Link href="/news">
                <Button variant="ghost" className="text-[#18A39E] hover:text-[#16918A]">
                  عرض الكل
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              {news.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Link href={`/news/${item.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative aspect-video md:aspect-square">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-4 right-4 bg-[#18A39E] hover:bg-[#16918A]">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                          </div>
                          <h4 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h4>
                          <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">الفعاليات القادمة</h3>
              <Link href="/events">
                <Button variant="ghost" className="text-[#18A39E] hover:text-[#16918A]">
                  عرض الكل
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              {events.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Link href={`/events/${event.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative aspect-video md:aspect-square">
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
                        <div className="p-6">
                          <div className="space-y-2 mb-3">
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
                          <h4 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h4>
                          <p className="text-muted-foreground line-clamp-2">{event.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 