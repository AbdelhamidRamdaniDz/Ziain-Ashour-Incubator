// components/NavigationButtons.tsx
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface NavigationButtonsProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
  onSubmit: () => void
}

export default function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-8">
      <Button variant="outline" onClick={onPrev} disabled={currentStep === 1} className="gap-2">
        <ChevronRight className="h-4 w-4" />
        السابق
      </Button>

      {currentStep === totalSteps ? (
        <Button onClick={onSubmit} className="gap-2 bg-[#18A39E] hover:bg-[#16918A]">
          إرسال المشروع
          <Check className="h-4 w-4" />
        </Button>
      ) : (
        <Button onClick={onNext} className="gap-2 bg-[#18A39E] hover:bg-[#16918A]">
          التالي
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}