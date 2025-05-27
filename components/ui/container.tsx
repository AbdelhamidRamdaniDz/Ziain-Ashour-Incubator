"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "article" | "main"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  withPadding?: boolean
  withMaxWidth?: boolean
  withBackground?: boolean
  delay?: number
}

export function Container({
  children,
  className,
  as: Component = "div",
  size = "lg",
  withPadding = true,
  withMaxWidth = true,
  withBackground = false,
  delay = 0
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full"
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
          "mx-auto",
          withMaxWidth && sizeClasses[size],
          withPadding && "px-4 sm:px-6 lg:px-8",
          withBackground && "bg-white rounded-lg shadow-sm",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  )
}

interface GridContainerProps extends Omit<ContainerProps, "as"> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: "none" | "sm" | "md" | "lg" | "xl"
}

export function GridContainer({
  children,
  columns = 3,
  gap = "lg",
  className,
  ...props
}: GridContainerProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
  }

  const gapClasses = {
    none: "gap-0",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12"
  }

  return (
    <Container
      className={cn(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </Container>
  )
} 