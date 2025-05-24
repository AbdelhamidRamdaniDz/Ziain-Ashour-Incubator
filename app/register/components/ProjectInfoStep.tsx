// components/ProjectInfoStep.tsx
"use client"

import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import FileUpload from "./FileUpload"

interface ProjectInfoStepProps {
  formData: {
    college: string
    specialization: string
    academicYear: string
    projectDescription: string
    projectFile: File | null
  }
  onChange: (field: string, value: string) => void
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  collegeSpecializations: Record<string, string[]>
}

export default function ProjectInfoStep({
  formData,
  onChange,
  onFileChange,
  collegeSpecializations,
}: ProjectInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="college">الكلية</Label>
          <Select value={formData.college} onValueChange={(value) => onChange("college", value)}>
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
            onValueChange={(value) => onChange("specialization", value)}
            disabled={!formData.college}
          >
            <SelectTrigger className="text-right">
              <SelectValue placeholder="اختر التخصص" />
            </SelectTrigger>
            <SelectContent>
              {formData.college &&
                collegeSpecializations[formData.college]?.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="academicYear">السنة الدراسية</Label>
        <Select value={formData.academicYear} onValueChange={(value) => onChange("academicYear", value)}>
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
          onChange={(e) => onChange("projectDescription", e.target.value)}
          placeholder="اشرح فكرة مشروعك بالتفصيل..."
          rows={5}
          className="text-right"
        />
      </div>

      <FileUpload file={formData.projectFile} onFileChange={onFileChange} />
    </div>
  )
}