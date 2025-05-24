// components/StepHeader.tsx
"use client"

import { Check } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface StepHeaderProps {
  currentStep: number
  totalSteps: number
}

export default function StepHeader({ currentStep, totalSteps }: StepHeaderProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">تسجيل مشروع جديد</h1>
        <p className="text-muted-foreground">املأ النموذج أدناه لتقديم مشروعك إلى حاضنة الجامعة</p>
      </div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span>
          الخطوة {currentStep} من {totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>

      {/* Progress Bar (RTL flipping) */}
      <div className="dir-ltr">
        <Progress value={progress} className="h-2 mb-4 scale-x-[-1]" />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between">
        {/* Step 1 */}
        <div className={`flex items-center gap-2 ${currentStep >= 1 ? "text-[#18A39E]" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 1 ? "border-[#18A39E] bg-[#18A39E] text-white" : "border-muted-foreground"
            }`}
          >
            {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
          </div>
          <span className="text-sm font-medium">معلومات المشروع</span>
        </div>

        {/* Step 2 */}
        <div className={`flex items-center gap-2 ${currentStep >= 2 ? "text-[#18A39E]" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 2 ? "border-[#18A39E] bg-[#18A39E] text-white" : "border-muted-foreground"
            }`}
          >
            {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
          </div>
          <span className="text-sm font-medium">أعضاء الفريق</span>
        </div>

        {/* Step 3 */}
        <div className={`flex items-center gap-2 ${currentStep >= 3 ? "text-[#18A39E]" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 3 ? "border-[#18A39E] bg-[#18A39E] text-white" : "border-muted-foreground"
            }`}
          >
            3
          </div>
          <span className="text-sm font-medium">مراجعة البيانات</span>
        </div>
      </div>
    </div>
  )
}
