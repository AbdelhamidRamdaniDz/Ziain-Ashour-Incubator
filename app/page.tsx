"use client"

import { HeroSection } from "@/components/HeroSection"
import { AnimatedCounters } from "@/components/AnimatedCounters"
import { TestimonialsSlider } from "@/components/TestimonialsSlider"
import { NewsAndEvents } from "@/components/NewsAndEvents"
import { Contact } from "@/components/contact"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Building, Globe, Users, Award, Lightbulb, Target, Rocket, BookOpen, GraduationCap, Briefcase, Heart, Search } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useMemo } from "react"
import Fuse from "fuse.js"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { GraduatesSection } from "@/components/GraduatesSection"

const partners = [
  {
    name: "وزارة التعليم العالي والبحث العلمي",
    type: "حكومي",
    logo: "/placeholder.svg?height=80&width=200",
    category: "government",
  },
  {
    name: "صندوق الابتكار الوطني",
    type: "حكومي",
    logo: "/placeholder.svg?height=80&width=200",
    category: "government",
  },
  {
    name: "تك الجزائر",
    type: "صناعي",
    logo: "/placeholder.svg?height=80&width=200",
    category: "industry",
  },
  {
    name: "جمعية الشركات الناشئة الجزائرية",
    type: "غير ربحي",
    logo: "/placeholder.svg?height=80&width=200",
    category: "nonprofit",
  },
]

const faqs = [
  {
    question: "ما هي حاضنة جامعة زيان عاشور؟",
    answer: "حاضنة جامعة زيان عاشور هي منصة لدعم رواد الأعمال والطلاب في تحويل أفكارهم إلى مشاريع ناجحة. نحن نقدم الدعم المالي والتقني والإرشادي للمشاريع الناشئة.",
  },
  {
    question: "كيف يمكنني تقديم مشروعي؟",
    answer: "يمكنك تقديم مشروعك من خلال التسجيل في المنصة وملء نموذج التقديم. سيتم مراجعة مشروعك من قبل لجنة متخصصة والرد عليك في أقرب وقت ممكن.",
  },
  {
    question: "ما هي الخدمات التي تقدمها الحاضنة؟",
    answer: "نقدم مجموعة متنوعة من الخدمات تشمل: التمويل، الإرشاد، التدريب، المساحات المكتبية، الدعم التقني، وربط المشاريع بالشركاء والمستثمرين.",
  },
]

const services = [
  {
    title: "احتضان المشاريع",
    description: "نقدم بيئة محفزة وموارد متكاملة لمساعدة المشاريع الناشئة على النمو والتطور",
    icon: Rocket,
    href: "/services/incubation",
  },
  {
    title: "التدريب والتطوير",
    description: "برامج تدريبية متخصصة لتطوير المهارات الريادية والإدارية",
    icon: GraduationCap,
    href: "/services/training",
  },
  {
    title: "الاستشارات",
    description: "استشارات متخصصة في مجالات الأعمال والتسويق والتقنية",
    icon: Briefcase,
    href: "/services/consulting",
  },
  {
    title: "التمويل",
    description: "دعم مالي للمشاريع الواعدة من خلال المنح والاستثمارات",
    icon: Heart,
    href: "/services/funding",
  },
]

const mentors = [
  {
    name: "د. أحمد محمد",
    role: "خبير في ريادة الأعمال",
    image: "/placeholder.svg?height=100&width=100",
    expertise: ["التخطيط الاستراتيجي", "تطوير الأعمال"],
  },
  {
    name: "أ. فاطمة العلوي",
    role: "مستشارة أعمال",
    image: "/placeholder.svg?height=100&width=100",
    expertise: ["التسويق الرقمي", "إدارة المشاريع"],
  },
  {
    name: "م. يوسف الحسني",
    role: "مؤسس شركات ناشئة",
    image: "/placeholder.svg?height=100&width=100",
    expertise: ["التقنية", "الابتكار"],
  },
]

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPartnerCategory, setSelectedPartnerCategory] = useState<string | null>(null)

  // Fuse.js search setup for FAQs
  const fuse = useMemo(() => {
    return new Fuse(faqs, {
      keys: ["question", "answer"],
      threshold: 0.3,
    })
  }, [])

  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqs
    return fuse.search(searchQuery).map(result => result.item)
  }, [searchQuery, fuse])

  const filteredPartners = useMemo(() => {
    if (!selectedPartnerCategory) return partners
    return partners.filter(partner => partner.category === selectedPartnerCategory)
  }, [selectedPartnerCategory])

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <main>
        <HeroSection />
        <AnimatedCounters />
        
        {/* About Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </motion.div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                من نحن
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                حاضنة جامعة زيان عاشور - رائدة في دعم الابتكار وريادة الأعمال للطلاب والأساتذة
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6">نحو مستقبل مشرق للابتكار</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تأسست حاضنة جامعة زيان عاشور عام 2018 بهدف دعم الطلاب والأساتذة في تحويل أفكارهم الإبداعية إلى مشاريع
                    ناجحة. نحن نؤمن بقدرة الشباب الجزائري على الابتكار والإبداع، ونسعى لتوفير البيئة المناسبة لنمو هذه
                    المواهب.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                    <motion.div 
                      className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Target className="h-6 w-6 text-[#18A39E]" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">رؤيتنا</h4>
                    <p className="text-sm text-muted-foreground">
                      أن نكون الحاضنة الرائدة في شمال أفريقيا في مجال دعم الابتكار وريادة الأعمال
                    </p>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                    <motion.div 
                      className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Lightbulb className="h-6 w-6 text-[#18A39E]" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">مهمتنا</h4>
                    <p className="text-sm text-muted-foreground">
                      توفير بيئة محفزة ومتكاملة للطلاب والأساتذة لتطوير مشاريعهم الريادية
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </motion.div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                خدماتنا
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نقدم مجموعة متكاملة من الخدمات لدعم مشاريعكم ومساعدتكم على النجاح
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Link href={service.href}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <motion.div 
                          className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon className="h-6 w-6 text-[#18A39E]" />
                        </motion.div>
                        <h3 className="font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </motion.div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                شركاؤنا
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نتعاون مع مؤسسات رائدة في مختلف القطاعات لتوفير أفضل الفرص والدعم لرواد الأعمال
              </p>
            </motion.div>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={selectedPartnerCategory === null ? "default" : "outline"}
                onClick={() => setSelectedPartnerCategory(null)}
              >
                الكل
              </Button>
              <Button
                variant={selectedPartnerCategory === "government" ? "default" : "outline"}
                onClick={() => setSelectedPartnerCategory("government")}
              >
                حكومي
              </Button>
              <Button
                variant={selectedPartnerCategory === "industry" ? "default" : "outline"}
                onClick={() => setSelectedPartnerCategory("industry")}
              >
                صناعي
              </Button>
              <Button
                variant={selectedPartnerCategory === "nonprofit" ? "default" : "outline"}
                onClick={() => setSelectedPartnerCategory("nonprofit")}
              >
                غير ربحي
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-center h-20 mb-4">
                            <Image
                              src={partner.logo}
                              alt={partner.name}
                              width={200}
                              height={80}
                              className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                            />
                          </div>
                          <h3 className="font-semibold text-center mb-2">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground text-center">{partner.type}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{partner.name}</DialogTitle>
                        <DialogDescription>
                          <div className="mt-4">
                            <p className="text-muted-foreground">نوع الشريك: {partner.type}</p>
                            <p className="text-muted-foreground mt-2">
                              {partner.category === "government" && "شريك حكومي يساهم في دعم المشاريع الناشئة"}
                              {partner.category === "industry" && "شريك صناعي يوفر الخبرة والموارد اللازمة"}
                              {partner.category === "nonprofit" && "شريك غير ربحي يعمل على تطوير المجتمع"}
                            </p>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GraduatesSection />

        <TestimonialsSlider />
        <NewsAndEvents />

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 opacity-10"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </motion.div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                الأسئلة الشائعة
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وبرامجنا
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="ابحث عن سؤال..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-6 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button variant="outline" className="gap-2">
                  عرض جميع الأسئلة
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  )
}
