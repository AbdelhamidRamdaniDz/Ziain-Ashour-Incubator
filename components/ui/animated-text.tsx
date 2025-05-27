"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  align?: "left" | "center" | "right"
  color?: "default" | "primary" | "secondary" | "muted"
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  as: Component = "p",
  size = "base",
  weight = "normal",
  align = "left",
  color = "default"
}: AnimatedTextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl"
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold"
  }

  const alignClasses = {
    left: "text-right",
    center: "text-center",
    right: "text-left"
  }

  const colorClasses = {
    default: "text-gray-900",
    primary: "text-[#18A39E]",
    secondary: "text-gray-600",
    muted: "text-gray-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Component
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          alignClasses[align],
          colorClasses[color],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  )
}

interface AnimatedHeadingProps extends Omit<AnimatedTextProps, "as" | "size"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function AnimatedHeading({
  level = 2,
  size = level === 1 ? "5xl" : level === 2 ? "4xl" : level === 3 ? "3xl" : "2xl",
  weight = "bold",
  ...props
}: AnimatedHeadingProps) {
  const Component = `h${level}` as const
  return (
    <AnimatedText
      as={Component}
      size={size}
      weight={weight}
      {...props}
    />
  )
} 