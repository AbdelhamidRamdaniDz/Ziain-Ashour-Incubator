"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin, Twitter, Facebook, Share2, Mail, User, Calendar, MessageSquare, UserPlus, Link, Bookmark, Flag, Ban, VolumeX, EyeOff } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "مؤسس شركة تكنولوجيا",
    image: "/testimonials/1.jpg",
    content: "كانت تجربة رائعة مع حاضنة جامعة زيان عاشور. الدعم والموارد التي قدمتها لنا ساعدتنا في تطوير مشروعنا وتحويله إلى شركة ناجحة.",
    fullContent: "بدأت رحلتي مع حاضنة جامعة زيان عاشور وأنا طالب في السنة الثالثة هندسة معلوماتية. كانت فكرتي مجرد تطبيق بسيط لمساعدة المزارعين في المنطقة. الحاضنة لم تقدم لي فقط المساحة والمعدات، بل قدمت لي الدعم النفسي والمعنوي في أصعب الأوقات. المرشدون ساعدوني في تطوير نموذج العمل وتحسين المنتج. اليوم، شركتنا تخدم أكثر من 500 مزارع في المنطقة، ونخطط للتوسع إلى ولايات أخرى. ما تعلمته في الحاضنة من إدارة المشاريع والتسويق والتفاوض مع المستثمرين كان لا يقدر بثمن.",
    rating: 5,
    company: "تيك سوليوشنز",
    companyLogo: "/companies/tech-solutions.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ahmed-mohammed",
      twitter: "https://twitter.com/ahmed_mohammed",
      facebook: "https://facebook.com/ahmed.mohammed"
    },
    contactInfo: {
      email: "ahmed@techsolutions.dz",
      phone: "+213 550 123 456",
      website: "www.techsolutions.dz"
    }
  },
  {
    id: 2,
    name: "فاطمة الزهراء بن علي",
    role: "مؤسسة منصة تعليمية",
    image: "/testimonials/2.jpg",
    content: "الحاضنة كانت البوابة التي فتحت لي عالم ريادة الأعمال. الدعم المستمر والتوجيه المهني ساعدني في بناء منصتي التعليمية بنجاح.",
    fullContent: "كطالبة في علوم التربية، لطالما حلمت بإنشاء منصة تعليمية تساعد الطلاب في المناطق النائية. عندما انضممت إلى حاضنة جامعة زيان عاشور، وجدت البيئة المثالية لتحقيق حلمي. المرشدون ساعدوني في تطوير استراتيجية تسويقية فعالة وتوسيع نطاق خدماتي. اليوم، منصتي تخدم أكثر من 2000 طالب في مختلف أنحاء الجزائر. ما يميز الحاضنة هو اهتمامها بالجانب الإنساني والاجتماعي للمشاريع، وليس فقط الجانب المالي. الدعم النفسي والمعنوي الذي تلقيناه كان عاملاً أساسياً في نجاحنا.",
    rating: 5,
    company: "إديو تك",
    companyLogo: "/companies/edutech.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fatima-benali",
      twitter: "https://twitter.com/fatima_benali",
      facebook: "https://facebook.com/fatima.benali"
    },
    contactInfo: {
      email: "fatima@edutech.dz",
      phone: "+213 551 234 567",
      website: "www.edutech.dz"
    }
  },
  {
    id: 3,
    name: "عمر بن يحيى",
    role: "مطور برمجيات",
    image: "/testimonials/3.jpg",
    content: "من خلال الحاضنة، تحولت من مطور برمجيات إلى رائد أعمال. الدعم التقني والاستشاري الذي تلقيناه كان استثنائياً.",
    fullContent: "بدأت رحلتي مع حاضنة جامعة زيان عاشور كمطور برمجيات شاب يمتلك فكرة لتطبيق يساعد المطورين في تحسين جودة الكود. الحاضنة لم تقدم لي فقط المساحة التقنية والبنية التحتية، بل ساعدتني في تطوير مهاراتي في إدارة الأعمال والتواصل مع العملاء. المرشدون التقنيون ساعدوني في تحسين منتجي وجعله أكثر تنافسية. اليوم، شركتنا تقدم خدماتها لأكثر من 50 شركة تقنية في الجزائر. ما تعلمته في الحاضنة من إدارة الفريق والتواصل مع المستثمرين كان أساسياً في نمو شركتنا. أنصح كل شاب يمتلك فكرة إبداعية بالانضمام إلى الحاضنة.",
    rating: 5,
    company: "ديف تك",
    companyLogo: "/companies/devtech.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/omar-benyahia",
      twitter: "https://twitter.com/omar_benyahia",
      facebook: "https://facebook.com/omar.benyahia"
    },
    contactInfo: {
      email: "omar@devtech.dz",
      phone: "+213 552 345 678",
      website: "www.devtech.dz"
    }
  }
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showActions, setShowActions] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsExpanded(false)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsExpanded(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsExpanded(false)
  }

  const currentTestimonial = testimonials[currentIndex]

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
            آراء رواد الأعمال
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            استمع إلى قصص النجاح من رواد الأعمال الذين طوروا مشاريعهم معنا
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-lg"
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative">
                <div className="absolute -top-4 -right-4 text-primary/20">
                  <Quote className="h-12 w-12" />
                </div>
                <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < currentTestimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.companyLogo}
                  alt={currentTestimonial.company}
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-muted-foreground">
                  {currentTestimonial.company}
                </span>
              </div>

              <p className="text-lg text-muted-foreground italic">
                {isExpanded
                  ? currentTestimonial.fullContent
                  : currentTestimonial.content}
              </p>

              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "عرض أقل" : "قراءة المزيد"}
                </Button>
              </div>

              <div>
                <h3 className="font-semibold text-lg">{currentTestimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.role}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4">
                {Object.entries(currentTestimonial.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform === "linkedin" && <Linkedin className="h-5 w-5" />}
                    {platform === "twitter" && <Twitter className="h-5 w-5" />}
                    {platform === "facebook" && <Facebook className="h-5 w-5" />}
                  </a>
                ))}
              </div>

              {showActions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap items-center justify-center gap-2 mt-4"
                >
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 ml-2" />
                    مشاركة
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 ml-2" />
                    تواصل
                  </Button>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 ml-2" />
                    عرض الملف
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={prevTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
              onClick={nextTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsExpanded(false)
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 