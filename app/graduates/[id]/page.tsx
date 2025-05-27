"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Globe, ArrowRight, ArrowLeft } from "lucide-react"

// Using the same data from the main page
const graduates = [
  {
    id: 1,
    name: "أحمد محمد",
    projectName: "Tech Solutions",
    description: "منصة متكاملة لتطوير البرمجيات وحلول تكنولوجيا المعلومات",
    graduationYear: "2023",
    achievements: ["تطوير 50+ مشروع", "توظيف 20+ مطور", "شراكة مع 10+ شركات"],
    website: "www.techsolutions.dz",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed&backgroundColor=b6e3f4",
    projectLogo: "https://api.dicebear.com/7.x/initials/svg?seed=TS&backgroundColor=4f46e5"
  },
  {
    id: 2,
    name: "سارة العلوي",
    projectName: "EduTech",
    description: "منصة تعليمية مبتكرة تجمع بين التكنولوجيا والتعليم",
    graduationYear: "2023",
    achievements: ["تطوير 30+ دورة", "تخريج 1000+ طالب", "شراكة مع 5+ جامعات"],
    website: "www.edutech.dz",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara&backgroundColor=ffdfbf",
    projectLogo: "https://api.dicebear.com/7.x/initials/svg?seed=ET&backgroundColor=4f46e5"
  },
  {
    id: 3,
    name: "محمد يوسف",
    projectName: "DevTech",
    description: "شركة متخصصة في تطوير تطبيقات الموبايل والويب",
    graduationYear: "2022",
    achievements: ["تطوير 100+ تطبيق", "توظيف 15+ مطور", "شراكة مع 20+ شركة"],
    website: "www.devtech.dz",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mohamed&backgroundColor=c0aede",
    projectLogo: "https://api.dicebear.com/7.x/initials/svg?seed=DT&backgroundColor=4f46e5"
  },
]

export default function GraduateDetailPage() {
  const params = useParams()
  const router = useRouter()
  const graduateId = parseInt(params.id as string)
  
  const graduate = graduates.find(g => g.id === graduateId)
  const currentIndex = graduates.findIndex(g => g.id === graduateId)
  
  if (!graduate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">لم يتم العثور على الخريج</h1>
          <Button onClick={() => router.push('/graduates')}>العودة إلى قائمة الخريجين</Button>
        </div>
      </div>
    )
  }

  const nextGraduate = graduates[(currentIndex + 1) % graduates.length]
  const prevGraduate = graduates[(currentIndex - 1 + graduates.length) % graduates.length]

  return (
    <div className="min-h-screen bg-background py-12" dir="rtl">
      <div className="container max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" onClick={() => router.push('/graduates')}>
            <ArrowRight className="h-4 w-4 ml-2" />
            العودة للقائمة
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => router.push(`/graduates/${prevGraduate.id}`)}>
              <ArrowLeft className="h-4 w-4 ml-2" />
              السابق
            </Button>
            <Button variant="outline" onClick={() => router.push(`/graduates/${nextGraduate.id}`)}>
              التالي
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          </div>
        </div>

        {/* Graduate Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full bg-primary/5">
              <Image
                src={graduate.image}
                alt={graduate.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/10">
                  <Image
                    src={graduate.image}
                    alt={graduate.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{graduate.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>تخرج في {graduate.graduationYear}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-primary/10">
                  <Image
                    src={graduate.projectLogo}
                    alt={graduate.projectName}
                    fill
                    className="object-contain"
                    sizes="64px"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{graduate.projectName}</h2>
                  {graduate.website && (
                    <Link
                      href={`https://${graduate.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <Globe className="h-4 w-4" />
                      {graduate.website}
                    </Link>
                  )}
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-muted-foreground">{graduate.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">الإنجازات</h3>
                <div className="flex flex-wrap gap-2">
                  {graduate.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 