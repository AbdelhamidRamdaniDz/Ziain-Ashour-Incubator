"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  onClick?: () => void
  href?: string
  delay?: number
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  icon: Icon,
  iconPosition = "right",
  onClick,
  href,
  delay = 0
}: AnimatedButtonProps) {
  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 ml-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 mr-2" />
      )}
    </>
  )

  const buttonProps = {
    className: cn(
      "relative overflow-hidden group",
      variant === "default" && "bg-[#18A39E] hover:bg-[#18A39E]/90",
      variant === "outline" && "border-[#18A39E] text-[#18A39E] hover:bg-[#18A39E]/10",
      variant === "ghost" && "hover:bg-[#18A39E]/10",
      className
    ),
    onClick,
    size
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {href ? (
        <a href={href} {...buttonProps}>
          {buttonContent}
        </a>
      ) : (
        <Button {...buttonProps}>
          {buttonContent}
        </Button>
      )}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
} 