"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function PatentSubmissionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    innovationLevel: "",
    inventors: [{ name: "", role: "", contribution: "" }],
    files: [],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInventorChange = (index: number, field: string, value: string) => {
    const updatedInventors = [...formData.inventors]
    updatedInventors[index] = { ...updatedInventors[index], [field]: value }
    setFormData((prev) => ({ ...prev, inventors: updatedInventors }))
  }

  const addInventor = () => {
    setFormData((prev) => ({
      ...prev,
      inventors: [...prev.inventors, { name: "", role: "", contribution: "" }],
    }))
  }

  const removeInventor = (index: number) => {
    const updatedInventors = [...formData.inventors]
    updatedInventors.splice(index, 1)
    setFormData((prev) => ({ ...prev, inventors: updatedInventors }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(5)
    window.scrollTo(0, 0)
  }

  return (
    <div className="container max-w-4xl py-6" dir="rtl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">تقديم براءة اختراع</h1>
        <p className="text-muted-foreground">
          قدم ابتكارك للمراجعة واحصل على التوجيه من خبرائنا
        </p>
      </div>

      {/* مؤشر التقدم */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-1 flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step >= i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {step > i ? <CheckCircle className="h-5 w-5" /> : i}
              </div>
              <span className={`mt-2 text-xs ${step >= i ? "text-foreground" : "text-muted-foreground"}`}>
                {i === 1
                  ? "المعلومات الأساسية"
                  : i === 2
                    ? "الوصف التفصيلي"
                    : i === 3
                      ? "المخترعون والوثائق"
                      : "المراجعة"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 ${step > i ? "bg-primary" : "bg-muted-foreground/30"}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الأساسية</CardTitle>
            <CardDescription>قدم التفاصيل الأساسية عن ابتكارك</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">عنوان براءة الاختراع</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="أدخل عنواناً وصفياً لابتكارك"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">الفئة</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر فئة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">البرمجيات والتطبيقات</SelectItem>
                    <SelectItem value="hardware">الأجهزة والمعدات</SelectItem>
                    <SelectItem value="biotech">التكنولوجيا الحيوية</SelectItem>
                    <SelectItem value="mechanical">الهندسة الميكانيكية</SelectItem>
                    <SelectItem value="chemical">العمليات الكيميائية</SelectItem>
                    <SelectItem value="electrical">الهندسة الكهربائية</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>مستوى الابتكار</Label>
                <RadioGroup
                  value={formData.innovationLevel}
                  onValueChange={(value) => handleSelectChange("innovationLevel", value)}
                  className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="incremental" id="incremental" />
                    <Label htmlFor="incremental" className="font-normal mr-2">
                      ابتكار تدريجي
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disruptive" id="disruptive" />
                    <Label htmlFor="disruptive" className="font-normal mr-2">
                      ابتكار ثوري
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radical" id="radical" />
                    <Label htmlFor="radical" className="font-normal mr-2">
                      ابتكار جذري
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">وصف مختصر</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="قدم نظرة عامة موجزة عن ابتكارك (500 حرف كحد أقصى)"
                  rows={4}
                  required
                />
                <p className="text-xs text-muted-foreground">{formData.description.length}/500 حرف</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/student-portal">
              <Button variant="outline">إلغاء</Button>
            </Link>
            <Button onClick={handleNext}>
              الخطوة التالية
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>الوصف التفصيلي</CardTitle>
            <CardDescription>قدم تفاصيل شاملة عن ابتكارك وكيفية عمله</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>المشكلة التي يحلها الابتكار</Label>
                <Textarea
                  placeholder="صف المشكلة التي يعالجها ابتكارك بالتفصيل"
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>الحل المقترح</Label>
                <Textarea
                  placeholder="اشرح كيف يحل ابتكارك هذه المشكلة"
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>المميزات الفريدة</Label>
                <Textarea
                  placeholder="حدد الجوانب الفريدة والمبتكرة في اختراعك"
                  rows={4}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>التطبيقات المحتملة</Label>
                <Textarea
                  placeholder="اذكر المجالات والصناعات التي يمكن أن يستفيد منها ابتكارك"
                  rows={4}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowRight className="ml-2 h-4 w-4" />
              رجوع
            </Button>
            <Button onClick={handleNext}>
              الخطوة التالية
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>المخترعون والوثائق</CardTitle>
            <CardDescription>أضف معلومات المخترعين والوثائق الداعمة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>المخترعون المشاركون</Label>
                  <Button onClick={addInventor} variant="outline" size="sm">
                    إضافة مخترع
                  </Button>
                </div>
                {formData.inventors.map((inventor, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">مخترع {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          onClick={() => removeInventor(index)}
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          حذف
                        </Button>
                      )}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>الاسم</Label>
                        <Input
                          value={inventor.name}
                          onChange={(e) => handleInventorChange(index, "name", e.target.value)}
                          placeholder="الاسم الكامل"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>الدور</Label>
                        <Input
                          value={inventor.role}
                          onChange={(e) => handleInventorChange(index, "role", e.target.value)}
                          placeholder="دور المخترع"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label>المساهمة</Label>
                        <Textarea
                          value={inventor.contribution}
                          onChange={(e) => handleInventorChange(index, "contribution", e.target.value)}
                          placeholder="وصف مساهمة المخترع في الابتكار"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <Label>الوثائق الداعمة</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    اسحب وأفلت الملفات هنا أو انقر للاختيار
                  </p>
                  <Input type="file" className="hidden" multiple />
                  <Button variant="outline" size="sm">
                    اختيار الملفات
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  يمكنك رفع الرسومات التوضيحية، المخططات، النماذج الأولية، أو أي وثائق داعمة أخرى
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowRight className="ml-2 h-4 w-4" />
              رجوع
            </Button>
            <Button onClick={handleNext}>
              المراجعة النهائية
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>المراجعة النهائية</CardTitle>
            <CardDescription>راجع جميع المعلومات قبل التقديم</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">المعلومات الأساسية</h3>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">العنوان:</span>
                    <span>{formData.title || "غير محدد"}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">الفئة:</span>
                    <span>{formData.category || "غير محدد"}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-muted-foreground">مستوى الابتكار:</span>
                    <span>{formData.innovationLevel || "غير محدد"}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">المخترعون</h3>
                <div className="space-y-4">
                  {formData.inventors.map((inventor, index) => (
                    <div key={index} className="text-sm border rounded p-3">
                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">الاسم:</span>
                          <span>{inventor.name || "غير محدد"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">الدور:</span>
                          <span>{inventor.role || "غير محدد"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">الملفات المرفقة</h3>
                <div className="text-sm text-muted-foreground">
                  {formData.files.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {formData.files.map((file: any, index: number) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>لم يتم رفع أي ملفات</p>
                  )}
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm">
                  بالضغط على زر "تقديم الطلب"، أؤكد أن جميع المعلومات المقدمة صحيحة وكاملة.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowRight className="ml-2 h-4 w-4" />
              رجوع
            </Button>
            <Button onClick={handleSubmit} className="bg-[#18A39E] hover:bg-[#16918A]">
              تقديم الطلب
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 5 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-[#18A39E] mb-4" />
            </div>
            <CardTitle className="text-center">تم تقديم طلبك بنجاح</CardTitle>
            <CardDescription className="text-center">
              سيتم مراجعة طلبك من قبل فريقنا وسنتواصل معك قريباً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                رقم الطلب: <span className="font-mono">#PAT-2023-001</span>
              </p>
              <p className="text-sm text-muted-foreground">
                يمكنك متابعة حالة طلبك من خلال لوحة التحكم الخاصة بك
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/student-portal/dashboard">
              <Button>
                العودة للوحة التحكم
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
