// components/ReviewStep.tsx
"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  fullName: string
  email: string
  specialization: string
  role: string
  studentId: string
}

interface ReviewStepProps {
  formData: {
    college: string
    specialization: string
    academicYear: string
    projectFile: File | null
    projectDescription: string
  }
  teamMembers: TeamMember[]
  teamMembersCount: number
}

export default function ReviewStep({ formData, teamMembers, teamMembersCount }: ReviewStepProps) {
  return (
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
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-4">
                <CardContent>
                  <p><strong>الاسم الكامل:</strong> {member.fullName || "-"}</p>
                  <p><strong>البريد الإلكتروني:</strong> {member.email || "-"}</p>
                  <p><strong>التخصص:</strong> {member.specialization || "-"}</p>
                  <p><strong>الدور:</strong> {member.role || "-"}</p>
                  <p><strong>رقم الطالب:</strong> {member.studentId || "-"}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}