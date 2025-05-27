"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, GraduationCap, Calendar, Globe } from "lucide-react"
import Fuse from "fuse.js"

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

export default function GraduatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  // Fuse.js search setup
  const fuse = useMemo(() => {
    return new Fuse(graduates, {
      keys: ["name", "projectName", "description", "achievements"],
      threshold: 0.3,
    })
  }, [])

  const filteredGraduates = useMemo(() => {
    let results = graduates

    // Apply year filter
    if (selectedYear) {
      results = results.filter(graduate => graduate.graduationYear === selectedYear)
    }

    // Apply search filter
    if (searchQuery) {
      results = fuse.search(searchQuery).map(result => result.item)
    }

    return results
  }, [searchQuery, selectedYear, fuse])

  const years = useMemo(() => {
    return [...new Set(graduates.map(graduate => graduate.graduationYear))]
  }, [])

  return (
    <div className="min-h-screen bg-background py-12" dir="rtl">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">خريجو الحاضنة</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تعرف على قصص نجاح خريجي حاضنة جامعة زيان عاشور ومشاريعهم المتميزة
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="ابحث عن خريج أو مشروع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedYear === null ? "default" : "outline"}
              onClick={() => setSelectedYear(null)}
            >
              الكل
            </Button>
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Graduates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGraduates.map((graduate) => (
            <motion.div
              key={graduate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Link href={`/graduates/${graduate.id}`} className="block">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                        <Image
                          src={graduate.image}
                          alt={graduate.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, 64px"
                          priority={graduate.id === 1}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{graduate.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{graduate.graduationYear}</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="mb-4">
                    <h4 className="font-medium">{graduate.projectName}</h4>
                    {graduate.website && (
                      <Link
                        href={`https://${graduate.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Globe className="h-3 w-3" />
                        {graduate.website}
                      </Link>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{graduate.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {graduate.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGraduates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">لم يتم العثور على نتائج</p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 