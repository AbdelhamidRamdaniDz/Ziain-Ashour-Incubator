"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Sample data - replace with actual data from your backend
const graduates = [
  {
    id: 1,
    name: "أحمد محمد",
    projectName: "تيك سوليوشنز",
    image: "/graduates/ahmed.jpg",
    projectLogo: "/graduates/tech-solutions.png",
    description: "منصة متكاملة لتطوير البرمجيات وتقديم حلول تقنية للشركات",
    website: "https://techsolutions.dz",
    graduationYear: 2023,
    achievements: ["حصل على تمويل بقيمة 500,000 دج", "وظف 5 موظفين", "خدم أكثر من 20 عميل"]
  },
  {
    id: 2,
    name: "سارة علي",
    projectName: "إديو تك",
    image: "/graduates/sara.jpg",
    projectLogo: "/graduates/edutech.png",
    description: "منصة تعليمية تقدم دورات تدريبية في مجال التكنولوجيا",
    website: "https://edutech.dz",
    graduationYear: 2023,
    achievements: ["حصل على جائزة أفضل مشروع ناشئ", "وصل عدد المستخدمين إلى 1000 طالب"]
  },
  {
    id: 3,
    name: "محمد خالد",
    projectName: "ديف تك",
    image: "/graduates/mohamed.jpg",
    projectLogo: "/graduates/devtech.png",
    description: "شركة متخصصة في تطوير تطبيقات الموبايل",
    website: "https://devtech.dz",
    graduationYear: 2022,
    achievements: ["طور أكثر من 15 تطبيق", "حصل على شهادة ISO"]
  }
]

export function GraduatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % graduates.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextGraduate = () => {
    setCurrentIndex((prev) => (prev + 1) % graduates.length)
    setIsAutoPlaying(false)
  }

  const prevGraduate = () => {
    setCurrentIndex((prev) => (prev - 1 + graduates.length) % graduates.length)
    setIsAutoPlaying(false)
  }

  const currentGraduate = graduates[currentIndex]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            متخرجونا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            قصص نجاح رواد الأعمال الذين تخرجوا من حاضنتنا وحققوا إنجازات متميزة
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={currentGraduate.image}
                    alt={currentGraduate.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-background p-2">
                  <Image
                    src={currentGraduate.projectLogo}
                    alt={currentGraduate.projectName}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{currentGraduate.name}</h3>
                <p className="text-primary font-medium">{currentGraduate.projectName}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  تخرج في {currentGraduate.graduationYear}
                </p>
              </div>

              <p className="text-muted-foreground max-w-2xl">
                {currentGraduate.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {currentGraduate.achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {achievement}
                  </span>
                ))}
              </div>

              {currentGraduate.website && (
                <Link
                  href={currentGraduate.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>زيارة الموقع</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          </motion.div>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={prevGraduate}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={nextGraduate}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {graduates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/graduates">
            <Button variant="outline" className="gap-2">
              استكشاف جميع خريجينا
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 