"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Globe, Users, Award, ExternalLink } from "lucide-react"

const partners = [
  {
    id: 1,
    name: "وزارة التعليم العالي والبحث العلمي",
    type: "حكومي",
    description: "دعم الأبحاث والابتكار من خلال المنح والمبادرات السياسية لتعزيز ريادة الأعمال في الجامعات.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2020",
    projects: 25,
    category: "government",
  },
  {
    id: 2,
    name: "صندوق الابتكار الوطني",
    type: "حكومي",
    description: "توفير التمويل الأولي والمنح للمشاريع الناشئة والمشاريع المبتكرة التي يطورها طلاب الجامعات.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2019",
    projects: 40,
    category: "government",
  },
  {
    id: 3,
    name: "تك الجزائر",
    type: "صناعي",
    description: "شركة تكنولوجيا رائدة تقدم الإرشاد والتدريب والموارد التقنية لرواد الأعمال الطلاب.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2018",
    projects: 30,
    category: "industry",
  },
  {
    id: 4,
    name: "جمعية الشركات الناشئة الجزائرية",
    type: "غير ربحي",
    description: "شبكة من رواد الأعمال الناجحين تقدم الإرشاد وفرص التواصل والموارد للشركات الناشئة الطلابية.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2017",
    projects: 60,
    category: "nonprofit",
  },
  {
    id: 5,
    name: "شبكة ريادة الأعمال العالمية",
    type: "دولي",
    description: "منظمة دولية تربط رواد الأعمال بالموارد العالمية والمرشدين والمستثمرين المحتملين.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2015",
    projects: 80,
    category: "international",
  },
  {
    id: 6,
    name: "مجلس الأعمال بولاية الجلفة",
    type: "محلي",
    description: "جمعية الأعمال المحلية التي توفر فرص التواصل ورؤى السوق المحلي لرواد الأعمال الطلاب.",
    logo: "/placeholder.svg?height=80&width=200",
    website: "#",
    established: "2021",
    projects: 15,
    category: "local",
  },
]

const categories = [
  { id: "all", label: "الكل", icon: Globe },
  { id: "government", label: "حكومي", icon: Building },
  { id: "industry", label: "صناعي", icon: Globe },
  { id: "nonprofit", label: "غير ربحي", icon: Users },
  { id: "international", label: "دولي", icon: Award },
  { id: "local", label: "محلي", icon: Building },
]

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredPartners = partners.filter(
    (partner) => activeCategory === "all" || partner.category === activeCategory
  )

  const getCategoryIcon = (category: string) => {
    const categoryObj = categories.find((cat) => cat.id === category)
    const Icon = categoryObj ? categoryObj.icon : Globe
    return <Icon className="h-5 w-5" />
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "government":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "industry":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "nonprofit":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "international":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "local":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">شركاؤنا</h2>
          <p className="mt-4 text-muted-foreground">
            نتعاون مع منظمات رائدة من القطاعات الحكومية والصناعية والأكاديمية
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="gap-2"
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPartners.map((partner) => (
            <Card
              key={partner.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(partner.category)}
                    <Badge className={getCategoryColor(partner.category)}>{partner.type}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">منذ {partner.established}</div>
                </div>

                <div className="mb-4 flex h-20 items-center justify-center rounded-md bg-muted/50 p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{partner.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="font-medium text-[#18A39E]">{partner.projects}</span>
                    <span className="text-muted-foreground"> مشروع مدعوم</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full gap-2 group-hover:bg-[#18A39E] group-hover:text-white transition-colors"
                  asChild
                >
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    زيارة الموقع
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">كن شريكاً معنا</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            انضم إلى شبكة شركائنا وساعد في تشكيل مستقبل الابتكار وريادة الأعمال في جامعة زيان عاشور
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#18A39E] hover:bg-[#16918A] gap-2">
              تواصل معنا
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              تعرف على المزيد
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 