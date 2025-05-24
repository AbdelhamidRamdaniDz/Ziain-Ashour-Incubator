// components/StepWrapper.tsx
"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface StepWrapperProps {
  currentStep: number
  title: string
  description: string
  children: React.ReactNode
}

export default function StepWrapper({ currentStep, title, description, children }: StepWrapperProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
