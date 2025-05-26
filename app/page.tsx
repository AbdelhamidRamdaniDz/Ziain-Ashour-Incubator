"use client"

import { HeroSection } from "@/components/HeroSection"
import { AnimatedCounters } from "@/components/AnimatedCounters"
import { TestimonialsSlider } from "@/components/TestimonialsSlider"
import { NewsAndEvents } from "@/components/NewsAndEvents"
import { Contact } from "@/components/contact"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Building, Globe, Users, Award, Lightbulb, Target, Rocket, BookOpen, GraduationCap, Briefcase, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <main>
        <HeroSection />
        <AnimatedCounters />
        
        {/* About Section */}
        <section className="py-20">
          <div className="container">
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
                <div className="bg-gradient-to-r from-[#18A39E]/10 to-[#18A39E]/5 rounded-2xl p-8">
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
                <Card className="text-center p-6">
                  <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-[#18A39E]" />
                  </div>
                  <h4 className="font-semibold mb-2">رؤيتنا</h4>
                  <p className="text-sm text-muted-foreground">
                    أن نكون الحاضنة الرائدة في شمال أفريقيا في مجال دعم الابتكار وريادة الأعمال
                  </p>
                </Card>
                <Card className="text-center p-6">
                  <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-[#18A39E]" />
                  </div>
                  <h4 className="font-semibold mb-2">مهمتنا</h4>
                  <p className="text-sm text-muted-foreground">
                    توفير بيئة محفزة ومتكاملة للطلاب والأساتذة لتطوير مشاريعهم الريادية
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                >
                  <Link href={service.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-[#18A39E]" />
                        </div>
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
                شركاؤنا
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نتعاون مع مؤسسات رائدة في مختلف القطاعات لتوفير أفضل الفرص والدعم لرواد الأعمال
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center h-20 mb-4">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <h3 className="font-semibold text-center mb-2">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground text-center">{partner.type}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/partners">
                <Button variant="outline" className="gap-2">
                  عرض جميع الشركاء
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                مرشدونا
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نخبة من الخبراء والمختصين في مختلف المجالات لمساعدتكم في رحلة النجاح
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{mentor.name}</h3>
                          <p className="text-sm text-muted-foreground">{mentor.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#18A39E]/10 text-[#18A39E] px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/mentors">
                <Button variant="outline" className="gap-2">
                  عرض جميع المرشدين
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <TestimonialsSlider />
        <NewsAndEvents />

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
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

            <div className="grid gap-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
