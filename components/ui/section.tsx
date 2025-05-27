"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "default" | "muted"
  withPattern?: boolean
}

export function Section({ children, className, background = "default", withPattern = true }: SectionProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100])

  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      background === "muted" && "bg-muted/30",
      className
    )}>
      {withPattern && (
        <motion.div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18A39E_1px,transparent_1px),linear-gradient(to_bottom,#18A39E_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </motion.div>
      )}
      <div className="container relative z-10">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-12", className)}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
} 