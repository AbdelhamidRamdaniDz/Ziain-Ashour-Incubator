"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  withHover?: boolean
  withRotate?: boolean
}

export function AnimatedCard({ 
  children, 
  className,
  delay = 0,
  withHover = true,
  withRotate = false
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={withHover ? { scale: 1.05, rotateY: withRotate ? 5 : 0 } : undefined}
      style={withRotate ? { transformStyle: "preserve-3d" } : undefined}
    >
      <Card className={cn("h-full hover:shadow-lg transition-all duration-300", className)}>
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface IconWrapperProps {
  children: React.ReactNode
  className?: string
}

export function IconWrapper({ children, className }: IconWrapperProps) {
  return (
    <motion.div 
      className={cn("bg-[#18A39E]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", className)}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
} 