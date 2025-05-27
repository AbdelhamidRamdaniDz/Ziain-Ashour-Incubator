"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  delay?: number
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  delay = 0
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("relative overflow-hidden rounded-lg", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-black/5" />
    </motion.div>
  )
}

interface LoadingImageProps {
  className?: string
}

export function LoadingImage({ className }: LoadingImageProps) {
  return (
    <div className={cn("flex items-center justify-center bg-gray-100 rounded-lg", className)}>
      <Loader2 className="w-8 h-8 text-[#18A39E] animate-spin" />
    </div>
  )
} 