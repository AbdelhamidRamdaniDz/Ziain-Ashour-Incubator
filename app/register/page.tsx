// app/register/page.tsx
"use client"

import { useState } from "react"
import StepHeader from "./components/StepHeader"
import ProjectInfoStep from "./components/ProjectInfoStep"
import TeamMembersStep from "./components/TeamMembersStep"
import ReviewStep from "./components/ReviewStep"
import NavigationButtons from "./components/NavigationButtons"
import StepWrapper from "./components/StepWrapper"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  fullName: string
  email: string
  specialization: string
  role: string
  studentId: string
}

const totalSteps = 3

const collegeSpecializations: Record<string, string[]> = {
  "علوم وتكنولوجيا": ["هندسة مدنية", "هندسة ميكانيكية", "هندسة كهربائية", "هندسة إلكترونية", "فيزياء", "كيمياء"],
  "علوم اقتصادية": ["علوم اقتصادية", "علوم التسيير", "علوم مالية ومحاسبة", "تسويق", "إدارة أعمال"],
  رياضيات: ["رياضيات بحتة", "رياضيات تطبيقية", "إحصاء", "بحوث العمليات"],
  "إعلام آلي": ["علوم الحاسوب", "نظم المعلومات", "هندسة البرمجيات", "ذكاء اصطناعي", "أمن المعلومات"],
  حقوق: ["قانون عام", "قانون خاص", "قانون دولي", "قانون الأعمال"],
  آداب: ["أدب عربي", "أدب إنجليزي", "فلسفة", "تاريخ"],
  لغات: ["لغة عربية", "لغة إنجليزية", "لغة فرنسية", "ترجمة"],
  "علوم اجتماعية": ["علم الاجتماع", "علم النفس", "علوم التربية", "خدمة اجتماعية"],
  "علوم طبيعة": ["بيولوجيا", "كيمياء", "فيزياء", "علوم البيئة"],
  "هندسة معمارية": ["هندسة معمارية", "تخطيط حضري", "تصميم داخلي", "هندسة المناظر الطبيعية"],
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [teamMembersCount, setTeamMembersCount] = useState(1)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { fullName: "", email: "", specialization: "", role: "", studentId: "" },
  ])
  
  const [formData, setFormData] = useState({
    college: "",
    specialization: "",
    academicYear: "",
    projectDescription: "",
    projectFile: null as File | null,
  })

  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep === 1) {
      const { college, specialization, academicYear, projectDescription, projectFile } = formData
      if (!college || !specialization || !academicYear || !projectDescription || !projectFile) {
        alert("يرجى ملء جميع الحقول المطلوبة.")
        return
      }
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, projectFile: e.target.files![0] }))
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "college") {
      setFormData((prev) => ({ ...prev, specialization: "" })) // Reset specialization on college change
    }
  }

  const handleTeamCountChange = (count: number) => {
    if (count < 1) count = 1; // لا تقبل أقل من 1
    setTeamMembersCount(count)
  
    if (count > teamMembers.length) {
      setTeamMembers((prev) => [
        ...prev,
        ...Array(count - prev.length).fill({
          fullName: "",
          email: "",
          specialization: "",
          role: "",
          studentId: "",
        }),
      ])
    } else {
      setTeamMembers((prev) => prev.slice(0, count))
    }
  }  

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setTeamMembers(updatedMembers)
  }

  const handleSubmit = () => {
    // يمكن تنفيذ التحقق النهائي هنا
    if (teamMembersCount > 0) {
      for (let i = 0; i < teamMembersCount; i++) {
        const member = teamMembers[i]
        if (!member.fullName || !member.email || !member.specialization || !member.role || !member.studentId) {
          alert(`يرجى ملء بيانات عضو الفريق رقم ${i + 1} بالكامل.`)
          setCurrentStep(2)
          return
        }
      }
    }
    setIsSubmitted(true)
    // هنا يمكن إرسال البيانات للخادم أو ما شابه
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">تم إرسال المشروع بنجاح!</h2>
            <p className="text-muted-foreground mb-6">
              شكراً لك على تقديم مشروعك. سيتم مراجعته من قبل فريقنا والتواصل معك قريباً.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-[#18A39E] hover:bg-[#16918A]">العودة للرئيسية</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  تسجيل الدخول
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div dir="rtl" className="max-w-4xl mx-auto p-4">
      <StepHeader currentStep={currentStep} totalSteps={totalSteps} />

      <StepWrapper
        currentStep={currentStep}
        title={
          currentStep === 1
            ? "معلومات المشروع"
            : currentStep === 2
            ? "أعضاء الفريق"
            : "مراجعة المعلومات"
        }
        description={
          currentStep === 1
            ? "يرجى إدخال معلومات المشروع الأساسية."
            : currentStep === 2
            ? "أضف بيانات أعضاء فريق المشروع."
            : "راجع بيانات المشروع وأعضاء الفريق قبل الإرسال."
        }
      >
        {currentStep === 1 && (
          <ProjectInfoStep
            formData={formData}
            onChange={handleInputChange}
            onFileChange={handleFileChange}
            collegeSpecializations={collegeSpecializations}
          />
        )}

        {currentStep === 2 && (
          <TeamMembersStep
            teamMembersCount={teamMembersCount}
            teamMembers={teamMembers}
            onCountChange={handleTeamCountChange}
            onMemberChange={handleTeamMemberChange}
          />
        )}

        {currentStep === 3 && (
          <ReviewStep
            formData={formData}
            teamMembers={teamMembers}
            teamMembersCount={teamMembersCount}
          />
        )}

        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
        />
      </StepWrapper>
    </div>
  )
}
