"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus, Minus, User } from "lucide-react"

interface TeamMember {
  fullName: string
  email: string
  specialization: string
  role: string
  studentId: string
}

interface TeamMembersStepProps {
  teamMembersCount: number
  teamMembers: TeamMember[]
  onCountChange: (count: number) => void
  onMemberChange: (index: number, field: keyof TeamMember, value: string) => void
}

export default function TeamMembersStep({
  teamMembersCount,
  teamMembers,
  onCountChange,
  onMemberChange,
}: TeamMembersStepProps) {
  const increaseCount = () => onCountChange(teamMembersCount + 1)
  const decreaseCount = () => onCountChange(Math.max(1, teamMembersCount - 1)) // الحد الأدنى 1

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Label>عدد أعضاء الفريق</Label>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={decreaseCount}
            disabled={teamMembersCount <= 1} // منع الوصول لأقل من 1
          >
            <Minus size={16} />
          </Button>
          <span>{teamMembersCount}</span>
          <Button size="sm" onClick={increaseCount}>
            <Plus size={16} />
          </Button>
        </div>
      </div>

      {/* عرض الحقول فقط إذا كان هناك عضو واحد أو أكثر */}
      {teamMembersCount >= 1 && (
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="border rounded-md p-4" dir="rtl">
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <User size={20} /> عضو الفريق #{index + 1}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`fullName-${index}`}>الاسم الكامل</Label>
                  <Input
                    id={`fullName-${index}`}
                    value={member.fullName}
                    onChange={(e) => onMemberChange(index, "fullName", e.target.value)}
                    placeholder="الاسم الكامل"
                  />
                </div>

                <div>
                  <Label htmlFor={`email-${index}`}>البريد الإلكتروني</Label>
                  <Input
                    id={`email-${index}`}
                    value={member.email}
                    onChange={(e) => onMemberChange(index, "email", e.target.value)}
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <Label htmlFor={`specialization-${index}`}>التخصص</Label>
                  <Input
                    id={`specialization-${index}`}
                    value={member.specialization}
                    onChange={(e) => onMemberChange(index, "specialization", e.target.value)}
                    placeholder="التخصص"
                  />
                </div>

                <div>
                  <Label htmlFor={`role-${index}`}>الدور في الفريق</Label>
                  <Input
                    id={`role-${index}`}
                    value={member.role}
                    onChange={(e) => onMemberChange(index, "role", e.target.value)}
                    placeholder="الدور"
                  />
                </div>

                <div>
                  <Label htmlFor={`studentId-${index}`}>رقم الطالب</Label>
                  <Input
                    id={`studentId-${index}`}
                    value={member.studentId}
                    onChange={(e) => onMemberChange(index, "studentId", e.target.value)}
                    placeholder="رقم الطالب"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
