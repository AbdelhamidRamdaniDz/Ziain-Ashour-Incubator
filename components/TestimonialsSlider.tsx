"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "مؤسس شركة تكنولوجيا",
    image: "/testimonials/1.jpg",
    content:
      "كانت تجربة رائعة مع حاضنة جامعة زيان عاشور. الدعم والموارد التي قدمتها لنا ساعدتنا في تطوير مشروعنا وتحويله إلى شركة ناجحة.",
  },
  {
    id: 2,
    name: "سارة علي",
    role: "مؤسسة منصة تعليمية",
    image: "/testimonials/2.jpg",
    content:
      "المرشدون في الحاضنة كانوا دائمًا متاحين لتقديم النصائح والتوجيه. ساعدونا في تجاوز التحديات وتحقيق أهدافنا.",
  },
  {
    id: 3,
    name: "محمد خالد",
    role: "مطور تطبيقات",
    image: "/testimonials/3.jpg",
    content:
      "الورشات والدورات التدريبية التي قدمتها الحاضنة كانت قيمة جدًا. تعلمت الكثير من المهارات التي ساعدتني في تطوير مشروعي.",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
                <div className="absolute -top-4 -right-4 text-primary/20">
                  <Quote className="h-12 w-12" />
                </div>
                <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground italic">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
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
                onClick={() => setCurrentIndex(index)}
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