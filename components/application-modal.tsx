// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { Progress } from "@/components/ui/progress"
// import { Card, CardContent } from "@/components/ui/card"
// import { Upload, Plus, Minus, ChevronRight, ChevronLeft, Check } from "lucide-react"

// // College and specialization data
// const collegeData = {
//   "علوم وتكنولوجيا": ["هندسة مدنية", "هندسة ميكانيكية", "هندسة كهربائية", "فيزياء", "كيمياء", "رياضيات"],
//   "علوم اقتصادية": ["اقتصاد", "إدارة أعمال", "محاسبة", "مالية", "تسويق", "إحصاء تطبيقي"],
//   رياضيات: ["رياضيات بحتة", "رياضيات تطبيقية", "إحصاء", "بحوث العمليات"],
//   "إعلام آلي": ["هندسة البرمجيات", "أنظمة المعلومات", "شبكات الحاسوب", "ذكاء اصطناعي", "أمن المعلومات"],
//   حقوق: ["قانون عام", "قانون خاص", "قانون دولي", "قانون الأعمال"],
//   آداب: ["لغة عربية", "تاريخ", "فلسفة", "علم الآثار"],
//   لغات: ["إنجليزية", "فرنسية", "ألمانية", "إسبانية", "ترجمة"],
//   "علوم اجتماعية": ["علم الاجتماع", "علم النفس", "علوم التربية", "فلسفة"],
//   "علوم طبيعة": ["بيولوجيا", "جيولوجيا", "علوم البيئة", "كيمياء حيوية"],
//   "هندسة معمارية": ["هندسة معمارية", "تخطيط حضري", "هندسة المناظر الطبيعية"],
// }

// interface TeamMember {
//   fullName: string
//   email: string
//   specialization: string
//   role: string
// }

// interface ApplicationModalProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export function ApplicationModal({ open, onOpenChange }: ApplicationModalProps) {
//   const [currentStep, setCurrentStep] = useState(1)
//   const [selectedCollege, setSelectedCollege] = useState("")
//   const [teamMembersCount, setTeamMembersCount] = useState(1)
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
//     { fullName: "", email: "", specialization: "", role: "" },
//   ])

//   const totalSteps = 3
//   const progress = (currentStep / totalSteps) * 100

//   const handleTeamMembersCountChange = (count: number) => {
//     setTeamMembersCount(count)
//     const newTeamMembers = Array.from(
//       { length: count },
//       (_, index) => teamMembers[index] || { fullName: "", email: "", specialization: "", role: "" },
//     )
//     setTeamMembers(newTeamMembers)
//   }

//   const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
//     const updatedMembers = [...teamMembers]
//     updatedMembers[index] = { ...updatedMembers[index], [field]: value }
//     setTeamMembers(updatedMembers)
//   }

//   const nextStep = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1)
//     }
//   }

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1)
//     }
//   }

//   const handleSubmit = () => {
//     // Handle form submission
//     console.log("Form submitted")
//     onOpenChange(false)
//     setCurrentStep(1) // Reset to first step
//   }

//   const resetForm = () => {
//     setCurrentStep(1)
//     setSelectedCollege("")
//     setTeamMembersCount(1)
//     setTeamMembers([{ fullName: "", email: "", specialization: "", role: "" }])
//   }

//   const handleClose = () => {
//     onOpenChange(false)
//     resetForm()
//   }

//   return (
//     <Dialog open={open} onOpenChange={handleClose}>
//       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" dir="rtl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl text-center">تقديملل مشروع جديد</DialogTitle>
//         </DialogHeader>

//         {/* Progress Bar */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between text-sm">
//             <span>
//               الخطوة {currentStep} من {totalSteps}
//             </span>
//             <span>{Math.round(progress)}%</span>
//           </div>
//           <Progress value={progress} className="h-2" dir="ltr"/>

//           {/* Step Indicators */}
//           <div className="flex justify-between">
//             <div className={`flex items-center gap-2 ${currentStep >= 1 ? "text-primary" : "text-muted-foreground"}`}>
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
//                   currentStep >= 1 ? "border-primary bg-primary text-white" : "border-muted-foreground"
//                 }`}
//               >
//                 {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
//               </div>
//               <span className="text-sm font-medium">المعلومات الأساسية</span>
//             </div>
//             <div className={`flex items-center gap-2 ${currentStep >= 2 ? "text-primary" : "text-muted-foreground"}`}>
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
//                   currentStep >= 2 ? "border-primary bg-primary text-white" : "border-muted-foreground"
//                 }`}
//               >
//                 {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
//               </div>
//               <span className="text-sm font-medium">تفاصيل المشروع</span>
//             </div>
//             <div className={`flex items-center gap-2 ${currentStep >= 3 ? "text-primary" : "text-muted-foreground"}`}>
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
//                   currentStep >= 3 ? "border-primary bg-primary text-white" : "border-muted-foreground"
//                 }`}
//               >
//                 3
//               </div>
//               <span className="text-sm font-medium">أعضاء الفريق</span>
//             </div>
//           </div>
//         </div>

//         {/* Step Content */}
//         <div className="mt-8">
//           {currentStep === 1 && (
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold">معلومات المشروع الأساسية</h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="fullName">الاسم الكامل *</Label>
//                   <Input id="fullName" placeholder="أدخل اسمك الكامل" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">البريد الإلكتروني *</Label>
//                   <Input id="email" type="email" placeholder="example@email.com" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="phone">رقم الهاتف *</Label>
//                   <Input id="phone" placeholder="0123456789" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="college">الكلية *</Label>
//                   <Select value={selectedCollege} onValueChange={setSelectedCollege}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="اختر الكلية" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.keys(collegeData).map((college) => (
//                         <SelectItem key={college} value={college}>
//                           {college}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="specialization">التخصص *</Label>
//                   <Select disabled={!selectedCollege}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="اختر التخصص" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {selectedCollege &&
//                         collegeData[selectedCollege as keyof typeof collegeData]?.map((spec) => (
//                           <SelectItem key={spec} value={spec}>
//                             {spec}
//                           </SelectItem>
//                         ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="year">السنة الدراسية *</Label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="اختر السنة الدراسية" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="license3">السنة الثالثة ليسانس</SelectItem>
//                       <SelectItem value="master2">السنة الثانية ماستر</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </div>
//           )}

//           {currentStep === 2 && (
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold">تفاصيل المشروع</h3>

//               <div className="space-y-2">
//                 <Label htmlFor="projectName">اسم المشروع *</Label>
//                 <Input id="projectName" placeholder="أدخل اسم مشروعك" />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="projectDescription">وصف مختصر للمشروع *</Label>
//                 <Textarea id="projectDescription" placeholder="اكتب وصفاً مختصراً عن مشروعك وأهدافه..." rows={5} />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="projectFile">رفع ملف المشروع (PDF) *</Label>
//                 <div className="flex items-center gap-4">
//                   <Button variant="outline" className="gap-2">
//                     <Upload className="h-4 w-4" />
//                     اختر ملف PDF
//                   </Button>
//                   <span className="text-sm text-muted-foreground">لم يتم اختيار ملف</span>
//                 </div>
//                 <p className="text-xs text-muted-foreground">
//                   يجب أن يحتوي الملف على تفاصيل المشروع، الأهداف، والخطة التنفيذية
//                 </p>
//               </div>
//             </div>
//           )}

//           {currentStep === 3 && (
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold">أعضاء الفريق</h3>
//                 <div className="flex items-center gap-2">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleTeamMembersCountChange(Math.max(1, teamMembersCount - 1))}
//                     disabled={teamMembersCount <= 1}
//                   >
//                     <Minus className="h-4 w-4" />
//                   </Button>
//                   <span className="text-sm font-medium px-3">
//                     {teamMembersCount} {teamMembersCount === 1 ? "عضو" : "أعضاء"}
//                   </span>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     onClick={() => handleTeamMembersCountChange(Math.min(6, teamMembersCount + 1))}
//                     disabled={teamMembersCount >= 6}
//                   >
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>

//               <div className="space-y-4 max-h-96 overflow-y-auto">
//                 {teamMembers.map((member, index) => (
//                   <Card key={index}>
//                     <CardContent className="pt-6">
//                       <h4 className="font-medium mb-4">العضو {index + 1}</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label>الاسم الكامل *</Label>
//                           <Input
//                             value={member.fullName}
//                             onChange={(e) => updateTeamMember(index, "fullName", e.target.value)}
//                             placeholder="اسم العضو"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>البريد الإلكتروني *</Label>
//                           <Input
//                             type="email"
//                             value={member.email}
//                             onChange={(e) => updateTeamMember(index, "email", e.target.value)}
//                             placeholder="example@email.com"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>التخصص *</Label>
//                           <Input
//                             value={member.specialization}
//                             onChange={(e) => updateTeamMember(index, "specialization", e.target.value)}
//                             placeholder="التخصص"
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label>الدور في المشروع *</Label>
//                           <Input
//                             value={member.role}
//                             onChange={(e) => updateTeamMember(index, "role", e.target.value)}
//                             placeholder="مثال: مطور، مصمم، مدير المشروع"
//                           />
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-8">
//           <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="gap-2">
//             <ChevronRight className="h-4 w-4" />
//             السابق
//           </Button>

//           {currentStep === totalSteps ? (
//             <Button onClick={handleSubmit} className="gap-2">
//               إرسال المشروع
//               <Check className="h-4 w-4" />
//             </Button>
//           ) : (
//             <Button onClick={nextStep} className="gap-2">
//               التالي
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }
