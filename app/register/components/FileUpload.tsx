// components/FileUpload.tsx
"use client";
"use client"

import React from "react"
import { Upload, FileText } from "lucide-react"
import { Label } from "@/components/ui/label"

interface FileUploadProps {
  file: File | null
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FileUpload({ file, onFileChange }: FileUploadProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="projectFile">تحميل المشروع (PDF)</Label>
      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-[#18A39E]/50 transition-colors">
        <input id="projectFile" type="file" accept=".pdf" onChange={onFileChange} className="hidden" />
        <label htmlFor="projectFile" className="cursor-pointer">
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          {file ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-[#18A39E]">
                <FileText className="h-5 w-5" />
                <span className="font-medium">{file.name}</span>
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
  )
}