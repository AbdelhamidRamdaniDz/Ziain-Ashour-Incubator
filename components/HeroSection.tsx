"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6 text-center lg:text-right"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-primary">حاضنة جامعة زيان عاشور</span>
            <br />
            <span className="text-foreground">نحو مستقبل ريادي</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-[600px] text-muted-foreground md:text-xl"
          >
            نساعد رواد الأعمال على تطوير أفكارهم وتحويلها إلى مشاريع ناجحة من خلال توفير الموارد والدعم اللازم
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
          >
            <Button size="lg" className="w-full sm:w-auto">
              قدّم مشروعك
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              تعرف علينا
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Image/Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse delay-150" />
            <div className="absolute inset-8 rounded-full bg-primary/5 animate-pulse delay-300" />
            <img
              src="/hero-image.png"
              alt="حاضنة جامعة زيان عاشور"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">مرر للأسفل</span>
          <div className="h-8 w-5 rounded-full border-2 border-primary/20 p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
} 