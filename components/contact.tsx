"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك في رحلتك الريادية. تواصل معنا لأي استفسار أو دعم تحتاجه
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
              <CardDescription>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">تم إرسال الرسالة بنجاح!</h3>
                  <p className="text-muted-foreground">شكراً لتواصلك معنا. سنرد عليك قريباً</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      required
                      className="text-right resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#18A39E] hover:bg-[#16918A] text-white">
                    إرسال
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#18A39E]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">الهاتف</h3>
                      <p className="text-muted-foreground">+213 XX XXX XXXX</p>
                      <p className="text-sm text-muted-foreground">الأحد - الخميس، 8:00 ص - 4:00 م</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#18A39E]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@ziainashour-incubator.edu.dz</p>
                      <p className="text-sm text-muted-foreground">نرد خلال 24 ساعة</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#18A39E]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">العنوان</h3>
                      <p className="text-muted-foreground">جامعة زيان عاشور</p>
                      <p className="text-muted-foreground">الجلفة، الجزائر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#18A39E]/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#18A39E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">ساعات العمل</h3>
                      <p className="text-muted-foreground">الأحد - الخميس: 8:00 ص - 4:00 م</p>
                      <p className="text-muted-foreground">الجمعة - السبت: مغلق</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>موقع الجامعة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">خريطة موقع الجامعة</p>
                    <p className="text-sm text-muted-foreground">جامعة زيان عاشور - الجلفة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
