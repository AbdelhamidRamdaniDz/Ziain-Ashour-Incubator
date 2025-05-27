"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [imageLoaded, setImageLoaded] = useState(false)

  // Dynamic gradient animation
  const gradientAnimation = {
    background: "linear-gradient(45deg, #18A39E 0%, #16918A 50%, #18A39E 100%)",
    backgroundSize: "200% 200%",
    animation: "gradient 15s ease infinite",
  }

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, var(--background), var(--background)/80)",
      }}
      dir="rtl"
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-gradient" />
      </motion.div>

      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 text-center lg:text-right"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary relative inline-block">
                حاضنة جامعة زيان عاشور
                <motion.span
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-6 w-6 text-primary/50" />
                </motion.span>
              </span>
              <br />
              <span className="text-foreground">
                <TypeAnimation
                  sequence={[
                    "نحو مستقبل ريادي",
                    2000,
                    "نحو مستقبل مبتكر",
                    2000,
                    "نحو مستقبل واعد",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed"
          >
            نساعد رواد الأعمال على تطوير أفكارهم وتحويلها إلى مشاريع ناجحة من خلال توفير الموارد والدعم اللازم
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto group relative overflow-hidden"
              style={gradientAnimation}
            >
              <span className="relative z-10 flex items-center">
                قدّم مشروعك
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto group hover:bg-primary/10 transition-colors"
            >
              <span className="flex items-center">
                تعرف علينا
                <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image/Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square">
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-full bg-primary/10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute inset-8 rounded-full bg-primary/5"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <div className="relative z-10 w-full h-full">
              <Image
                src="/hero-image.png"
                alt="حاضنة جامعة زيان عاشور - منصة دعم رواد الأعمال والطلاب"
                fill
                priority
                className={`object-contain transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-muted-foreground font-medium">مرر للأسفل</span>
          <motion.div
            className="h-12 w-6 rounded-full border-2 border-primary/20 p-1"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(24, 163, 158, 0)",
                "0 0 0 10px rgba(24, 163, 158, 0.1)",
                "0 0 0 0 rgba(24, 163, 158, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-primary"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Additional CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <Button
          variant="ghost"
          size="sm"
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span>اكتشف خدماتنا</span>
          <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Button>
      </motion.div>
    </section>
  )
} 