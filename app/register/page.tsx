"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Upload, FileText, Check, Plus, Minus, User, CheckCircle } from "lucide-react"
import StepHeader from "./components/StepHeader"
interface TeamMember {
  fullName: string
  email: string
  specialization: string
  role: string
  studentId: string
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [teamMembersCount, setTeamMembersCount] = useState(0)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [formData, setFormData] = useState({
    college: "",
    specialization: "",
    academicYear: "",
    projectDescription: "",
    projectFile: null as File | null,
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  // College and specialization mapping
  const collegeSpecializations = {
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

  const handleNext = () => {
    if (currentStep === 1) {
      const { college, specialization, academicYear, projectDescription, projectFile } = formData;
      if (!college || !specialization || !academicYear || !projectDescription || !projectFile) {
        alert("يرجى ملء جميع الحقول المطلوبة.");
        return;
      }
    }
  
    setCurrentStep((prev) => prev + 1);
  };  

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Final submission:", { formData, teamMembers })
    setIsSubmitted(true)
  }

  const handleFormDataChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
      // Reset specialization when college changes
      ...(field === "college" && { specialization: "" }),
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.type !== "application/pdf") {
        alert("يرجى رفع ملف بصيغة PDF فقط.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("حجم الملف يجب ألا يتجاوز 10 ميجابايت.");
        return;
      }
    }
    setFormData({ ...formData, projectFile: file });
  };
  

  const handleTeamMembersCountChange = (count: number) => {
    setTeamMembersCount(count)
    const newTeamMembers = Array.from(
      { length: count },
      (_, index) => teamMembers[index] || { fullName: "", email: "", specialization: "", role: "", studentId: "" },
    )
    setTeamMembers(newTeamMembers)
  }

  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setTeamMembers(updatedMembers)
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
    <div className="min-h-screen bg-background py-12" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">تسجيل مشروع جديد</h1>
          <p className="text-muted-foreground">املأ النموذج أدناه لتقديم مشروعك إلى حاضنة الجامعة</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span>
              الخطوة {currentStep} من {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="dir-ltr">
            <Progress value={progress} className="h-2 mb-4 scale-x-[-1]" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between">
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

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "معلومات المشروع"}
              {currentStep === 2 && "أعضاء الفريق"}
              {currentStep === 3 && "مراجعة البيانات"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "أدخل المعلومات الأساسية عن مشروعك"}
              {currentStep === 2 && "أضف أعضاء فريق المشروع"}
              {currentStep === 3 && "راجع جميع البيانات قبل الإرسال"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step 1: Project Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="college">الكلية</Label>
                    <Select value={formData.college} onValueChange={(value) => handleFormDataChange("college", value)}>
                      <SelectTrigger className="text-right">
                        <SelectValue placeholder="اختر الكلية" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(collegeSpecializations).map((college) => (
                          <SelectItem key={college} value={college}>
                            {college}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">التخصص</Label>
                    <Select
                      value={formData.specialization}
                      onValueChange={(value) => handleFormDataChange("specialization", value)}
                      disabled={!formData.college}
                    >
                      <SelectTrigger className="text-right">
                        <SelectValue placeholder="اختر التخصص" />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.college &&
                          collegeSpecializations[formData.college as keyof typeof collegeSpecializations]?.map(
                            (spec) => (
                              <SelectItem key={spec} value={spec}>
                                {spec}
                              </SelectItem>
                            ),
                          )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="academicYear">السنة الدراسية</Label>
                  <Select
                    value={formData.academicYear}
                    onValueChange={(value) => handleFormDataChange("academicYear", value)}
                  >
                    <SelectTrigger className="text-right">
                      <SelectValue placeholder="اختر السنة الدراسية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="السنة الثالثة ليسانس">السنة الثالثة ليسانس</SelectItem>
                      <SelectItem value="السنة الثانية ماستر">السنة الثانية ماستر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">شرح فكرة المشروع</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleFormDataChange("projectDescription", e.target.value)}
                    placeholder="اشرح فكرة مشروعك بالتفصيل..."
                    rows={5}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectFile">تحميل المشروع (PDF)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-[#18A39E]/50 transition-colors">
                    <input id="projectFile" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                    <label htmlFor="projectFile" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      {formData.projectFile ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-[#18A39E]">
                            <FileText className="h-5 w-5" />
                            <span className="font-medium">{formData.projectFile.name}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">انقر لتغيير الملف</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-muted-foreground">انقر لتحميل ملف المشروع</p>
                          <p className="text-sm text-muted-foreground">PDF فقط، حد أقصى 10 ميجابايت</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Team Members */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">أعضاء الفريق</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleTeamMembersCountChange(Math.max(0, teamMembersCount - 1))}
                      disabled={teamMembersCount <= 0}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium px-3">
                      {teamMembersCount} {teamMembersCount === 1 ? "عضو" : "أعضاء"}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleTeamMembersCountChange(Math.min(6, teamMembersCount + 1))}
                      disabled={teamMembersCount >= 6}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {teamMembersCount === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>لا يوجد أعضاء فريق حالياً</p>
                    <p className="text-sm">استخدم الأزرار أعلاه لإضافة أعضاء الفريق</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {teamMembers.map((member, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-4">العضو {index + 1}</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>الاسم الكامل</Label>
                              <Input
                                value={member.fullName}
                                onChange={(e) => updateTeamMember(index, "fullName", e.target.value)}
                                placeholder="اسم العضو"
                                className="text-right"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>البريد الإلكتروني</Label>
                              <Input
                                type="email"
                                value={member.email}
                                onChange={(e) => updateTeamMember(index, "email", e.target.value)}
                                placeholder="example@email.com"
                                className="text-right"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>التخصص</Label>
                              <Input
                                value={member.specialization}
                                onChange={(e) => updateTeamMember(index, "specialization", e.target.value)}
                                placeholder="التخصص"
                                className="text-right"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>الدور في المشروع</Label>
                              <Input
                                value={member.role}
                                onChange={(e) => updateTeamMember(index, "role", e.target.value)}
                                placeholder="مثال: مطور، مصمم، مدير المشروع"
                                className="text-right"
                              />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                              <Label>رقم بطاقة الطالب</Label>
                              <Input
                                value={member.studentId}
                                onChange={(e) => updateTeamMember(index, "studentId", e.target.value)}
                                placeholder="رقم بطاقة الطالب"
                                className="text-right"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">معلومات المشروع</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">الكلية</p>
                      <p>{formData.college || "غير محدد"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">التخصص</p>
                      <p>{formData.specialization || "غير محدد"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">السنة الدراسية</p>
                      <p>{formData.academicYear || "غير محدد"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">ملف المشروع</p>
                      <p>{formData.projectFile ? formData.projectFile.name : "لم يتم تحميل ملف"}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">شرح فكرة المشروع</p>
                    <p className="mt-1">{formData.projectDescription || "لا يوجد وصف"}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">أعضاء الفريق ({teamMembersCount})</h3>
                  {teamMembersCount === 0 ? (
                    <p className="text-muted-foreground">لا يوجد أعضاء فريق</p>
                  ) : (
                    <div className="space-y-3">
                      {teamMembers.map((member, index) => (
                        <Card key={index}>
                          <CardContent className="pt-4">
                            <div className="grid md:grid-cols-3 gap-2 text-sm">
                              <div>
                                <span className="font-medium">الاسم:</span> {member.fullName || "غير محدد"}
                              </div>
                              <div>
                                <span className="font-medium">البريد:</span> {member.email || "غير محدد"}
                              </div>
                              <div>
                                <span className="font-medium">التخصص:</span> {member.specialization || "غير محدد"}
                              </div>
                              <div>
                                <span className="font-medium">الدور:</span> {member.role || "غير محدد"}
                              </div>
                              <div>
                                <span className="font-medium">رقم الطالب:</span> {member.studentId || "غير محدد"}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrev} disabled={currentStep === 1} className="gap-2">
                <ChevronRight className="h-4 w-4" />
                السابق
              </Button>

              {currentStep === totalSteps ? (
                <Button onClick={handleSubmit} className="gap-2 bg-[#18A39E] hover:bg-[#16918A]">
                  إرسال المشروع
                  <Check className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleNext} className="gap-2 bg-[#18A39E] hover:bg-[#16918A]">
                  التالي
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-[#18A39E]">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
